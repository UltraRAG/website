import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// --- 线性 SVG 图标组件 (Lucide 风格) ---

const IconPipeline = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <path d="M10 6.5h4M17.5 10v4M10 17.5h4M6.5 10v4"/>
  </svg>
);

const IconSearch = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
    <path d="M11 8v6M8 11h6"/>
  </svg>
);

const IconLightbulb = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const IconGraph = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="19" cy="5" r="2"/>
    <circle cx="5" cy="5" r="2"/>
    <circle cx="19" cy="19" r="2"/>
    <circle cx="5" cy="19" r="2"/>
    <path d="M14.5 10 17 7M9.5 10 7 7M14.5 14l2.5 3M9.5 14 7 17"/>
  </svg>
);

const IconRobot = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <path d="M8 16h.01M16 16h.01"/>
    <path d="M9 20v1M15 20v1"/>
  </svg>
);

// --- 数据 ---

// 特效总览数据
const FeaturesList = [
  {
    title: 'Pipeline Builder',
    desc: '自动化处理繁琐界面封装。只需专注于逻辑编排，静态代码即刻变身可交互的演示系统。',
    Icon: IconPipeline,
  },
  {
    title: 'White-box Reasoning',
    desc: '拒绝黑盒。实时呈现复杂长链条任务中的每一次循环、分支与决策细节。',
    Icon: IconSearch,
  },
  {
    title: 'AI Copilot',
    desc: '内嵌懂框架的 AI 助手，通过自然语言交互辅助生成 Pipeline 配置与优化 Prompt。',
    Icon: IconLightbulb,
  },
  {
    title: 'Knowledge Graph',
    desc: '深度整合知识图谱，提升检索准确率与推理可解释性。',
    Icon: IconGraph,
  },
  {
    title: 'Multi-Agent',
    desc: '原生支持多智能体协作，复杂任务自动拆解与分发。',
    Icon: IconRobot,
  },
];

// --- 组件 ---

function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>UltraRAG 3.0</h1>
        <p className={styles.heroSubtitle}>拒绝"盲盒"开发，让每一行推理逻辑都看得见。</p>
        
        <div className={styles.heroButtons}>
          <Link
            className={clsx(styles.btnBase, styles.btnGray)}
            to="/blog/ultrarag-3.0-release">
            了解详情
          </Link>
          <Link
            className={clsx(styles.btnBase, styles.btnGray)}
            to="/blog/ultrarag-3.0-release">
            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v14l11-7-11-7z"/>
            </svg>
            试玩
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
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardWidth = 360; 
  const gap = 30;
  const totalCards = FeaturesList.length;

  // 三段列表，保证视口内多卡片时也能无缝循环
  const loopedList = [...FeaturesList, ...FeaturesList, ...FeaturesList];

  // 从中间段开始
  const [renderIndex, setRenderIndex] = useState(totalCards);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setRenderIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setRenderIndex(prev => prev + 1);
  };

  // 处理无限循环的瞬移（保持在中间段）
  const handleTransitionEnd = () => {
    if (renderIndex < totalCards) {
      setIsTransitioning(false);
      setRenderIndex(prev => prev + totalCards);
    } else if (renderIndex >= totalCards * 2) {
      setIsTransitioning(false);
      setRenderIndex(prev => prev - totalCards);
    }
  };

  // 瞬移后恢复过渡效果
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

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
              transform: `translateX(-${renderIndex * (cardWidth + gap)}px)`,
              transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedList.map((feature, idx) => (
              <div key={idx} className={styles.carouselCard}>
                <div className={styles.cardImage}>
                  <feature.Icon />
                </div>
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
          <span className={styles.codeLine}><span className={styles.comment}># 安装依赖</span></span>
          <span className={styles.codeLine}><span className={styles.command}>pip install uv</span></span>
          <span className={styles.codeLine}><span className={styles.command}>uv sync</span></span>
          <br/>
          <span className={styles.codeLine}><span className={styles.comment}># 运行 Pipeline</span></span>
          <span className={styles.codeLine}><span className={styles.command}>ultrarag run examples/sayhello.yaml</span></span>
          <br/>
          <span className={styles.codeLine}><span className={styles.comment}># 启动 UI</span></span>
          <span className={styles.codeLine}><span className={styles.command}>ultrarag show ui --admin</span></span>
        </div>  
        
        <div className={styles.quickStartContent}>
          <h2>快速开始</h2>
          <p>
           快速了解如何基于 UltraRAG 运行一个完整的 RAG Pipeline。
          </p>
          <Link
            className={styles.tutorialBtn}
            to="https://ultrarag.openbmb.cn/pages/cn/getting_started/quick_start"
            target="_blank">
            即刻上手
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
      description="拒绝盲盒开发，让每一行推理逻辑都看得见">
      
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
