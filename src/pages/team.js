import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import { useIsZh } from '../i18n';
import styles from './team.module.css'; 

// 数据配置
const TopGroups = {
  en: [
    {
      groupName: 'Founder',
      members: [
        { name: 'Yukun Yan', title: 'Overall Planning & Lead', role: 'TsinghuaNLP', avatarSrc: '/img/team/yyk.jpg' },
      ]
    },
    {
      groupName: 'Co-Founder',
      members: [
        { name: 'Zhenghao Liu', title: 'Technical Advisor', role: 'NEUIR', avatarSrc: '/img/team/lzh.jpg' },
      ]
    },
  ],
  zh: [
    {
      groupName: '发起人',
      members: [
        { name: '闫宇坤', title: '总体规划与负责', role: 'TsinghuaNLP', avatarSrc: '/img/team/yyk.jpg' },
      ]
    },
    {
      groupName: '联合发起',
      members: [
        { name: '刘正皓', title: '技术顾问', role: 'NEUIR', avatarSrc: '/img/team/lzh.jpg' },
      ]
    },
  ],
};

const TeamConfig = {
  en: [
    {
      groupName: 'Core Team',
      members: [
        { name: 'Sen Mei', title: 'v2/v3 Core Maintainer', role: 'TsinghuaNLP', avatarSrc: '/img/team/ms.jpg' },
        { name: 'Haidong Xin', title: 'v2/v3 Core Maintainer', role: 'NEUIR', avatarSrc: '/img/team/xhd.jpg' },
        { name: 'Chunyi Peng', title: 'v2.0 Core Member', role: 'NEUIR', avatarSrc: '/img/team/pcy.jpg' },
      ]
    },
    {
      groupName: 'Contributors',
      members: [
        { name: 'Yishan Li', title: 'v3.0 Contributor', role: 'OpenBMB', avatarSrc: '/img/team/lys.jpg' },
        { name: 'Yixuan Wang', title: 'v3.0 Contributor', role: 'TsinghuaNLP', avatarSrc: '/img/team/wyx.jpg' },
        { name: 'Shuliang Liu', title: 'v2.0 & Baseline', role: 'NEUIR', avatarSrc: '/img/team/lsl.jpg' },
        { name: 'Mingyan Wu', title: 'Baseline', role: 'NEUIR', avatarSrc: '/img/team/wmy.jpg' },
      ]
    },
  ],
  zh: [
    {
      groupName: '项目核心',
      members: [
        { name: '梅森', title: 'v2/v3 核心维护者', role: 'TsinghuaNLP', avatarSrc: '/img/team/ms.jpg' },
        { name: '辛海东', title: 'v2/v3 核心维护者', role: 'NEUIR', avatarSrc: '/img/team/xhd.jpg' },
        { name: '彭淳毅', title: 'v2.0 核心成员', role: 'NEUIR', avatarSrc: '/img/team/pcy.jpg' },
      ]
    },
    {
      groupName: '项目贡献',
      members: [
        { name: '李奕杉', title: 'v3.0 贡献', role: 'OpenBMB', avatarSrc: '/img/team/lys.jpg' },
        { name: '王逸轩', title: 'v3.0 贡献', role: 'TsinghuaNLP', avatarSrc: '/img/team/wyx.jpg' },
        { name: '刘书良', title: 'v2.0 & 基线实现', role: 'NEUIR', avatarSrc: '/img/team/lsl.jpg' },
        { name: '伍铭妍', title: '基线实现', role: 'NEUIR', avatarSrc: '/img/team/wmy.jpg' },
      ]
    },
  ],
};

export default function Team() {
  const isZh = useIsZh();
  const topGroups = isZh ? TopGroups.zh : TopGroups.en;
  const teamConfig = isZh ? TeamConfig.zh : TeamConfig.en;

  return (
    <Layout
      title={isZh ? '团队' : 'Team'}
      description="UltraRAG Team Members"
    >
      <div className={styles.teamPageContainer}>
        <div className="container">
          <div className={styles.headerSection}>
            <h1>{isZh ? '团队成员' : 'Team Members'}</h1>
          </div>
          
          {/* 顶部并排区域 */}
          <div className={styles.topGroupsRow}>
            {topGroups.map((group, idx) => (
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
          {teamConfig.map((group, idx) => (
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
