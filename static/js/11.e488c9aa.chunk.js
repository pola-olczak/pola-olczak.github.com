(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[11],{159:function(e,i,s){"use strict";s.r(i);s(1);var t=s(5),n=s(18),a=s(0);var r=e=>{let{data:i}=e;return Object(a.jsx)("article",{className:"degree-container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:i.degree}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:i.link,children:i.school}),", ",i.year]})]})})};const c=e=>{let{data:i}=e;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),i.map((e=>Object(a.jsx)(r,{data:e},e.school)))]})};c.defaultProps={data:[]};var l=c;var o=e=>{let{data:i}=e;return Object(a.jsxs)("article",{className:"jobs-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:i.link,children:i.company})," - ",i.position]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",i.daterange]})]}),Object(a.jsx)("ul",{className:"points",children:i.points.map((e=>Object(a.jsx)("li",{children:e},e)))})]})};const h=e=>{let{data:i}=e;return Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("div",{className:"link-to",id:"experience"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Selected Experience"})}),i.map((e=>Object(a.jsx)(o,{data:e},e.company)))]})};h.defaultProps={data:[]};var d=h;const u=e=>{let{data:i,last:s}=e;return Object(a.jsxs)("li",{className:"course-container",children:[Object(a.jsxs)("a",{href:i.link,children:[Object(a.jsxs)("h4",{className:"course-number",children:[i.number,":"]}),Object(a.jsx)("p",{className:"course-name",children:i.title})]}),!s&&Object(a.jsx)("div",{className:"course-dot",children:Object(a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};u.defaultProps={last:!1};var m=u;const p=e=>{let{data:i}=e;return Object(a.jsxs)("div",{className:"courses",children:[Object(a.jsx)("div",{className:"link-to",id:"courses"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Selected Courses"})}),Object(a.jsx)("ul",{className:"course-list",children:(s=i,s.sort(((e,i)=>{let s=0;return e.university>i.university?s=-1:e.university<i.university||e.number>i.number?s=1:e.number<i.number&&(s=-1),s})).map(((e,i)=>Object(a.jsx)(m,{data:e,last:i===s.length-1},e.title))))})]});var s};p.defaultProps={data:[]};var j=p;var b=()=>Object(a.jsxs)("div",{className:"references",children:[Object(a.jsx)("div",{className:"link-to",id:"references"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)(t.b,{to:"/contact",children:Object(a.jsx)("h3",{children:"References are available upon request"})})})]});var v=()=>Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"link-to",id:"publications"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsxs)("center",{children:[" ",Object(a.jsx)("h3",{children:"Selected Publications"})," "]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:'Olczak P, Roden R (2020) "Progress in L2-based prophylactic vaccine development for protection against diverse human papillomavirus genotypes and associated diseases." Vaccines'}),Object(a.jsx)("li",{children:'S Mandal SK, Banerjee HN, Vaughan D, Boston A, Thorne G , Payne G, Sampson J, Manglik V , Olczak P , et al., (2018) "The Effects of Synthesized Rhenium Acetylsalicylate Compounds on Human Astrocytoma Cell Lines." Journal of Cancer Science and Therapy'}),Object(a.jsx)("li",{children:'Wilder PT, Weber DJ, Winstead A, Parnell S, Hinton TV, Stevenson M, Giri D, Azemati S, Olczak P et al., (2017) "Unprecedented anticancer activities of organorhenium sulfonato and carboxylato complexes against hormone-dependent MCF-7 and hormone-independent triple-negative MDA-MB-231 breast cancer cells." Molecular Cellular Biochemistry.'}),Object(a.jsx)("li",{children:"Olczak P, Wong M, Tsai HL, Wang H, Kirnbauer R, Griffith AJ, Lambert PF, Roden R. Vaccination with human alphapapillomavirus-derived L2 multimer protects against human betapapillomavirus challenge, including in epidermodysplasia verruciformis model mice. Virology. 2022;575."}),Object(a.jsx)("li",{children:"Olczak P, Matsui K, Wong M, Alvarez J, Lambert P, Christensen ND, Hu J, Huber B, Kirnbauer R, Wang JW, Roden RBS. RG2-VLP: a Vaccine Designed to Broadly Protect against Anogenital and Skin Human Papillomaviruses Causing Human Cancer. J Virol. 2022;96(13)."})]})})]});var y=[{title:"Biochemical and Biophysical principles",number:"ME100.710",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Biochemistry",number:"PH.120.840",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Biochemical Techniques",number:"PH.120.850",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Core Research Literature",number:"PH.120.852",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Molecular Biology and Genomics",number:"ME260.709",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Genome Integrity and Cancer",number:"PH120.624",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Statistical reasoning in Public Health 1 / 2",number:"PH140.611/612",link:"https://publichealth.jhu.edu/courses",university:"Johns Hopkins"},{title:"Macromolecular Structure and Analysis",number:"ME:100.709",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Molecular Biology and Genomics",number:"ME:260.709",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Principles of Genetics",number:"ME:110.733",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Computational Biology and Bioinformatics",number:"ME:800.707",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Pathways and Regulation",number:"ME:360.728",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Cell Structure and Dynamics",number:"ME:110.728",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Graduate Immunology",number:"ME:250.703",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Pathology for Graduate Students: Cancer",number:"ME:300.714",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Pathobiology and Disease Mechanisms",number:"ME:300.710",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Pathology for Graduate Students: Immunology/Infectious Disease",number:"ME:300.716",link:"http://jhmi.edu",university:"Johns Hopkins"},{title:"Pathology for Graduate Students: Neuropathology",number:"ME:300.715",link:"http://jhmi.edu",university:"Johns Hopkins"}];var x=[{school:"Johns Hopkins University",degree:"Ph.D. Pathobiology",link:"https://pathology.jhu.edu/education/phd-program",year:2022},{school:"Johns Hopkins University",degree:"M.S. Biochemistry and Molecular Biology",link:"https://www.jhsph.edu/departments/biochemistry-and-molecular-biology/",year:2018},{school:"Morgan State University",degree:"B.S. Chemistry",link:"https://www.morgan.edu/chemistry",year:2011}];var O=[{company:"Covaris",position:"Field Application Scientist",link:"https://www.covaris.com/",daterange:"June 2022 - Present",points:["Provide technical expertise and customer education for Genomics, Epigenetics, and Proteomics workflow solutions","Create and manage technical resources and scientific collaborations","Liaise between customers, Sales, Marketing, R&D and customers","Partner with Sales team and serve as a technical expert to drive sales and provide technical support","Arrange and perform demonstration of company\u2019s products and their applications"]},{company:"PathoVax",position:"Research Specialist",link:"https://www.pathovax.com/",daterange:"July 2018 - April 2019",points:["Produce Human papillomavirus (HPV) viral-like particles (VLPs) and pseudoviruses (PsV) in suspension and adherent cells","Mouse in vivo challenge with various types of HPV PsVs","Mouse in vivo imaging using IVIS spectrum imaging system"]},{company:"Johns Hopkins University, Bloomberg School of Public Health",position:"Research Assistant",link:"https://www.jhsph.edu/",daterange:"August 2013 - March 2018",points:["Maintain, manipulate, immunoblot and immunostain mammalian cells","Develop mitochondrial isolation assay preserving mitochondria-ER contacts","Collect, culture and immunostain prophase I oocytes","Microinject mammalian oocytes"]},{company:"University of Maryland, School of Medicine",position:"Research Assistant",link:"https://www.medschool.umaryland.edu/",daterange:"February 2012 - February 2013",points:["Prepare and analyze immunohistochemical samples","Compile and analyze research data using graphing and statistical analysis software"]}];const g=["Education","Experience","Courses","Publications","References"];i.default=()=>Object(a.jsx)(n.a,{title:"Resume",description:"Pola Olzak's Resume.",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(t.b,{to:"resume",children:"Abbreviated Resume"})}),Object(a.jsx)("div",{className:"link-container",children:g.map((e=>Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object(a.jsx)(l,{data:x}),Object(a.jsx)(d,{data:O}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Summer Internships"}),Object(a.jsx)("p",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"New York University (2011)"}),Object(a.jsx)("li",{children:"Sligo Institute of Technology, School of Science Sligo, Ireland (2010)"}),Object(a.jsx)("li",{children:"Johns Hopkins University, Bloomberg School of Public Health (2009)"})]})})]}),Object(a.jsx)(j,{data:y}),Object(a.jsx)(v,{}),Object(a.jsx)(b,{})]})})}}]);
//# sourceMappingURL=11.e488c9aa.chunk.js.map