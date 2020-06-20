import React from 'react';
import Fade from 'react-reveal/Fade';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Fade bottom>
                    <h6>© 2020 Websites4U</h6>
                </Fade>
                <Fade bottom>
                    <div>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </Fade>
            </footer>
        )
    }
}

export default Footer;