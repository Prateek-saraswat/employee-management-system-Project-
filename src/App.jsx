import './App.css'
import Login from './COMPONENTS/Login'
import { useSelector } from 'react-redux'
import Admin from './COMPONENTS/Admin'
import Employee from './COMPONENTS/Employee'

function App() {
  const userRoleLocalStorage = localStorage.getItem('userRole')  
  const authUserRole = useSelector((state)=>state.loginInfo.userRole)

  const userRole = userRoleLocalStorage || authUserRole
  const userNameLocalStorage = localStorage.getItem('userName') 
  const authUserName =  useSelector((state)=>state.loginInfo.name)
  const userName = userNameLocalStorage || authUserName
  console.log(userName , userRole);
  

  return (
    <>
    {
     !userRole? <Login  /> : userRole==='admin'?<Admin name={userName}/>:<Employee name={userName} />
    }
    
    </>
  
  )
}

export default App
