import { projects } from "@/data/data";
import styles from "../page.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.projects__content}>
        <h2 className={styles.page__title}>Projects</h2>
        <hr />
        <div className={styles.page__box_one}></div>
        <p className={styles.projects__subtitle}>
          A collection of websites I’ve built.
        </p>
        <p className={styles.projects__subtitle}>
          Take a look at some project screenshots below — feel free to explore
          them on GitHub if you are curious!
        </p>
        <div className={styles.page__box_two}></div>
        <div className={styles.page__box_three}></div>
        <div className={styles.page__box_four}></div>
        <div className={styles.projects__grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
