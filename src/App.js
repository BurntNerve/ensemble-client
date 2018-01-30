import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Registration from './components/Registration';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/registration" component={Registration} />
      </div>
    );
  }
}
