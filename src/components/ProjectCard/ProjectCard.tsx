"use client";

import { Project } from "@/data/data";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.projectCard}>
        <h3 className={styles.projectCard__title}>{project.title}</h3>
        <p className={styles.projectCard__desc}>{project.description}</p>
        <div className={styles.projectCard__tech}>
          <p>Built with:</p>
          <ul className={styles.projectCard__techList}>
            {project.tech.map((tech, index) => (
              <li key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.projectCard__imgWrapper}>
          <div className={styles.projectCard__imgColumn}>
            <p>Design (Figma)</p>
            <div className={styles.projectCard__imgGrid}>
              {project.designImage?.map((img, index) => (
                <div key={index} onClick={() => handleOpen(img)}>
                  <Image
                    src={img}
                    alt={"Figma design"}
                    width={80}
                    height={80}
                    className={styles.projectCard__imgThumb}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.projectCard__imgColumn}>
            <p>Live Build</p>
            <div className={styles.projectCard__imgGrid}>
              {project.image.map((img, index) => (
                <div key={index} onClick={() => handleOpen(img)}>
                  <Image
                    src={img}
                    alt={"Coded Version"}
                    width={80}
                    height={80}
                    className={styles.projectCard__imgThumb}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href={project.repo} target="_blank" rel="noreferrer" className={styles.projectCard__link}>
          View Code on GitHub
        </a>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Full project view"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}
        </Modal>
      )}
    </>
  );
}
