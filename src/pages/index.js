import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// --- 核心升级卡片数据 ---
const CoreUpgrades = [
  {
    title: '所见即所得',
    subtitle: 'Pipeline Builder',
    desc: '自动化处理繁琐界面封装。只需专注于逻辑编排，静态代码即刻变身可交互的演示系统。',
    icon: '🧩', 
  },
  {
    title: '像素级可视化',
    subtitle: 'White-box Reasoning',
    desc: '拒绝黑盒。实时呈现复杂长链条任务中的每一次循环、分支与决策细节。',
    icon: '🔍',
  },
  {
    title: '交互式开发',
    subtitle: 'AI Copilot',
    desc: '内嵌懂框架的 AI 助手，通过自然语言交互辅助生成 Pipeline 配置与优化 Prompt。',
    icon: '💡',
  },
];

// --- 组件：特性卡片 ---
function UpgradeCard({title, subtitle, desc, icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconBox}>{icon}</div>
        <h3 className={styles.featureTitle}>
          {title} <br/>
          <span className={styles.featureSubtitle}>{subtitle}</span>
        </h3>
        <p className={styles.featureDesc}>{desc}</p>
      </div>
    </div>
  );
}

// --- 组件：深度详情 (左右布局) ---
function DetailSection({title, subtitle, desc, contentPoints, reverse, badge}) {
  return (
    <section className={clsx(styles.detailSection, reverse && styles.bgGray)}>
      <div className="container">
        <div className={clsx(styles.detailGrid, reverse && styles.reverseGrid)}>
          {/* 文本区域 */}
          <div className={styles.detailContent}>
            {badge && <span className={styles.badge}>{badge}</span>}
            <h2 className={styles.detailTitle}>{title}</h2>
            <h3 className={styles.detailSubtitle}>{subtitle}</h3>
            <p className={styles.detailDesc}>{desc}</p>
            <ul className={styles.detailList}>
              {contentPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          {/* 图片/演示区域占位符 - 你可以换成真实的截图 */}
          <div className={styles.detailVisual}>
            <div className={styles.placeholderImage}>
              <span>{title} 演示界面</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`UltraRAG 3.0 发布`}
      description="拒绝“盲盒”开发，让每一行推理逻辑都看得见">
      
      {/* 1. Hero 区域 */}
      <header className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            拒绝 <span className={styles.highlightBlue}>“盲盒”</span> 开发 <br/>
            让每一行 <span className={styles.highlightBlue}>推理逻辑</span> 都看得见
          </h1>
          <p className={styles.heroSubtitle}>
            从逻辑到原型的一键跨越，全链路白盒化推理。<br/>
            THUNLP 实验室知识增强小组诚意之作。
          </p>
          <div className={styles.buttonContainer}>
            {/* 修改点：跳转到独立网站，新窗口打开 */}
            <Link 
              className={clsx('button button--lg', styles.btnPrimary)} 
              to="https://ultrarag.openbmb.cn/"
              target="_blank">
              Get Started →
            </Link>
            <Link className={clsx('button button--lg', styles.btnOutline)} to="https://github.com/your-repo">
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* 2. 痛点引言 */}
        <section className={styles.painPointSection}>
          <div className="container">
            <p className={styles.painPointText}>
              “验证算法原型只需一周，构建可用系统却耗时数月。” <br/>
              <span className={styles.painPointSub}>
                UltraRAG 3.0 直面“最后一公里”困境，回归逻辑，拒绝盲盒。
              </span>
            </p>
          </div>
        </section>

        {/* 3. 三大核心升级 (Grid) */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {CoreUpgrades.map((props, idx) => (
                <UpgradeCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. 深度功能解析 1: Pipeline Builder */}
        <DetailSection 
          title="逻辑即应用"
          subtitle="从编排到交互的“零距离”体验"
          desc="让算法的终点不再是冷冰冰的控制台日志。逻辑编排完成的一刻，便已同步生成了可交互的演示界面。"
          badge="No-Code / Low-Code"
          contentPoints={[
            "配置即应用：定义 Pipeline YAML，自动转化为交互式 Demo。",
            "画布模式：像搭积木一样直观组装 Loop、Branch 等复杂逻辑。",
            "代码模式：实时同步，满足参数微调的精准控制需求。",
            "一键编译：Build 按钮自动执行逻辑自检，静态代码即刻变身。"
          ]}
        />

        {/* 5. 深度功能解析 2: Show Thinking (反向布局) */}
        <DetailSection 
          reverse={true}
          title="拒绝“黑盒”"
          subtitle="推理轨迹的“像素级”可视化"
          desc="即使是 DeepResearch 这样复杂的长流程任务，也能实时掌握执行进度。让过程不再是漆黑的等待。"
          badge="Traceability"
          contentPoints={[
            "Show Thinking 面板：流式呈现从循环分支到工具调用的所有中间状态。",
            "快速 Debug：界面直接比对检索切片与最终答案。",
            "归因分析：快速判断是“数据层噪声”还是“模型层幻觉”。",
            "实战场景：完美支持医疗问诊、史实分析等长链条任务。"
          ]}
        />

        {/* 6. 深度功能解析 3: AI Assistant */}
        <DetailSection 
          title="智能开发助手"
          subtitle="解放定制开发的“框架桎梏”"
          desc="内嵌懂框架的 AI 助手。为了实现 10% 的核心算法创新，无需背负 90% 的框架学习成本。"
          badge="AI Copilot"
          contentPoints={[
            "结构调整：一句话增加引用（Citation）功能模块。",
            "场景适配：自动优化 Prompt 以适配法律/医疗等专业术语。",
            "参数调整：自然语言切换 OpenAI/Qwen 后端与端口配置。",
            "论文复现：输入 Arxiv 链接，助手辅助搭建类似 DeepNote 的架构。"
          ]}
        />
        
        {/* 底部 CTA */}
        <section className={styles.ctaSection}>
           <h2>Ready to build with UltraRAG?</h2>
           <p>Join the community and start your white-box development journey.</p>
           <div className={styles.buttonContainer}>
             {/* 修改点：跳转到独立网站，新窗口打开 */}
             <Link 
               className={clsx('button button--lg', styles.btnPrimary)} 
               to="https://ultrarag.openbmb.cn/"
               target="_blank">
               Start Tutorial
             </Link>
           </div>
        </section>
      </main>
    </Layout>
  );
}