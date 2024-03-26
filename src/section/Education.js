import styles from "../styles/Education.module.scss";

const Education = () => {
  const educationData = [
    {
      institution: "Stevens Institute of Technology, Hoboken, NJ, USA",
      date: "Dec 2022",
      degree: "Master of Science in Computer Science",
      gpa: "GPA: 3.8/4.0",
      honors:
        "Awarded Provost’s Masters Scholarship ($8000 awarded for exceptional academics as an undergraduate)",
      courses: [
        "Data Structures",
        "Web Programming",
        "Database Management System",
        "Cloud Computing",
      ],
    },
    {
      institution:
        "Smt. Kashibai Navale College of Engineering, Pune, Maharashtra, India",
      date: "Jun 2018",
      degree: "Bachelor of Engineering in Information Technology",
      gpa: "GPA: 3.7/4.0",
    },
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationCard}>
            <h2>{edu.institution}</h2>
            <time>{edu.date}</time>
            <p className={styles.degree}>
              {edu.degree} — {edu.gpa}
            </p>
            {edu.honors && <p className={styles.honors}>{edu.honors}</p>}
            {edu.courses && (
              <div>
                <h3>Courses:</h3>
                <ul>
                  {edu.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
