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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH62V4K6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxFOC2Ota3RFnJ1BamVtj%2Byv%2Bksv7CtNFlh3ybDUiJUAiBohpU3qeh508uum1EETVq9tdZ8oKQpl4Ra7B%2FpeG80kir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsKxlPdTrWyGPRDveKtwD00UBZDWgs1qB7aKzF%2FuH4cuw54YRoAIDXBZd8umgMsS5SQLBg8EbyrIeSE9rgG44X7Xmeb9eSTYgsaAjxMdD4eq878Lp%2BYQajOuw7hgfJzPyzMaJWYDQeZ%2FI1hjGnSQ3ZkpZirsFuhHPYeJGWe4BpH5pDVU09hQ2ag5Xo9LSxspL2SiJuUeio2dNTxDzyoyJcF%2BuBERzDYOm3%2FlFYNkT42qjUt8dmfEZc34c98dOv%2FaLlOnPb6YcaM9wDaJ29fi8JPNRv4IFa939JAIH3kcSXbeKD%2F90d2r%2BKvY%2F0%2BaBfxMrgjBMyvKX%2F%2FsOlr8Nmb35fNEacKnejb%2BYdYQxTkomv5ikBErRy3GLVfe9qQQbBWinWw5n9mJ2Wg7wVIn0%2B5bf8K4sbxjuG0dV6zeLkk4KRwapcS5EmPNUqpibJ8gka%2Fsl9N4N6Osz8ta4pR9U2O59eF2bbD%2Bhf32nCI3RvyLBKo8xtRXqulR4hcdKLCiGYgXd7%2Bx9Q3wx9GFLveM8PxGMaav96jicEiqW4%2F3MlJdsFqcW%2BksAKw5MRxgG6Te2JVoQnsHes%2F1in7RWOOCiaWknyXvGuP7PD6vEMaSATlz3EkWY23f6rcVJXnTVzivLBTwWQDoqMR42vaIYcaYwz%2BTbwQY6pgG5hrcAMRH41PWobai3UvNmTfr9rr2xvDrTi9UitDQ6UB9j0WMxC%2Fo2oE0pblKCRptrdoGwKhbxsTby6NPMzGcT2e9%2BIbd%2FYp%2F4pbvsOj51znxAAAIDoeDKyh2R1nW0L5TmTysm%2FJ7zlrzB%2Fo9wRrbEWvXYjrwx2xL0ESV8uV0hbRRk5XX0yrs6VVhMJ%2FWIy3FQ%2BbqaOQJGw9mAF72iJzbm4yDSVBQb&X-Amz-Signature=48ba7f0eaea1139d915ad6b3613da76e9852e9037b0df6226a1612637a7722b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
