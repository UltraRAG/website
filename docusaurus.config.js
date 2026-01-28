// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UltraRAG',
  tagline: 'The Modular and High-Precision RAG Framework',
  favicon: 'img/logo.png',

  // 这里的 url 填你未来上线的网址
  url: 'https://your-github-username.github.io', 
  baseUrl: '/ultrarag/', // 如果你是用 GitHub Pages 且不是自定义域名，这里通常填 '/仓库名/'

  organizationName: 'your-github-username', // 你的 GitHub 用户名
  projectName: 'ultrarag', // 你的仓库名

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
          src: 'img/logo.png',
        },
        items: [
          // Docs Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Docs',
            items: [
              {
                title: 'Getting Started',
                items: [
                  { label: 'Tutorial', href: 'https://ultrarag.openbmb.cn/', target: '_blank' },
                  { label: 'Quick Start', href: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/quick_start', target: '_blank' },
                ]
              },
              {
                title: 'Resources',
                items: [
                  { label: 'Blog', to: '/blog' },
                  { label: 'Installation', href: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/installation', target: '_blank' },
                ]
              }
            ]
          },
          // Products Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Products',
            items: [
              {
                title: 'Core',
                items: [
                  { label: 'Daily Paper', to: '/daily-papers' },
                  { label: 'Model', href: 'https://huggingface.co/openbmb/AgentCPM-Report', target: '_blank' },
                ]
              },
              {
                title: 'Data',
                items: [
                  { label: 'Dataset', href: 'https://modelscope.cn/datasets/UltraRAG/UltraRAG_Benchmark', target: '_blank' },
                  { label: 'Benchmarks', href: '#', target: '_blank' }, // 示例占位
                ]
              }
            ]
          },
          // Team Mega Menu
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Team',
            items: [
              {
                title: 'About Us',
                items: [
                  { label: 'Meet the Team', to: '/team' },
                ]
              },
              {
                title: 'Connect',
                items: [
                  { label: 'Contact Us', to: '/contact' },
                  { label: 'Join Us', href: 'https://nlp.csai.tsinghua.edu.cn/job/29', target: '_blank' }, // 示例占位
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
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Installation', to: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/installation' },
              { label: 'Quick Start', to: 'https://ultrarag.openbmb.cn/pages/cn/getting_started/quick_start' },              
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: '#' },
              { label: 'Twitter', href: '#' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UltraRAG Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;