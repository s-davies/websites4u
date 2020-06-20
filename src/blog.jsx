import React from 'react';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Blog extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="blog">
                <div>
                    <img src={Image2} alt="" />
                    <div className="pic-on-left">
                        <Link to="/blog">
                            Why You Should Choose Squarespace to Build Your Website 9/10 times
                        </Link>
                        <p>
                            Should you use Squarespace or Wordpress to build your website? In this video, we explore the pros and cons of using both, and why it makes sense to use Squarespace most of the time.
                        </p>
                        <strong>5/28/19</strong>
                    </div>
                </div>
                <div>
                    <div className="pic-on-right">
                        <Link to="/blog">
                            How to Create an Impactful Website
                        </Link>
                        <p>
                            It all begins with an idea.
                        </p>
                        <strong>5/28/19</strong>
                    </div>
                    <img src={Image3} alt="" />
                </div>
            </div>
        );
    }
}

export default Blog;