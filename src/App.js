
import Layout from './Components/Layout';
import {Switch,Route} from 'react-router-dom'
import AuthPage from './Components/AuthPage'
import PageNotFound from './Pages/PageNotFound';
import StartingPage from './Components/StartingPage/StartingPageContent'
import Profile from './Components/Profile/Profile';
import BookDetails from './UI/BookDetails';
import LibrarianDashboard from './Librarian/StartingPage/LibrarianDashboard'
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import BuyiedBooks from './Librarian/components/BuyiedBooks';
import BorrowedBooks from './Librarian/components/BorrowedBooks';
import AllBooks from './Librarian/components/AllBooks';
function App() {
  const authContext = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AuthPage />
          </Route>
          <Route path='/dashboard'>
            <StartingPage />
          </Route>
          <Route path='/librarianDashboard'>
            <LibrarianDashboard />
          </Route>
          <Route path='/buyiedBooks'>
            <BuyiedBooks />
          </Route>
          <Route path='/borrowedBooks'>
            <BorrowedBooks />
          </Route>
          <Route path='/allBooks'>
            <AllBooks />
          </Route>

          {authContext.isLoggedIn && <Route path='/profile'>
            <Profile />
          </Route>}

          <Route path='/book/:bookId' exact>
            <BookDetails />
          </Route>

          <Route path='*'>
            <PageNotFound />
          </Route>

      </Switch>
    </Layout>
  )
}

export default App;
