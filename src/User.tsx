import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import EkartImage from './Images/Ekart.png'
import sortingImage from './Images/CodeX.png'
import GymImage from './Images/Gym.png'
import HTMLIcon from './Images/Icons/HTML.png'
import CssIcon from './Images/Icons/CSS.png'
import scssIcon from './Images/Icons/SASS.png'
import javascriptICon from './Images/Icons/JavaScript.png'
import javaIcon from './Images/Icons/Java.png'
import TypescriptIcon from './Images/Icons/TypeScript.png'
import ReactIcon from './Images/Icons/React JS.png'
import AngularIcon from './Images/Icons/Angular.png'
import BootstrapIcon from './Images/Icons/Bootstrap.png'
import CIcon from './Images/Icons/C.png'
import ExpressIcon from './Images/Icons/Express JS.png'
import GitIcon from './Images/Icons/Github.png'
import MaterialUIICon from './Images/Icons/Material UI.png'
import MongoDbIcon from './Images/Icons/MongoDB.png'
import MongoDbcompass from './Images/Icons/MongoDB Compass.png'
import mysqlIcon from './Images/Icons/MySQL.png'
import NodejsIcon from './Images/Icons/Node JS.png'
import PostgresqlIcon from './Images/Icons/PostgresSQL.png'
import PostmanIcon from './Images/Icons/Postman.png'
import ReduxIcon from './Images/Icons/Redux.png'
import vscodeIcon from './Images/Icons/VS Code.png'
import tailwindIcon from './Images/Icons/Tailwind CSS.png'
import DjangoIcon from './Images/Icons/Django.png'
import PhpIcon from './Images/Icons/PHP.png'
import PythonIcon from './Images/Icons/Python.png'
import girlscriptIcon from './Images/Girl Script Summer Of Code.jpeg'
import braneIcon from './Images/Brane Enterprises Private Limited.jpeg'
const Info={
    name:"Sathwika Madarapu",
    stack:["Software Engineer","Full Stack Web Developer","Competitive Programmer","Open source Contributor"],
    bio:"I'm a passionate Software Engineer specialized in crafting efficient and scalable solutions,deliver top-notch web applications.Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Shopify E-comm App",
        desc: "Shopify is a modern, fully responsive e-commerce platform built using Angular, Django offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Shopify combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: EkartImage,
        live: true,
        technologies: ["Angular", "Django", "Tailwind", "HTML","CSS","TypeScript"],
        link: "https://github.com/Sathwika-02/Ecommerce",
        github: "https://github.com/Sathwika-02/Ecommerce"
    },
    {
        title: "Sorting Visulaizer",
        desc: "Sorting Visualizer is an interactive tool designed to help users understand various sorting algorithms through visual animations. The application demonstrates the step-by-step execution of algorithms such as Bubble Sort, Selection Sort, and more. Built using Python's Tkinter module, this project offers a clear, graphical representation of how different sorting algorithms work behind the scenes, making it an excellent learning resource for computer science students and enthusiasts.",
        image: sortingImage,
        live: false,
        technologies: ["Python Tkinter"],
        link: "https://github.com/Sathwika-02/Sorting-Visualizer",
        github: "https://github.com/Sathwika-02/Sorting-Visualizer"
    },
    {
        title: "Gym Website",
        desc: "Gym Website is a dynamic web application designed to enhance the fitness experience for users. The platform provides a user-friendly interface for managing gym memberships, tracking workouts, and accessing fitness resources. Built with a robust tech stack, this project utilizes HTML, CSS, JavaScript, and PHP to deliver a responsive and interactive experience.The application leverages PHP for server-side processing, allowing for efficient data management and real-time updates. This ensures that users have immediate access to the latest information regarding their workouts and class schedules.",
        image: GymImage,
        live: false,
        technologies: ["HTML","CSS","JavaScript", "Tailwind", "PHP", "Firebase"],
        link: "https://github.com/Sathwika-02/Gym-website",
        github: "https://github.com/Sathwika-02/Gym-website"
    }
]

const SkillInfo = [
    {
        title: "Frontend",
        // skills: ["HTML", "CSS", "SCSS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        // ]
        skills:[
        { name: "HTML", icon: HTMLIcon },
        { name: "CSS", icon: CssIcon},
        { name: "JavaScript", icon: javascriptICon },
        { name: "React JS", icon: ReactIcon },
        { name: "Angular", icon: AngularIcon },
        { name: "Redux", icon: ReduxIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Material UI", icon: MaterialUIICon },
        { name: "Bootstrap", icon: BootstrapIcon },
     
        ]
    },
    {
        title: "Backend",
        // skills: [ "Django","PHP","Node JS", "Express JS", "MySQL", "MongoDB",]
        skills:[
            { name: "Django", icon: DjangoIcon },
            { name: "PHP", icon: PhpIcon },
            { name: "Node JS", icon: NodejsIcon },
            { name: "Express JS", icon: ExpressIcon },
            { name: "MySQL", icon: mysqlIcon },
            { name: "MongoDB", icon: MongoDbIcon },
        ]
    },
    {
        title: "Languages",
        // skills: ["Java","C","Python", "JavaScript", "TypeScript"]
        skills:[
            { name: "Java", icon: javaIcon },
            { name: "C", icon: CIcon },
            { name: "Python", icon: PythonIcon },
            { name: "JavaScript", icon: javascriptICon },
            { name: "TypeScript", icon: TypescriptIcon},
        ]
    },
    {
        title: "Tools",
        // skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass",]
        skills:[
            { name: "Git", icon: GitIcon },
            { name: "Github", icon: GitIcon },
            { name: "VS Code", icon: vscodeIcon},
            { name: "Postman", icon: PostmanIcon },
            { name: "MongoDB Compass", icon: MongoDbcompass}
        ]
    }
]
const ExperienceInfo = [
    {
        role: "Software Engineer",
        company: "Brane Enterprises Private Limited",
        image:braneIcon,
        date: "Feb 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Angular", "React JS", "React", "HTML", "CSS", "Typescript", "Python","Django"]
    },
    {
        role: "Open Source Conributor",
        company: "Girl Script Summer Of Code",
        image:girlscriptIcon,
        date: "Feb 2021 - May 2021",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "HTML", "CSS", "Git","Github"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
const socialLinks = [
    { link: "https://github.com/Sathwika-02", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/sathwikamadarapu/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/sathwikamadarapu/", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@madarapusathwika2933", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/SATHWIKAMADARAPU/", icon: IconBrandLeetcode }
];
export {Info,ProjectInfo,SkillInfo,ExperienceInfo,Slugs,socialLinks};