function nav() {
  return [
    { text: '推荐资源', link: '/recommend/tools' },
    { text: 'new-items', link: '/new-items/item1' },
    {
      text: '前端',
      items: [
        { text: 'Vue', link: '/vue/index' },
        { text: 'React', link: '/react/index' },
        { text: 'HTML', link: '/html/index' },
        { text: 'CSS', link: '/css/index' },
        { text: 'JavaScript', link: '/js/index' },
        { text: '微信相关', link: '/wechat/index' },
        { text: '其它', link: '/others/cors' },
      ],
    },
  ];
}

function vueSidebar() {
  return [
    {
      text: '入门',
      items: [
        {
          text: 'vue3基础',
          link: '/vue/vue3-basic',
        },
      ],
    },
    {
      text: '踩坑',
      items: [
        {
          text: 'vue踩坑记录1',
          link: '/vue/vue-001',
        },
        {
          text: 'vue响应性原理',
          link: '/vue/vue-reactivity',
        },
      ],
    },
  ];
}

function cssSidebar() {
  return [
    {
      text: '常见属性',
      items: [
        { text: 'CSS-001', link: '/css/css-001' },
        { text: 'CSS-002', link: '/css/css-002' },
      ],
    },
    {
      text: '稀有属性',
      items: [
        { text: 'CSS-003', link: '/css/css-003' },
        { text: 'CSS-004', link: '/css/css-004' },
      ],
    },
  ];
}

function recommendSidebar() {
  return [
    {
      text: '推荐资源',
      items: [
        {
          text: '工具',
          link: '/recommend/tools',
        },
        {
          text: '博客',
          link: '/recommend/blogs',
        },
        {
          text: '视频',
          link: '/recommend/videos',
        },
        {
          text: '书籍',
          link: '/recommend/books',
        },
      ],
    },
  ];
}

function othersSidebar() {
  return [
    {
      text: '',
      items: [
        {
          text: '跨域和CORS',
          link: '/others/cors',
        },
        {
          text: 'Eslint + Prettier',
          link: '/others/eslint-prettier',
        },
      ],
    }
  ];
}

function newItemsSidebar() {
  return [
    {
      text: 'text可以为空',
      items: [
        {
          text: 'ITEM1',
          link: '/new-items/item1',
        },
        {
          text: 'ITEM2',
          link: '/new-items/item2',
        },
      ],
    },
  ];
}

export default {
  lang: 'en-US',
  title: 'Molaware Blogs',
  description: '开心学习。',
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-present Molaware',
  },
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/css/': cssSidebar(),
      '/vue/': vueSidebar(),
      '/recommend/': recommendSidebar(),
      '/others/': othersSidebar(),
      '/new-items/': newItemsSidebar(),
    },
  },
};
