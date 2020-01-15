import React, { Component } from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Grid } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

import '../App.css';

class Footer extends Component {
  render() {

    return (
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={2}>
              <a href="https://www.facebook.com/ECEPulse/"><FaFacebook color="white" size="3em"/></a>
            </Grid.Column>
            <Grid.Column width={2}>
              <a href="https://github.com/ecepulse"><FaGithub color="white" size="3em"/></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}
}

export default Footer;
