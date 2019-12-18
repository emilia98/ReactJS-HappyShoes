import React, { Component } from 'react';
import {
    Switch,
    Route, 
    Link
} from 'react-router-dom';
import '../css/sb-admin-2.css';
import '../css/admin.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Shoes from './pages/Shoes';

class Main extends Component {
    constructor(props) {
        super(props);
    }

   

    render() {
        console.log('RERENDER MAIN');
        return (
            <div class="page-top">
            <div id="wrapper">

                <Sidebar />
                


<div id="content-wrapper" class="d-flex flex-column">

  <div id="content">
      <Navbar />

    <div class="container-fluid">
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/shoes' component={Shoes} />
        </Switch>

    </div>

  </div>

 <Footer />

</div>

</div>

<a class="scroll-to-top rounded" href="#page-top">
<i class="fas fa-angle-up"></i>
</a>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
      <a class="btn btn-primary" href="login.html">Logout</a>
    </div>
  </div>
</div>
</div>
        </div>
    
        )
    }
}


export default Main;