import React from 'react';
import {Link} from 'react-router-dom';
// import { NavHashLink} from 'react-router-hash-link';
import Image from './images/Image.jpg';
import Fade from 'react-reveal/Fade';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            plan1: false,
            plan2: false,
            plan3: false,
            first: "",
            last: "",
            email: "",
            message: "",
            error: false
        }
    }
    handleSubmit() {
        if (this.state.first.length === 0 || this.state.last.length === 0 || this.state.email.length === 0 || this.state.message.length === 0) {
            this.setState({ error: "Please complete all fields" });
        } else {
            this.setState({submitted: true, error: false});
        }
    }

    handleSelected(plan) {
        return e => {
            if (plan === "plan1" && this.state.plan1) {
                this.setState({plan1: false});
            } else if (plan === "plan1" && !this.state.plan1) {
                this.setState({ plan1: true, plan2: false, plan3: false });
            } else if (plan === "plan2" && this.state.plan2) {
                this.setState({ plan2: false });
            } else if (plan === "plan2" && !this.state.plan2) {
                this.setState({ plan2: true, plan1: false, plan3: false });
            } else if (plan === "plan3" && this.state.plan3) {
                this.setState({ plan3: false });
            } else if (plan === "plan3" && !this.state.plan3) {
                this.setState({ plan3: true, plan2: false, plan1: false });
            }
        }
    }

    firstChange(e) {
        this.setState({ first: e.currentTarget.value });
    }
    lastChange(e) {
        this.setState({ last: e.currentTarget.value });
    }
    emailChange(e) {
        this.setState({ email: e.currentTarget.value });
    }
    messageChange(e) {
        this.setState({ message: e.currentTarget.value });
    }

    render() {
        return (
            <div className="home">
                <div className="statement" id="statement">
                    <Fade bottom>
                        <h1>Websites4U</h1>
                    </Fade>
                    <Fade bottom>
                        <h3>We are the way to go for your business.</h3>
                    </Fade>
                </div>
                <div className="about-us" id="about-us">
                    <div>
                        <Fade bottom>
                            <h2>It’s not about us, it’s about you. You, who need a website.</h2>
                        </Fade>
                        <div className="about-us-content">
                            <Fade right>
                                <div className="img-holder">
                                    <img src={Image} alt=""/>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className="overlap-text-box">
                                    <h3>We want to work with you because we’re truly the best.</h3>
                                    <h5>We make sure that the user experience is top notch, and with over 100 years of experience in website design, it’s kind of a no brainer to go with us. So, work with us already!</h5>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="what-we-do" id="what-we-do">
                    <div>
                        <Fade bottom>
                        <div className="what-we-do-text">
                            <h1>What We Do</h1>
                            <h5>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</h5>
                        </div>
                        </Fade>
                        <Fade>
                        <div className="iframe-outer">
                            <div className="iframe-container">
                                <iframe title="what-we-do" src="https://www.youtube.com/embed/Er4W4YGU0-4" allowfullscreen></iframe>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="pricing" id="pricing">
                    <h2>Pricing Plans</h2>
                    <div className="plans">
                        <div className="plan thin-plan" id="basic">
                            <Fade bottom>
                                <h3>Basic</h3>
                            </Fade>
                            <Fade bottom>
                                <h6>Domain hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>1 email hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Landing page</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h3>$1 / month</h3>
                            </Fade>
                        </div>
                        <div className="plan thick-plan" id="basic-plus">
                            <Fade bottom>
                                <h3>Basic+</h3>
                            </Fade>
                            <Fade bottom>
                                <h6>Domain hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>3 email hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Landing page + 3 additional pages</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Contact form</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h3>$3 / month</h3>
                            </Fade>
                        </div>
                        <div className="plan thin-plan" id="pro">
                            <Fade bottom>
                                <h3>Pro</h3>
                            </Fade>
                            <Fade bottom>
                                <h6>Domain hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>3 email hosting</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Landing page + 5 additional pages</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Contact form</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Appointment management</h6>
                            </Fade>
                            <Fade bottom>
                                <h6>Other goodies</h6>
                            </Fade>
                            <Fade bottom>
                                <h6 className="empty">empty</h6>
                            </Fade>
                            <Fade bottom>
                                <h3>$5 / month</h3>
                            </Fade>
                        </div>
                    </div>
                    <div className="plan-buttons">
                        <div className="thin-plan-button">
                            <Fade bottom>
                                {!this.state.plan1 ?
                                <button onClick={this.handleSelected("plan1")}>Choose plan</button>
                                    : <button className="button-selected" onClick={this.handleSelected("plan1")}>Selected</button>}
                            </Fade>
                        </div>
                        <div className="thick-plan-button">
                            <Fade bottom>
                                {!this.state.plan2 ?
                                    <button onClick={this.handleSelected("plan2")}>Choose plan</button>
                                    : <button className="button-selected" onClick={this.handleSelected("plan2")}>Selected</button>}
                            </Fade>
                        </div>
                        <div className="thin-plan-button">
                            <Fade bottom>
                                {!this.state.plan3 ?
                                <button onClick={this.handleSelected("plan3")}>Choose plan</button>
                                    : <button className="button-selected" onClick={this.handleSelected("plan3")}>Selected</button>}
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="blog-section" id="blog-section">
                    <Fade bottom>
                    <h1>Want to learn more?</h1>
                    </Fade>
                    <Fade bottom>
                    <Link to="/blog">Visit our blog</Link>
                    </Fade>
                </div>
                <div className="contact" id="contact">
                    
                    <div className="contact-text">
                        <Fade bottom>
                            <h2>Contact us.</h2>
                        </Fade>
                        <Fade bottom>
                            <h6>email@example.com</h6>
                        </Fade>
                        <Fade bottom>
                            <h6>(555) 555-5555</h6>
                        </Fade>
                        <Fade bottom>
                            <h6>123 Demo Street</h6>
                        </Fade>
                        <Fade bottom>
                            <h6>New York, NY 12345</h6>
                        </Fade>
                        <Fade bottom>
                            <div>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </Fade>
                    </div>
                    {this.state.submitted ?
                        <div className="contact-form">
                        <h6>Thank you!</h6>
                        </div> :
                        
                    <div className="contact-form">
                        <Fade bottom>
                        <div id="form-name">
                            <div>
                                <h6>Name *</h6>
                                <input onChange={this.firstChange.bind(this)} type="text"/>
                                <h6>First Name</h6>
                            </div>
                            <div>
                                <input onChange={this.lastChange.bind(this)} type="text" />
                                <h6>Last Name</h6>
                            </div>
                        </div>
                        </Fade>
                        <Fade bottom>
                        <div id="email-field">
                            <h6>Email *</h6>
                            <input onChange={this.emailChange.bind(this)}type="text" />
                        </div>
                        </Fade>
                        <Fade bottom>
                        <div>
                            <h6>Message *</h6>
                            <textarea onChange={this.messageChange.bind(this)}name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        </Fade>
                        {this.state.error ?
                            <p className="error">{this.state.error}</p> : ""
                        }
                        <Fade bottom>
                        <button onClick={this.handleSubmit.bind(this)}>Send</button>
                        </Fade>
                    </div>

                    }
                </div>
                
            </div>
        );
    }
}

export default Home;