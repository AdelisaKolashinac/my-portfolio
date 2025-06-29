import Image from "next/image";
import styles from "./Certificates.module.css";
import { certificates, modulAchievements } from "@/data/data";

export default function Certificates() {
  return (
    <div className={styles.certificates}>
      <h2 className={styles.certificates__title}>
        Module Achievements & Certifications
      </h2>
      <hr />
      <div className={styles.certificates__wrapper}>
        <div className={styles.certificates__pdfContainer}>
          {certificates.map((cert) => (
            <a key={cert.alt} href={cert.src} target="_blank">
              <div className={styles.certificates__pdfItem}> 📄 {cert.alt}</div>
            </a>
          ))}
        </div>
        <div className={styles.certificates__moduleContainer}>
          {modulAchievements.map((module) => (
            <a
              href={module.src}
              target="_blank"
              rel="noopener noreferrer"
              key={module.alt}
              className={styles.certificates__moduleItem}
            >
              <Image
                src={module.src}
                alt={module.alt}
                width={200}
                height={200}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
