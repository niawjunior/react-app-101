import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (
      <div className="App">
        <nav className="navbar is-black has-shadow">
            <div className="navbar-brand">
                <a className="navbar-item" href="http://bulma.io">
                <span>MyCompany</span>
                </a>
                <div className={'navbar-burger burger '+menuActive} onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={'navbar-end navbar-menu '+menuActive}>
                <div className="navbar-item">
                    <Link to="/" className="nav-item r-item">Home</Link>
                </div>
                <div className="navbar-item">
                    <Link to="faq" className="nav-item r-item">Features</Link>
                </div>
                <div className="navbar-item">
                  <Link to="faq" className="nav-item r-item">About</Link>
                </div>
                <div className="navbar-item">
                    <Link to="faq" className="nav-item r-item">FAQ</Link>
                </div>
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-primary is-outlined" href="https://github.com/niawjunior/react-app-101">
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
      </div>
    );
  }
}

export default Header;
