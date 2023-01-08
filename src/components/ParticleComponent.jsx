import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const ParticleComponent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 120,
                        "density": {
                            "enable": true,
                            "value_area": 500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.04
                    },
                    "move": {
                        "direction": "right",
                        "speed": 5
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.5
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
            }} init={particlesInit} loaded={particlesLoaded}/>
    )
}
export default ParticleComponent