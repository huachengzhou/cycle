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

+ 3:本地安装 ?
```shell
npm install webpack webpack-cli --save-dev
//或者
npm install webpack webpack-cli -D
//或者指定版本
npm install webpack@4.16.5 webpack-cli -D
```

### 三:使用

+ 1:简单使用

+ 1、初始化

```shell
D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help init` for definitive documentation on these fields
and exactly what they do.
Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
package name: (one)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one\package.json:
{
  "name": "one",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Is this OK? (yes) yes
D:\IdeaProjects\cycle\docs\webc\web\webpack-study\one>

包初始化之后 就会生成package.json
```

#### dependencies和devDependencies的区别

+ devDependencies：开发环境使用
+ dependencies：生产环境使用

> 举例说明

```shell
webpack，gulp等打包工具，这些都是我们开发阶段使用的，代码提交线上时，不需要这些工具，所以我们将它放入devDependencies即可，但是像jquery这类插件库，是我们生产环境所使用的，所以如要放入dependencies，如果未将jquery安装到dependencies，那么项目就可能报错，无法运行，所以类似这种项目必须依赖的插件库，我们则必须打入dependencies中，这下子都明白了吧。
```


#### 最简单版本 (webpack使用高版本5.42.0)

+ 生成必要的文件

```shell
Microsoft Windows [版本 10.0.19043.1052]
(c) Microsoft Corporation。保留所有权利。

D:\IdeaProjects\cycle\study\webpack>mkdir demo01  创建文件夹

D:\IdeaProjects\cycle\study\webpack>cd demo01 进入文件夹

D:\IdeaProjects\cycle\study\webpack\demo01>npm install -g webpack webpack-cli 安装全局webpack
D:\CS\node\node-v14.17.2-win-x64\webpack -> D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\bin\webpack.js
D:\CS\node\node-v14.17.2-win-x64\webpack-cli -> D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack-cli\bin\cli.js
+ webpack@5.42.0
+ webpack-cli@4.7.2
updated 2 packages in 4.11s

D:\IdeaProjects\cycle\study\webpack\demo01>echo index.js   windows错误创建文件  必须 echo > file.suffix
index.js

D:\IdeaProjects\cycle\study\webpack\demo01>echo > index.js  windows正确创建方法

D:\IdeaProjects\cycle\study\webpack\demo01>webpack index.js   webpack打包编译(实际上这是低版本至少是低于4.0.0的目前我安装的是非常高的版本)
assets by status 0 bytes [cached] 1 asset

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in main
Module not found: Error: Can't resolve 'index.js' in 'D:\IdeaProjects\cycle\study\webpack\demo01'
Did you mean './index.js'?
Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (node_modules).
If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
resolve 'index.js' in 'D:\IdeaProjects\cycle\study\webpack\demo01'
  Parsed request is a module
  No description file found in D:\IdeaProjects\cycle\study\webpack\demo01 or above
  resolve as module
    D:\IdeaProjects\cycle\study\webpack\demo01\node_modules doesn't exist or is not a directory
    D:\IdeaProjects\cycle\study\webpack\node_modules doesn't exist or is not a directory
    D:\IdeaProjects\cycle\study\node_modules doesn't exist or is not a directory
    D:\IdeaProjects\cycle\node_modules doesn't exist or is not a directory
    D:\IdeaProjects\node_modules doesn't exist or is not a directory
    D:\node_modules doesn't exist or is not a directory

webpack 5.42.0 compiled with 1 error and 1 warning in 147 ms
```

+ 高版本采用低版本显然的报错了

+ 找解决办法 网上找到解决方案是必须要配置开发模式还是生产模式,要求指定

+ 生成 package.json 并设置相应内容 这里 package.json 不要手动设置  直接node js 的包初始化命令即可生成 npm init

```shell
D:\IdeaProjects\cycle\study\webpack\demo01>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (demo01)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\IdeaProjects\cycle\study\webpack\demo01\package.json:

{
  "name": "demo01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
// end   设置内容
{
  "name": "demo01",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ,
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC"
}

```

+ 完毕再次执行 webpack index.js  不要意思又报错了

```shell
D:\IdeaProjects\cycle\study\webpack\demo01>webpack index.js
[Browserslist] Could not parse D:\IdeaProjects\cycle\study\webpack\demo01\package.json. Ignoring it.
[webpack-cli] SyntaxError: Unexpected token / in JSON at position 204
while determining default 'output.uniqueName' from 'name' in D:\IdeaProjects\cycle\study\webpack\demo01\package.json
    at JSON.parse (<anonymous>)
    at D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\config\defaults.js:599:29
    at F (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\config\defaults.js:71:15)
    at applyOutputDefaults (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\config\defaults.js:594:2)
    at applyWebpackOptionsDefaults (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\config\defaults.js:182:2)
    at createCompiler (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\webpack.js:78:2)
    at create (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\webpack.js:127:16)
    at webpack (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\webpack.js:135:47)
    at WebpackCLI.f [as webpack] (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack\lib\index.js:55:16)
    at WebpackCLI.createCompiler (D:\CS\node\node-v14.17.2-win-x64\node_modules\webpack-cli\lib\webpack-cli.js:2053:29)
```

+ 实际上是高版本的情况下是必须要配置webpack.config.js

+ 因此我们来配置webpack.config.js

```shell
D:\IdeaProjects\cycle\study\webpack\demo01>echo > webpack.config.js
webconfig.js 内容
const path = require('path')
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    mode: 'development' // 设置mode
}
```

+ 执行打包编译  这里需要注意的是高版本不允许 webpack index.js 的方式了  直接是webpack 执行后自动找此命令下的配置然后输出编译文件

```shell
D:\IdeaProjects\cycle\study\webpack\demo01>webpack
asset my-first-webpack.bundle.js 1.19 KiB [emitted] (name: main)
./main.js 40 bytes [built] [code generated]
webpack 5.42.0 compiled successfully in 69 ms
```

+ Java生成目录结构

```Java
 @Test
    public void printFileDir() {
        String path = "D:\\IdeaProjects\\cycle\\study\\webpack\\demo01";
//        String path = "D:\\IdeaProjects\\lifeDoc\\book\\public";
        File file = new File(path);
        print(file, 0, file.getParent());
    }

    private void print(File file, int index, final String parent) {
        StringBuilder stringBuilder = new StringBuilder();
        String str = "▸";
        if (file.isFile()) {
            stringBuilder.append(str).append(StringUtils.repeat(" ", index)).append(StringUtils.remove(file.getPath(), parent));
            System.out.println(stringBuilder.toString());
        } else {
            stringBuilder.append(str).append(StringUtils.repeat(" ", index)).append(StringUtils.remove(file.getPath(),parent));
            System.out.println(stringBuilder.toString());
            for (File f : file.listFiles()) {
                int newIndex = index + 2;
                print(f, newIndex, parent);
            }
        }
    }
```

+ 文件结构

```shell
▸\demo01
▸  \demo01\dist
▸    \demo01\dist\my-first-webpack.bundle.js
▸  \demo01\index.js
▸  \demo01\package.json
▸  \demo01\webpack.config.js
```




