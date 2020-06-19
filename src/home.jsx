import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Image from './images/Image.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <header>
                    <b>Websites4U</b>
                    <div>
                        <NavLink exact to="/" activeClassName="navbar-selected" className="navbar-link">Home</NavLink>
                        <Link to="/">About Us</Link>
                        <Link to="/">What We Do</Link>
                        <Link to="/">Pricing</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </header>
                <div className="statement">
                    <h1>Websites4U</h1>
                    <h3>We are the way to go for your business.</h3>
                </div>
                <div className="about-us">
                    <div>
                        <h2>It’s not about us, it’s about you. You, who need a website.</h2>
                        <div className="about-us-content">
                            <div className="img-holder">
                                <img src={Image} alt=""/>
                            </div>
                            <div className="overlap-text-box">
                                <h3>We want to work with you because we’re truly the best.</h3>
                                <h5>We make sure that the user experience is top notch, and with over 100 years of experience in website design, it’s kind of a no brainer to go with us. So, work with us already!</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what-we-do">
                    <div>
                        <div className="what-we-do-text">
                            <h1>What We Do</h1>
                            <h5>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</h5>
                        </div>
                        <div className="iframe-outer">
                            <div className="iframe-container">
                                <iframe title="what-we-do" src="https://www.youtube.com/embed/Er4W4YGU0-4" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Home;