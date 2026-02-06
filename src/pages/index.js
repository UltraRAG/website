import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

// --- 数据 ---

const FeaturesList = [
  {
    title: '低代码编排复杂流程',
    tag: 'Pipeline',
    desc: '原生支持串行、循环与条件分支等控制结构。开发者仅需编写 YAML 配置文件，即可在数十行代码内实现复杂的迭代式 RAG 逻辑。',
    image: 'img/feature/pipeline.png',
    link: '/docs/pipeline'
  },
  {
    title: '模块化扩展与复现',
    tag: 'Modular',
    desc: '基于 MCP 架构将功能解耦为独立 Server。新功能仅需以函数级 Tool 形式注册，即可无缝接入流程，实现极高的复用性。',
    image: 'img/feature/server.png',
    link: '/docs/server'
  },
  {
    title: '统一评测与基准对比',
    tag: 'Benchmark',
    desc: '内置标准化评测流程，开箱即用主流科研 Benchmark。通过统一指标管理与基线集成，大幅提升实验的可复现性与对比效率。',
    image: 'img/feature/benchmark.png',
    link: '/docs/benchmark'
  },
  {
    title: '交互原型快速生成',
    tag: 'UI Generation',
    desc: '告别繁琐的 UI 开发。仅需一行命令，即可将 Pipeline 逻辑瞬间转化为可交互的对话式 Web UI，缩短从算法到演示的距离。',
    image: 'img/feature/ui.png',
    link: '/docs/ui'
  },
];

// --- 组件 ---

function HeroSection() {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>
            UltraRAG <span style={{color: '#2563eb'}}>3.0</span>
          </h1>
          <p className={styles.heroSubtitle}>
            拒绝"盲盒"开发，让每一行推理逻辑都看得见。<br/>
            模块化、可解释、高精度的 RAG 框架。
          </p>
          
          <div className={styles.heroButtons}>
            {/* 按钮 1: 了解详情 -> 3.0 Blog */}
            <Link
              className={styles.btnPrimary}
              to="/blog/ultrarag-3.0-release">
              了解详情
            </Link>

            {/* 按钮 2: 试玩 -> Demo (占位) */}
            <Link
              className={styles.btnSecondary}
              to="/demo">
              <span style={{marginRight: '6px'}}>▶</span> 试玩
            </Link>

            {/* 按钮 3: 教程文档 */}
            <Link
              className={styles.btnSecondary}
              to="https://ultrarag.openbmb.cn/">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              教程文档
            </Link>

            {/* 按钮 4: Github */}
            <Link
              className={styles.btnSecondary}
              to="https://github.com/OpenBMB/UltraRAG">
               {/* 简单的 GitHub SVG 图标 */}
               <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" style={{marginRight: '8px'}}>
                 <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
               </svg>
               Github
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img 
            src={useBaseUrl('img/home/home.png')} 
            className={styles.heroImgElement} 
            alt="UltraRAG Pipeline Architecture" 
          />
        </div>
      </div>
    </header>
  );
}

function FeatureGrid() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // 自动轮播
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FeaturesList.length);
    }, 5000); // 5秒切换一次
    return () => clearInterval(interval);
  }, []);

  const currentFeature = FeaturesList[activeIndex];

  return (
    <section className={styles.gridSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>核心特性</h2>
        <p className={styles.sectionDesc}>
          UltraRAG 为研究者和开发者提供了一套完整的工具链，从数据处理、流程编排到最终的 UI 展示。
        </p>
      </div>
      
      <div className={styles.carouselContainer}>
        {/* 大卡片区域 */}
        <div className={styles.carouselCard}>
          <div className={styles.carouselImageWrapper}>
            <img 
              key={activeIndex} // key 变化触发淡入动画
              src={useBaseUrl(currentFeature.image)} 
              className={styles.carouselImage} 
              alt={currentFeature.title}
              style={{animation: 'fadeIn 0.5s'}} 
            />
          </div>
          <div className={styles.carouselContent}>
            <div className={styles.carouselTag}>{currentFeature.tag}</div>
            <h3 className={styles.carouselTitle}>{currentFeature.title}</h3>
            <p className={styles.carouselDesc}>{currentFeature.desc}</p>
          </div>
        </div>

        {/* 左箭头 */}
        <button 
          className={clsx(styles.carouselArrow, styles.arrowLeft)}
          onClick={() => setActiveIndex((current) => (current - 1 + FeaturesList.length) % FeaturesList.length)}
          aria-label="上一个"
        />

        {/* 右箭头 */}
        <button 
          className={clsx(styles.carouselArrow, styles.arrowRight)}
          onClick={() => setActiveIndex((current) => (current + 1) % FeaturesList.length)}
          aria-label="下一个"
        />

        {/* 指示点 */}
        <div className={styles.carouselDots}>
          {FeaturesList.map((_, idx) => (
            <div 
              key={idx}
              className={clsx(styles.dot, idx === activeIndex && styles.active)}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  const partners = [
    "OpenBMB", "Tsinghua NLP", "ModelScope", "HuggingFace", "vLLM"
  ];

  return (
    <section className={styles.logoSection}>
      <p style={{color: '#999', fontSize: '14px', fontWeight: 600, letterSpacing: '1px'}}>TRUSTED BY TEAMS AT</p>
      <div className={styles.logoGrid}>
        {partners.map((partner, idx) => (
          <div key={idx} className={styles.logoItem} style={{
            fontSize: '20px', 
            fontWeight: 700, 
            color: '#ccc', 
            fontFamily: 'sans-serif',
            cursor: 'default'
          }}>
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      {/* Part 1: Quick Start Code */}
      <div className={styles.quickStartContainer}>
        <div className={styles.quickStartCode}>
          <CodeBlock language="bash">
{`# 安装依赖
pip install uv
uv sync

# 运行 Pipeline
ultrarag run examples/sayhello.yaml

# 启动 UI
ultrarag show ui --admin`}
          </CodeBlock>
        </div>
        <div className={styles.quickStartContent}>
          <h2 className={styles.quickStartTitle}>快速开始</h2>
          <p className={styles.quickStartDesc}>
            快速了解如何基于 UltraRAG 运行一个完整的 RAG Pipeline。
          </p>
          <Link
            className={styles.btnPrimary}
            to="https://ultrarag.openbmb.cn/pages/cn/getting_started/quick_start">
            即刻上手
          </Link>
        </div>
      </div>

      {/* Part 2: UI Showcase */}
      <div className={styles.quickStartContainer} style={{marginTop: '100px'}}>
        <div className={styles.quickStartContent}>
          <h2 className={styles.quickStartTitle}>可视化交互界面</h2>
          <p className={styles.quickStartDesc}>
            内置 Web UI，支持知识库管理、RAG 流程搭建与演示。无需编写任何前端代码，让开发专注于逻辑本身。
          </p>
          <Link
            className={styles.btnSecondary}
            to="https://ultrarag.openbmb.cn/pages/cn/ui/start">
            查看详解
          </Link>
        </div>
        <div className={styles.quickStartImageWrapper}>
          <img 
            src={useBaseUrl('img/home/ui.png')} 
            className={styles.quickStartImage} 
            alt="UltraRAG UI" 
          />
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
      description="The Modular and High-Precision RAG Framework">
      
      <main>
        <HeroSection />
        <FeatureGrid />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
