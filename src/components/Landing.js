import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Hero from './Hero';
import Trio from './Trio';

export default function Landing(props) {
  return (
    <div className="Landing">
      <Hero>
        <h1 className="title is-size-1">
          Your favorite new way to collaborate.
        </h1>
        <h3 className="subtitle is-size-4">
          Ensemble is a digital meeting ground for theatre artists to create
          projects and form communities.
        </h3>
        <Link to="/registration">
          <Button
            text="Create Account"
            newClasses="is-rounded hero-button signup-button"
          />
        </Link>
        <Link to="/registration">
          <Button
            text="Login"
            newClasses="is-rounded hero-button login-button"
          />
        </Link>
      </Hero>
      <Trio />
    </div>
  );
}
