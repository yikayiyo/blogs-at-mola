# Vue 项目引入 Eslint + Prettier

管理后台的代码仓库目前没有开启语法检查，存在一些错误。并且项目由多人开发，不同风格的代码（缩进到底是用2个空格还是用4个空格还是用Tab呢？）掺杂在一起，给项目维护增加了没必要的难度。

本文记录了对项目代码进行语法错误修正的过程，以及制定团队开发规范时推荐使用的插件和配置。
## 命令行

### 安装依赖

```shell
npm i -D eslint eslint-plugin-vue prettier eslint-config-prettier
```

### 创建、编辑配置文件

```shell
touch .eslintrc.js .prettierrc.js
```

下面为样例配置

```javascript
// .eslintrc.js example
module.exports = {
  extends: ['plugin:vue/recommended', 'prettier'],
}

// prettier example
module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  singleAttributePerLine: true,
}
```

### 创建命令

修改 `package.json`

```json
{
  "scripts": {
    ...
    "lint": "eslint --ext .js,.vue src",  // [!code warning]
    "lint:fix": "eslint --fix --ext .js,.vue src", // [!code warning]
    "format": "prettier --write src" // [!code warning]
  }
}
```

其中 `lint` 用来检查语法错误，`lint:fix` 用来自动修复可以修复的错误，`format` 用来格式化代码

### 执行命令

```shell
npm run lint
```

得到下面的结果

<figure>
  <img src="../images/nr-lint.png" alt="">
  <figcaption>😱</figcaption>
</figure>

自动修复部分错误

```shell
npm run lint:fix
```

<figure>
  <img src="../images/nr-lint-fix.png" alt="">
  <figcaption>🥲</figcaption>
</figure>

需要手动修复的一些错误

<figure style="border:1px solid #292d3e; margin-bottom: 10px;"> 
  <img src="../images/lint-error-1.png" alt="">
  <figcaption style="text-align: center;"><em>p标签绑定v-model</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-2.png" alt="">
  <figcaption style="text-align: center;"><em>同时使用 v-for 和 v-if</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-3.png" alt="">
  <figcaption style="text-align: center;"><em>合并代码时遗留的多余标签？</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-7.png" alt="">
  <figcaption style="text-align: center;"><em>又一个多余的标签</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-4.png" alt="">
  <figcaption style="text-align: center;"><em>冗余属性</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-5.png" alt="">
  <figcaption style="text-align: center;"><em>定义但没使用的字段</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-6.png" alt="">
  <figcaption style="text-align: center;"><em>重复字段</em></figcaption>
</figure>

<figure style="border:1px solid #292d3e; margin-bottom: 10px;">
  <img src="../images/lint-error-8.png" alt="">
  <figcaption style="text-align: center;"><em>属性未定义类型</em></figcaption>
</figure>

上面的方式适用于处理项目中的旧代码

对于新开发的代码，借助插件可以得到更好的体验

## VSCODE 插件

借助 [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 和 [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 在开发时就能完成代码的语法检查和格式化

将 [prettier](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 设置为代码格式化工具，取消 [eslint](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 的代码格式化功能

插件配置

```json
{
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact", "vue"]
}
```

保存代码时自动进行语法检查、修复和格式化
