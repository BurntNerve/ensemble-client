import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleNavBar } from '../actions';
import './Navbar.css';

export class Navbar extends React.Component {
  toggleNavBar() {
    this.props.dispatch(toggleNavBar());
  }
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="logo">Ensemble</h1>
          </Link>
          <div
            className={`navbar-burger burger ${
              this.props.activeNavBar ? 'is-active' : ''
            }`}
            data-target="navbar"
            onClick={() => this.toggleNavBar()}
            role="button"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${
            this.props.activeNavBar ? 'is-active' : ''
          }`}
        >
          <div className="navbar-start has-text-centered">
            <Link to="/" className="navbar-item ">
              Home
            </Link>
            <Link className="navbar-item" to="/">
              Factions
            </Link>
            <Link className="navbar-item" to="/">
              Projects
            </Link>
            <Link className="navbar-item" to="/">
              Funding
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item is-hidden-touch">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button nav-button gradient-text"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/brootroot"
                  >
                    <span className="icon">
                      <i className="fab fa-github" />
                    </span>
                    <span>Github</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button nav-button"
                    href="http://www.seanbray.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="fas fa-folder" />
                    </span>
                    <span>Portfolio</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  activeNavBar: state.activeNavBar,
});

export default connect(mapStateToProps)(Navbar);
