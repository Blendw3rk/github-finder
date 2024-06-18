import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const users = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: users })

      setText('')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mb-8'>
      <div className='w-full md:w-1/2'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative flex'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button type='submit' className='rounded-l-none w-20 btn btn-lg'>
                Go
              </button>
              {users.length > 0 && (
                <button
                  onClick={() => dispatch({ type: 'CLEAR_USERS' })}
                  className='w-20 btn btn-ghost btn-lg'
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserSearch
