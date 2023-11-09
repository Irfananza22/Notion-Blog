const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Irfan Anza",
    image: "https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo5LCJub3NlIjo2LCJtb3V0aCI6MywiZXllcyI6MTAsImV5ZWJyb3dzIjowLCJnbGFzc2VzIjoyLCJoYWlyIjoyLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjEsImNvbG9yIjoiI2ZhZGIxNCIsInNoYXBlIjoiY2lyY2xlIn0=", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "dev",
    bio: "Iam student at Gunadarma.",
    email: "irfananza22@gmail.com",
    linkedin: "irfananza",
    github: "irfananza22",
    instagram: "irfan_afrillianza",
  },
  projects: [
    {
      name: `Irfan Anza`,
      href: "https://github.com/Irfananza22",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Irfan's Blog",
    description: "welcome to Irfan's-Blog!",
  },

  // CONFIG configration (required)
  link: "https://fan-jade-845.notion.site/a68646c139574114be1d2578188331c0?v=5562de4c66e74b188bff4c5c3f80f494&pvs=4",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
