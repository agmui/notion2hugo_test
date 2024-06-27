---
sys:
  pageId: "3f546953-85ed-4407-9804-264bceaabb93"
  createdTime: "2024-06-25T02:32:00.000Z"
  lastEditedTime: "2024-06-27T14:59:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Templates.md"
title: "Templates"
date: "2024-06-27T14:59:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

```c++
template <typename T>
class Array {
public:
    Array(T arr);
}


int main(){
    Array<int> a(arr);
}
```
