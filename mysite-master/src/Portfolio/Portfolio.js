import React, { Component } from 'react';
import Project from '../Home/Project';
import Footer from '../Home/Footer';

class Portfolio extends Component {
  render() {
    return (
        <div>
            <Project />
            <Footer />
        </div>
    );
  }
}

export default Portfolio;