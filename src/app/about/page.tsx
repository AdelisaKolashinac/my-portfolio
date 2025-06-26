import Certificates from "@/components/Certificates/Certificates";
import styles from "../page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <hr />
        <div className={styles.box_one}></div>
        <p className={styles.page__p}>
          Hi, I am Adelisa Kolashinac — an aspiring frontend developer currently
          wrapping up my studies at a frontend development academy. My journey
          into tech has been driven by a deep interest in building beautiful,
          functional, and responsive web experiences.
        </p>
        <p className={styles.page__p}>
          I have been diving into <strong>HTML, CSS, JavaScript,</strong> and
          modern frameworks like <strong>React and Next.js</strong>. Through
          hands-on projects and continuous learning, I have developed a strong
          passion for creating intuitive user interfaces that not only work
          smoothly but also look great on any device. I enjoy taking on
          challenges that help me grow as a developer — whether it is
          implementing complex logic in a web app or improving the user
          experience with thoughtful design decisions.
        </p>
        <div className={styles.box_two}></div>
        <div className={styles.box_three}></div>
        <Certificates />
        <h2>Let us Connect</h2>
        <hr />
        <p className={styles.page__p}>
          I am currently open to internship or junior opportunities where I can
          grow and contribute as part of a team. Feel free to{" "}
          <Link href="/contact">
            <u>contact me</u>
          </Link>
        </p>
      </div>
    </div>
  );
}
