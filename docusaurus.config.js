// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UltraRAG',
  tagline: 'The Modular and High-Precision RAG Framework',
  favicon: 'img/logo.svg',

  // 这里的 url 填你未来上线的网址
  url: 'https://ultrarag.github.io', 
  baseUrl: '/website/', // 如果你是用 GitHub Pages 且不是自定义域名，这里通常填 '/仓库名/'

  organizationName: 'xhd0728', // 你的 GitHub 用户名
  projectName: 'website', // 你的仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 禁用 docs 插件
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 强制深色模式，符合 vLLM 风格
      colorMode: {
        defaultMode: 'light', // 强制默认为亮色
        disableSwitch: true,  // 关掉切换开关（像vLLM一样保持风格统一）
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'UltraRAG',
        logo: {
          alt: 'UltraRAG Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Docs Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: '文档',
            items: [
              {
                title: '教程',
                items: [
                  { label: '主页', href: 'https://ultrarag.openbmb.cn/', target: '_blank' },
                  { label: '安装', href: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/installation', target: '_blank' },
                  { label: '运行基准实验', href: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/quick_start', target: '_blank' },
                  { label: '启动交互界面', href: 'https://ultrarag.openbmb.cn/pages/cn/ui/start', target: '_blank' },
                ]
              },
              {
                title: '最新动态',
                items: [
                  { label: '博客', to: '/blog' },             
                ]
              },
            ]
          },
          // Products Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: '项目',
            items: [
              {
                title: 'UltraRAG',
                items: [
                  { label: '试玩', to: '/daily-papers' },
                  { label: '数据集 & 语料库', href: 'https://modelscope.cn/datasets/UltraRAG/UltraRAG_Benchmark', target: '_blank' },
                ]
              },
              {
                title: '模型',
                items: [
                  { label: 'AgentCPM-Report', href: 'https://huggingface.co/openbmb/AgentCPM-Report', target: '_blank' },
                  { label: 'MiniCPM-Embedding-Light', href: 'https://huggingface.co/openbmb/MiniCPM-Embedding-Light', target: '_blank' },
                ]
              },
              {
                title: '研究',
                items: [
                  { label: '每日论文', to: '/daily-papers' },
                ]
              }
            ]
          },
          // Team Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: '团队',
            items: [
              {
                title: '关于我们',
                items: [
                  { label: '团队成员', to: '/team' },
                ]
              },
              {
                title: '联系',
                items: [
                  { label: '联系我们', to: '/contact' },
                  { label: '加入我们', href: 'https://nlp.csai.tsinghua.edu.cn/job/29', target: '_blank' }, // 示例占位
                ]
              }
            ]
          },
          // GitHub Star Button
          {
            type: 'custom-githubStar',
            position: 'left',
            repo: 'OpenBMB/UltraRAG',
            href: 'https://github.com/OpenBMB/UltraRAG',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} UltraRAG.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;