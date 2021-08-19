import React from 'react';
import Facebook from './dF5SId3UHWd.svg';
import './App.css';

function App() {
  return (
   <>
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="fb">
          <img className="logo" src={Facebook}/>
        <h2 className="hading">Facebook helps you connect and share with the people in your life.</h2>
        </div>
        </div>
  
      
  <div class="col-md-6">
    <div class="card  p-5 shadow rounded">
      <div class="card-body py-3 rounded-pill">
        <input className="username ummid inputGroup-sizing-lg  form-control " type="text" placeholder="Email address or phone number"/><br/>
        <input className="password bhula inputGroup-sizing-lg form-control" type="text" placeholder="Password"/><br/>
        <a href="#" class="loginBTN btn  btn-primary">Log In</a><br/>
        <a  href="#"className="forgotten">forgotten password?</a><hr/>
        <a href="#" class="CrtBTN btn">Create New Account</a>
        </div>
       
    </div>

    </div>
    </div>
    </div>
   </>

  );
}

export default App;
