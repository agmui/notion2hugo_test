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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UFXGZSR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIXKCuCnpMjJYiUDyFtQiTkAxpTni%2F2c%2FfSuypscaZ0gIgY2kI4p7dhl6Lop0Q4o73bL6yuirOnkdcebh77uyCMh8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0997eHj0Lm%2BLqbircAwiSpLIfOzs%2FIFDDtJllsvjjPFr6Fv1NSa4mYI%2B8zhU43VdU6EcSdqJKtGpyJdAry1oVIrNkBY5yJmZob8FZfSAV1o2vg5TL0kYtq2st9ulaTiuO2hzghDzqGR9RJX1txbt5ngQVvoEMjCKFuFyi%2FlvSZYPpng0cl%2BrCDtP0r4gh%2FF4%2BcLATX5RNaHA3%2BGAjZa8AyZufnoCVoQAQOe0Jl9hrTS3LQXv307voGa%2B3Ou6oVmIooLuJmxwoOtGOZHp07TK8kYp5Pna9aOQNj9sA10Pzq6PnMBfPz%2BKh8kvwCTKJVNr99Ux%2BDzqp5s9uy6OoQIWrHv89VhLEF%2B%2FX16SogW4d0%2FlFNsPEeHkB2%2BcpU5GlCAz79cSitElZ8vSkEfMffyVmiiNT7gK1bzKAP2Req00eCUOFOqjYs3NVga4U977MSkqlGHQJLOdz9EhYtfpzO6usiPPDtuGQRGX87BZKHS92AxZcVJ5XKTN%2FQzPzU2OZrqEOpNGZxwDIsI6XO087ihGZf9ky%2FcK35n9Bjr9SWTNVQ90C%2FoxnBm2Tw4w8X6GEBCe%2B3KgYsfw4FhoWFuNZ1e5q%2BErtX6NcM5WLZLL%2BFVjE3ZmX4uIQ36M%2FNASQjj%2FnBrQw2LQIbiSQjVfuMKrG77wGOqUBETr9dVTSiQP23KjNOQFk4iD2bVrE%2Feo4kTPLN4mvGZwgK4nZMoRr1stHlBKauKkZf23yK1DG%2BbCGztL9FM%2BJVISDyJBSKHTmWLslz75kXo8J9NfYkDZ3J09CxywKAFRVZ99%2FkkDsrR8zRxM7IJYdLiMN%2Bsh68riWau5nEtTlSkW120ZOc%2FRfnObwCcI4d0HfMsiPuOCwPVs2Wb6VQ9Mx5A8i4wMO&X-Amz-Signature=c4b9313ffd400e6a4dc3b5754ba27718153d75c1bbc3959a4edf50ff2de92d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
