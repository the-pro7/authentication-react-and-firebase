import { Alert, Button, Card } from 'react-bootstrap'
import { useAuth } from '../authContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashBoard () {
  const { user, logout } = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate()

 const handleLogout = async () => {
    setError("")

    try {
        await logout()
        navigate("/login")
    } catch {
        setError("Failed to logout")
    }
 }

  return (
    <Card className='w-100 d-flex align-items-center justify-content-center'>
        {error && <Alert variant='danger'>{error}</Alert>}
      <Card.Body className='d-flex align-items-center justify-content-center flex-column gap-2 w-100'>
        <h1 className='text-center '>Your Profile</h1>
        <b>Email:</b> {user.email}
        <Button type='button' onClick={handleLogout}>Logout</Button>
      </Card.Body>
    </Card>
  )
}
