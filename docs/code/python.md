# Python 基础

## 基本语法

### 变量和数据类型

```python
# 整数
x = 10

# 浮点数
y = 3.14

# 字符串
name = "Python"

# 布尔值
is_true = True
is_false = False

# 列表
numbers = [1, 2, 3, 4, 5]

# 字典
person = {
    "name": "Alice",
    "age": 30
}
```

### 控制流

**条件语句**：
```python
if x > 0:
    print("正数")
elif x < 0:
    print("负数")
else:
    print("零")
```

**循环**：
```python
# for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

### 定义函数

```python
def greet(name):
    return f"Hello, {name}!"

# 调用函数
message = greet("World")
print(message)  # 输出: Hello, World!
```

### 函数参数

```python
# 默认参数
def power(x, n=2):
    return x ** n

# 关键字参数
result = power(3, n=3)  # 27

# 可变参数
def sum_all(*args):
    return sum(args)

total = sum_all(1, 2, 3, 4)  # 10
```

## 面向对象编程

### 类和对象

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我是{self.name}，今年{self.age}岁"

# 创建对象
person = Person("Alice", 30)
print(person.introduce())
```

## 常用库

### NumPy（数值计算）

```python
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])

# 数组运算
result = arr * 2  # [2, 4, 6, 8, 10]
```

### Pandas（数据处理）

```python
import pandas as pd

# 创建 DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})

# 查看数据
print(df.head())
```

## 文件操作

```python
# 读取文件
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 写入文件
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, World!")
```
