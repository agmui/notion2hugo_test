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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F2HAKXM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIGUBsKHyicQKnwEbqihLfq1tSDYTXP%2Fwp49%2F2HF4fcsKAiEAvNIqXY6Gj8WHSDFyZoxsS8BvNztXk2Q4zi0rOo5ujjkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdPkOdX7iE07eSsCSrcAzx5qI6oNrXS07b0q2AzYbf46AhVcFmganLlBGvcHYdt1XzwucG%2FlR%2B3TrkQ2T5siROVsNH0mbjopLsltIRQNDbQtvtzu7SUaeHIHTiRujsJVQE2Qbl1Db0RDntikkRZmRU6L8CxsIy6Bj7hkTcy4h%2F1brC6BLXdAnky%2BbXUVSUH%2FIF%2BFAZSI0B6ZCP5v459BjpuaP%2BMY2nRgObQ4rlNFszF2DaGAXPOjlCht4y%2FOWdDhWv32%2FQ%2F%2FRQsRgUbaoRUJ%2FByLjOzdh4X6UsDDP54E6DZWYK7XYEE3GEbkK5fmKmVBnAjGSohm9i0HzF4787HMmID5KYxzb%2F8d0imp%2BW800kU47iMNWxfeOwZ2SKCv3UyG%2FpV9cdcN2OE2N5fPo3vkMbesDbnc4Dp%2FvUkLgagJ1dUNopkDH2prCSF4ws2XaszGn0JByM6mtfx3OpjJ4GwLUIp%2FqfYiNc56qbx2UnxMIiCDC9y%2Bpqh3XMWgNY%2Bot1Ix9a7wiuoyYy%2FIIyGRWY6IZ23XnPMn7BO7eBpdWv3qLbJZ5DJfaBmgL3ojR%2Fxlj%2B318b21VpX7PQCiE249KBQ1TKdnkN4KJB2CQPFNxjUrXyOehTn8vVnIsZMjOm%2F09Vv%2F80nunaWAua8EsdEMIqdr78GOqUBtieTeOjljvRBfOdzh%2BgBdez4rzlazzBdxeKZ%2FBTc8tfzUQE%2BFohGPBL3bkHvtYxXUl9Tcyc4I7k58QLXk2R2PQrPsKVz6plQMa%2FAyE7v9ecIpodjsnhjF4XO1oZvVxoDKVsEc319QuJk2OB76btqRs%2BK5eOxyBJX%2BUd%2BDwVaep2b6HyEhq7B4KPTjxX6phy454szSGtvEcloKErV4OLWfWncxI2a&X-Amz-Signature=5ff2492095c86c0b51b7bead02f8774d7db19efa53781858d191aa8592ee7d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
