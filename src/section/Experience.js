import styles from "../styles/Experience.module.scss";

const Experience = () => {
  const experienceData = [
    {
      company: "BDIPlus, New York City, USA",
      period: "July 2022 to Present",
      position: "Full Stack Developer",
      responsibilities: [
        "Crafted interactive React web app for marketing using D3.js and Three.js.",
        "Pitched and built backend API’s using Node.js, Express.js and Redis cache to optimize big data fetch.",
        "Created real-time Workflow dashboard using React Flow.",
        "Spearheaded mobile application development process using React Native, for both iOS and Android platforms.",
        "Oversaw the entire lifecycle of application development, from conceptualization to deployment.",
        "Resolved brand-specific issues across various Android devices to maintain consistent app performance.",
        "Detected and resolved issues to ensure optimal application reliability and integrity.",
      ],
    },
    {
      company: "Accenture, Pune, India",
      period: "Oct 2018 to July 2021",
      position: "Application Development Analyst",
      responsibilities: [
        "Awarded with Apex Award for Innovation and Thought Leadership and BT Spark Award for Standard Performer.",
        "Experienced with PL/SQL, Tableau, and python libraries: Flask, Tkinter, Pandas, Selenium, NumPy, Matplotlib.",
        "Validated and geocoded addresses for 1.2 M customer site addresses spanning across 195 countries.",
        "Drove efficiency through automation as Python Scripting Subject Matter Expert (SME).",
        "Improved business deliverables by aiding in securing bids worth 330k GBP.",
        "Proposed recovery and mitigation plans for Escalation of Risks and Issues with Program Managers.",
        "Enhanced DQ solution by overall 96%; Drastically increased throughput by 400%, significantly reducing the ETA.",
        "Innovated reporting system to provide location-wise reports on all research parks of the world.",
      ],
    },
  ];
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.timeline}>
        {experienceData.map((exp, index) => (
          <div key={index} className={styles.experienceBlock}>
            <h2>
              {exp.position} - {exp.company}
            </h2>
            <p className={styles.period}>{exp.period}</p>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
