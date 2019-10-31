import React, { Component } from 'react';

import Introduce from './components/introduce/Introduce';
import Project from './components/project/Project';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Anchor from './components/anchor/Anchor';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import { Switch } from 'antd';

import 'antd/dist/antd.css';
import './scss/index.scss';


class App extends Component {
  state = {
    isDarkTheme: false,
  }

  setTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    })
  }

  render() {
    const { isDarkTheme } = this.state;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#fff';
    return (
      <div className={`wrapper ${isDarkTheme ? 'theme--dark' : ''}`}>
        <main className="container">
          <Switch
            checkedChildren="護眼"
            unCheckedChildren="一般"
            onChange={this.setTheme}
            defaultChecked />
          <Introduce />
          <Anchor />
          <Project />
          <Work />
          <Education />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
