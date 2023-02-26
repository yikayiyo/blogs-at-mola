# 跨域问题和 CORS

<figure style="margin-top: 10px; text-align: center;">
  <img src="../images/send-a-url.png" alt="">
  <figcaption>当你在浏览器中输入一个url...</figcaption>
</figure>

请求得到的页面中，可能嵌入了很多 CSS 文件，JavaScript 文件，图片或者 ifame。这些文件有的来自页面所在的服务器，有的来自其它服务器，它们之间可能会有一些互动。如果不对这些互动做些限制，假设其中一个文件被恶意攻击，那么这个文件就有可能暴露用户浏览器中的一切。

## 同源策略

<mark>浏览器</mark>的安全机制

<mark>同源</mark>指的是：协议（protocol）、主机名（host name）、端口（port）要一致

同源策略限制了一个源上的文档或者脚本同另一个源上资源的交互  

对于 `http://store.company.com/dir/page.html`，下面的表格列出了各种同源或跨源的情况

> 跨源和跨域说的是同一个东西

|  URL  |  是否同源  |  原因  |
|---|---|---|
|  `http://store.company.com/dir2/other.html`  |  是  |  只有路径不同  |
|  `http://store.company.com/dir/inner/another.html`  |  是  |  只有路径不同  |
|  `https://store.company.com/page.html`  |  不是  |  协议不同  |
|  `http://store.company.com:81/dir/page.html`  |  不是  |  端口不同  |
|  `http://news.company.com/dir/other.html`  |  不是  |  主机不同  |

对于跨源资源，一般情况下**可以嵌入**，**不可以读取**  

|  文件类型  |  说明  |
|---|---|
| script | 跨源脚本可以嵌入；某些请求会被阻止（比如跨源的 fetch 请求 |
| CSS | 跨源 CSS 可以使用 `<link>` 元素或 CSS 文件中的 `@import` 来嵌入，可能需要正确的 `Content-Type` 标头 |
| images | 嵌入跨源图像是允许的。但是，读取跨源图像数据（如使用 JavaScript 检索跨源图像的二进制数据）是被禁止的 |
| forms | 跨源 URL 可以作为表单元素 `action` 属性的值，网络应用程序可以将表单数据写入一个跨源地址 |
| multimedia | 跨源的音视频可以通过`<video>`,`<audio>`标签嵌入 |
| iframes | 跨源嵌入通常是允许的，但不允许跨源读取（如使用 JavaScript 访问 iframe 中的文档） |

如果某些资源希望可以被所有人访问呢？

## CORS

基于<mark> HTTP 标头（headers)</mark> 的机制

<mark>服务器端</mark>设置<mark>访问控制</mark>相关的 HTTP 标头信息，浏览器利用这些信息决定是否阻止前端 JavaScript 代码的跨域请求

### 简单请求

直接请求服务器，不需要发送预检请求（preflighted requests）

- 使用下面的请求方法之一：`GET`，`POST`，`HEAD`
- 允许人为设置的请求头：[`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)，[`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)，[`Content-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language)，[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type)，[`Range`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range)（只允许[简单的范围标头值](https://fetch.spec.whatwg.org/#simple-range-header-value) 如 `bytes=256-` 或 `bytes=127-255`）
  - `Content-Type` 仅支持 `text/plain` 、`multipart/form-data` 、`application/x-www-form-urlencoded`
- 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册事件监听器  
  - 对于任意请求实例 xhr 没有调用 `xhr.upload.addEventListener()`  
- 请求中没有使用 `ReadableStream` 对象

[样例](http://arunranga.com/examples/access-control/simpleXSInvocation.html)

### 预检请求

- 对于可能对服务器数据产生副作用的请求，必须首先通过 `OPTIONS` 方法发送一个预检请求，服务器根据预检请求决定是否允许真实请求  
- 预检请求中的特殊头字段（不需要手动设置  
	- `Access-Control-Request-Method` 告知服务器真实请求的请求方法  
	- `Access-Control-Request-Headers` 告知服务器真实请求携带的头字段  
- 预检请求的响应中的特殊头字段  
	- `Access-Control-Allow-Methods` 表示服务器允许的请求方法列表  
	- `Access-Control-Allow-Headers` 表示服务器允许的请求头字段

[样例](http://arunranga.com/examples/access-control/preflightInvocation.html)

## A Demo

[CORS DEMO](https://github.com/yikayiyo/cors)

- 前端应用默认运行在 `localhost:5173`，后端应用默认运行在 `localhost:3010`
- 后端设置 CORS 用到了中间件 `express-cors`，[文档](https://expressjs.com/en/resources/middleware/cors.html)
- 本地开发时除了设置 CORS，还可以为开发服务器设置代理中转 HTTP 请求，[文档](https://vitejs.dev/config/server-options.html#server-proxy)

## 参考

- [MDN - CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
- [MDN - Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [MDN - JS 操作 iframe 内部元素](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument)  
- [MDN - 允许图片和 canvas 跨源使用](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image)  
- [WebDev - Same-origin policy](https://web.dev/same-origin-policy/)  
- [WebDev - Same Origin Policy & Fetch requests](https://web.dev/codelab-same-origin-fetch/)  
- [WebDev - Same Origin Policy & iframe](https://web.dev/codelab-same-origin-iframe/)  