import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleWrapper extends Component {
    render() {
        return (
            <Particles className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 250,
                            "density": {
                                "enable": true,
                                "value_area": 850
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "up",
                            "speed": 2
                        },
                        "size": {
                            "value": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />
        );
    }
}

export default ParticleWrapper;
