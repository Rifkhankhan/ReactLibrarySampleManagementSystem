import { useContext, useEffect, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {

  const passwordRef = useRef()
  const usecontext = useContext(AuthContext)
  const history = useHistory()
  const idToken = usecontext.token

  const submitHandler = (e) =>{
    e.preventDefault()
    const newPassword = passwordRef.current.value

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCiGWw0HrA_PeqXJt1m0ladXuPdoArqEpU',{
      method:'POST',
      body:JSON.stringify({
        idToken:idToken,
        password:newPassword,
        returnSecureToken:false
      }),
      headers:{'Content-Type': 'application/json'}
    }).then(()=>{
      history.replace('/auth')
      usecontext.logout()
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='6' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
