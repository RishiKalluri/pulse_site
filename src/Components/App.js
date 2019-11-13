import React, { Component } from 'react';
import Countdown from './subComponents/Countdown'
import Logo from './media/circle-cropped.png'
// import { LayersManager, Layer } from 'react-layers-manager'
import ParticleWrapper from './ParticleWrapper.js';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import HoverButton from './subComponents/HoverButton'

import './App.css';
import { thisExpression } from '@babel/types';

class App extends Component {


  render() {
    return (
      <div className="container">
        <HoverButton />
        <div className="row">
        <div className="mainbody">
          <div className="home-content">
            <img className="logo" src={Logo}/>
            <Countdown date={`${2020}-01-25T00:00:00`} />
            <Link to='/register'>
              <Button style={{color: 'white', fontSize: '12pt'}}>Register</Button>
            </Link> 
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default App;
