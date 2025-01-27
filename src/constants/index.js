import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postgresql,
    python,
    cpp
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "CPP",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "Postgresql",
        type: "Database",
    },
 


    
];

export const experiences = [
    {
        title: "EQUITY ANALYST",
        company_name: "STOCNERVE",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "August 2023",
        points: [
            "Creation of Technical Reports ",
            "Business development.",
            "Fundamental Analysis.",
            "News Analysis",
        ],
    },
    {
        title: "BETA TESTER",
        company_name: "BOWLED.IO",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "September 2023",
        points: [
            "Finding and reporting bugs.",
            "Suggesting creative game ideas.",
            "Consistently offering valuable feedback.",
        ],
    },
    {
        title: "Management Trainee",
        company_name: "Genpact India",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Feb 2015 - May 2021",
        points: [
            "Led a team in developing and maintained their performance by conducting sessions/feedbacks for the Team Members.",
            "Collaborated with stakeholders in defining Quaterly target for the portofolio, project requirements and timelines.",
            "Showcased bi-weekly/monthly reports to overseas U.S. clients.",
        ],
    },
    
];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ashutosh9110',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ashutosh-adhikari-6b8379258',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'A sleek and modern Weather App that gives you real-time accurate and up-to-date weather information for any city worldwide. Visualize weather data trends such as temperature, humidity, and precipitation with Recharts.',
        link: "https://weather-app-nblv-ashutoshs-projects-b91f7c39.vercel.app/"
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Food-Recipe-App',
        description: 'A simple MERN stack Recipe application that displays different delicious recipes added by the users. It showcases a variety of recipes along with their descriptions, ingredients, and time it took to prepare the dish. Following these recipes will make you the Gordon Ramsay of your household. You just need to follow the instructions carefully and puff... A MAGNIFICIENT DISH IS READY TO GET SERVED.',
        link: 'https://food-recipee-app-beta.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Pokémon React App',
        description: 'Explore your favourite Pokémon and discover their amazing abilities! Compare strengths to see which Pokémon reigns supreme.',
        link: 'https://pokemon-app-one-blush.vercel.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-time Human Pose Estimation in your browser',
        description: 'With PoseNet running on TensorFlow.js anyone with a decent webcam-equipped desktop or phone can experience this technology right from within a web browser.',
        link: "https://ashutosh9110.github.io/Real-time-Human-Pose-Estimation-in-your-browser/",
    },

];