import React from 'react';
import './reset.css'
import './App.css';
import Home from './home';
import Blog from './blog';
import Navbar from './navbar';
import Footer from './footer';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Footer />
      </div>
    );
  }
}

export default App;
