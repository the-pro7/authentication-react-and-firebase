import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../authContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    if (
      !emailRef.current.value ||
      !passwordRef.current.value
    ) {
      return setError('Cannot submit an empty form')
    }


    try {
        setError("")
      setLoading(true)

      await login(emailRef.current.value, passwordRef.current.value)
    //   setSuccess('Successfully created you account')

      navigate('/dashboard')
    } catch {
      setError('Failed to login to your account.')
    }
    setLoading(false)
  }
  return (
    <>
      <Card className='p-3 w-100' style={{ maxWidth: '450px' }}>
        <Card.Body>
          <h1 className='text-center mb-4'>Log In</h1>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='email'>Your email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Type your email here'
                ref={emailRef}
                id='email'
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label htmlFor='password'>Your password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                placeholder='Type your password here'
                id='password'
              />
            </Form.Group>
            <Button type='submit' className='mt-4 w-100' disabled={loading}>
              Sign In
            </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center'>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </Card>
    </>
  )
}

export default SignUp
