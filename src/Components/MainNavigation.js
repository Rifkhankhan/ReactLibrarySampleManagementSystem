import { Link } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';
const MainNavigation = () => {
  // const usecontext = useContext(AuthContext)
  // const isLoggedIn = usecontext.isLoggedIn
  const history = useHistory()
  // if(usecontext.isLoggedIn)
  // {
  //   history.push('/')
  // }
  const loguotHandler = () =>{
    // usecontext.logout()
    // history.replace('/auth')
  }

  return (
    <header className={classes.header}>
      <Link to='/dashboard'>
        <div className={classes.logo}>RIFKHAN LIBRARY</div>
      </Link>
      <nav>
        <ul>
        {/* { !isLoggedIn &&  <li ><Link to='/auth'>Login</Link></li>}
          {isLoggedIn && (<><li><Link to='/profile'>Profile</Link></li><li><button onClick={loguotHandler}>Logout</button></li></>)}       */}
          <li ><Link to='/auth'>Login</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><button onClick={loguotHandler}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
