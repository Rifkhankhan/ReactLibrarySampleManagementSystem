
import Layout from './Components/Layout';
import {Switch,Route} from 'react-router-dom'
import AuthPage from './Components/AuthPage'
import PageNotFound from './Pages/PageNotFound';
import StartingPage from './Components/StartingPage/StartingPageContent'
import Profile from './Components/Profile/Profile';
import BookDetails from './UI/BookDetails';
import { useContext } from 'react';
import BookContext from './store/book-context';
function App() {
  const bookContext = useContext(BookContext)
  return (
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AuthPage />
          </Route>
          <Route path='/dashboard'>
            <StartingPage />
          </Route>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          {bookContext.isLoggedIn && <Route path='/profile'>
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
