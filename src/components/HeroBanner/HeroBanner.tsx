import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h2>Welcome to My Portfolio</h2>
        <p>
          I am a passionate front-end developer. Below you will find a brief
          overview of my work and experience. Click on each section to learn
          more.
        </p>
      </div>
    </div>
  );
}
