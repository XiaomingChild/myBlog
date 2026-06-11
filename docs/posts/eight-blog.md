---
title: 表格内容复制到剪切板
description: 忙碌的一天....
date: 2026-6-11 13:28
sticky: 4
tags:
  - 碎碎念
  - 忙碌
---

# 复制到剪切板功能
```js
// 复制参数名称
const copyParamName = (param) => {
  navigator.clipboard.writeText(param.name).then(() => {
    toast.value?.show({ message: "操作成功", type: 'success' });
  }).catch(() => {
    toast.value?.show({ message: '操作失败', type: 'error' });
  });
  closeCopyMenu();
};

// 复制整个变量数据
const copyParamData = (param) => {
  const data = [
    `名称: ${param.name}`,
    `描述: ${param.description || '-'}`,
    `当前值: ${param.currentValue ?? param.defaultValue ?? '-'}`,
    `单位: ${param.unit || '-'}`,
    `物理地址: ${param.ecuAddress}`,
    `默认值: ${param.defaultValue ?? '-'}`,
    `下限值: ${param.lowerLimit ?? '-'}`,
    `上限值: ${param.upperLimit ?? '-'}`,
    `精度: ${param.precision || '-'}`,
    `属性: ${param.access ? '可读写' : '只读'}`,
  ].join('\n');
  navigator.clipboard.writeText(data).then(() => {
    toast.value?.show({ message: '操作成功', type: 'success' });
  }).catch(() => {
    toast.value?.show({ message: '操作失败', type: 'error' });
  });
  closeCopyMenu();
};
```
