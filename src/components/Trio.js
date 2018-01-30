import React from 'react';
import './Trio.css';
import conversation from '../images/conversation.svg';
import bulb from '../images/bulb.svg';
import saving from '../images/saving.svg';

export default function Trio(props) {
  return (
    <section className="trio">
      <div className="container">
        <div className="trio-flex">
          <div className="trio-info">
            <img className="trio-img" src={conversation} alt="Conversation" />
            <h1 className="title is-green">Factions</h1>
            <p className="body">
              Once you join Ensemble, you&apos;ll be able to choose from 6
              different factions: Actor, Director, Designer, Crew, Producer, and
              Writer. When you&apos;ve created a project page you can proceed to
              search for people based on which faction you need. Does your
              project require only a few actors but quite a lot of designers?
              Search within your community and find out who&apos;s nearby. The
              relationships you form could span multiple projects.
            </p>
            <a className="trio-link is-green" href="#">
              Discover your faction &gt;
            </a>
          </div>
          <div className="trio-info even">
            <img className="trio-img" src={bulb} alt="Light Bulb" />
            <h1 className="title is-blue">Projects</h1>
            <p className="body">
              Projects are the real purpose for joining Ensemble. You can begin
              by creating a profile page for your project and reaching out to
              members of your community who you think would be a good fit. You
              can then set a schedule and begin the rehearsal process. Once
              you&apos;ve started rehearsals, Directors can post notes for every
              night on your project page and reach out to individual actors.
            </p>
            <a className="trio-link is-blue" href="#">
              Create a new project &gt;
            </a>
          </div>
          <div className="trio-info">
            <img className="trio-img" src={saving} alt="Light Bulb" />
            <h1 className="title is-orange">Funding</h1>
            <p className="body">
              Eventually you&apos;ll come up with an idea for a project so
              enormous you&apos;ll require some funds that you don&apos;t have.
              This is where funding comes into play. Seek out producers in your
              area to explain your project to and try to inspire some interest.
              If you get some on board they can donate to your project right
              from it&apos;s profile and and they&apos;ll be listed on the
              profile page as a producer.
            </p>
            <a className="trio-link is-orange" href="#">
              Reach out to investors &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
