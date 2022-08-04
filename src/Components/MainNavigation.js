import { Link } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router-dom';
import BookContext from '../store/book-context';
const MainNavigation = () => {
  const bookContext = useContext(BookContext)
  const isLoggedIn = bookContext.isLoggedIn
  const history = useHistory()

  const loguotHandler = () =>{
    bookContext.logout()
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
          {!isLoggedIn && <li ><Link to='/auth'>Login</Link></li>}
          {isLoggedIn && <li><Link to='/profile'>Profile</Link></li>}
          {isLoggedIn && <li><button onClick={loguotHandler}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
