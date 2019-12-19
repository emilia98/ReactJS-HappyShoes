import React from 'react';
import  MainUser from './components/Main';
import MainAdmin from './components/AdminArea/Main';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" class="btn btn-primary">To Main</Link>
        <Link to="/admin" class="btn btn-danger">To Admin</Link>

        <Link to="/register" class="btn btn-warning">Register</Link>
        <Link to="/login" class="btn btn-success">Login</Link>

        <Route path='/' exact component={MainUser} />
        <Route path='/admin' component={MainAdmin} />

        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
    </div>
    </Router>
  );
}

export default App;