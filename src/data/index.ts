import {
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";

type info = {
  title: string;
  description: string;
  icon: IconType;
};

export const technologies: Array<info> = [
  {
    title: "HTML",
    description:
      "HTML (HyperText Markup Language ) is the most basic component of the Web. Defines the meaning and structure of web content. In addition to HTML, other technologies are generally used to describe a web page's appearance/presentation ( CSS ) or functionality/behavior ( JavaScript ).",
    icon: IoLogoHtml5,
  },
  {
    title: "CSS",
    description:
      "Cascading Style Sheets ( C ascading Style Sheets ) or CSS is the style language used to describe the presentation of HTML or XML documents (en - US)(including various XML-based languages ​​such as SVG , MathML or XHTML ). CSS describes how the structured element should be rendered on the screen, on paper, in speech, or in other media.",
    icon: IoLogoCss3,
  },
  {
    title: "JavaScript",
    description:
      "is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
    icon: IoLogoJavascript,
  },
  {
    title: "React",
    description:
      "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
    icon: IoLogoReact,
  },
  {
    title: "React Router Dom",
    description:
      "Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.",
    icon: IoLogoReact,
  },
  {
    title: "Boostrap",
    description:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.",
    icon: IoLogoCss3,
  },
  {
    title: "Typescript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    icon: IoLogoJavascript,
  },
];
