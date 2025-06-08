---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URWRQ2C2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZQMDMwvzKquib3INDRtDLETLVGGMZs8vjNBeRwWsBdAiAIY14149OI6vUdVVfbUcs5bIho2qoN6HlOwCFM0eZXIyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wL0EL0M6W5WAEPCKtwDeEEb9smPcp95ZFP4ljKBURf75mjLopErIeWue3mh3i4LamgO%2FBbakTG6fJB1qK%2BEZnb5jXPaeH2ZPY90gkCNYLu9AZUlkFdgPW4sTc7aKIhzRtLJtTKUsd9UoEbkLnT7PGRsRuL6j%2BoFpNKIfGyrSb9dN%2FVbkMecNvpAXIwnFPG1HzlXDgKFGnLQHxW5qSdjyss5NzX%2F2iiU5uuDf4zCWxeqWnCAjB76RyONGI3Y4QAJQQpN8A5j%2BCmpgrtgUjx2c2uxpsB1LDDBRc1EDN21h8qxQ1fyUOXyvnFvzTRcF5t4uWD9apD%2FJL2GyZS2l7sCJNOxnz%2BiyLqZEbZ68LNEWbRn0bqzVk7DLEE6e%2BdkiouFGEpdsmOQLjTjD30HtMuG2y%2B20iORxmK1bkGnDeEI%2Fls8SxV6q1U5VaKqLhFSdJR0hpPYxHEqVoKHYf2SHDPK%2B1W9%2BO%2BzkjD%2BfGSfCY%2BTFH2LZfEgc10geZVOvq8x7aDFXvPqsVN76sYOAoi8lxrDlQneX12QF3SNjg2Ia5Wc8mQa9taPx5o7hBWrFcUN17IxCdvJTLsI%2FmhO55THNZo6JU1ELi7cfbqvc9nInGaRXnx6hDP9X5nRqK3GLe8ZsAA7Bd06PCadJpBPGNQwjvOUwgY6pgGGzUu%2F9v5thVVX99XkvXKyRuBqKep%2F%2Fekuq2vIMCCGsAi8vN6iemlGcu%2FTiwoOdL4dESSpXaGWZOiDb%2FbyqkFHr9aIZMANw67ADjJiluY3ktrgRQz%2BVVYB189IVqHqjVns1CvHhEWVcyu6F1qINuCSwVGONH%2FGXboiKeoZt7IglTIf2%2B4mIoWiSQNM9IymtK0ME4zHtN1mLw1PDZw1owr99k4QSWbi&X-Amz-Signature=8cfc5fc815ba76b287ca1983ba2413a7bbce7195e96ba634c6c03b1e12e2724c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
