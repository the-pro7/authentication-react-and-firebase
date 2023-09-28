import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../authContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSuccess("")

    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !passwordConfirmRef.current.value
    ) {
      return setError('Cannot submit an empty form')
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!')
    }

    try {
      setError("")
      setLoading(true)
      localStorage.setItem("user-name", nameRef.current.value)
      await signup(emailRef.current.value, passwordRef.current.value)
      // setSuccess('Successfully created you account')
      navigate('/login')
    } catch {
      setError('Failed to create your account.')
    }
    setLoading(false)
  }
  return (
    <>
      <Card className='p-3 w-100' style={{ maxWidth: '450px' }}>
        <Card.Body>
          <h1 className='text-center mb-4'>SignUp</h1>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label htmlFor='name'>Your name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Type your name here'
                ref={nameRef}
                id='name'
              />
            </Form.Group>
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
            <Form.Group className='mt-3'>
              <Form.Label htmlFor='confirm-password'>
                Confirm you password
              </Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
                placeholder='Confirm password here'
                id='confirm-password'
              />
            </Form.Group>
            <Button type='submit' className='mt-4 w-100' disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center'>
          Already have an account ? <Link to='/login'>Sign In</Link>
        </div>
      </Card>
    </>
  )
}

export default SignUp
