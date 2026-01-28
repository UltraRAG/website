import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout title="Contact Us" description="Get in touch with the UltraRAG team">
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.pageTitle}>Get in Touch</h1>
          <p className={styles.pageSubtitle}>
            Have questions about UltraRAG? We'd love to hear from you.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {/* Card 1: Community Support */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>💬</div>
            <h3 className={styles.cardTitle}>Community Support</h3>
            <p className={styles.cardText}>
              Join our community to ask questions, share ideas, and connect with other developers.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="#" className={styles.primaryLink}>Join Discord</Link>
            </div>
          </div>

          {/* Card 2: GitHub Issues */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🐛</div>
            <h3 className={styles.cardTitle}>Report Issues</h3>
            <p className={styles.cardText}>
              Found a bug or have a feature request? Open an issue on our GitHub repository.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="https://github.com/OpenBMB/UltraRAG/issues" className={styles.secondaryLink}>
                View Issues
              </Link>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>✉️</div>
            <h3 className={styles.cardTitle}>Email Us</h3>
            <p className={styles.cardText}>
              For partnership inquiries or private matters, send us an email directly.
            </p>
            <div className={styles.buttonGroup}>
              <Link to="mailto:contact@openbmb.com" className={styles.secondaryLink}>
                contact@openbmb.com
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>How do I contribute?</h4>
              <p>We welcome contributions! Please check our <Link to="https://github.com/OpenBMB/UltraRAG/blob/main/CONTRIBUTING.md">contribution guidelines</Link> on GitHub.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Is UltraRAG free?</h4>
              <p>Yes, UltraRAG is open-source software licensed under Apache 2.0.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
