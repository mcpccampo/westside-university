import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import About from './components/About/About';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div>WestSide University</div>
          <div className="link-wrap">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/about" className="links">
              About
            </Link>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}
