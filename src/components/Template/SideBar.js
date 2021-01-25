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
      <p>Hi, I&apos;m Pola. TODO: Description.
        I am a PhD candidate in Pathobiology at the
        <a href="https://www.jhsph.edu/departments/biochemistry-and-molecular-biology/for-current-students/pola-olczak.html">Johns Hopkins University</a>.
        TODO: whoami
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
