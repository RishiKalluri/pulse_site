import React, { Component } from 'react'
import Test from "./test.jpg"
import "./Card.css"
import { Grid, Image } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

class Card extends Component {

  render() {
    return (
      <div className="card">
        <Grid columns={3} padded>
          <Grid.Row>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={Test} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.</div>
              </div>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
}
}

export default Card;
