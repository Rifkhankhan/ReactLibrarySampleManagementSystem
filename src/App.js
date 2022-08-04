
import Layout from './Components/Layout';
import {Switch,Route} from 'react-router-dom'
import AuthPage from './Components/AuthPage'
import PageNotFound from './Pages/PageNotFound';
import StartingPage from './Components/StartingPage/StartingPageContent'
import Profile from './Components/Profile/Profile';
function App() {
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
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
      </Switch>
    </Layout>
  )
}

export default App;
