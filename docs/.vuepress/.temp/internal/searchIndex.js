export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "欢迎",
        "slug": "欢迎",
        "link": "#欢迎",
        "children": []
      },
      {
        "level": 2,
        "title": "主要内容",
        "slug": "主要内容",
        "link": "#主要内容",
        "children": [
          {
            "level": 3,
            "title": "📐 数学笔记",
            "slug": "📐-数学笔记",
            "link": "#📐-数学笔记",
            "children": []
          },
          {
            "level": 3,
            "title": "💻 代码笔记",
            "slug": "💻-代码笔记",
            "link": "#💻-代码笔记",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "开始使用",
        "slug": "开始使用",
        "link": "#开始使用",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Python 学习笔记",
    "headers": [
      {
        "level": 2,
        "title": "基础语法",
        "slug": "基础语法",
        "link": "#基础语法",
        "children": [
          {
            "level": 3,
            "title": "变量和数据类型",
            "slug": "变量和数据类型",
            "link": "#变量和数据类型",
            "children": []
          },
          {
            "level": 3,
            "title": "列表",
            "slug": "列表",
            "link": "#列表",
            "children": []
          },
          {
            "level": 3,
            "title": "字典",
            "slug": "字典",
            "link": "#字典",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "函数",
        "slug": "函数",
        "link": "#函数",
        "children": [
          {
            "level": 3,
            "title": "定义函数",
            "slug": "定义函数",
            "link": "#定义函数",
            "children": []
          },
          {
            "level": 3,
            "title": "Lambda 函数",
            "slug": "lambda-函数",
            "link": "#lambda-函数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "类与对象",
        "slug": "类与对象",
        "link": "#类与对象",
        "children": []
      }
    ],
    "path": "/code/python.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "代码笔记",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      },
      {
        "level": 2,
        "title": "说明",
        "slug": "说明",
        "link": "#说明",
        "children": []
      }
    ],
    "path": "/code/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线性代数基础",
    "headers": [
      {
        "level": 2,
        "title": "向量",
        "slug": "向量",
        "link": "#向量",
        "children": [
          {
            "level": 3,
            "title": "向量的定义",
            "slug": "向量的定义",
            "link": "#向量的定义",
            "children": []
          },
          {
            "level": 3,
            "title": "向量的运算",
            "slug": "向量的运算",
            "link": "#向量的运算",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "矩阵",
        "slug": "矩阵",
        "link": "#矩阵",
        "children": [
          {
            "level": 3,
            "title": "矩阵的定义",
            "slug": "矩阵的定义",
            "link": "#矩阵的定义",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "示例",
        "slug": "示例",
        "link": "#示例",
        "children": []
      }
    ],
    "path": "/math/linear-algebra.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数学笔记",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      },
      {
        "level": 2,
        "title": "说明",
        "slug": "说明",
        "link": "#说明",
        "children": []
      }
    ],
    "path": "/math/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
