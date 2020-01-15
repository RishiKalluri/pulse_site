import React, { Component } from 'react'
import Test from "./test.jpg"
import FIT1 from "../../media/Future_in_tech_1.JPG"
import FIT2 from "../../media/Future_in_tech_2.JPG"
import HW1 from "../../media/Hw_hackathon_1.JPG"
import HW2 from "../../media/Hw_hackathon_2.JPG"
import TI from "../../media/TI_CEO_1.JPG"
import WIT from "../../media/WIT_1.JPG"

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
              <img src={FIT1} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                Last year we launched our first Future in Focus day with the goal of bringing people working on the cutting edge of the technology industry to students. </div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={HW1} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Having proven the feasibility of a hardware hackathon and the amazing creativity of students in using provided resources, we are extremely excited to expand the scope of the hardware hackathon event this year. </div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={WIT} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">In just its second iteration, Women in Tech Day (WIT) attracted over 130 students, professors, and industry professionals; a huge success for Pulse this past year.</div>
              </div>
            </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <div class="hvrbox">
              <img src={FIT2} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">We brought entrepreneurs, acclaimed professors, and technology leaders in an open forum to discuss their journeys in tech, current work, and perspectives on the future to come.</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={HW2} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Pulse 2020 will not only add more sensors, development boards and unique add-ons to be used with projects, but we are also exploring the possibility of having engineers from our sponsors work with student teams!</div>
              </div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div class="hvrbox">
              <img src={TI} alt="Mountains" class="hvrbox-layer_bottom"/>
              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">Last year, Riich Templeton, CEO of Texas Instruments spoke about TI’s rich history, and the connections between the University of Illinois, the semiconductor industry, and the bright future of TI.</div>
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
