import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  // 'Skills',
  'Courses',
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

      <div>
        <h3>Selected Publications</h3>
        <p>
          <ul>
            <li>
              Olczak P, Roden R (2020) &quot;Progress in L2-based prophylactic vaccine
              development for protection against diverse human papillomavirus genotypes
              and associated diseases.&quot; Vaccines
            </li>
            <li>
              S Mandal SK, Banerjee HN, Vaughan D, Boston A, Thorne G , Payne G,
              Sampson J, Manglik V , Olczak P , et al., (2018)
              &quot;The Effects of Synthesized Rhenium Acetylsalicylate Compounds on
              Human Astrocytoma Cell Lines.&quot; Journal of Cancer Science and Therapy
            </li>
            <li>
              Wilder PT, Weber DJ, Winstead A, Parnell S, Hinton TV, Stevenson M, Giri D,
              Azemati S, Olczak P et al., (2017) &quot;Unprecedented anticancer activities of
              organorhenium sulfonato and carboxylato complexes against hormone-dependent
              MCF-7 and hormone-independent triple-negative MDA-MB-231 breast cancer cells.&quot;
              Molecular Cellular Biochemistry.
            </li>
          </ul>
        </p>
      </div>
      <References />

    </article>
  </Main>
);

export default Resume;
