import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()

  //authContext
//   const authContext = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitFormHandler = (e) =>{
    e.preventDefault()
    
    const enteredemailRef = emailRef.current.value
    const enteredpasswordRef = passwordRef.current.value

    let url 
    if(isLogin)
    {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCiGWw0HrA_PeqXJt1m0ladXuPdoArqEpU'
    }
    else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCiGWw0HrA_PeqXJt1m0ladXuPdoArqEpU'
    } 

   fetch(url,{
      method:'POST',
      body:JSON.stringify({email:enteredemailRef,password:enteredpasswordRef,returnSecureToken:true}),
      headers:{'Content-Type': 'application/json'}
     }).then(res=>{
       if(res.ok)
       {
         return res.json()
       }else{
         res.json().then(data=>{
           let errorMessage = 'authentication failed'
           if(data && data.error && data.error.message)
           {
             errorMessage = data.error.message
           }
           throw new Error(errorMessage)
         })
       }
     }).then((data)=>{
        // const expirationTime = new Date(new Date().getTime() + +data.expiresIn*1000)
        // authContext.login(data.idToken,expirationTime.toISOString())
        history.replace('/')
     }).catch(error=>alert(error.message))
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' ref={emailRef}  required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' name='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
