import React, { Component } from 'react';
import Hero from './components/Hero';
import Trio from './components/Trio';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Trio />
      </div>
    );
  }
}
