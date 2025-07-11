import React, { useState } from 'react'
import '../styles/getstarted.css'
const Getstarted = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((data) => ({...data,[name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    
  }

  return (
    <div className='register'>
      <div className='account'>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Sign In</button>
          <p>OR</p>

          <button type="button">Use a sign-in code</button>

          <p><a href="#">Forgot password?</a></p>

          <div>
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <p>
            New to Netflix? <a href="#">Sign up now</a>
          </p>

          <p>
            This page is protected by Google reCAPTCHA to ensure <br />
            you're not a bot. <a href="#">Learn more</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Getstarted
