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

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" class="btn btn-primary">To Main</Link>
        <Link to="/admin" class="btn btn-danger">To Admin</Link>

        <Route path='/' exact component={MainUser} />
        <Route path='/admin' component={MainAdmin} />
    </div>
    </Router>
  );
}

export default App;