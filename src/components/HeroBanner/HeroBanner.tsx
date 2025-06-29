import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <h2>Welcome to My Portfolio</h2>
        <p>
          Front-end developer with a passion for sleek, user-friendly design.
        </p>
        <p>Choose a section below to learn more.</p>
      </div>
    </div>
  );
}
