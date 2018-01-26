import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <h1 className="logo">Ensemble</h1>
        </a>
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
          <a className="navbar-item has-text-white" href="#">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-white" href="#">
              Factions
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="#">
                Actor
              </a>
              <a className="navbar-item" href="#">
                Crew
              </a>
              <a className="navbar-item" href="#">
                Designer
              </a>
              <a className="navbar-item" href="#">
                Director
              </a>
              <a className="navbar-item" href="#">
                Playwright
              </a>
              <a className="navbar-item" href="#">
                Producer
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button nav-button gradient-text"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
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
