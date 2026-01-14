import comp from "D:/CS/blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"学习笔记\",\"tagline\":\"记录数学和代码学习过程中的点点滴滴\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/math/\",\"type\":\"primary\"},{\"text\":\"代码笔记\",\"link\":\"/code/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"📐 数学笔记\",\"details\":\"记录数学学习过程中的重要概念、公式和解题思路\"},{\"title\":\"💻 代码笔记\",\"details\":\"记录编程学习过程中的知识点、代码示例和最佳实践\"},{\"title\":\"🔍 全文搜索\",\"details\":\"支持全文搜索，快速找到需要的内容\"},{\"title\":\"🌙 暗色模式\",\"details\":\"支持暗色模式，保护眼睛，适合夜间阅读\"}],\"footer\":\"Copyright © 2025 | 使用 VuePress Theme Hope 构建\"},\"readingTime\":{\"minutes\":1,\"words\":299},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
