---
title: 线性代数基础
date: 2025-01-14
category: 数学
tag:
  - 线性代数
  - 数学
---

# 线性代数基础

## 向量

向量是线性代数中的基本概念。

### 向量的定义

一个 $n$ 维向量可以表示为：

$$
\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}
$$

### 向量的运算

#### 向量加法

两个向量的加法定义为对应分量相加：

$$
\mathbf{u} + \mathbf{v} = \begin{pmatrix} u_1 + v_1 \\ u_2 + v_2 \\ \vdots \\ u_n + v_n \end{pmatrix}
$$

#### 标量乘法

向量与标量的乘法定义为：

$$
c \mathbf{v} = \begin{pmatrix} c v_1 \\ c v_2 \\ \vdots \\ c v_n \end{pmatrix}
$$

## 矩阵

矩阵是线性代数中的另一个重要概念。

### 矩阵的定义

一个 $m \times n$ 矩阵可以表示为：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

## 示例

下面是一个简单的 Python 代码示例：

```python
import numpy as np

# 创建向量
v = np.array([1, 2, 3])
u = np.array([4, 5, 6])

# 向量加法
w = v + u
print(f"v + u = {w}")

# 标量乘法
c = 2
result = c * v
print(f"2 * v = {result}")
```
