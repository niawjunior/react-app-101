import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar is-black has-shadow">
            <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                <span>MyCompany</span>
                </a>
                <div className="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="navbar-end navbar-menu">
                <div className="navbar-item">
                    <Link to="/" className="nav-item">Home</Link>
                </div>
                <div className="navbar-item">
                    <Link to="faq" className="nav-item">Features</Link>
                </div>
                <div className="navbar-item">
                  <Link to="faq" className="nav-item">About</Link>
                </div>
                <div className="navbar-item">
                    <Link to="faq" className="nav-item">FAQ</Link>
                </div>
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-primary is-outlined" href="https://github.com/niawjunior/vue-app-101">
                            <span className="icon">
                                <i className="fa fa-github"></i>
                            </span>
                            <span>github</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>


        <footer className="footer is-primary">
        <div className="container">
            <div className="columns">
            <div className="column">
                <p>And this right here is a  spiffy footer, where you can push stuff.</p>
            </div>
            <div className="column has-text-right">
                <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
            </div>
            </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default Header;
