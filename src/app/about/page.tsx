import Certificates from "@/components/Certificates/Certificates";
import styles from "../page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <h2 className={styles.page__title}>About Me</h2>
        <hr />
        <div className={styles.page__box_one}></div>
        <p className={styles.page__paragraph}>
          Hi, I am Adelisa Kolashinac — frontend developer with a background in
          science and a strong foundation in problem-solving, attention to
          detail, and adaptability. After nearly two years in the food industry,
          I’ve transitioned into web development—building responsive,
          user-focused applications using React, TypeScript, and modern tools.
          Eager to contribute to a collaborative development team.
        </p>
        <p className={styles.page__paragraph}>
          I have been diving into <strong>HTML, CSS, JavaScript,</strong> and
          modern frameworks like <strong>React and Next.js</strong>. Through
          hands-on projects and continuous learning, I have developed a strong
          passion for creating intuitive user interfaces that not only work
          smoothly but also look great on any device. I enjoy taking on
          challenges that help me grow as a developer — whether it is
          implementing complex logic in a web app or improving the user
          experience with thoughtful design decisions.
        </p>
        <div className={styles.page__box_two}></div>
        <div className={styles.page__box_three}></div>
        <Certificates />
        <h2 className={styles.page__title}>Let us Connect</h2>
        <hr />
        <p className={styles.page__paragraph}>
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
