import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BookContext from '../store/book-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()

  //authContext
  const bookContext = useContext(BookContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitFormHandler = (e) =>{
    e.preventDefault()
    
    const enteredemailRef = emailRef.current.value
    const enteredpasswordRef = passwordRef.current.value

    if(enteredemailRef && enteredpasswordRef.trim().length >= 6)
    {
        const token = Math.random(100).toString()
        localStorage.setItem('token',token)
        bookContext.login(token)
        history.push('/profile')
    }
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
          <input type='password' id='password' name='password' minLength='6' ref={passwordRef} required />
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
