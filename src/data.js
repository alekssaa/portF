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
import login from "./assets/img/login.jpg";

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
    id: 2,
    name: "Brainwave",
    description:
      "A website designed for gaining new experience with Tailwind and GSAP.",
    technologies: ["Vite,", "Tailwind CSS,", "JavaScript,"],
    url: "https://brainewave.netlify.app/",
    img: brainwaveimg,
  },
  {
    id: 3,
    name: "Ecommerce",
    description: "A web shop designed for selling various products.",
    technologies: ["Recat, ", "CSS, ", "HTML, ", "JavaScript, "],
    img: shop,
    url: "https://ecomer-cesite.netlify.app/",
  },
  {
    id: 4,
    name: "ExpenseTracker",
    description: "An application designed for tracking expenses.",
    technologies: ["Recat, ", "CSS, ", "HTML, ", "JavaScript, "],
    img: ExpenseTracker,
    url: "https://stellar-croquembouche-204763.netlify.app/",
  },
  {
    id: 5,
    name: "Menu",
    description: "A restaurant menu featuring a selection of various dishes.",
    technologies: ["Recat, ", "CSS, ", "HTML, ", "JavaScript, "],
    img: menu,
    url: "https://github.com/alekssaa/Menu/tree/main/menu%20-%20setup",
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
    description: "A reminder and to-do list application.",
    technologies: ["Recat, ", "CSS, "],
    img: coffee,
    url: "https://github.com/alekssaa/Todo",
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
