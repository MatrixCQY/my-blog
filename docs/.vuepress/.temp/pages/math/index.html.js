import comp from "D:/CS/blog/docs/.vuepress/.temp/pages/math/index.html.vue"
const data = JSON.parse("{\"path\":\"/math/\",\"title\":\"数学笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数学笔记\",\"date\":\"2025-01-14T00:00:00.000Z\",\"category\":\"数学\",\"tag\":[\"数学\",\"学习笔记\"]},\"readingTime\":{\"minutes\":0.3,\"words\":91},\"filePathRelative\":\"math/README.md\"}")
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
