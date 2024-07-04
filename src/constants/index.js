import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    uphill,
    uphillhome,
    gamingdb,
    todo,
    buzzit,
    footballAnalysisSystem,
    aiSummarizer
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "UPHILL HR Services",
      icon: uphill,
      iconBg: "#383E56",
      date: "Nov 2022 - Jan 2023",
      points: [
        "Built a website from scratch for the organization using the Angular framework.",
      "Utilized Angular 7.0, Angular 2.0, TypeScript, HTML, CSS, MySQL, MongoDB, Express.js, Node.js, and Django.",
      "Ensured seamless functionality and responsiveness across various devices.",
      "Collaborated with the Uphill HR Services team to optimize the user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dev proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dev does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Dev optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gaming Database App",
      description:
        "An interactive gaming database application that allows users to explore and discover information about various games, including details, ratings, and reviews.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: gamingdb,
      source_code_link: "https://github.com/VashisthDev/gaming-db",
    },
    {
      name: "Buzzit",
      description:
        "Meet my sleek social networking app: connecting people, sparking discussions, and sharing effortlessly. With intuitive features and a focus on privacy, it's the perfect platform for vibrant online communities.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "pink-text-gradient",
        },
      ],
      image: buzzit,
      source_code_link: "https://github.com/VashisthDev/threads_app",
    },
    {
      name: "Uphill Official Website",
      description:
        "The official website for Uphill HR Services, showcasing company information, services, and offerings, designed for a seamless user experience.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: uphillhome,
      source_code_link: "http://www.uphillhrservices.com/",
    },
    {
      name: "Football Analysis System",
      description:
        "A comprehensive system leveraging machine learning and computer vision to analyze football games, including player detection, tracking, and performance metrics.",
      tags: [
        {
          name: "YOLOv8",
          color: "blue-text-gradient",
        },
        {
          name: "KMeans",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: footballAnalysisSystem,  // Replace with the actual path to your image
      source_code_link: "https://github.com/VashisthDev/football-analysis-system",
    },
    {
      name: "AI Summarizer",
      description:
        "An AI-powered application that generates concise summaries of lengthy articles and documents, making it easier to grasp key points quickly.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLTK",
          color: "green-text-gradient",
        },
        {
          name: "GPT-4",
          color: "pink-text-gradient",
        },
      ],
      image: aiSummarizer,  // Replace with the actual path to your image
      source_code_link: "https://ai-summarizer-puce.vercel.app/",
    }    
    
    // Add more projects here
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };