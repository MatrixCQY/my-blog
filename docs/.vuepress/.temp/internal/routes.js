export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/code/python.html", { loader: () => import(/* webpackChunkName: "code_python.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/code/python.html.js"), meta: {"title":"Python 学习笔记"} }],
  ["/code/", { loader: () => import(/* webpackChunkName: "code_index.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/code/index.html.js"), meta: {"title":"代码笔记"} }],
  ["/math/linear-algebra.html", { loader: () => import(/* webpackChunkName: "math_linear-algebra.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/math/linear-algebra.html.js"), meta: {"title":"线性代数基础"} }],
  ["/math/", { loader: () => import(/* webpackChunkName: "math_index.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/math/index.html.js"), meta: {"title":"数学笔记"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/CS/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
