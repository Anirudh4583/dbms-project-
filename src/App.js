import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import Login from './components/login/login.js';
import RegisterPage from './components/register/RegisterPage.js';
import Dash from './components/dashboard/dash';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='#' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/dashboard' component={Dash} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
