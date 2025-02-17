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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5LQX3Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICCkve9FWNOMp801PPA1GVpqgViUOJ0tvbviugMN9fZjAiBjRRljd%2FB87tMWB3HU9GzIOUFexuB7YvxfZ1m9YghIfCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMpguOxuggMhxDiSZbKtwDmwbeiIlbmNCePjHbUYhEJabaJUGgogdDlpu0QH3g1OrlrFCdyLcDXFQuwDjrt1Fc5han3kkxqeA2qHjRj2wddk9Zg0GYBvarlXWPyQtqTNrLqdhpxmuDCZZnDby4kCyqy%2BFOqMwPje%2BotYhwyTBuvEgv%2FrdKaE6PJohMXApbX%2BzaAvL%2FEdOWOydXJXLPh8l6AepyExVvsZ2YLKufbjDQqi1OG0DiuhSHwypveS12MHxL1WWqUBHpiQ0FFkSd0n5oSoyEM6KeCS1d2m64WmhiPqujsm3MmWEN0UWuLaGBuMduiZD%2B4XNheY4PWljYq7%2Bsfxx6zRHMB1rcr3cP21Z%2F3DkFxGsqkCDhdOVrvsLgRlDpOk%2BIZCFJG3IXXsatRcXirPfEo9suWNBCrB8jR5qHDphcg6k%2BSoS00C%2Fcd1TZJsrbPoNqGgpyS2QQNA0ckPU%2B%2BBRawKY%2ByCyAK5%2FQ7%2BMEGqWN9gnhh2kbdExrnFYX8cYnciG6Qy9Xs2x8BgZwSUIdV8QbURTQxvIsj%2Bubm%2FXNgjR8023m%2BmgkyiOkt5gsfXpXXNNNhwJDGgops%2B5qOM9EYo%2Ffz2Du0Ev1inAPSf4vywKMysTOJLzW9Gyj2vnybJrZAlyKnw35bIRRTXMwmenLvQY6pgFt1ioK1VyCfZsRDSz6O3h9WNBosI7BeBBoNEyswOoeZVmClof%2BNKPyQ8jzMK332zLgrmLkMXYFeeamKccPL1MeahYbXCpEebkp39V1VyQrLScdkX6DBSBlFfLObbZzninRCSTq4aM5Jb4REDXMIWPtHCsm0ybC1vv1CUkIejuuMY3cr477taBqMUhhOhFX9gIi1Px290Mw3BGsdpARLM1hh7o12gCB&X-Amz-Signature=c3d2d66716f702f6ab67f8d9e94f3444f7ac1cb06504767c8c529c7a559a5021&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
