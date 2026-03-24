// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import lpuLogo from "./assets/lpu.webp";
import apsLogo from "./assets/aps.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/image.png";
import csprepLogo from "./assets/work_logo/image copy.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/image copy 3.png";
import npmLogo from "./assets/work_logo/image copy 2.png";
import webverLogo from "./assets/work_logo/image copy 4.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";
import grooveLogo from "./assets/work_logo/groove.png";
import foodLogo from "./assets/work_logo/foodie.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

// export const experiences = [
//   {
//     id: 0,
//     img: webverseLogo,
//     role: "Fullstack Developer",
//     company: "Webverse Digital",
//     date: "April 2024 - Present",
//     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React JS",
//       "TypeScript",
//       "Node JS",
//       "Tailwind CSS",
//       "MongoDb",
//       "Redux",
//     ],
//   },
//   {
//     id: 1,
//     img: agcLogo,
//     role: "Fullstack Engineer",
//     company: "Agumentik Group of Companies",
//     date: "July 2023 - March 2024",
//     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//     skills: [
//       "ReactJS",
//       "Redux",
//       "JavaScript",
//       "Tailwind CSS",
//       "HTML",
//       "CSS",
//       "SQL",
//     ],
//   },
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
//   },
// ];

export const projects = [
  {
    id: 0,
    title: "CropInsure – Crop Insurance Application and Claim Management System ",
    description:
      "Created a full-stack platform for crop insurance policy management and claim processing",
    image: githubdetLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/KumariKirti2114/crop_insurance_website",
  
  },
  {
    id: 1,
    title: "Mahalakshmi Power and Plumbs – Full Stack MERN Web Application",
    description:
      "Built a full-stack web app using MongoDB, Express, React (Vite), and Node.js",
    image: csprepLogo,
    tags: ["HTML","Tailwind CSS","React JS", "Node.js"],
    github: "https://github.com/KumariKirti2114/Mahalakshmi-power-nd-plumbs",

  },

  {
    id: 3,
    title: "     GrooveAI – AI DJ Assistant ",
    description:
      "Developed an AI-powered DJ assistant that generates music recommendations and mixes based on user preferences using Spotify Apis.",
    image: grooveLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/KumariKirti2114/GrooveAI",
    webapp: "https://quick-chat-five-drab.vercel.app",
  },
  {
    id: 4,
    title: "     Foodie-Frenzy - A food delivery App",
    description:
      "Developed a full-stack food delivery application with real-time order tracking and payment integration.",
    image: foodLogo,
    tags: ["React JS", "Node.js"],
    github: "https://github.com/KumariKirti2114/Food-Delivery-App",
  
  },
  

];

export const achievements = [
  "Solved 100+ DSA problems across LeetCode, GFG and HackerRank",
  "Built multiple full-stack MERN applications",
  "Participated in coding contests and hackathons",
  "Active GitHub contributor with consistent commits",
];

export const certificates = [
  // {
  //   title: "Node.js (Basic)",
  //   org: "HackerRank",
  //   link: "https://www.hackerrank.com/certificates/64b299aa1228",
  //   date: "Feb 2026",
  // },
  // {
  //   title: "Build Generative AI Apps",
  //   org: "Infosys Springboard",
  //   link: "https://www.hackerrank.com/certificates/64b299aa1228",
  //   date: "Aug 2025",
  // },
  {
    title: "Data Structures and Algorithms using Java",
    org: "Cipher Schools",
    link: "https://www.cipherschools.com/certificate/preview?id=6898ca1bcec61f8eee5678d6",
    date: "Aug 2025",
  },
  {
    title: "Cloud Computing",
    org: "NPTEL",
    link: "https://drive.google.com/file/d/1cvbSFVD4JP1sDX_1461EaMnVKh_93ZoY/view",
    date: "Jan 2025",
  },
  {
    title: "Object Oriented Programming",
    org: "IamNeo",
    link: "https://lpucolab438.examly.io/certificates",
    date: "Aug 2024",
  },
  {
    title: "Object Oriented Programming",
    org: "IamNeo",
    link: "file:///C:/Users/kirti/Downloads/https___s3.amazonaws.com_exams-media_2027_StudentS%20certificate%20for%20CSE205_12321947@neocolab.ai.pdf",
    date: "Aug 2024",
  },
];

export const educationData = [
  {
    logo: lpuLogo,
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    degree: "Bachelors of Technology in Computer Science and Engineering",
    duration: "August 2023 - Present",
    percentage: "CGPA: 7.18 CGPA (Till Date)",
    description:
      "Pursuing B.Tech in Computer Science and Engineering, focusing on full-stack web development and modern frameworks like MERN. Actively involved in projects that emphasize performance, scalability, and clean UI/UX design.",
  },
  {
    logo: apsLogo,
    institution: "Kendriya Vidyalaya No. 1,Kota",
    location: "Kota, Rajasthan",
    degree: "Senior Secondary (Class XII)",
    duration: "April 2021 - March 2022",
    percentage: "Percentage: 77.6%",
    description:
      "Completed higher secondary education in the science stream with a focus on Mathematics. Developed strong analytical and logical reasoning abilities.",
  },
  {
    logo: apsLogo,
    institution: "Kendriya Vidyalaya No. 1,Kota",
    location: "Kota, Rajasthan",
    degree: "Secondary (Class X)",
    duration: "April 2019 - March 2020",
    percentage: "Percentage: 91.8%",
    description:
      "Completed foundational education with distinction, sparking an early interest in technology, computers, and logical problem solving.",
  },
];
