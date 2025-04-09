import styles from '@/styles/AboutPage.module.css';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { FaGraduationCap, FaLaptopCode, FaBook, FaRocket } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Subhash B S</h1>
        <div className={styles.subtitle}>
            AI Engineer | LLM Specialist | ML Researcher
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hello! I'm an AI engineer and machine learning researcher dedicated to transforming cutting-edge technologies into real-world solutions. My expertise spans large language models, autonomous agents, multimodal AI, and advanced generative models.
            </p>
            <p className={styles.paragraph}>
              I specialize in full-stack AI development—ranging from pioneering research to robust production deployments—and I've delivered innovative projects across diverse domains, including intelligent QA systems, agricultural AI, advanced motion analysis, neural search engines, and state-of-the-art computer vision applications.
            </p>
            <p className={styles.paragraph}>
              Leveraging <span className={styles.highlight}>4+ years of industry experience</span>, I excel in architecting and deploying <span className={styles.highlight}>enterprise-scale AI systems</span> that transform business challenges into technological breakthroughs.
            </p>
            <div className={styles.actionLinks}>
              <Link href="/projects" className={styles.primaryLink}>
                Explore My Projects <VscArrowRight />
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaGraduationCap className={styles.sectionIcon} /> Educational Background
            </h2>
            <div className={styles.educationContainer}>
              <div className={styles.educationItem}>
                <p className={styles.paragraph}>
                  🎓 <span className={styles.highlight}>M.S. in Computer Engineering</span>
                  <div className={styles.educationDetails}>
                    University of California, Riverside
                    <span className={styles.gpa}> - Perfect 4.0 GPA</span>
                  </div>
                </p>
              </div>
              <div className={styles.educationItem}>
                <p className={styles.paragraph}>
                  🎓 <span className={styles.highlight}>B.E. in Computer Science & Engineering</span>
                  <div className={styles.educationDetails}>
                    Visveswaraya Technological University
                    <span className={styles.gpa}> - 8.5 CGPA</span>
                  </div>
                </p>
              </div>
              <div className={styles.actionLinks}>
              <Link 
                href="https://www.linkedin.com/in/subhash-b-s/" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                Explore My LinkedIn <VscArrowRight />
              </Link>
            </div>
            </div>

            <div className={styles.specializationContainer}>
              <br />
              <h2 className={styles.sectionTitle}>
              <FaBook className={styles.categoryIcon} /> Technical Specializations
            </h2>
              <div className={styles.specializationCategory}>
                <h4 className={styles.specializationCategoryTitle}>
                  <FaLaptopCode className={styles.sectionIcon} /> Core AI Technologies
                </h4>
                <div className={styles.specializations}>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🧠</span>
                    <span className={styles.highlight}>Large Language Models</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🤖</span>
                    <span className={styles.highlight}>Autonomous Agents</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>👁️</span>
                    <span className={styles.highlight}>Computer Vision</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🔄</span>
                    <span className={styles.highlight}>Next-gen Generative AI</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.specializationCategory}>
                <h4 className={styles.specializationCategoryTitle}>
                  <FaBook className={styles.categoryIcon} /> Research & Development
                </h4>
                <div className={styles.specializations}>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🔬</span>
                    <span className={styles.highlight}>Machine Learning Research</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🧪</span>
                    <span className={styles.highlight}>Multimodal AI Systems</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>📊</span>
                    <span className={styles.highlight}>Neural Network Architectures</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.specializationCategory}>
                <h4 className={styles.specializationCategoryTitle}>
                  <FaRocket className={styles.categoryIcon} /> Engineering & Infrastructure
                </h4>
                <div className={styles.specializations}>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>⚙️</span>
                    <span className={styles.highlight}>AI Systems Engineering</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>🔌</span>
                    <span className={styles.highlight}>Enterprise MLOps</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <span className={styles.specializationIcon}>📡</span>
                    <span className={styles.highlight}>Distributed ML Architecture</span>
                  </div>
                </div>
              </div>
              
              <p className={styles.paragraph}>
                My academic foundation, combined with hands-on expertise, enables me to develop scalable, 
                production-ready AI solutions that address complex real-world challenges.
              </p>
            </div>
            <div className={styles.actionLinks}>
              <Link 
                href="/github" 
                className={styles.primaryLink}
              >
                Github Projects <VscArrowRight />
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaBook className={styles.sectionIcon} /> Research Impact
            </h2>
            <p className={styles.paragraph}>
              Actively advancing the field through research contributions and technical publications, with emphasis on{' '}
              <span className={styles.highlight}>Large-scale LLM Systems</span>,{' '}
              <span className={styles.highlight}>Advanced Agent Frameworks</span>,{' '}
              <span className={styles.highlight}>Enterprise MLOps</span>, and{' '}
              <span className={styles.highlight}>Distributed ML Architecture</span>.
            </p>
            <div className={styles.actionLinks}>
              <Link href="/publications" className={styles.primaryLink}>
                Browse Publications <VscArrowRight />
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaRocket className={styles.sectionIcon} /> Leadership & Achievements
            </h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Leadership & Event Management</span>
            </p>
            <ul className={styles.achievementsList}>
              <li className={styles.achievementItem}>
                Member of the Coder Club (VTU) (2020–2023): Organized and led the Coding Blitz Hackathon for the CSE Department in July 2022, ensuring smooth participation and execution for over 150 attendees.
              </li>
              <li className={styles.achievementItem}>
                House Sports Captain, Kendriya Vidyalaya IISc (2016): Successfully led house teams in various sports events, fostering teamwork and competitive spirit.
              </li>
              <li className={styles.achievementItem}>
                Project Lead at ACM@UCR (Jan 2025–Present): Managing the Advanced Data Science Project, leading the Transactional Fraud Detector project team using GNN on the IEEE-CIS Fraud Detection Dataset.
              </li>
            </ul>
            
            <p className={styles.paragraph}>
              <span className={styles.highlight}>National & Regional Sports</span>
            </p>
            <ul className={styles.achievementsList}>
              <li className={styles.achievementItem}>
                Captain of Kendriya Vidyalaya IISc Hockey Team (2014–2016): Led the team to victory in the Regional Level Hockey Competition (August 2015) and represented the school at the National Level Meet (July 2016).
              </li>
              <li className={styles.achievementItem}>
                National Hockey Player: Participated at the Kendriya Vidyalaya National Sports Meet held in Assam, playing 11 Hockey national representing Karnataka state team.
              </li>
            </ul>
            
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Science & Innovation</span>
            </p>
            <ul className={styles.achievementsList}>
              <li className={styles.achievementItem}>
                1st Place – Regional Science Exhibition (2017): Awarded for an innovative project where I designed and programmed a C-based Arduino robot capable of performing 11 distinct tasks, showcasing strong technical and engineering skills.
              </li>
              <li className={styles.achievementItem}>
                4th Place – Nationals (JNNSME 2017): My robot also secured a 4th Place at the Jawaharlal Nehru National Science and Mathematics Exhibition (JNNSME), held at IIT Kanpur.
              </li>
            </ul>
            
            <p className={styles.paragraph}>
              Beyond development, I'm deeply engaged in the AI community - analyzing breakthrough research, competing in prestigious AI challenges, and contributing to impactful open-source initiatives. My mission is to create AI solutions that drive meaningful change and innovation.
            </p>
            <p className={styles.paragraph}>
              🚀 Ready to pioneer the next breakthrough in AI? Let's connect and create something extraordinary!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
