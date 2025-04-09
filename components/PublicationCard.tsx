import Image from 'next/image';

import styles from '@/styles/ArticleCard.module.css';

interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  url: string;
  cover_image: string;
}

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={publication.cover_image}
          alt={publication.title}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{publication.title}</h3>
        <p className={styles.description}>
          {publication.venue}, {publication.year}
        </p>
      </div>
    </a>
  );
};

export default PublicationCard;