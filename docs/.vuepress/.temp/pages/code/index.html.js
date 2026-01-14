import comp from "D:/CS/blog/docs/.vuepress/.temp/pages/code/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/\",\"title\":\"代码笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码笔记\",\"date\":\"2025-01-14T00:00:00.000Z\",\"category\":\"编程\",\"tag\":[\"编程\",\"代码\",\"学习笔记\"]},\"readingTime\":{\"minutes\":0.31,\"words\":94},\"filePathRelative\":\"code/README.md\"}")
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
