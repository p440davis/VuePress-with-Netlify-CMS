module.exports = {
  title: "VuePress template",
  description:
    "A JAMstack website template for Netlify with the base VuePress theme and Netlify CMS config.",
  theme: "base",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "GitHub",
        link: "https://github.com/p440davis/VuePress-with-Netlify-CMS",
      },
    ],
    sidebar: ["/_pages/guide"],
  },
};
