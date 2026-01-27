// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UltraRAG',
  tagline: 'The Modular and High-Precision RAG Framework',
  favicon: 'img/favicon.ico',

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
        docs: {
          sidebarPath: './sidebars.js',
        },
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
          // --- 1. Tutorials (改成跳转外部网站) ---
          {
            label: 'Tutorial',
            href: 'https://ultrarag.openbmb.cn/', // 您的独立网站地址
            position: 'right',
            target: '_blank', // 强制新窗口打开
          },
          // 2. 博客 (靠右)
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            label: 'Model',
            href: 'https://huggingface.co/openbmb/AgentCPM-Report', // 您的独立网站地址
            position: 'right',
            target: '_blank', // 强制新窗口打开
          },
          {
            label: 'Dataset',
            href: 'https://modelscope.cn/datasets/UltraRAG/UltraRAG_Benchmark', // 您的独立网站地址
            position: 'right',
            target: '_blank', // 强制新窗口打开
          },
          // 3. 团队 (靠右)
          {to: '/team', label: 'Team', position: 'right'},
          // 4. 联系 (靠右)
          {to: '#contact', label: 'Contact', position: 'right'},
          
          // 5. GitHub 图标 (靠右，最后面)
          {
            href: 'https://github.com/OpenBMB/UltraRAG',
            position: 'right',
            className: 'header-github-link', // 样式钩子
            'aria-label': 'GitHub repository',
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