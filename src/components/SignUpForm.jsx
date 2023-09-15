import React from 'react';
import './SignUpFormStyles.css';

const SignUpForm = () => {
  return (
    <div className="from-container">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder='Full Name' />
                <input type="Email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm password' />
                <button>Sign Up</button>
            </form>
        </div>
  )
}

export default SignUpForm;