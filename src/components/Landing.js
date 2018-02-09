import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Hero from './Hero';
import Trio from './Trio';
import Footer from './Footer';
import Modal from './Modal';
import RegistrationForm from './RegistrationForm';

import { toggleSignUpModal } from '../actions';

import './Landing.css';

export class Landing extends React.Component {
  toggleSignUpModal() {
    this.props.dispatch(toggleSignUpModal());
  }

  render() {
    return (
      <div className="landing">
        <Hero>
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
            clickFunction={() => this.toggleSignUpModal()}
          />
          <Button
            text="Login"
            newClasses="is-rounded hero-button login-button"
          />
        </Hero>
        <Modal
          newClasses={`${this.props.activeSignUp ? 'is-active' : 'not-active'}`}
          clickFunction={() => this.toggleSignUpModal()}
        >
          <RegistrationForm />
        </Modal>
        <Trio />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeSignUp: state.activeSignUp,
});

export default connect(mapStateToProps)(Landing);
