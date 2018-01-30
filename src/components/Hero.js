import React from 'react';
import Navbar from './Navbar';

import './Hero.css';

export default function Hero(props) {
  return (
    <section className="header">
      <div className="angle" />
      <div className="container">
        <Navbar />
        <div className="hero-info">
          <div className="info-container">{props.children}</div>
        </div>
      </div>
    </section>
  );
}
