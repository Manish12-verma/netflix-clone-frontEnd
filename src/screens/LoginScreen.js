import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const[signIn,setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className= "loginScreen__background">
        <img 
        className="loginScreen__logo"
        src="./images/netflix-logo.png" 
        alt="" />
       <button className="loginScreen__button" onClick={()=>setSignIn(true)}>
        Sign In
      </button>
      <div className="loginScreen__gradient"/> 
      </div>  
      <div className="loginScreen__body">
         {signIn ?(
             <SignUpScreen/>
        ):(
            <>
            <h1 >Unlimited films, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen__input">
                <form>
                 <input type="email" 
                 placeholder='Email address'/>
                 <button onClick={()=>setSignIn(true)}
                 className='loginScreen__getStarted'>GET STARTED</button>
                </form>
            </div>
            </> 
        )}
      </div>
    </div>
  );
}

export default LoginScreen
