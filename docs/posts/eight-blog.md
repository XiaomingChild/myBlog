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

# 页面记忆功能
当前容器如果有滚动属性的话，就可以通过给容器绑定ref来拿到上次scroll的值从而实现滚动记忆功能
```js
onActivated(() => {
  nextTick(() => {
      if (tableContainerRef.value) {
        tableContainerRef.value.scrollTop = savedScrollTop;
        console.log('恢复滚动位置:', savedScrollTop, '实际:', tableContainerRef.value.scrollTop);
      }
  });
});

onDeactivated(() => {
  // 保存表格滚动位置
  if (tableContainerRef.value) {
    savedScrollTop = tableContainerRef.value.scrollTop;
    console.log('onDeactivated - 保存滚动位置:', savedScrollTop);
  }
});
```
> 但是这种写法有限制，就是如果离开页面的时候tableContainerRef没有拿到正确的位置那就一直是0
>   所以可以给tableContainerRef.value添加一个监听器，来实时监听滚动的位置，离开的时候直接把这个值存起来就行
```js
onActivated(() => {
  nextTick(() => {
    const el = tableContainerRef.value;
    if (savedScrollTop > 0) el.scrollTop = savedScrollTop;
    el.addEventListener('scroll', onTableScroll);
  });
});

onDeactivated(() => {
  tableContainerRef.value?.removeEventListener('scroll', onTableScroll);
});
```

# js中通过十进制映射ascii表中字母的方法
直接用String.fromCharCode(value & 0xFF);
```js
// 将十进制数字 65 转为字母
const letter = String.fromCharCode(65);
console.log(letter); // 输出: "A"

// 也可以一次性传多个
const word = String.fromCharCode(72, 69, 76, 76, 79);
console.log(word); // 输出: "HELLO"

//逆向
const char = "a";
// 获取字母的十进制 ASCII 码
const dec = char.charCodeAt(0); 
console.log(dec); // 输出: 97
```
