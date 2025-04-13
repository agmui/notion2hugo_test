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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBASJUA4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBFGFLhOAYwGiIazK2%2B4leg9DJQqElO35Tu2cANPF2XpAiEArCRrq%2BVf%2BtQEau5%2FJzDerOGPsJi0INosJy9TttXyxKAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvl5TKBf5c%2Fix6TQCrcA0RpNBAtUiTO7FUkZkKhhqLAufa5JYMSyOsV9Z52kBcRwi8pDawH4ItegMKqPKopob1dKYt9QKnsrrUECc3UYwf1vYUcrgprw8D6RJKc0Q30Y4EC2dkDrOd3TR04GMuB0c0CoI5JmhinKXUbq3uFPD4uNoJ5GoY6OcMCVixbq64d8WoDDS1lfB9GQS8%2FlczgWqJyg2etB7Vi%2Fz6fJ%2FmMNhDXl7cYyw1HiBmr9m3CsnTExLJt2ulOV63nLRn3rzuqAhmdp1kgkQBMjJ%2FqOi7wrgYL2qv5BsPrVctHownsWBOZJcBzszj%2Bnww33ixPn%2FaajHG7Hy6knmiQJFo17xOZHvqtEdLUMZAu7Ypm6km9IWPv6KIOXRQ9LC6x2FPulMJ%2BZXP1kBW6bLC8zaaGmIsOM0iwa%2FbhDcKWnl8BaWPg0ifUvmDYVGLUnz3%2BNyHO8RMS1XCP%2Bw%2FJ9%2FKwj4olOp%2F%2F7XRgNtUPyalPkN1HmCzgWjQts%2BEBbgsQAuZFA87D6%2Bnarh%2FK1OOrHazeidaRvXPhSGsXXuaDEmY0I5evPGz8kS%2FZ58XR%2BvPo0lpqq5KZLba%2FxaGwUCtxj0ypvNLwyhbRyUoGIbG8TQuH4FF%2B12kv0zrvskTznStccpxfgtmtMKyJ778GOqUBTjJKTBptditdpngzbdre%2FqzM7sefqkY%2FX8Bv0byGM9KsQnaOdEULiuA5N6lOqztJY1xkuH21KO9nnvjyxwpX6De4FAHlXQ4BPN0gloO6gmsuqtU31AIlXCGYfMU6t5JIsHVGgSkFcvyTLmqKEl7cFKNf5nwUCadLGLfQQmyQWOCTVtwEbe3YHB%2B3tBdnkVfKdhEfq1DKAn%2BErWWntUn60GQnICBw&X-Amz-Signature=36a05791fee378bd2210f3d4372e12bb5d36cfac8538013f199a46773ecd3f07&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
