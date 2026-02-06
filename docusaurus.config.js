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
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
      },
      en: {
        label: 'EN',
      },
    },
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
          src: 'img/_UltraRAG_logo.png',
        },
        items: [
          // ========== 中间区域菜单 (position: left，但会通过 CSS 居中) ==========
          {
            to: '/',
            label: '首页',
            position: 'left',
          },
          // Products Mega Menu（点击"研究"直接进入 /research）
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: '研究',
            to: '/research',
            items: [
              {
                title: '最新动态',
                items: [
                  { label: '博客', to: '/blog' },
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
                title: '论文',
                items: [
                  { label: '精选论文', to: '/research#papers' },
                ]
              },
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
                  { label: '联系', to: '/contact' },
                  { label: '加入我们', href: 'https://nlp.csai.tsinghua.edu.cn/job/29', target: '_blank' },
                ]
              }
            ]
          },
          // ========== 右侧区域 ==========
          // GitHub Star Button（放在语言切换左侧）
          {
            type: 'custom-githubStar',
            position: 'right',
            repo: 'OpenBMB/UltraRAG',
            href: 'https://github.com/OpenBMB/UltraRAG',
          },
          // 语言切换按钮（最右侧）
          {
            type: 'localeDropdown',
            position: 'right',
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