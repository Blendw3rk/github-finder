function About() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light text-center'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400 text-center'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  )
}

export default About
