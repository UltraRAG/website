import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// --- 数据 ---

// 特效总览数据
const FeaturesList = [
  {
    title: 'Pipeline Builder',
    desc: '自动化处理繁琐界面封装。只需专注于逻辑编排，静态代码即刻变身可交互的演示系统。',
    icon: '🧩',
  },
  {
    title: 'White-box Reasoning',
    desc: '拒绝黑盒。实时呈现复杂长链条任务中的每一次循环、分支与决策细节。',
    icon: '🔍',
  },
  {
    title: 'AI Copilot',
    desc: '内嵌懂框架的 AI 助手，通过自然语言交互辅助生成 Pipeline 配置与优化 Prompt。',
    icon: '💡',
  },
  {
    title: 'Knowledge Graph',
    desc: '深度整合知识图谱，提升检索准确率与推理可解释性。',
    icon: '🕸️',
  },
  {
    title: 'Multi-Agent',
    desc: '原生支持多智能体协作，复杂任务自动拆解与分发。',
    icon: '🤖',
  },
];

// --- 组件 ---

function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>UltraRAG 3.0</h1>
        <p className={styles.heroSubtitle}>拒绝“盲盒”开发，让每一行推理逻辑都看得见。</p>
        
        <div className={styles.heroButtons}>
          <Link
            className={clsx(styles.btnBase, styles.btnGray)}
            to="/blog/ultrarag-3.0-release">
            了解详情
          </Link>
          <Link
            className={clsx(styles.btnBase, styles.btnBlue)}
            to="https://github.com/OpenBMB/UltraRAG"
            target="_blank">
            <svg className={styles.githubIcon} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Github
          </Link>
        </div>

        {/* 占位图区域，如果有大图可以放在这里 */}
        <div style={{marginTop: '60px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}}>
             {/* 可以放一个大的 Dashboard 截图 */}
             {/* <img src="..." style={{width: '100%', display: 'block'}} /> */}
        </div>
      </div>
    </header>
  );
}

function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 360; 
  const gap = 30;
  
  // 简单的视窗计算，实际项目中可能需要 ResizeObserver
  const maxIndex = Math.max(0, FeaturesList.length - 1); 

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + FeaturesList.length) % FeaturesList.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % FeaturesList.length);
  };

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>特效总览</h2>
      
      <div className={styles.carouselContainer}>
        {/* 左箭头 */}
        <button 
          className={clsx(styles.carouselNavButton, styles.navPrev)} 
          onClick={handlePrev}
        >
          ‹
        </button>

        <div className={styles.carouselViewport}>
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              // 当从最后一个跳回第一个时，可以暂时取消 transition 以实现无缝循环（这里为了简单先保留回弹效果）
              // 或者如果要简单的“无限往右”，需要克隆 DOM。
              // 这里我们采用最简单的“循环索引”方式：滑到头后点击 next 会快速回滚到开头。
            }}
          >
            {FeaturesList.map((feature, idx) => (
              <div key={idx} className={styles.carouselCard}>
                <div className={styles.cardImage}>{feature.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右箭头 */}
        <button 
          className={clsx(styles.carouselNavButton, styles.navNext)} 
          onClick={handleNext}
        >
          ›
        </button>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      <div className={styles.quickStartContainer}>
        <div className={styles.codeBlock}>
          <span className={styles.codeLine}><span className={styles.comment}># 安装 UltraRAG</span></span>
          <span className={styles.codeLine}><span className={styles.command}>pip install ultrarag</span></span>
          <br/>
          <span className={styles.codeLine}><span className={styles.comment}># 初始化项目</span></span>
          <span className={styles.codeLine}><span className={styles.command}>ultrarag init my-project</span></span>
          <br/>
          <span className={styles.codeLine}><span className={styles.comment}># 启动服务</span></span>
          <span className={styles.codeLine}><span className={styles.command}>ultrarag start</span></span>
        </div>
        
        <div className={styles.quickStartContent}>
          <h2>快速开始</h2>
          <p>
            只需一行命令即可开始使用。UltraRAG 提供了完整的脚手架工具，
            助您快速构建生产级 RAG 应用。
          </p>
          <Link
            className={styles.tutorialBtn}
            to="https://ultrarag.openbmb.cn/"
            target="_blank">
            View Tutorial
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`UltraRAG 3.0`}
      description="拒绝“盲盒”开发，让每一行推理逻辑都看得见">
      
      <main>
        {/* 1. Hero: UltraRAG 3.0 + 详情 */}
        <HeroSection />

        {/* 2. Carousel: 特效总览 */}
        <FeatureCarousel />

        {/* 3. QuickStart: 快速开始 + Tutorial */}
        <QuickStartSection />
      </main>
    </Layout>
  );
}
