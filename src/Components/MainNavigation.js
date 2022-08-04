import { Link, NavLink } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';
const MainNavigation = () => {
  const authContext = useContext(AuthContext)
  const isLoggedIn = authContext.isLoggedIn
  const history = useHistory()

  const loguotHandler = () =>{
    authContext.logout()
    history.replace('/auth')
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
          {!isLoggedIn && <li ><NavLink activeClassName={classes.activate} to='/'>Login</NavLink></li>}
          {isLoggedIn && <li><NavLink activeClassName={classes.activate} to='/profile'>Profile</NavLink></li>}
          {isLoggedIn && <li><button onClick={loguotHandler}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
