import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { useIsZh } from '../i18n';
import styles from './contact.module.css';

export default function Contact() {
  const isZh = useIsZh();

  return (
    <Layout
      title={isZh ? '联系我们' : 'Contact Us'}
      description={isZh ? '与 UltraRAG 团队取得联系' : 'Get in touch with the UltraRAG team'}
    >
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.pageTitle}>
            {isZh ? '联系我们' : 'Contact Us'}
          </h1>
          <p className={styles.pageSubtitle}>
            {isZh
              ? '对 UltraRAG 有任何疑问？欢迎与我们联系。'
              : 'Have any questions about UltraRAG? Feel free to reach out.'}
          </p>
        </div>

        <div className={styles.gridContainer}>
          {/* Card 1: WeChat Community */}
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.wechatIcon}`}>
              <svg className={styles.cardIconSvg} viewBox="0 0 1024 1024" aria-hidden="true">
                <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-313.4-227.1C209 150.8 57.7 284.2 57.7 443.9c0 92.7 50.3 168.6 134.3 218.3L154.8 765l117.6-58.9c42.1 16.9 92.3 25.8 134 25.8 11.1 0 22-.6 32.6-1.6-6.8-23.4-10.6-48-10.6-73.4 0-153.2 122.4-279.5 261.7-279.5zM485.2 363.5c-19.8 0-35.8-16.1-35.8-35.8s16.1-35.8 35.8-35.8c19.8 0 35.8 16.1 35.8 35.8s-16 35.8-35.8 35.8zm-199.1 0c-19.8 0-35.8-16.1-35.8-35.8s16.1-35.8 35.8-35.8 35.8 16.1 35.8 35.8-16 35.8-35.8 35.8z" fill="currentColor"/>
                <path d="M926.8 663.4c0-139.5-134.3-252.6-284.8-252.6S357.2 523.9 357.2 663.4s134.3 252.6 284.8 252.6c33.4 0 67-8.3 100.5-16.7L834.2 949l-33.5-100.5c67-50.2 126.1-117.3 126.1-185.1zM540.6 629.3c-17.8 0-33.4-15.6-33.4-33.4s15.6-33.4 33.4-33.4 33.4 15.6 33.4 33.4-15.6 33.4-33.4 33.4zm202.4 0c-17.8 0-33.4-15.6-33.4-33.4s15.6-33.4 33.4-33.4 33.4 15.6 33.4 33.4-15.6 33.4-33.4 33.4z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>
              {isZh ? '微信社区' : 'WeChat Community'}
            </h3>
            <p className={styles.cardText}>
              {isZh
                ? '扫码加入我们的微信社区群。'
                : 'Scan the QR code to join our WeChat community.'}
            </p>
            <div className={styles.qrWrapper}>
              <img
                src={useBaseUrl('img/contact/wechat_qr.png')}
                alt={isZh ? '微信社区群二维码' : 'WeChat Community QR Code'}
                className={styles.qrImage}
              />
            </div>
          </div>

          {/* Card 2: Community Support */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>💬</div>
            <h3 className={styles.cardTitle}>
              {isZh ? '社区交流' : 'Community'}
            </h3>
            <p className={styles.cardText}>
              {isZh
                ? '加入社区交流问题、分享想法，并与开发者联系。'
                : 'Join the community to discuss, share ideas, and connect with developers.'}
            </p>
            <div className={styles.buttonGroup}>
              <Link to="https://discord.com/invite/yRFFjjJnnS" className={styles.primaryLink}>
                {isZh ? '加入 Discord' : 'Join Discord'}
              </Link>
            </div>
          </div>

          {/* Card 3: GitHub Issues */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🐛</div>
            <h3 className={styles.cardTitle}>
              {isZh ? '问题反馈' : 'Bug Reports'}
            </h3>
            <p className={styles.cardText}>
              {isZh
                ? '发现 bug 或有新功能建议？欢迎在 GitHub 提交 Issue。'
                : 'Found a bug or have a feature request? Submit an Issue on GitHub.'}
            </p>
            <div className={styles.buttonGroup}>
              <Link to="https://github.com/OpenBMB/UltraRAG/issues" className={styles.secondaryLink}>
                {isZh ? '查看 Issues' : 'View Issues'}
              </Link>
            </div>
          </div>

          {/* Card 4: Email Us */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>✉️</div>
            <h3 className={styles.cardTitle}>
              {isZh ? '邮件联系' : 'Email Us'}
            </h3>
            <p className={styles.cardText}>
              {isZh
                ? '如有合作意向，欢迎随时邮件交流。'
                : 'For collaboration inquiries, feel free to reach out via email.'}
            </p>
            <div className={styles.buttonGroup}>
              <Link to="mailto:yanyk.thu@gmail.com" className={styles.secondaryLink}>
                yanyk.thu@gmail.com
              </Link>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
