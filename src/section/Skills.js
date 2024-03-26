import styles from "../styles/Skills.module.scss";

const Skills = () => {
  const skillsData = {
    languagesAndTools: [
      "JavaScript",
      "PL/SQL",
      "JAVA",
      "Python",
      "Git",
      "Talend ETL",
      "Tableau",
      "VMware",
      "Microsoft Excel",
      "Jupyter Notebook",
    ],
    librariesAndFrameworks: [
      "Flask",
      "Django",
      "NLTK",
      "Tkinter",
      "NumPy",
      "Pandas",
      "Selenium",
      "Scrapy",
      "BeautifulSoup",
      "Matplotlib",
    ],
    mobileDevelopment: ["React Native (iOS and Android)"],
    webTechnologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Handlebars.js",
      "GraphQL",
      "D3.js",
      "Three.js",
      "React Flow",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    databases: ["SQL (Oracle 11g, MySQL, PostgreSQL)", "MongoDB", "Firebase"],
    cloudTechnologies: ["AWS", "Azure", "GCP"],
    certifications: [
      "Google Digital Unlocked: The Fundamentals of Digital Marketing - Oct 2020",
      "Microsoft Certified: Azure Fundamentals (AZ- 900) - Jan 2020",
    ],
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className={styles.category}>
            <h2>{category.replace(/([A-Z])/g, " $1").trim()}</h2>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
