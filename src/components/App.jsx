import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SignUp from './SignUp'
import LogIn from "./LogIn";
import AuthContextProvider from '../authContext'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Dashboard';
import ProtectedRoute from '../protected-routes/ProtectedRoute';
import Home from './Home';

function App () {
  return (
    <>
      <AuthContextProvider>
      <Container className='d-flex justify-content-center align-items-center mt-5'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<ProtectedRoute >
            <DashBoard />
          </ProtectedRoute>}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<LogIn />}/>
        </Routes>
          {/* <div className='action-form w-100' style={{ maxWidth: '450px' }}>
            <SignUp />
          </div> */}
      </Container>
      </AuthContextProvider>
    </>
  )
}

export default App
