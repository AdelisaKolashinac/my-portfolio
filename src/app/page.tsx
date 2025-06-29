import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroBanner />
      <div className={styles.home__overviewCards}>
        <div className={styles.home__card}>
          <h3 className={styles.home__cardTitle}>About Me</h3>
          <p className={styles.home__cardText}>
            A brief introduction about who I am, my background, and my
            development journey.
          </p>
          <Link href="/about" className={styles.home__cardButton}>
            Learn More
          </Link>
        </div>
        <div className={styles.home__card}>
          <h3 className={styles.home__cardTitle}>Projects</h3>
          <p className={styles.home__cardText}>
            Explore my work, including web apps and websites I have developed
            using React, Next.js, and more.
          </p>
          <Link href="/projects" className={styles.home__cardButton}>
            View Projects
          </Link>
        </div>
        <div className={styles.home__card}>
          <h3 className={styles.home__cardTitle}>Contact</h3>
          <p className={styles.home__cardText}>
            Let us connect! I am open to new opportunities, collaborations, and
            questions.
          </p>
          <Link href="/contact" className={styles.home__cardButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
