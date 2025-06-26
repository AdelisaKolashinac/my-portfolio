import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <HeroBanner />
      <div className={styles.overviewCards}>
        <div className={styles.card}>
          <h3>About Me</h3>
          <p>
            A brief introduction about who I am, my background, and my
            development journey.
          </p>
          <Link href="/about" className={styles.cardButton}>
            Learn More
          </Link>
        </div>
        <div className={styles.card}>
          <h3>Projects</h3>
          <p>
            Explore my work, including web apps and websites I have developed
            using React, Next.js, and more.
          </p>
          <Link href="/projects" className={styles.cardButton}>
            View Projects
          </Link>
        </div>
        <div className={styles.card}>
          <h3>Contact</h3>
          <p>
            Let us connect! I am open to new opportunities, collaborations, and
            questions.
          </p>
          <Link href="/contact" className={styles.cardButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
