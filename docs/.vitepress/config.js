function nav() {
  return [
    { text: "如何使用", link: "/how-to-use" },
    { text: "推荐资源", link: "/recommend/tools" },
    {
      text: "前端",
      items: [
        { text: "Vue", link: "/vue/vue3-basic" },
        { text: "React", link: "/react/" },
        { text: "HTML", link: "/html/" },
        { text: "CSS", link: "/js/" },
        { text: "JavaScript", link: "/js/" },
        { text: "微信相关", link: "/wechat/" },
      ],
    }
  ];
}

function vueSidebar() {
  return [
    { 
      text: "入门", 
      items: [
        {
          text: "vue3基础",
          link: "/vue/vue3-basic",
        },
      ]
    }];
}

function recommendSidebar() {
  return [
    {
      text: "推荐资源",
      items: [
        {
          text: "工具",
          link: "/recommend/tools",
        },
        {
          text: "博客",
          link: "/recommend/blogs",
        },
        {
          text: "视频",
          link: "/recommend/videos",
        },
        {
          text: "书籍",
          link: "/recommend/books",
        },
      ],
    },
  ];
}

export default {
  title: "molaware blogs",
  description: "开心学习。",
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present molaware",
  },
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/vue/": vueSidebar(),
      "/recommend/": recommendSidebar(),
    },
  },
};
