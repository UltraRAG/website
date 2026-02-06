import React from 'react';
import Layout from '@theme/Layout';
// 1. 引入这个关键工具！
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import styles from './team.module.css'; 

// 数据配置：保持这个短路径不变，非常干净
// 顶部并排的两组（项目负责人 & 联合发起人）
const TopGroups = [
  {
    groupName: '项目发起人',
    members: [
      { name: '闫宇坤', title: '项目负责人', role: 'TsinghuaNLP', avatarSrc: '/img/team/yyk.jpg' },
    ]
  },
  {
    groupName: '联合发起人',
    members: [
      { name: '刘正皓', title: '意见指导', role: 'NEUIR', avatarSrc: '/img/team/lzh.jpg' },
    ]
  },
];

// 其余团队成员
const TeamConfig = [
  {
    groupName: '核心贡献者',
    members: [
      { name: '梅森', title: 'v2-v3 核心开发', role: 'TsinghuaNLP', avatarSrc: '/img/team/ms.png' },
      { name: '辛海东', title: 'v2-v3 核心开发', role: 'NEUIR', avatarSrc: '/img/team/xhd.jpg' },
      { name: '彭淳毅', title: '2.0 核心开发', role: 'NEUIR', avatarSrc: '/img/team/pcy.jpg' },
    ]
  },
  {
    groupName: '贡献者',
    members: [
      { name: '李奕杉', title: '3.0 贡献者', role: 'OpenBMB', avatarSrc: '/img/team/lys.jpg' },
      { name: '刘书良', title: '2.0 贡献者 & 基线实现', role: 'NEUIR', avatarSrc: '/img/team/lsl.jpg' },
      { name: '王逸轩', title: '3.0 贡献者', role: 'TsinghuaNLP', avatarSrc: '/img/team/wyx.jpg' },
      { name: '伍铭妍', title: '基线实现', role: 'NEUIR', avatarSrc: '/img/team/wmy.jpg' },
    ]
  },
];

export default function Team() {
  return (
    <Layout title="Team" description="UltraRAG Team Members">
      <div className={styles.teamPageContainer}>
        <div className="container">
          <div className={styles.headerSection}>
            <h1>团队成员</h1>
          </div>
          
          {/* 顶部并排区域：项目负责人 & 联合发起人 */}
          <div className={styles.topGroupsRow}>
            {TopGroups.map((group, idx) => (
              <div key={idx} className={styles.teamGroup}>
                <h2 className={styles.groupTitle}>{group.groupName}</h2>
                <div className={styles.teamGrid}>
                  {group.members.map((member, mIdx) => (
                    <div key={mIdx} className={styles.memberCard}>
                      <div className={styles.avatarWrapper}>
                        <img 
                          src={useBaseUrl(member.avatarSrc)} 
                          alt={member.name} 
                          className={styles.avatar} 
                        />
                      </div>
                      <div className={styles.memberInfo}>
                        <h4 className={styles.memberName}>{member.name}</h4>
                        {member.title && <span className={styles.memberTitle}>{member.title}</span>}
                        <span className={styles.memberRole}>{member.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 其余团队组 */}
          {TeamConfig.map((group, idx) => (
            <div key={idx} className={styles.teamGroup}>
              <h2 className={styles.groupTitle}>{group.groupName}</h2>
              <div className={styles.teamGrid}>
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className={styles.memberCard}>
                    <div className={styles.avatarWrapper}>
                      <img 
                        src={useBaseUrl(member.avatarSrc)} 
                        alt={member.name} 
                        className={styles.avatar} 
                      />
                    </div>
                    <div className={styles.memberInfo}>
                      <h4 className={styles.memberName}>{member.name}</h4>
                      {member.title && <span className={styles.memberTitle}>{member.title}</span>}
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