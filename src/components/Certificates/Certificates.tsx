import Image from "next/image";
import styles from "./Certificates.module.css";
import { certificates, modulAchievements } from "@/data/data";

export default function Certificates() {
  return (
    <div className={styles.certificates}>
      <h2>Module Achievements & Certifications</h2>
      <hr />
      <div className={styles.certificatesWrapper}>
        <div className={styles.certificatesPDF}>
          {certificates.map((cert) => (
            <a key={cert.alt} href={cert.src} target="_blank">
              <div className={styles.PDF}> 📄 {cert.alt}</div>
            </a>
          ))}
        </div>
        <div className={styles.modulAchievements}>
          {modulAchievements.map((module) => (
            <a
              href={module.src}
              target="_blank"
              rel="noopener noreferrer"
              key={module.alt}
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
