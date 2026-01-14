---
title: Python 学习笔记
date: 2025-01-14
category: 编程
tag:
  - Python
  - 编程语言
---

# Python 学习笔记

## 基础语法

### 变量和数据类型

Python 是一种动态类型语言，不需要显式声明变量类型。

```python
# 整数
x = 10

# 浮点数
y = 3.14

# 字符串
name = "Python"

# 布尔值
is_true = True
```

### 列表

列表是 Python 中最常用的数据结构之一。

```python
# 创建列表
fruits = ["apple", "banana", "orange"]

# 访问元素
print(fruits[0])  # 输出: apple

# 添加元素
fruits.append("grape")

# 列表推导式
squares = [x**2 for x in range(10)]
```

### 字典

字典用于存储键值对。

```python
# 创建字典
person = {
    "name": "Alice",
    "age": 30,
    "city": "Beijing"
}

# 访问值
print(person["name"])  # 输出: Alice

# 添加新键值对
person["email"] = "alice@example.com"
```

## 函数

### 定义函数

```python
def greet(name):
    """问候函数"""
    return f"Hello, {name}!"

# 调用函数
message = greet("World")
print(message)  # 输出: Hello, World!
```

### Lambda 函数

```python
# Lambda 函数
square = lambda x: x**2
print(square(5))  # 输出: 25
```

## 类与对象

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我是 {self.name}，今年 {self.age} 岁"

# 创建对象
person = Person("张三", 25)
print(person.introduce())
```
