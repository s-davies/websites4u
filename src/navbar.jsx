import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <Fade bottom>
                    <b>Websites4U</b>
                </Fade>
                <div>
                    <Fade bottom>
                        <NavHashLink smooth to="/#statement">Home</NavHashLink>
                    </Fade>
                    <Fade bottom>
                        <NavHashLink smooth to="/#about-us">About Us</NavHashLink>
                    </Fade>
                    <Fade bottom>
                        <NavHashLink smooth to="/#what-we-do">What We Do</NavHashLink>
                    </Fade>
                    <Fade bottom>
                        <NavHashLink smooth to="/#pricing">Pricing</NavHashLink>
                    </Fade>
                    <Fade bottom>
                        <NavHashLink smooth to="/#blog-section">Blog</NavHashLink>
                    </Fade>
                    <Fade bottom>
                        <NavHashLink smooth to="/#contact">Contact</NavHashLink>
                    </Fade>
                </div>
            </header>
        )
    }
}

export default Navbar;