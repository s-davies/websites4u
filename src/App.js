import React from 'react';
import './reset.css'
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
