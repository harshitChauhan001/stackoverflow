import { useState } from 'react'
import React from 'react'
import './Auth.css'

import AboutAuth from "./AboutAuth"
import icon from "../../assets/icon.png"

import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password")
    }
    if (isSignup) {
      if (!name) {
          alert("Enter a name to continue")
      }
      dispatch(signup({name, email, password},navigate))
    }
    else {
      dispatch(login({email, password},navigate))
    }
    
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type='text' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}></input>
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email"  name='email' id='email'  onChange={(e)=>{setEmail(e.target.value)}}></input>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color:"#007ac6", fontSize:'13px' }}>forgot password?</p>}

            </div>
            <input type="password" name='password' id='password'  onChange={(e)=>{setPassword(e.target.value)}}></input>
            {isSignup && <p style={{color:"#666767", fontSize:'13px' }}>Password must contain atleast eight<br/> characters, including atleast 1 letter and 1 <br/> number</p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input id='check' type="checkbox" ></input>
                <p style={{ fontSize:'13px' }}>Opt-in to receive occasional <br/> products updates, user reasearch invitations,<br/>company announcements, and digests.</p>
              </label>
            )
          }
          <button type="submit" className='auth-btn'>{isSignup ? 'Signup' : 'Login'}</button>
          {
            isSignup && (
              <p style={{color:"#666767", fontSize:'13px' }}>
                By clicking "Sign up", you agree to our
                <span style={{color: "#007ac6"}}>terms of<br /> service</span>,
                <span style={{color: "#007ac6"}}>privacy policy</span> and
                <span style={{color: "#007ac6"}}>cookie policy</span>
              </p>
            )
          }
        </form>
        <p>
          {isSignup ? "Already have an accoun?" : "Don't have an account?"}
          <Link type='button' className='handle-switch-btn' onClick={handleSwitch } style={{color: "#007ac6"}}>{ isSignup?"Login": "Signup"}</Link>
        </p>


      </div>
    </section>
  )
}

export default Auth