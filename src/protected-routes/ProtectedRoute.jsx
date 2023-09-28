import { Navigate, Route, redirect } from 'react-router-dom'
import { useAuth } from '../authContext'

const ProtectedRoute = ({children}) => {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login"/>

  return children
}

export default ProtectedRoute
