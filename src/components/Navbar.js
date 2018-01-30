import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="logo">Ensemble</h1>
        </Link>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item has-text-white">
            Home
          </Link>
          <Link className="navbar-item has-text-white" to="/">
            Factions
          </Link>
          <Link className="navbar-item has-text-white" to="/">
            Projects
          </Link>
          <Link className="navbar-item has-text-white" to="/">
            Funding
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
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
