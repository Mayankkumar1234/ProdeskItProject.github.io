 import { Navigate } from 'react-router-dom' 

// Private route -> To allow only the authorized person to access
const PrivateRoute = ({children}) => {
 const user = localStorage.getItem("user") 
 
if(user.length) {
  return <Navigate to='/register' />
}
   return (
    children
   )
  }

export default PrivateRoute
