import styles from '@/styles/ExperiencePage.module.css';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaLink } from 'react-icons/fa';

const ExperiencePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Professional Experience</h1>
        <div className={styles.subtitle}>
          Professional journey and key accomplishments
        </div>

        <div className={styles.aboutContent}>
          {/* UCR ACM */}
          <section className={styles.section}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.sectionTitle}>
                <FaBriefcase className={styles.sectionIcon} /> University of California Riverside (UCR)
              </h2>
              <div className={styles.experienceSubtitle}>
                ACM Project Lead
              </div>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceMetaItem}>
                  <FaMapMarkerAlt /> Riverside, California
                </span>
                <span className={styles.experienceMetaItem}>
                  <FaCalendarAlt /> Jan 2025 - Mar 2025
                </span>
              </div>
            </div>
            <ul className={styles.experienceList}>
              <li className={styles.experienceItem}>
                Managed the Advanced Data Science Project at ACM@UCR, leading the Transactional Fraud Detector project team using Graph Neural Networks (GNN) on the IEEE-CIS Fraud Detection Dataset.
              </li>
              <li className={styles.experienceItem}>
                Collaborated with cross-functional teams to ensure project success and data accuracy at the University of California, Riverside.
              </li>
            </ul>
          </section>

          {/* Artpark */}
          <section className={styles.section}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.sectionTitle}>
                <FaBriefcase className={styles.sectionIcon} /> Artpark
              </h2>
              <div className={styles.experienceSubtitle}>
                Software Engineer <Link href="#" className={styles.inlineLink}><FaLink /></Link>
              </div>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceMetaItem}>
                  <FaMapMarkerAlt /> Bangalore, India
                </span>
                <span className={styles.experienceMetaItem}>
                  <FaCalendarAlt /> Jan 2024 - Jun 2024
                </span>
              </div>
            </div>
            <ul className={styles.experienceList}>
              <li className={styles.experienceItem}>
                Engineered an AI-powered SDK for AR/VR motion capture using IMU sensors, incorporating Kalman Filter for calibration,
                which led to a substantial <span className={styles.highlight}>70% improvement in motion tracking accuracy</span>.
              </li>
              <li className={styles.experienceItem}>
                Architected multimodal AI pipelines, leveraging MiniCPM LLM for context-aware sensor fusion, enabling gesture classification,
                movement recognition, and adaptive learning for real-time AR/VR interactions.
              </li>
              <li className={styles.experienceItem}>
                Custom Drivers for Embedded Systems - GPS, Bluetooth, Wi-Fi, and Camera modules on STM32 chips, enhancing data communication by <span className={styles.highlight}>45%</span>.
              </li>
            </ul>
          </section>

          {/* Drozone */}
          <section className={styles.section}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.sectionTitle}>
                <FaBriefcase className={styles.sectionIcon} /> Drozone
              </h2>
              <div className={styles.experienceSubtitle}>
                DevOps Engineer
              </div>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceMetaItem}>
                  <FaMapMarkerAlt /> Bangalore, India
                </span>
                <span className={styles.experienceMetaItem}>
                  <FaCalendarAlt /> Jun 2023 - Dec 2023
                </span>
              </div>
            </div>
            <ul className={styles.experienceList}>
              <li className={styles.experienceItem}>
                Spearheaded the development and automation of AgriOM and Drozone, improving deployment efficiency by <span className={styles.highlight}>80%</span> through CI/CD pipelines, infrastructure as code (IaC), and cloud automation using Jenkins.
              </li>
              <li className={styles.experienceItem}>
                Enhanced security and scalability, reducing vulnerabilities and minimizing downtime by <span className={styles.highlight}>40%</span>.
              </li>
              <li className={styles.experienceItem}>
                Integrated Django REST API with Google Cloud Platform (GCP) to build a scalable cloud solution. Used Docker and Kubernetes for microservices orchestration and Jenkins to automate builds and deployments.
              </li>
            </ul>
          </section>

          {/* Indian Institute of Science */}
          <section className={styles.section}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.sectionTitle}>
                <FaBriefcase className={styles.sectionIcon} /> Indian Institute of Science (IISc)
              </h2>
              <div className={styles.experienceSubtitle}>
                Research Assistant <Link href="#" className={styles.inlineLink}><FaLink /></Link>
              </div>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceMetaItem}>
                  <FaMapMarkerAlt /> Bangalore, India
                </span>
                <span className={styles.experienceMetaItem}>
                  <FaCalendarAlt /> Jan 2023 - Dec 2023
                </span>
              </div>
            </div>
            <ul className={styles.experienceList}>
              <li className={styles.experienceItem}>
                Research under Dr. S. N. Omkar, Chief Research Scientist, leading the AgriOM project to improve satellite farm yield prediction by <span className={styles.highlight}>60%</span>, while enhancing weed mapping and crop health monitoring using multi-spectral UAV imagery and computer vision.
              </li>
              <li className={styles.experienceItem}>
                Optimized an image processing pipeline with YOLOv5 and Mask-RCNN, reducing analysis time by <span className={styles.highlight}>45%</span> and improving accuracy. Implemented Non-Maximum Suppression (NMS) to resolve <span className={styles.highlight}>20%</span> overlap issues in farm image analysis.
              </li>
            </ul>
          </section>

          {/* Krushaka Drones */}
          <section className={styles.section}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.sectionTitle}>
                <FaBriefcase className={styles.sectionIcon} /> Krushaka Drones
              </h2>
              <div className={styles.experienceSubtitle}>
                Software Engineer Intern <Link href="#" className={styles.inlineLink}><FaLink /></Link>
              </div>
              <div className={styles.experienceMeta}>
                <span className={styles.experienceMetaItem}>
                  <FaMapMarkerAlt /> Bangalore, India
                </span>
                <span className={styles.experienceMetaItem}>
                  <FaCalendarAlt /> Sep 2022 - Jan 2023
                </span>
              </div>
            </div>
            <ul className={styles.experienceList}>
              <li className={styles.experienceItem}>
                Led an Autonomous Drone Path Optimization tool with Django to determine efficient pesticide spraying routes for pomegranate trees, leveraging the Travelling Salesman Problem (TSP) algorithm and YOLOv5 for accurate crop detection.
              </li>
              <li className={styles.experienceItem}>
                Introduced features including TIFF image processing, bounding box calculations for GPS extraction, and visual path display, ensuring precise drone navigation across a farm with over 600 trees.
              </li>
            </ul>
          </section>

          <div className={styles.actionLinks}>
            <Link href="/about" className={styles.primaryLink}>
              About Me <VscArrowRight />
            </Link>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  };
}

export default ExperiencePage;