import { projects } from "@/data/data";
import styles from "../page.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.projects__content}>
        <h2>Projects</h2>
        <hr />
        <p className={styles.page__paragraph_02}>A collection of websites I’ve built.</p>
        <p className={styles.page__paragraph_02}>Take a look at some project screenshots below — feel free to explore them on GitHub if you are curious!</p>

        <div className={styles.projects__grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
