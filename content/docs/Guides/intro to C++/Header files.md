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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3BOSDP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHgWx%2BO%2Bkn6v0lk6tronqJA%2FHBVwoEn9yq%2BdIsaoFYinAiAd5OEfNIdD7Qo6BOVMzY28mF%2BCNclD7zL8GvDxyblQuiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ISfD9wcEItS5g3ZKtwDGUjs4LCxYhRex%2FB33Rt3fvQTWGfRp7as%2FI2Yxw6FdZZ25KiOLyxjVF%2Bb%2BkTeiOai8wZFj%2BBdPrNcsJKqW9nd4%2FexYKh%2FKjDSMagQDmm47wUTSpfm9ECNCiiFFGaaPD9y%2B3zl6P3NO%2BW84nHmnwqnPdyAZRAQHnCid2HOJAlORy1%2FkgVYEft%2FZNCHBb%2BmxpBq5ZswzE%2FbgggvL0LIaYO6ynxyQwD6nHy8%2Fr1LkUhSqVCEvER9G2r0Idgh88gJytAn6m%2BUaSdsXUiBjLOGDiiiTJlSoBhsExn4%2F0JqMA4R5Qire9Q88E8xtrca9N3BfRPRA525yfsFrC%2Bz1um9BhvUN09MoEiqOP4qF4XZzLgbRIBLsene8hdRIidoT2I2piDbn%2BNEOlRhZUx%2BvM8%2FFHLRFsxdD9aULULiM4yJ6XOvN1pqTfJcZNF8AKNsqs5Zci4e0dmhP%2FiUUQF3kx9sFn1OwXFvehQlDaCVv0vP2HgX6ByPTAvXmvvJpZWAVL9wHV7mMkuqrdiCdT4oHUlbGTnVOC5loMeCtDVY0UnNLwEYyz4cSNOSA%2FDmx%2BIEQ%2BuY2UK8j0MXvJaElIMXEb5YIDR1Rdl1hSszNVeHYBPwO7KlpPUUDjStO8KeUphQseswtcfhwgY6pgH6pMeCkY7qZWn2rRIblnKF6OigVbE886vpbCsFnTimCnLcUCnTb0O63E%2BKKHtrHR2hTOR2neC%2BQGmhkybEv7IGFSYuvsq61cvCUEckjDQDKXtAW1anHS6tAkXPSZa4n1M3A%2FZ4c0R0mr0GSs3mNBUngfvBYbR2A9IiDCmcscey0xyTfYjgvxhTb66kbPDwuFvBkWM%2FLI32gUt6Xcg4JIQ6y7MywzO8&X-Amz-Signature=7811bb08946d3c42dfc2ca353a0bb27ad290af757be0f17ce2cdf2659be8117a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
