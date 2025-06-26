import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <h2>Contact Me</h2>
      <hr />
      <p className={styles.page__p}>
        I would love to hear from you — whether it is about a frontend project,
        internship opportunity, or just to say hi.
      </p>
      <div className={styles.socials}>
        <a href="mailto:adelisa@example.com">adelisa@example.com</a>
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
