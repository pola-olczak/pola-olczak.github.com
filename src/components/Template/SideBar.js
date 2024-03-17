import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pola Olczak</h2>
        <p><a href="mailto:pola@jhu.edu">pola (AT) jhu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am an enthusiastic Field Applications Scientist at <a href="https://www.covaris.com/">Covaris</a>, passionate
        about educating customers and building customer relations.
        I am experienced in delivering oral presentations in person and virtually.
        I am a skilled written communicator with a track record of publications, scientific
        posters and communication through emails, virtual meetings and Salesforce.

        I am a curious scientist with a Ph.D degree in Pathobiology from the <a href="https://publichealth.jhu.edu/departments/biochemistry-and-molecular-biology">Johns Hopkins University School of Medicine</a>.
        During my doctoral studies, I worked
        on Human Papilloma Virus (HPV) vaccine development under Dr. Richard Roden.
        I hold a Master&apos;s (Sc.M) in Biochemistry and Molecular Biology from the Johns Hopkins,
        Bloomberg School of Public Health. I obtained my Bachelors degree in Chemistry from
        Morgan State University. While I have always had a proclivity toward public health,
        I cut my teeth in HPV vaccine development while working for <a href="https://www.pathovax.com/">PathoVax</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Pola Olczak.</p>
    </section>
  </section>
);

export default SideBar;
