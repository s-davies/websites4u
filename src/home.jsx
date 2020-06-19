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
                <div className="pricing">
                    <h2>Pricing Plans</h2>
                    <div className="plans">
                        <div className="plan thin-plan" id="basic">
                            <h3>Basic</h3>
                            <h6>Domain hosting</h6>
                            <h6>1 email hosting</h6>
                            <h6>Landing page</h6>
                            <h6 className="empty">empty</h6>
                            <h6 className="empty">empty</h6>
                            <h6 className="empty">empty</h6>
                            <h6 className="empty">empty</h6>
                            <h3>$1 / month</h3>
                        </div>
                        <div className="plan thick-plan" id="basic-plus">
                            <h3>Basic+</h3>
                            <h6>Domain hosting</h6>
                            <h6>3 email hosting</h6>
                            <h6>Landing page + 3 additional pages</h6>
                            <h6>Contact form</h6>
                            <h6 className="empty">empty</h6>
                            <h6 className="empty">empty</h6>
                            <h6 className="empty">empty</h6>
                            <h3>$3 / month</h3>
                        </div>
                        <div className="plan thin-plan" id="pro">
                            <h3>Pro</h3>
                            <h6>Domain hosting</h6>
                            <h6>3 email hosting</h6>
                            <h6>Landing page + 5 additional pages</h6>
                            <h6>Contact form</h6>
                            <h6>Appointment management</h6>
                            <h6>Other goodies</h6>
                            <h6 className="empty">empty</h6>
                            <h3>$5 / month</h3>
                        </div>
                    </div>
                    <div className="plan-buttons">
                        <div className="thin-plan-button">
                            <button>Choose plan</button>
                        </div>
                        <div className="thick-plan-button">
                            <button>Choose plan</button>
                        </div>
                        <div className="thin-plan-button">
                            <button>Choose plan</button>
                        </div>
                    </div>
                </div>
                <div className="blog-section">
                    <h1>Want to learn more?</h1>
                    <button>Visit our blog</button>
                </div>
                <div className="contact">
                    <div className="contact-text">
                        <h2>Contact us.</h2>
                        <h6>email@example.com</h6>
                        <h6>(555) 555-5555</h6>
                        <h6>123 Demo Street</h6>
                        <h6>New York, NY 12345</h6>
                        <div>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div id="form-name">
                            <div>
                                <h6>Name *</h6>
                                <input type="text"/>
                                <h6>First Name</h6>
                            </div>
                            <div>
                                <input type="text" />
                                <h6>Last Name</h6>
                            </div>
                        </div>
                        <div id="email-field">
                            <h6>Email *</h6>
                            <input type="text" />
                        </div>
                        <div>
                            <h6>Message *</h6>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button>Send</button>
                    </div>
                </div>
                <footer>
                    <h6>© 2020 Websites4U</h6>
                    <div>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;