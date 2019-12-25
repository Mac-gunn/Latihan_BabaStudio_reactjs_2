import React, {Component} from 'react';
import Grid from './Grid';
import Home from './Home/Home';
import '../style/styles.css';
import {BrowserRouter as Router,Link} from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component{
  render(){
    return(
      <Router>
      <div className="container">
        <div className="header">
          <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <Link className="navbar-brand" href="#"> <img className="logo" src={require('../gambar/telkom.png')}/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROMO
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#"> Promo</a>
                      <a class="dropdown-item" href="#"> Partnership</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Paket Add-On
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">AnottherAction</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Pusat Bantuan</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="">
          <Home/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
