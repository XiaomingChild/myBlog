---
title: NodeJs自动化更新软件版本脚本
description: 忙碌的一天....
date: 2026-6-12 10:00
sticky: 5
tags:
  - 碎碎念
  - 忙碌
---

# 自动化文件
```js
// 打包前自动递增版本号脚本：小版本(patch)每满 10 进 1
const fs = require("fs");
const path = require("path");

// __dirname 是当前脚本所在目录，往上一级即项目根目录的 package.json
const pkgPath = path.resolve(__dirname, "../package.json");

// ① 读文件 → ② 转成 JS 对象，此时 pkg.version 即可作为变量操作
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// ③ 拆成 major.minor.patch 三段数字并自增 patch
//map(Number)是把字符串版本号转成数组，否则字符串无法进行后续的计算
let [major, minor, patch] = pkg.version.split(".").map(Number);
patch += 1;

// patch 满 10 进位：归 0 并让 minor 加 1（如 1.2.9 → 1.3.0）
if (patch >= 10) {
  patch = 0;
  minor += 1;
}
// minor 满 10 进位：归 0 并让 major 加 1（如 1.9.0 → 2.0.0）
if (minor >= 10) {
  minor = 0;
  major += 1;
}
pkg.version = `${major}.${minor}.${patch}`;

// ④ 写回文件覆盖原内容，保持 2 空格缩进并补一个换行
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(`版本号已升级为 ${pkg.version}`);

```

#修改打包命令在打包执行之前先执行脚本
```js
node scripts/bumpVersion.js &&
```
以及如果其他地方需要动态设置版本号可以直接通过app.getversion获取

