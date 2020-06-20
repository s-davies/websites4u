import React from 'react';
import './reset.css'
import './App.css';
import Home from './home';
import Blog from './blog';
import Navbar from './navbar';
import Footer from './footer';
import { Route } from 'react-router-dom';
import Favicon from 'react-favicon';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Favicon url="https://www.freeiconspng.com/uploads/number-4-icon-8.png" />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Footer />
      </div>
    );
  }
}

export default App;
