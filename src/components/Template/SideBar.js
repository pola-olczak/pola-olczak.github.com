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
        <p><a href="mailto:polczak2@alumni.jh.edu">polczak2 (AT) alumni.jh.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I hold a Ph.D in Pathobiology at the
        <a href="https://www.jhsph.edu/departments/biochemistry-and-molecular-biology/for-current-students/pola-olczak.html"> Johns Hopkins University School of Medicine</a>.
        I worked on <a href="https://www.cdc.gov/std/hpv/stdfact-hpv.htm#:~:text=HPV%20is%20a%20different%20virus,including%20genital%20warts%20and%20cancers.">Human Papilloma Virus</a> (HPV)
        vaccine development under the advisory of <a href="https://www.hopkinsmedicine.org/profiles/results/directory/profile/5300536/richard-roden">Dr. Richard Roden</a>.
        I hold a Master&apos;s (Sc.M) in Biochemistry and Molecular Biology from the <a href="https://www.jhsph.edu/">Johns Hopkins, Bloomberg School of Public Health</a>.
        I obtained my Bachelors degree in Chemistry from <a href="https://www.morgan.edu/">Morgan State University</a>.
        While I have always had a proclivity toward public health, I cut my teeth in HPV vaccine development while working for <a href="https://www.pathovax.com/">PathoVax</a>.
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
