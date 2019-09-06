import React, { Component } from 'react'
import ParticleWrapper from './subComponents/ParticleWrapper'
import Countdown from './subComponents/Countdown'
import NavigationBar from './subComponents/NavigationBar'
import Logo from "./media/circle-cropped.png"
import { Button } from 'semantic-ui-react'
import './App.css';


class App extends Component {
  render() {
    const year = 2020;

    return (
      <div>
        <ParticleWrapper/>
        <NavigationBar/>
        <div className="home-content">
          <img className="logo" src={Logo}/>
          <Countdown date={`${year}-01-25T00:00:00`} />
          <a href="https://drive.google.com/file/d/1CCmoF_RuC-W2bVRUZGWsZsIwMsRSuZzo/view?usp=sharing">
            <Button>
            Sponsor Us
            </Button>
          </a>
        </div>
      </div>
    )
  }
}

export default App;
