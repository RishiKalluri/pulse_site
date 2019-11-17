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
        <div className="home-content">
          <img className="logo" src={Logo}/>
          <Countdown date={`${year}-01-25T00:00:00`} />
          <Button.Group>
          <a href="https://drive.google.com/file/d/11Bn-4Bs34dPSCWfI1tTSn63k_EM7o7Fk/view?usp=sharing">
            <Button>
            Sponsor Us
            </Button>
          </a>
          <Button.Or/>
          <a href="https://pulse2020.typeform.com/to/Eu1RLD">
          <Button>
          Register
          </Button>
          </a>
        </Button.Group>
        </div>
      </div>
    }
    )
}

export default App;
