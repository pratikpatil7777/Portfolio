import styles from "../styles/Projects.module.scss";

const Projects = () => {
  const projectsData = [
    {
      name: "TULSEE",
      description: "Work Management and collaboration Platform",
      date: "May 2022",
      details: [
        "Developed B2C web application using Next.js, Chakra-UI, Node.js, Express.js, Firebase, Socket.io and hosted on AWS EC2",
        "Implemented features such as creating personal and group projects and CRUD operations for every task",
        "Integrated Zoom API, allowing group members to host meetings",
        "Added group chat, end-to-end encryption, image and document upload, search, and archive project",
        "Enabled easy login/sign-in option with Google SSO",
      ],
      links: {
        website: "#",
        demo: "#",
        github: "#",
      },
    },
    {
      name: "E Banking Web Application",
      description: "A web application for banking transactions.",
      date: "Dec 2021",
      details: [
        "Implemented web application allows users to make transactions with other registered users",
        "Programmed functions using Node.js, MongoDB, Handlebars.js, HTML and CSS",
        "Assisted users to make smart and conscientious decisions with their money by providing user-friendly and comprehensive analysis of their spending habits",
      ],
      links: {
        website: "#",
        demo: "#",
        github: "#",
      },
    },
    {
      name: "YouID",
      description: "NFC based Unique Identification and Data Management",
      date: "Feb 2018",
      details: [
        "Facilitated storage of information on cloud and its access through bio-compatible NFC tag implant",
        "Developed an android application using Android Studio, Java and Cloud service",
      ],
      links: {
        website: "#",
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul>
              {project.details.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className={styles.links}>
              {project.links.website && (
                <a href={project.links.website}>Website</a>
              )}
              {project.links.demo && <a href={project.links.demo}>Demo</a>}
              {project.links.github && (
                <a href={project.links.github}>GitHub</a>
              )}
            </div>
            <span className={styles.date}>{project.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
