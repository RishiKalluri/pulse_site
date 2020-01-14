import React, { Component } from 'react'
import Countdown from './Countdown'
import Logo from "../media/circle-cropped.png"
import { Button } from 'semantic-ui-react'

class Home extends Component {
  render() {
    const year = 2020;

    return (
      <div>
        <div >
          <img className="logo" src={Logo}/>
          <Countdown date={`${year}-02-01T00:00:00`} />
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

    )
}
}

export default Home;
