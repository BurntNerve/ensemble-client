import React from 'react';
import Navbar from './Navbar';
import Button from './Button';
import './Hero.css';

export default function Hero(props) {
  return (
    <section className="header">
      <div className="angle" />
      <div className="container">
        <Navbar />
        <div className="hero-info">
          <div className="info-container">
            <h1 className="title is-size-1">
              Your favorite new way to collaborate.
            </h1>
            <h3 className="subtitle is-size-4">
              Ensemble is a digital meeting ground for theatre artists to create
              projects and form communities.
            </h3>
            <Button
              text="Create Account"
              newClasses="is-rounded hero-button signup-button"
            />
            <Button
              text="Login"
              newClasses="is-rounded hero-button login-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
