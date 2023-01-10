# 如何使用

## 新建顶部导航项

修改 `.vitepress/config.js` 中的 `nav()` 函数

```javascript
function nav() {
  return [
    { text: '推荐资源', link: '/recommend/tools' },
    { text: 'new-items', link: '/new-items/item1' }, // [!code focus]
    ...
  ];
}
```

在 docs 目录下新建文件

```shell
mkdir docs/new-items && touch docs/new-items/item1.md
```

修改文件内容

```markdown
# item1

这里开始添加内容
```

同一个目录下新建文件 `item2.md`

```shell
touch docs/new-items/item2.md
```

### 为 `new-items` 添加侧边导航

创建函数 `newItemsSidebar()`

```javascript
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
```

修改 `export default` 中的 `themeConfig.sidebar` 字段

```javascript
export default {
  ...
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/css/': cssSidebar(),
      '/vue/': vueSidebar(),
      '/recommend/': recommendSidebar(),
      '/new-items/': newItemsSidebar(),  // [!code focus]
    },
  },
};
```

## 创建嵌套的顶部导航项

参考 `前端` 导航项
