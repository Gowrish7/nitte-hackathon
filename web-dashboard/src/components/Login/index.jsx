import React, { useState } from 'react'
import './index.css'

import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    email: '',
    mobileNumber: '',
    password: '',
    rePassword: ''
  })

  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    navigate('/admindashboard')
  }

  return (
    <div className='login-block'>
      <div className="login-wrapper">
        <div className="login-block1">
          <h3 className="login-title">Login to your account</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" name='email' placeholder="Enter your email" required value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <input type="password" name='password' placeholder="Enter your password" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <p className='login-message'>{message}</p>
            <input type="submit" value="Login to my account" />
            <p>Not having an account? <Link className="login-link" to="/register">Go to Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login