import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInfo}>
        <p>Pratik Patil</p>
        <p>Hoboken, NJ 07030</p>
        <p>
          Email:{" "}
          <a href="mailto:pratikpatil280596@gmail.com">
            pratikpatil280596@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+12019934276">201-993-4276</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/pratikpatil7777"
            target="_blank"
            rel="noopener noreferrer"
          >
            pratikpatil7777
          </a>
        </p>
      </div>
      <div className={styles.contactForm}>
        <h2>Send a Message</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
