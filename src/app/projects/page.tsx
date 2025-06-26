import { projects } from "@/data/data";
import styles from "../page.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.projects__content}>
        <h2>Projects</h2>
        <hr />
        <p className={styles.page__p}>A collection of websites I’ve built.</p>

        <div className={styles.projects__grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
