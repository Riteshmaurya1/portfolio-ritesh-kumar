import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFigma, SiMongodb, SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
]



export const projects = [
  {
    id: 1,
    title: 'CodeView Code Editor',
    image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    category: "FullStack",
    data: {
      description: `Transforming education with AI, our School UI Design project revolutionizes the 
                       learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                       and intuitive navigation, our design empowers educators and students alike. Experience 
                       innovation at its finest as we pave the way for a smarter, more efficient educational 
                       journey.`,
      demoLink: "https://code-view-theta.vercel.app/",
      shareLink: "https://api.whatsapp.com/send?text=https://www.geeksforgeeks.org/user/riteshmauryabtec/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Application',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category: "FullStack",
    data: {
      description: `Enhance your online shopping experience with our E-Commerce Application 
        UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
        interface offers easy navigation, personalized recommendations, and secure 
        transactions. Elevate your digital storefront and captivate customers with a visually 
        stunning design tailored to your brand`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 3,
    title: 'Robotic Engineering Web Application',
    image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
    category: "FullStack",
    data: {
      description: `Unlock the future of robotics with our Robotic Engineering Web Application
        project. Seamlessly integrating cutting-edge technology, data analytics, 
        and collaborative tools, our platform empowers engineers to design, simulate, 
        and optimize robotic systems. Experience innovation at its peak as we redefine the 
        boundaries of robotic engineering.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ]
  },
  {
    id: 4,
    title: 'Project Management application',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
    category: "Apps",
    data: {
      description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                       Elevate your project management experience and achieve success with ease.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 5,
    title: 'Mobile bank - App Design',
    image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    category: "UI/UX",
    data: {
      description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ]
  },
  {
    id: 6,
    title: 'Quiz App Development',
    image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    category: "Apps",
    data: {
      description: `Elevate engagement and knowledge retention with our Quiz App 
                      Development project. Seamlessly crafted for interactive learning 
                      experiences, our app offers customizable quizzes, real-time feedback, 
                      and captivating visuals. Empower users to test their knowledge anytime,
                       anywhere, fostering a dynamic learning environment tailored to their 
                       needs.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
]



export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      // {
      //   skill: "Sketch",
      //   level: "Intermediate",
      // },
      // {
      //   skill: "XD",
      //   level: "Intermediate",
      // },
      {
        skill: "Canva",
        level: "Intermediate",
      },
    ]
  },
  {
    title: "FullStack Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Express JS",
        level: "Experienced",
      },
    ]
  },
  {
    title: "Data Structure & Algorithm",
    data: [
      {
        skill: "Array",
        level: "Experienced",
      },
      {
        skill: "Linked List",
        level: "Experienced",
      },
      {
        skill: "ArrayList",
        level: "Intermediate",
      },
      {
        skill: "Stack & Queue",
        level: "Experienced",
      },

    ]
  },
  {
    title: "Deployement & Extra Skills",
    data: [
      {
        skill: "Vercel",
        level: "Intermediate",
      },
      {
        skill: "FireBase",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Experienced",
      },
      {
        skill: "Git & Github",
        level: "Intermediate",
      },
    ]
  },
]


export const socialHandles = [
  {
    name: "Upwork",
    icon: <SiUpwork />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/riteshmaurya1",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ritesh-maurya-69a50a25b",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/user__not__define",
  },
];