import comp from "D:/CS/blog/docs/.vuepress/.temp/pages/code/python.html.vue"
const data = JSON.parse("{\"path\":\"/code/python.html\",\"title\":\"Python 学习笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python 学习笔记\",\"date\":\"2025-01-14T00:00:00.000Z\",\"category\":\"编程\",\"tag\":[\"Python\",\"编程语言\"]},\"readingTime\":{\"minutes\":0.87,\"words\":260},\"filePathRelative\":\"code/python.md\"}")
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
