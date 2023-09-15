import React from 'react'
import SignUpForm from '../components/SignUpForm';
import Hero from '../components/Hero';
import SignImg from '../assets/11.jpg';

const SignUp = () => {
  return (
    <div>
        <Hero
                cName='hero-mid'
                heroImg={SignImg}
                title='Sign Up'   
                btnClass='hide'
            />
        <SignUpForm />
    </div>
  )
}

export default SignUp