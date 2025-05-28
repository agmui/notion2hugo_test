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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727HDDVU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiONRs33KWkF3wbjeQd6GbgPxBg%2BAy3UC8HEWsRTJE9gIgLx0PAtGnRrlDE0Ri5kpfgWi1st%2FA0%2FOGqifF5HtUWkYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDL4OXGllJalaRDkVGCrcA3PxD97o4z%2B8fZQ9srnzo63QmGbc%2BkpO%2Fs5Mbg7hrHugWTA7HJlqCrvHp9mebHAvwjJ3cy6a1Id5X6g8qjLptjXrUMw764PoL2oE%2BSDNABAUrpAgllgN3v7tifDWfV3y%2FxE1xUy2%2FVDFTEOEo0%2FzpELuN5zEH75U3Vzs5SrOmGYF1GI2GYg02%2BKh4mwclGEvpuESDdUAOYreXsb663ufDYx55j4Y%2BVXhxiZNCT8X%2FFNKyn%2FvzxKkPUh1Kx9Jbon1wpb46XJaQffykkM7Rno7kY9VcUDiqUiPqjqdqmKLM6Fb5%2Fo6hc7HZs4YVBbnQENMflTshgggIELJ1D%2B0uOaHxsDEzC%2BUuO7HwvvZiqykIGbuk7meeuXavkGuWdPpd6kWON3Uf1m4UsxA8zU1opo%2BEk%2FrFLZh2PtZGLLGcH%2FaUDTbLAk0ifQv%2Fh52wzv%2BeY85y0q07Cq3slGEmUPZ0gX5LMgbpRYvpGaHRg93xObYxp6x3A9PivyPQ4VF%2BJckworMxPe%2FXCB%2FAt31owQfYqakv2eGqte237cn7M3jgCkaCEWjM5rOY9HwVabBne9w52AWHAn15VDt9b0IQFPgPuMKHoJBECXQHYP89F%2FJJQxWjoowwKtcaz6Fc9O9c3ISMP6Q3sEGOqUB5zZrtK78ig69PZ3Gy9Zb7sPQL7fcietTKBg9elluMKmNLYTf1Z75Zzfij2G%2FHOvvd4hqJBkaqWnY38ECespyQeHWq%2BL1Bsvtp%2FXIR9QHTHHxW7xNvlq1gizVR170LY7qqSWYsHNqs%2FIkpErhuVFxxtk0sC9YSJPU00FkdSP7bUQdX%2FBGioaIerR2NL9tIr3wLDllgJQY6ZwBHlfEV340G7%2FkIGu8&X-Amz-Signature=218c2f096b3c3808fdf724e1637dda63efe8b874fc6dedb795c03fe968e91594&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
