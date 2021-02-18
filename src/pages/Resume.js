import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Publications from '../components/Resume/Publications';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  // 'Skills',
  'Courses',
  'Publications',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Pola Olzak's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Abbreviated Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />

      {/* Dirty hack */}
      <div>
        <h3>Summer Internships</h3>
        <p>
          <ul>
            <li>New York University (2011)</li>
            <li>Sligo Institute of Technology, School of Science Sligo, Ireland (2010)</li>
            <li>Johns Hopkins University, Bloomberg School of Public Health (2009)</li>
          </ul>
        </p>
      </div>

      {/* <Skills skills={skills} categories={categories} /> */}
      <Courses data={courses} />

      <Publications />
      <References />

    </article>
  </Main>
);

export default Resume;
