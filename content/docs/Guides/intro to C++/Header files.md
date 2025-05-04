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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBVDZYG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCZk9zq8nn2cuF9mj5MR9JmkI5ma%2BsZNnq0%2BTzazApEggIgYuJOYNo7u%2BJYGVTiysLKatdBquKiJ6X1vzQppCPs6GMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmYzazH3kg%2FdphjQircA9LHq0HKL7mALSJDWoxdKb6pRvqg%2F3Xvms2dMYiMZmEhw0ZtANDaCe9mTcrj4roISnIrh7QT1lVv9ncAzGBT2MvgKWRj6EWpthHK3x53SLwV06ATaT7k2%2FW2Tlm%2BTW5BIeODT1SAGHOdTqnDoXpOtHM%2BDJvU4Fcb8CaWg0i%2B3ao8X9pzWWmMEaPocjI59laCDnjRSRMBE3dmLFrWV7JgdKk%2FysjfOwf1%2Fh80Rx7o1mqZudMgWxQBZQSivy1OMihAi7WhGb5EZbRU%2FyB%2BT2%2BmyvayrM%2B5D0p19TK8zNVsH5Aml23ENgqGetku7%2FvcLK7BK1A7Zo%2BcxZ0b4XRW%2B91N%2Bm2DyuOXx4WH420DWjF0DiOlwFfm34oKyIEzr0VdhPRDYVZcLrbQMaBzmTnlTaXKX5gxnDpH9hdJxOfKFnwAH9ycL8e4R3jEi726OEGk59YDizW6E1JCtZZVuHvxkgkBoc8n3ba0fAPcrrzTwp0c243hjfuLneavD8BFmKoas8jsTkKyAfYoQUH5dEg1hXAd4zui7qCHWDulXPsPGhSS9oP1FSGE0Z%2BRXDkfMuCJw6QCig8Cu7PKdVAUKS2GDBKl0AJLi1uc1q6om2eZ0esD2%2BSzj7s6bNU9pcT7Dkj2MITr28AGOqUB2UtkAmOxggI52cVOsHy9Tsxfp0nZ2j5X7AXpSmlvBJB8HaN44upA54fa18Pu9N3vLZol7UnYLlLR22CL8A4%2FAOMpKiMylNON4d9TTVYX4HY%2BPdDd7hhWCD9UKhU%2FkxCC1GAmGTT92GbAF7AquYuwtdsJpqbj%2FoZil2%2FNCsr0gyWgX1IdadhqrcgJwy2IzvN4ABB5f4kpGaIQRaWFtznETf9UOY8w&X-Amz-Signature=48b75ccc5d57650c67cf6796a3a398b01d3f2fb56c6c5bb2fb8a2c41947d1935&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
