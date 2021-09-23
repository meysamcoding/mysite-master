import React, { Component } from 'react';
import About from './About';
import Summary from './Summary';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import './style.css';

class Home extends Component {
  render() {
    return (
      <>
         <div className="main">
        <div className="container-fluid">
          <div className="row">
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
      
        <About />
        <Summary />
        <Project />
        <Contact />
        <Footer />
       
      
      </>
     
    );
  }
}

export default Home;