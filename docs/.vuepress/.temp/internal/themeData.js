export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/logo.png\",\"footer\":\"Copyright © 2025\",\"displayFooter\":true,\"darkmode\":\"toggle\",\"author\":{\"name\":\"作者\"},\"breadcrumb\":true,\"pageInfo\":[\"Author\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routerLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"home\"},{\"text\":\"数学笔记\",\"link\":\"/math/\",\"icon\":\"function\"},{\"text\":\"代码笔记\",\"link\":\"/code/\",\"icon\":\"code\"}],\"sidebar\":{\"/math/\":\"structure\",\"/code/\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
