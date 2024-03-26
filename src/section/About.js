import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.intro}>
        <h1>Hi, I'm Pratik Ravindra Patil</h1>
        <p>
          A Full Stack Developer with over 2 years of experience specializing in
          building exceptional, high-quality websites and applications.
        </p>
      </div>
      <div className={styles.skills}>
        <h2>Skills and Expertise</h2>
        <p>
          Proficient in: JavaScript, React, Node.js, Express, MongoDB, HTML,
          CSS, Git, and other technologies. I have a passion for creating
          responsive and user-friendly digital experiences.
        </p>
      </div>
      <div className={styles.experience}>
        <h2>Professional Experience</h2>
        <p>
          I've worked with BDIPlus Inc. where I developed several POCs (Proof of
          Concepts from scratch) and a React Native mobile application. My
          projects have resulted in [key achievements, metrics, or
          improvements].
        </p>
      </div>
      <div className={styles.interests}>
        <h2>Personal Interests</h2>
        <p>
          Outside of programming, I enjoy [hobbies or activities], which help me
          [benefits from activities].
        </p>
      </div>
      <div className={styles.cta}>
        <p>
          Feel free to <a href="#contact">contact me</a> or view{" "}
          <a href="#projects">my projects</a>.
        </p>
      </div>{" "}
    </section>
  );
};

export default About;
