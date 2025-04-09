import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Website',
    link: 'subhashbs.com',
    href: 'https://subhashbs.com',
  },
  {
    social: 'Email',
    link: 'subhashbs36@gmail.com',
    href: 'mailto:subhashbs36@gmail.com',
  },
  {
    social: 'Github',
    link: 'subhashbs36',
    href: 'https://github.com/subhashbs36',
  },
  {
    social: 'Linkedin',
    link: 'subhash-b-s',
    href: 'https://www.linkedin.com/in/subhash-b-s/',
  },
  {
    social: 'Google Scholar',
    link: 'Subhash B S',
    href: 'https://scholar.google.com/citations?user=2ChEeCsAAAAJ&hl=en',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
