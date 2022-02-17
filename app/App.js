import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Dashboard from './components/pages/dashboard';
import React from 'react';


function App() {

  return (
    <div className ="App">
    <Router>
      <Switch>
      <Route path = "/" exact render={(props) => <Home />}/>
      <Route path = "/register" exact render={(props) => <Register />}/>
      <Route path = "/dashboard" exact render={(props) => <Dashboard />}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={home}/>
    <Route path="./templates/sign_up.html" component={sign_up}/>
  </Route>
</Router>
