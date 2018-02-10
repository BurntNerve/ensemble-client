import React from 'react';
import { connect } from 'react-redux';

import './RegistrationForm.css';

import { toggleSignUpModal, toggleLogInModal } from '../actions';

export class RegistrationForm extends React.Component {
  toggleBoth() {
    this.props.dispatch(toggleLogInModal());
    this.props.dispatch(toggleSignUpModal());
  }
  render() {
    if (this.props.signUp) {
      return (
        <div className="box is-vcentered">
          <h1 className="title has-text-centered">Sign Up</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Full Name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                // placeholder="Text input"
                // value="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              {/* <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span> */}
            </div>
            {/* <p className="help is-success">This username is available</p> */}
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                // placeholder="Email input"
                // value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-key" />
              </span>
              {/* <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span> */}
            </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
          </div>

          {/* <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div> */}

          {/* <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div> */}

          {/* <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div> */}

          <div className="field is-grouped">
            <div className="control is-full-width-button">
              <button className="button is-link is-success is-full-width-button">
                <strong>Submit</strong>
              </button>
            </div>
            {/* <div className="control">
          <button className="button is-text">Cancel</button>
        </div> */}
          </div>
          <p className="has-text-centered">
            Already have an account?{' '}
            <a role="button" onClick={() => this.toggleBoth()}>
              Login
            </a>
          </p>
        </div>
      );
    }
    return (
      <div className="box is-vcentered">
        <h1 className="title has-text-centered">Log In</h1>

        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            {/* <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span> */}
          </div>
          {/* <p className="help is-success">This username is available</p> */}
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="password" />
            <span className="icon is-small is-left">
              <i className="fas fa-key" />
            </span>
            {/* <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span> */}
          </div>
          {/* <p className="help is-danger">This email is invalid</p> */}
        </div>

        {/* <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div> */}

        {/* <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div> */}

        {/* <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div> */}

        <div className="field is-grouped">
          <div className="control is-full-width-button">
            <button className="button is-link is-success is-full-width-button">
              <strong>Submit</strong>
            </button>
          </div>
          {/* <div className="control">
          <button className="button is-text">Cancel</button>
        </div> */}
        </div>
        <p className="has-text-centered">
          Need an account?{' '}
          <a role="button" onClick={() => this.toggleBoth()}>
            Sign Up
          </a>
        </p>
      </div>
    );
  }
}

export default connect()(RegistrationForm);
