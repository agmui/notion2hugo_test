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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHJWGCH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFvaoxk8ptTN1tdaCg9c8Y9REBjjd%2B9krgNqLl09KSK4AiA6iofpE%2Fp7MR6qMl%2Ft%2FP7LvjrcYj0Hwjm%2BuxHzjk1KvyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3YNIZ%2FHsYi%2BrsuhKtwD%2Bcsq1AbSuqyEXsr4oS7J0RyE%2FdtxVmQRtLIK52yoiuUBcNK%2Fv%2F0kqbTOcE8XFGShkiJKXJkRkJaKhAI%2BtkF%2FvLD0wbxnfWXrF1GdNpOORPNE2ab43sCU4eRH01Hv%2Fzpev%2F5ljLO0Z4rTrH6BjXILn7fdQTn7y4BW%2BhTP9%2BSpwj1u3omPxFbIJFCfnc%2FEHDsTlyPoDY2sSxxuv5wBLn8Uj%2FpBMHaOztl8fbRDtm6mX7BXaQm5oJ3eQut%2FMOtmjH%2BElDYN0S1zl1MELFoORMGSFlj3q1EhHeMR%2F%2FTFea%2B2z0vDdp%2Bxy%2BIB88VLkBy%2Fn6yiwb9S549T8paIqw2kW35ll9uev0OsdRdL56qz0fPRYNnnVyL%2BcGc50gl80YZtttrm87rDLU480b3tbyqcfUgFmX%2FiVeWfi0EQCT6pfLpEgCX0ConrrGflr0ybN2mI8%2FvE%2BpOboDv8Shppa15lrHcFTN0xnAFdSKHl%2BKBkOjyXehMXIjvlN%2FMEpeSJltrAsLgh3LxE3r%2FqvA9iK33yQP4EJYvcw40zUDzlxeqimp%2Fqu0mIK0LqNSknrYdeLBz%2FmF3kMl%2FRf1M2bAG4IQCUYhDARGvXsW2HpamSurs0BtIJE3tEZpNgHj8%2FlCbcgiIw18jbvwY6pgF21lyF6azzAfxMnC%2FjY4jHztiB2Ns63HlK8gDovWyz5VCYSgy9MmdSPnuxtAhPYtsn1Hmmv0WABzuMS86dNBAZ1EzWXGaNZl5O8E8DApX0nlj3QUFsW2PMjLcqNMEVrYnQJfeRq6UQI3Iq0pCtmiSLJfd26gHbvL%2F2VqVOIqSIBVKjCLsUNsMLj6bxh%2Bdyl3V8nM2u9%2FTaHvY6k3l1%2FCjLLUpM9ZNT&X-Amz-Signature=4888fd7a593dd417bf194893ca682adc4aee209c7732cd5742eb835083108555&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
