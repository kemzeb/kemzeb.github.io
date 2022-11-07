import "./ProjectCards.css";
function ProjectCard({ name, href, desc, skills, isPinned }) {
  const [cssProjectName, cssProjectNameUnderlined] = [".project-name", "project-name-underlined"];
  return (
    <div className="project-card">
      <div className="name-container">
        {/* svg source is from GitHub*/}
        {isPinned === true && (
          <svg className="pinned" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            />
          </svg>
        )}
        <a className={href ? cssProjectNameUnderlined : cssProjectName} href={href}>
          {name}
        </a>
      </div>
      <div className="desc">{desc}</div>
      <div className="skills">Skills: {skills.join(", ")}</div>
    </div>
  );
}

function ProjectCards({ projects }) {
  return (
    <div className="project-cards">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx} // If projects adds or deletes elements, find an alternative way to create unique keys
          name={project.name}
          href={project.href}
          desc={project.desc}
          skills={project.skills}
          isPinned={project.isPinned}
        />
      ))}
    </div>
  );
}

export default ProjectCards;
