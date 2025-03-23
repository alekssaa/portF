import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { VortexDemoSecond } from "./components/VortexDemoSecond";
import { Card } from "./components/Card";
import coffee from "./assets/img/coffe.jpg";
import ExpenseTracker from "./assets/img/ExpenseTracker.jpg";
import brainwaveimg from "./assets/img/brainwaveimg.jpg";
import iphone from "./assets/img/iphone.jpg";
import menu from "./assets/img/menu.jpg";
import shop from "./assets/img/shop.jpg";
import portfolioimg from "./assets/img/portfolio.jpg";
import know from "./assets/img/know.jpg";
import rinho from "./assets/img/rinho.jpg";
import wiki from "./assets/img/wiki.jpg";
import eshop2 from "./assets/img/eshop2.JPG";
import login from "./assets/img/login.jpg";
import zentry from "./assets/img/zentry.jpg";
import dport from "./assets/img/3dport.JPG";
import xora from "./assets/img/xora.JPG";
import movie from "./assets/img/movieS.JPG";
import kviz from "./assets/img/kviz.JPG";

export const links = [
  {
    id: 1,
    url: "/",
    text: "homepage",
    component: <VortexDemoSecond />,
  },
  {
    id: 2,
    url: "/aboutandcontact",
    text: "aboutandcontact",
    component: <BackgroundBeamsDemo />,
  },
  {
    id: 3,
    url: "/project",
    text: "project",
    component: <Card />,
  },
];

export const projects = [
  {
    id: 1,
    name: "Brainwave",
    description:
      "A website designed for gaining new experience with Tailwind and GSAP.",
    technologies: ["Vite,", "Tailwind CSS,", "JavaScript,"],
    url: "https://brainewave.netlify.app/",
    img: brainwaveimg,
  },
  {
    id: 2,
    name: "Zentry",
    description:
      "The website that won the award for best design. Credit goes to JSM.",
    technologies: ["Recat, ", "Tailwind CSS, ", "JavaScript, "],
    img: zentry,
    url: "https://cute-meringue-90f317.netlify.app/",
  },
  {
    id: 3,
    name: "Apple iPhone15",
    description:
      "An iPhone 15 website created with the goal of gaining knowledge in the field of GSAP and THREE.js.",
    technologies: [
      "Recat, ",
      "Tailwind CSS, ",
      "GSAP, ",
      " THREE.js, ",
      "JavaScript, ",
    ],
    img: iphone,
    url: "https://appwebs.netlify.app/",
  },
  {
    id: 4,
    name: "Ecommerce",
    description: "A web shop designed for selling various products.",
    technologies: ["Recat, ", "CSS, ", "JavaScript, Tailwind CSS "],
    img: shop,
    url: "https://ecomer-cesite.netlify.app/",
  },
  {
    id: 5,
    name: "ExpenseTracker",
    description: "An application designed for tracking expenses.",
    technologies: ["Recat, ", "CSS, ", "JavaScript, "],
    img: ExpenseTracker,
    url: "https://stellar-croquembouche-204763.netlify.app/",
  },

  {
    id: 6,
    name: "Login",
    description: "A project created using only CSS and HTML.",
    technologies: ["CSS, ", "HTML, "],
    img: login,
    url: "https://animacijalogin.netlify.app/",
  },
  {
    id: 7,
    name: "Coffee",
    description: "Coffee SHOP.",
    technologies: ["Recat, ", "CSS, "],
    img: coffee,
    url: "https://caffeeshop.netlify.app/",
  },
  {
    id: 8,
    name: "Portfolio",
    description:
      "A portfolio website designed to showcase the knowledge acquired so far.",
    technologies: ["Recat, ", "CSS, ", "Bootstrap, ", "HTML, ", "JavaScript, "],
    img: portfolioimg,
    url: "https://app.netlify.com/sites/portfolioaleksandarilisic/overview",
  },
  {
    id: 9,
    name: "Rinho",
    description: "Rinhp bilding site.",
    technologies: ["Recat, ", "Tailwind CSS", "GSAP"],
    img: rinho,
    url: "https://rinho.netlify.app/",
  },
  {
    id: 10,
    name: "Know Courses",
    description:
      "A website for course promotion intended for testing acquired knowledge, independently developed.",
    technologies: ["Recat, ", "Tailwind CSS"],
    img: know,
    url: "https://knowcourses.netlify.app/",
  },
  {
    id: 11,
    name: "Wikipedija",
    description: "A website with the ability to search via Wikipedia",
    technologies: ["Recat, ", "Tailwind CSS", "API call"],
    img: wiki,
    url: "https://rainbow-strudel-e50f5b.netlify.app/",
  },
  {
    id: 12,
    name: "ESHOP",
    description: "Web Shop",
    technologies: ["Recat, ", "Tailwind CSS"],
    img: eshop2,
    url: "https://unique-selkie-084223.netlify.app/",
  },
  {
    id: 13,
    name: "3D Portfolio",
    description: "A 3D web portfolio for practice using Three.js.",
    technologies: ["Recat, ", "Tailwind CSS", "Three.js"],
    img: dport,
    url: "https://threejsportfolioai.netlify.app/",
  },
  {
    id: 14,
    name: "Xora",
    description: "Xora simple website",
    technologies: ["Recat, ", "Tailwind CSS"],
    img: xora,
    url: "https://xorasaasai.netlify.app/",
  },
  {
    id: 15,
    name: "Find Movies ",
    description: "Find Movies You'll Enjoy",
    technologies: ["Recat, ", "Tailwind CSS", "API call"],
    img: movie,
    url: "https://transcendent-moonbeam-a65966.netlify.app/",
  },
  {
    id: 16,
    name: "Knowledge quiz",
    description: "Knowledge quiz – test your general knowledge.",
    technologies: ["JavaScript", "CSS", "HTML"],
    img: kviz,
    url: "https://magical-llama-b01261.netlify.app/#",
  },
];
export const socialLinks = [
  {
    id: 1,
    name: "linkedin",
    link: "https://www.linkedin.com/in/aleksandar-ilisic-59663b2b7/",
    icon: <IoLogoLinkedin />,
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com/aleksandar.ilisic",
    icon: <FaFacebook />,
  },
];
