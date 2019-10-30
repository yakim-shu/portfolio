import React, { Component } from 'react';

import Introduce from './components/introduce/Introduce';
import Project from './components/project/Project';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Anchor from './components/anchor/Anchor';
import Contact from './components/contact/Contact';

import 'antd/dist/antd.css';
import './scss/index.scss';


class App extends Component {
  render() {
    return (
      <div className="wrapper" >
        <main className="container">
          <Introduce />
          <Anchor />
          <Project />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
