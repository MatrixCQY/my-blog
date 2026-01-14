# 线性代数

## 向量

向量是具有大小和方向的量，通常用箭头表示。

### 向量的表示

在二维空间中，向量可以表示为：
$$\vec{v} = \begin{pmatrix} x \\ y \end{pmatrix}$$

在三维空间中：
$$\vec{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$$

### 向量的运算

**向量加法**：
$$\vec{u} + \vec{v} = \begin{pmatrix} u_1 + v_1 \\ u_2 + v_2 \end{pmatrix}$$

**标量乘法**：
$$c\vec{v} = \begin{pmatrix} cv_1 \\ cv_2 \end{pmatrix}$$

**点积（内积）**：
$$\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2$$

## 矩阵

矩阵是一个由数字排列成的矩形阵列。

### 矩阵的表示

一个 $m \times n$ 矩阵：
$$A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}$$

### 矩阵运算

**矩阵加法**：
$$(A + B)_{ij} = A_{ij} + B_{ij}$$

**矩阵乘法**：
$$(AB)_{ij} = \sum_{k} A_{ik} B_{kj}$$

**矩阵转置**：
$$(A^T)_{ij} = A_{ji}$$

## 行列式

对于 $2 \times 2$ 矩阵：
$$\det(A) = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

对于 $3 \times 3$ 矩阵：
$$\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)$$

## 特征值和特征向量

对于矩阵 $A$，如果存在非零向量 $\vec{v}$ 和标量 $\lambda$ 使得：
$$A\vec{v} = \lambda\vec{v}$$

则 $\lambda$ 是 $A$ 的特征值，$\vec{v}$ 是对应的特征向量。
