# 无障碍开发笔记

## 使用正确的 HTML 元素

在开发过程中用正确的 HTML 标签表达意图，可以提升网页的无障碍。

例如，一个用来控制视频播放的按钮可以写成下面的形式

```html
<div>Play video</div>
```

也可以写成下面**更合理**的形式

```html
<button>Play video</button>
```

之所以合理，是因为 `<button>` 标签不仅提供了按钮的样式，还提供了键盘的无障碍访问。例如，使用 Tab 更换按钮，使用 Enter 点击按钮。

::: tip
`<button>` 默认提供的样式大多数情况下需要重新编写:rofl:
:::

### 文本内容

文本内容放在良好的结构中，避免使用表现性 HTML 和换行符。

✅Good

```html
<h1>My heading</h1>
<p>This is the first section of my document.</p>
<p>I'll add another paragraph here too.</p>
<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>
<h2>My subheading</h2>
<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>
<h2>My 2nd subheading</h2>
<p>
  This is the second subsection of my content. I think is more interesting than
  the last one.
</p>
```

❌Bad

```html
<font size="7">My heading</font> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<font size="5">My subheading</font>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<font size="5">My 2nd subheading</font>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

### 页面布局

使用合适的标签包裹页面主要元素，可以给屏幕阅读器额外的信息。

✅Good

```html
<header>
  <h1>Header</h1>
</header>
<nav>
  <!-- main navigation in here -->
</nav>
<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>
    <!-- article content in here -->
  </article>
  <aside>
    <h2>Related</h2>
    <!-- aside content in here -->
  </aside>
</main>
<!-- And here is our main footer that is used across all the pages of our website -->
<footer>
  <!-- footer content in here -->
</footer>
```

### UI 控制

有意义的文本。

确保按钮和链接的文本是可以理解和独特的。

✅Good

```html
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

❌Bad

```html
<p>
  Whales are really awesome creatures. To find more out about whales,
  <a href="whales.html">click here</a>.
</p>
```

表单

✅Good

```html
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

❌Bad

```html
Fill in your name: <input type="text" id="name" name="name" />
```

### 文本替代

对于多媒体内容，例如图片、音视频元素，可以提供描述文本。

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
/>

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur"
/>

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

- 第一张图片没有提供文字描述
- 第二张图片的 `alt` 属性会被屏幕阅读器读到
- 第三张图片提供了额外的 `title` 属性
- 第四张图片没有提供 `alt` 属性，但是通过 `aria-labelledby` 属性将页面中已经存在的文本作为图片描述

::: tip
使用 CSS 来显示只起装饰作用的图像
:::

## CSS 和 JavaScript 无障碍最佳实践

## ARIA 标签

## 移动端无障碍

## 多媒体无障碍

## 参考

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility)
- [Accessible design](https://m3.material.io/foundations/accessible-design/overview)
- [BBC Accessibility for Products](https://www.bbc.co.uk/accessibility/forproducts/)
- [Digital Accessibility](https://accessibility.huit.harvard.edu/)
- [Vue.js 无障碍访问](https://cn.vuejs.org/guide/best-practices/accessibility.html#standards)
