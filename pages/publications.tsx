import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/data/publications';

import styles from '@/styles/ArticlesPage.module.css';

const PublicationsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Research Publications</h1>
      <p className={styles.pageSubtitle}>
        A collection of my academic research papers and publications in the fields of computer vision, 
        machine learning, and artificial intelligence.
      </p>
      <div className={styles.container}>
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Publications' },
  };
}

export default PublicationsPage;
