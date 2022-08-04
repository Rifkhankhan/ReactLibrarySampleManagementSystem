import React, { Fragment, useContext } from "react";
import MainNavigation from './MainNavigation'
import AuthContext from "../store/auth-context";
import LibrarianNavigation from "../Librarian/LibrarianNavigation";
import AdminNavigation from '../Admin/AdminNavigation'
const Layout = (props) => {
  const authContext = useContext(AuthContext)
  const user = localStorage.getItem('role')

  let navigation ='';

  if(user === 'admin')
  {
    navigation = <AdminNavigation />
  }
  else if(user === 'employee' || user === 'employee')
  {
    navigation = <LibrarianNavigation />
  }
  else
  {
    navigation =  <MainNavigation />
  }
  return <Fragment>
    {navigation}
    <main>{props.children}</main>
  </Fragment>;
};

export default Layout;
