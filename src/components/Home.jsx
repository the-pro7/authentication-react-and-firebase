import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='text-center bg-primary text-bg-primary p-4'>Welcome to Firebase auth test</h1>
        <p className='p-2 text-center text-capitalize mt-4'>Let's get you <Link to="/signup">an account</Link></p>
    </div>
  )
}

export default Home