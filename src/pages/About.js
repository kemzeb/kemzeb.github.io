import "./About.css";
import ProjectCards from "../components/ProjectCards";

function About() {
  const myProjects = [
    {
      name: "kemzeb/habiter",
      href: "https://github.com/kemzeb/habiter",
      desc: "Quantify and keep tabs on habits within the command-line",
      skills: ["Python", "SQLite", "JSON", "Unit Testing", "GitHub Actions"],
      isPinned: true,
    },
    {
      name: "kemzeb/planetvplanet",
      href: "https://github.com/kemzeb/planetvplanet",
      desc: "🌍 Web app that compares planets in our Solar System to exoplanets",
      skills: ["Java", "JavaScript", "React", "MySQL", "Spring Boot", "Unit Testing"],
      isPinned: true,
    },
    {
      name: "kemzeb/portdive",
      href: "https://github.com/kemzeb/portdive",
      desc: "CLI game inspired by Splinter Cell: Chao Theory's hacking mini-game",
      skills: ["Go", "Game Development"],
      isPinned: true,
    },
    {
      name: "SerenityOS/serenity",
      href: "https://github.com/SerenityOS/serenity",
      desc: "The Serenity Operating System 🐞",
      skills: ["C++", "Pull Requests", "GUI App Development"],
      isPinned: true,
    },
  ];

  return (
    <main>
      <p className="summary">
        I'm a recent Software Engineering graduate from California State University San Marcos with
        interests in the intersection between software engineering and evolving industries,
        including aerospace, defense, and finance.
      </p>
      <p className="summary">
        I aspire to be a generalist in the fields of SWE and CS, understanding the inner workings of
        the highest level of computer abstractions down to the lowly assembler, and everything in
        between.
      </p>
      <p className="summary">
        I &#128151; participating in Open Source. Here are a few projects I created or contributed
        to recently:
      </p>
      <ProjectCards projects={myProjects} />
    </main>
  );
}

export default About;
