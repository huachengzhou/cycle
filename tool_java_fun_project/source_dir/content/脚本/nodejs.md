---
title: "node js "
date: 2021-06-17
draft: false
weight: 1
---

# node js


> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时

### Linux 上安装 Node.js
+ 直接使用已编译好的包
+ Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：


```shell
# wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz    // 下载
# tar xf  node-v10.9.0-linux-x64.tar.xz       // 解压
# cd node-v10.9.0-linux-x64/                  // 进入解压目录
# ./bin/node -v                               // 执行node命令 查看版本
v10.9.0
```

+ 解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：

```shell
ln -s /usr/software/nodejs/bin/npm   /usr/local/bin/ 
ln -s /usr/software/nodejs/bin/node   /usr/local/bin/
```

+ Ubuntu 源码安装 Node.js

> 以下部分我们将介绍在 Ubuntu Linux 下使用源码安装 Node.js 。 其他的 Linux 系统，如 Centos 等类似如下安装步骤。

+ 在 Github 上获取 Node.js 源码：

```sheel
$ sudo git clone https://github.com/nodejs/node.git
Cloning into 'node'...
```

+ 修改目录权限：

```shell
$ sudo chmod -R 755 node
```

+ 使用 ./configure 创建编译文件，并按照：

```shell
$ cd node
$ sudo ./configure
$ sudo make
$ sudo make install
```

查看 node 版本：

```shell
$ node --version
v0.10.25
```

+ Ubuntu apt-get命令安装
+ 命令格式如下：

```shell
sudo apt-get install nodejs
sudo apt-get install npm

```

+ CentOS 下源码安装 Node.js
> 1、下载源码，你需要在https://nodejs.org/en/download/下载最新的Nodejs版本，本文以v0.10.24为例:

```shell
cd /usr/local/src/
wget http://nodejs.org/dist/v0.10.24/node-v0.10.24.tar.gz

```

> 2、解压源码

```shell
tar zxvf node-v0.10.24.tar.gz
```

> 3、 编译安装

```shell
cd node-v0.10.24
./configure --prefix=/usr/local/node/0.10.24
make
make install
```

> 4、 配置NODE_HOME，进入profile编辑环境变量

```shell
vim /etc/profile
```

+ 设置 nodejs 环境变量，在 export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL 一行的上面添加如下内容:

```shell
#set for nodejs
export NODE_HOME=/usr/local/node/0.10.24
export PATH=$NODE_HOME/bin:$PATH
```

+ :wq保存并退出，编译/etc/profile 使配置生效

```shell
source /etc/profile
```

+ 验证是否安装配置成功

```shell
node -v
输出 v0.10.24 表示配置成功
```


+ npm模块安装路径

```shell
/usr/local/node/0.10.24/lib/node_modules/

```


