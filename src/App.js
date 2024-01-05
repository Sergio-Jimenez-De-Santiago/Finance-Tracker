import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages and components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/Finance-Tracker">
              {!user && <Redirect to="/Finance-Tracker/login" />}
              {user && <Home />}
            </Route>
            <Route path="/Finance-Tracker/login">
              {user && <Redirect to="/Finance-Tracker" />}
              {!user && <Login />}
            </Route>
            <Route path="/Finance-Tracker/signup">
              {user && <Redirect to="/Finance-Tracker" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App