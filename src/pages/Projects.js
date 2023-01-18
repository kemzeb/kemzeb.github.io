import "./Projects.css"
import ProjectCards from "../components/ProjectCards";

function Projects() {
  const featuredProjects = [
    {
      name: "CodeProfiler",
      desc: "My senior project! It combines instrumentation profiling and unit testing software into one for Go programs. More info on my LinkedIn page",
      skills: ["Go", "SDLC", "Agile", "Code Refactoring"],
      date: "Aug 2021-May 2022",
      isPinned: true,
      isAcademic: true,
    },
    {
      name: "kemzeb/planetvplanet",
      href: "https://github.com/kemzeb/planetvplanet",
      desc: "🌍 Web app that compares planets in our Solar System to exoplanets",
      skills: ["Java", "JavaScript", "React", "MySQL", "Spring Boot", "Unit Testing"],
      date: "June 2022",
      isPinned: true,
    },
    {
      name: "kemzeb/habiter",
      href: "https://github.com/kemzeb/habiter",
      desc: "Quantify and keep tabs on habits within the command-line",
      skills: ["Python", "SQLite", "JSON", "Unit Testing", "GitHub Actions"],
      date: "Oct 2020",
      isPinned: true,
    },
    {
      name: "kemzeb/portdive",
      href: "https://github.com/kemzeb/portdive",
      desc: "CLI game inspired by Splinter Cell: Chaos Theory's hacking mini-game",
      skills: ["Go", "Game Development"],
      date: "Nov 2021",
      isPinned: true,
    },
  ];

  const otherProjects = [
    {
      name: "For Kingdom & Glory",
      desc: "Medieval fantasy game powered by Unity consisting of 3 levels and a player fighting various enemies. Within a 5-person team, I implemented the enemy AI logic",
      skills: ["C#", "Unity", "Trello", "CI", "Game Development"],
      date: "April-May 2022",
      isAcademic: true,
    },
    {
      name: "rgb-dws",
      href: "https://os.mbed.com/users/kemzebra/code/rgb-data-with-stats/",
      desc: "Statistical analysis of live RGB data gathered from the interactions between a Nucleo-64 board, a TCS3200 color sensor, and with mbed API",
      skills: ["C++", "Embedded Systems"],
      date: "Oct-Dec 2020",
      isAcademic: true,
    },
  ];

  return (
    <main className="projects-container">
      <h1>Featured</h1>
      <ProjectCards projects={featuredProjects} />
      <h1>Open Source / Academic Projects</h1>
      <ProjectCards projects={otherProjects} />
    </main>
  );
}

export default Projects;
