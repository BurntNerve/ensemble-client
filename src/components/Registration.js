import React from 'react';
import Hero from './Hero';
import RegistrationForm from './RegistrationForm';
import './Registration.css';

export default function Registration(props) {
  return (
    <div className="registration">
      <Hero>
        <h1 className="title is-size-1 has-text-centered">
          Join the community.
        </h1>
      </Hero>
      <RegistrationForm />
    </div>
  );
}
