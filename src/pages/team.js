import React from 'react';
import Layout from '@theme/Layout';
// 1. 引入这个关键工具！
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import styles from './team.module.css'; 

// 数据配置：保持这个短路径不变，非常干净
const TeamConfig = [
  {
    groupName: 'Advisor',
    members: [
      { name: 'Shuliang Liu', role: 'OpenAI', avatarSrc: '/img/team/lsl.jpg' },
    ]
  },
  {
    groupName: 'Core Team',
    members: [
      { name: 'Sen Mei', role: 'Developer', avatarSrc: '/img/team/ms.png' },
      { name: 'Haidong Xin', role: 'Developer', avatarSrc: '/img/team/xhd.jpg' },
      { name: 'Chunyi Peng', role: 'Developer', avatarSrc: '/img/team/pcy.jpg' },
    ]
  },
];

export default function Team() {
  return (
    <Layout title="Team" description="UltraRAG Team Members">
      <div className={styles.teamPageContainer}>
        <div className="container">
          <div className={styles.headerSection}>
            <h1>Meet the Team</h1>
            <p>The minds behind UltraRAG from THUNLP & OpenBMB.</p>
          </div>
          
          {TeamConfig.map((group, idx) => (
            <div key={idx} className={styles.teamGroup}>
              <h2 className={styles.groupTitle}>{group.groupName}</h2>
              <div className={styles.teamGrid}>
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className={styles.memberCard}>
                    <div className={styles.avatarWrapper}>
                      {/* 2. 这里修改！用 useBaseUrl 包裹路径 */}
                      <img 
                        src={useBaseUrl(member.avatarSrc)} 
                        alt={member.name} 
                        className={styles.avatar} 
                      />
                    </div>
                    <div className={styles.memberInfo}>
                      <h4 className={styles.memberName}>{member.name}</h4>
                      <span className={styles.memberRole}>{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}