import { Link, NavLink } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';
const LibrarianNavigation = () => {
  // const usecontext = useContext(AuthContext)
  // const isLoggedIn = usecontext.isLoggedIn
  const history = useHistory()
  const authContext = useContext(AuthContext)
  const isLoggedIn = authContext.isLoggedIn
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
      <Link to='/librarianDashboard'>
        <div className={classes.logo}>RIFKHAN LIBRARY</div>
      </Link>
      <nav>
        <ul>
        {/* { !isLoggedIn &&  <li ><Link to='/auth'>Login</Link></li>}
          {isLoggedIn && (<><li><Link to='/profile'>Profile</Link></li><li><button onClick={loguotHandler}>Logout</button></li></>)}       */}
          <li ><NavLink activeClassName={classes.activate} to='/'>Login</NavLink></li>
          {isLoggedIn && (<>
          
            <li ><NavLink activeClassName={classes.activate} to='/allBooks'>Books</NavLink ></li>
            <li ><NavLink activeClassName={classes.activate} to='/buyiedBooks'>Buyied </NavLink></li>
            <li ><NavLink activeClassName={classes.activate} to='/borrowedBooks'>Borrowed</NavLink ></li>
            <li><NavLink activeClassName={classes.activate} to='/profile'>Profile</NavLink ></li>
            <li><button onClick={loguotHandler}>Logout</button></li>
          </>
          )
          }
        </ul>
      </nav>
    </header>
  );
};

export default LibrarianNavigation;
