import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Default image if none is provided
  const projectImage = project.logo || '/logos/vscode_icon.svg';
  
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={projectImage}
          alt={`${project.title} project`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={projectImage}
            alt={`${project.title} logo`}
            width={36}
            height={36}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
