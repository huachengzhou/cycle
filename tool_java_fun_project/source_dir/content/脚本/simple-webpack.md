---
title: "webpack simple"
date: 2021-06-17
draft: false
weight: 6
---

## webpack

### 一:卸载

+ 全局卸载

```shell
D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one>npm uninstall webpack webpack-cli -g
removed 73 packages in 0.726s
```

+ 本地卸载

```shell
D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one>npm uninstall webpack webpack-cli -D
npm WARN saveError ENOENT: no such file or directory, open 'D:\IdeaProjects\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'D:\IdeaProjects\package.json'
npm WARN IdeaProjects No description
npm WARN IdeaProjects No repository field.
npm WARN IdeaProjects No README data
npm WARN IdeaProjects No license field.

up to date in 0.791s

16 packages are looking for funding
  run `npm fund` for details
D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one>
```


### 二:安装

+ 1:webpack依赖node环境。
+ 2:node环境依赖众多包，所以需要npm，npm（node packages manager）node包管理工具
+ 3:nvm是node管理工具可以自由切换node环境版本

> 在终端执行webpack命令，使用的是全局安装(在某个地方看到)

+ 1: 全局安装webpack simple (低版本)


```shell
npm install webpack -g
//指定版本安装
npm install webpack@3.6.0 -g
```

+ 2: 全局安装webpack  (高版本)

```shell
npm install webpack webpack-cli -g
//或指定版本，类似这样：
npm install webpack@4.16.5  webpack-cli -g
```