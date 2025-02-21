// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grupo Scout #44",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo-gs44.png",

  url: "https://Lenugo.github.io",
  baseUrl: "/scout-44/",
  organizationName: "Lenugo",
  projectName: "scout-44",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [tailwindPlugin],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: ({
    image: "img/logo-gs44.png",
    metadata: [
      { name: 'keywords', content: 'scout, grupo scout, scouts, actividades al aire libre, desarrollo juvenil' },
      { name: 'description', content: 'Grupo Scout #44 - Una comunidad para el desarrollo juvenil a través de actividades al aire libre y el escultismo.' },
      { name: 'author', content: 'Grupo Scout #44' },
    ],
    navbar: {
      title: "Grupo Scout #44",
      logo: {
        alt: "Grupo Scout #44 logo",
        src: "img/logo-gs44.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "unidadesSidebar",
          position: "right",
          label: "Unidades",
        },
        { to: "/calendar", label: "Calendario", position: "right" },
        { to: "/library", label: "Biblioteca", position: "right" },
        { to: "/contact", label: "Únetenos", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `© ${new Date().getFullYear()} Grupo Scout #44™`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
