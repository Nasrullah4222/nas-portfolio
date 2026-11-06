export const CONTACT_EMAIL = "nasrullah4222@gmail.com";
export const RESUME_URL = "/assets/Nasrullah_Sijan_CV_with_photo.pdf";
export const CALENDLY_URL =
  "https://calendly.com/nasrullah4222/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1";

export const myProjects = [
  {
    id: 1,
    title: "Ustaad - A digital Parking Booking System",
    description:
      "A platform that connects car owners with garage owners, allowing users to book their preferred parking slots while helping garage owners maximize occupancy and generate additional revenue.",
    subDescription: [
      "Developed a scalable application using TypeScript and NextJs, integrating Map APIs to locate and display available parking spaces.",
      "Implemented secure authentication and database management using MongoDB Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
    ],
    href: "https://ustaad-application-mern-stack.vercel.app/",
    githubUrl: "https://github.com/albrud199/Ustaad-Application-MERN-STACK",
    logo: "",
    image: "/assets/projects/Ustaad.png",
    tags: [
      {
        id: 1,
        name: "Typescript",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "NextJs",
        path: "/assets/logos/nextjs-icon.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Interview Planner",
    description:
      "A generative AI project, that can generate complete roadmap according to the targeted company description with Resume.",
    subDescription: [
      "Applied token authentication, authorization and basic backend operation by hard coding.",
      "Intigrated generative AI that can produce structured output.",
      "Developed a React-based frontend with SCSS for a good user experience.",
      "Connected to MongoDB database for user data storage.",
    ],
    href: "https://ai-interview-road-map-analysis-fron.vercel.app/login",
    githubUrl: "https://github.com/Nasrullah4222/AI-Interview-Road-map-Analysis",
    logo: "",
    image: "/assets/projects/interview.png",
    tags: [
      {
        id: 1,
        name: "NodeJs",
        path: "/assets/logos/nodejs-icon.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/scss-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 3,
    title: "HandwrittenOCR",
    description:
      "A OCR platform that convert human handwriting to text file.",
    subDescription: [
      "Used fine tuned model, gemma4, for OCR transformationn",
      "The project is still on progress...",
    ],
    href: "https://automated-bangla-english-handwritte.vercel.app/",
    githubUrl: "",
    logo: "",
    image: "/assets/projects/BengaliOCR.png",
    tags: [
      {
        id: 1,
        name: "NodeJs",
        path: "/assets/logos/nodejs-icon.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/scss-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Flower Classifier",
    description:
      "A website that can identify flower and additional Information",
    subDescription: [
      "I used my backend knowledge to make a platform where my own fine tuned vission transformer model that can detect flower name.",
      "I used MySQL database and my fine tuned Vission transformer model and also add a generative ai for structure search of flower details..",
      "The project is ongoing..."
    ],
    href: "",
    githubUrl: "https://github.com/Nasrullah4222/FlowerClassification-Models",
    logo: "",
    image: "",
    tags: [
     {
        id: 1,
        name: "NodeJs",
        path: "/assets/logos/nodejs-icon.svg",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/mysql-icon.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+01540100483",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nasrullah-sijan-84430430a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Nasrullah4222",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "University Fresher and Problem Solver",
    job: "Semester 1, 2 & 3",
    date: "2023-2024",
    contents: [
    "Built foundational programming skills in C and C++, learning the core concepts of Structured Programming.",
    "Started competitive programming and basic problem-solving through platforms like HackerRank and Codeforces.",
    "Learned Object-Oriented Programming (OOP) using Java in the 3rd semester."
  ],
  },
  {
    title: "Understanding the DSA & DBMS",
    job: "Semester 4, 5 & 6",
    date: "2024-2025",
    contents: [
      "Studied Data Structures in the 4th semester and Algorithms in the 5th semester, building a foundation in problem-solving and computational thinking.",
      "Developed a deeper understanding of Database Management Systems and built an IPL Statistics project to apply database concepts in practice.",
      "Completed foundational Mathematics and Physics courses, including Advanced Calculus and Linear Algebra."
    ],
  },
  {
    title: "Understanding System, Software Engineering",
    job: "Semester 7, 8 & 9",
    date: "2025-2026",
    contents: [
    "Developed a fundamental understanding of Operating Systems and Computer Architecture.",
    "Gained exposure to Low-Level System Design, Software Engineering principles, and technical documentation.",
    "Developed MERN Stack projects with proper documentation to strengthen my Software Engineering knowledge.",
    "Studied Statistics for Data Science, gaining foundational knowledge of statistical analysis and data analytics."
  ],
  },
  {
    title: "AI, ML & Research",
    job: "Semester 10, 11 & 12",
    date: "2026-Present",
    contents: [
      "Developed a strong understanding of Artificial Intelligence and Machine Learning through academic coursework.",
      "Contributed to Green Computing research projects, gaining practical experience in research methodologies.",
      "Developed projects in Image Processing and Computer Vision, strengthening my understanding of Machine Learning.",
      "Started learning Backend Engineering at the beginning of the year and developed several independent projects to build industry-ready skills.",
      "Studied Cybersecurity and Ethics, strengthening my understanding of software security and DevOps practices."
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];