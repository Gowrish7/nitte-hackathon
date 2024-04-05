import React from 'react'
import './index.css'


import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()


    navigate('/admindashboard')
  }

  return (
    <div className='register-block'>
      <div class="register-wrapper">
        <div class="register-block1">
          <h3 class="register-title">Create an account</h3>
          <p>Create an account using the form below.</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <input type="email" name='email' placeholder="Enter your email" required />
            <input type="tel" name='mobileNumber' placeholder="Enter Your Mobile Number" required />
            <input type="password" name='password' placeholder="Enter your password" required />
            <input type="password" name='rePassword' placeholder="Re-Enter your password" required />
            <input type="submit" value="Create my account" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register