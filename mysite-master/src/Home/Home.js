import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <div className="row1">
            <div className="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">Meysam</h1>
              <h1 id="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
          </div>
          <div className=" text-center">
            <div className=" text-center banner-buttons">
              <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <a className="btn btn-default btn-border " href="#about">Info</a>
              </div>
              <div className="col-sm-1 col-md-1">
                <a className="btn btn-default btn-border" href="#projects">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;