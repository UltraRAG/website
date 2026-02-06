import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './research.module.css';

// --- 模型数据 ---
const ModelsList = [
  {
    name: 'AgentCPM-Report',
    desc: '面向长文档生成与报告撰写的智能 Agent 模型，助力自动化研究报告生成。',
    tags: ['Agent', 'Long-Text Generation', 'DeepResearch'],
    href: 'https://huggingface.co/openbmb/AgentCPM-Report',
  },
  {
    name: 'MiniCPM-Embedding-Light',
    desc: '轻量高效的文本向量模型，在多项检索基准上取得领先表现，适配 RAG 场景下的大规模语义检索需求。',
    tags: ['Embedding', 'Retrieval'],
    href: 'https://huggingface.co/openbmb/MiniCPM-Embedding-Light',
  },
];

// --- 精选论文数据 ---
const PapersList = [
  {
    title: 'VisRAG: Vision-based Retrieval-Augmented Generation on Multi-modality Documents',
    authors: 'Shi Yu, Chaoyue Tang, et al.',
    date: '2025.04',
    venue: 'ICLR 2025',
    abstract: '提出了一种“视觉优先”的检索增强生成新范式，通过将文档直接转化为视觉向量进行匹配与生成，从根本上解决了复杂排版文档在传统文本解析中的信息降级问题。',
    href: 'https://arxiv.org/pdf/2410.10594',
  },
  {
    title: 'RAG-DDR: Optimizing Retrieval-Augmented Generation Using Differentiable Data Rewards',
    authors: 'Xinze Li, Sen Mei, et al.',
    date: '2025.04',
    venue: 'ICLR 2025',
    abstract: '提出了一种基于“可微分数据奖励”的 RAG 优化新范式，通过在检索器与生成器之间建立端到端的奖励对齐机制，显著提升了模型从外部知识中提取核心信息并解决知识冲突的能力。',
    href: 'https://arxiv.org/pdf/2410.13509',
  },
  {
    title: 'RAGEval: Scenario Specific RAG Evaluation Dataset Generation Framework',
    authors: 'Kunlun Zhu, Yifan Luo, et al.',
    date: '2025.07',
    venue: 'ACL 2025',
    abstract: '提出了一种自动化的检索增强生成评价基准构建新范式，通过基于 Schema 的知识蒸馏与文档生成技术，实现了针对特定垂直场景（如金融、法律、医疗）评价数据集的高效定制。',
    href: 'https://aclanthology.org/2025.acl-long.418.pdf',
  },
  {
    title: 'DeepNote: Note-Centric Deep Retrieval-Augmented Generation',
    authors: 'Ruobing Wang, et al.',
    date: '2025.11',
    venue: 'EMNLP 2025',
    abstract: '提出了一种以“笔记”为核心的自适应检索增强生成新范式，通过在检索过程中引入迭代式知识积累机制，显著提升了模型处理复杂开放域问答任务的深度与鲁棒性。',
    href: 'https://arxiv.org/pdf/2410.08821',
  },
];

// --- 组件 ---

function ResearchHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>研究</h1>
        <p className={styles.heroSubtitle}>了解我们的最新研究成果</p>
      </div>
    </section>
  );
}

function ModelsSection() {
  return (
    <section className={styles.modelsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>模型</h2>
          <p className={styles.sectionDesc}>我们开源的核心模型，为 RAG 生态提供基础能力支撑。</p>
        </div>
        <div className={styles.modelsGrid}>
          {ModelsList.map((model, idx) => (
            <a
              key={idx}
              href={model.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modelCard}
            >
              <div className={styles.modelCardInner}>
                <h3 className={styles.modelName}>{model.name}</h3>
                <p className={styles.modelDesc}>{model.desc}</p>
                <div className={styles.modelTags}>
                  {model.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.modelTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.modelLink}>
                  查看模型 <span className={styles.modelArrow}>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PapersSection() {
  return (
    <section id="papers" className={styles.papersSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>精选论文</h2>
          <p className={styles.sectionDesc}>我们团队在 RAG 领域的代表性研究工作。</p>
        </div>
        <div className={styles.papersList}>
          {PapersList.map((paper, idx) => (
            <a
              key={idx}
              href={paper.href}
              target={paper.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={styles.paperCard}
            >
              <div className={styles.paperMeta}>
                <span className={styles.paperDate}>{paper.date}</span>
                <span className={styles.paperVenue}>{paper.venue}</span>
              </div>
              <h3 className={styles.paperTitle}>{paper.title}</h3>
              <p className={styles.paperAuthors}>{paper.authors}</p>
              <p className={styles.paperAbstract}>{paper.abstract}</p>
              <div className={styles.paperLinkText}>
                阅读更多 <span className={styles.paperArrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Research() {
  return (
    <Layout title="研究" description="UltraRAG Research - Models and Papers">
      <main>
        <ResearchHero />
        <ModelsSection />
        <PapersSection />
      </main>
    </Layout>
  );
}
