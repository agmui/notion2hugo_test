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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRM5ETBN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHujxr%2F8A%2Fj9wiqqsKbaF1ojOXU7hDopFfouIUnxchgIgdM9%2FDoD4zK9LJGtdG3Lzqb%2FsFzNpwWXBpLrn53vbejcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs21o1NPeBRD22FeircA4cRkJQB1aB9ao1o8N6S%2FA3c6bZuDlOuPU1ptWiGUwP2XYRbn34BGlvtMNF2Qc1TNrD9Yv%2BTuk79dN68uj3ot4wnLrlV20U3natPFGcMMYDN2gjqRovUmJ4iFdFYOpseMVK4jtgFW2NxPxdEiYotJ2qX04iOiWipHXGPrI9uW6aT3vC1jX2719QKIjcKqlDWTIHMkBtDuD5WubmZtoCMpI7YYTGGkRpuIxZAP%2F0F5TcallgzyyAIRsMTBonfhO79MhdOk0EM4Edkj0rTe1ERAZ8vml34QmOKNlY80k4BULjxUHlo2JHEGq0QTbm1gu5wIN3I8u7MlO8FjnWavnje73JeIwlRClFgod0o6Yboo5tZcR1N4P3cNZx0%2BTHTtqlWyliFIp1QpeyuK1tPjVKwBf6AXdAttSMypjJYYmIFwa7n8sfQ%2BvAWkBtB5Ikm%2BU1pUCmuvTxv5O55caVaVIuaTZVOg0YEiTVZebPIqwCixJbtehrNhz1IErayiAobnGYcYzAuPg4sjTxa855I5k62FBKb66CDfvAXWqWWg4Ibc8d7X%2BFsoMl2H9rSRKED7J7lpncWHo089vd%2FyC0ANgW1HHG%2FSU6UgjfZqZKwLKZeYO8o7%2B4ljLkTYrAaSM7GMNG%2BoMIGOqUBQuNmlji3SHtkUjpq1H%2B7NgctMZSnYeD842%2FUR4uuZDZVlUNft4trgMDdi%2F2djdAl9s%2BBelRn7iJXg%2FbyVetanjDtGT22b6EwA4V54NmD3%2F1c5cyK3c3yXw58a3lTHa2xBZ1H0PsxHo0vcnNth9BGVW%2B%2FGo%2FyfeRZqyF1QBjr%2BbaRTQ24Qb%2F5jsqHf0LnS%2BZ4EgyMs3gswfEpPDgvAsQ4thbRkvcQ&X-Amz-Signature=0ac501d12ac938b0886bad8ad22bcf5ba756440acd26f137119355f3838df479&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
