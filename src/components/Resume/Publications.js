import React from 'react';
// This is a quick and dirty hack. This class should read each list item from a data source.

const Publications = () => (
  <div>
    <div className="link-to" id="publications" />
    <div className="title">
      <center> <h3>Selected Publications</h3> </center>
    </div>

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
);

export default Publications;
