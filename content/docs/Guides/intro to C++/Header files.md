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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOKQJ55%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGSs8CEWq2uzOdpQ%2FveO6LwdbBcD%2Bs1pYAcIHKGktWXbAiEAgPkEJ1ewHOZJPMOAJD3%2BKjT%2BuFLdA2Qm9amK4PNBxjsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnC7d5G%2B1G%2BuQDgtircA1NcFSwLolL4ii0CF1QaU4X3MU87jdxr8H9EqARwbSjbT%2F8Ek1yHLHrhfEE69Sp4qycJz3z8ikGdDi1PWnRt07Ovpnhq81RPI09wJ9j6%2F73biwRo1hLekbv1%2BS%2BVAX9GgqQM7l1Y4X2D28B%2FJLhOS%2BY5tsZju16B6G0y0SjxAIA5oZbMfaOjV237WIqzxJ2gqx7pu0oFndEcud9CESfHRU5rjeWmG84jrXDKLIfYC5HlFzYFMTdEsMuEEJuEDect7GxoJXpT2cjQutDu4fL9Hgt8vH576fLdrSa1RodKEv2K810yIf89NiXYdGlXmKUzsPj8FLRCdEdSpatl4anCUa5FcRumMFl2MR1Z5nk%2B681rgsLRFeNPIonWAHjaDqxsiL8MC5fVGRpr96IyAH4a0RdRAFko90PN5udaG78CpwEAqXSFJNm5NvEykEFSIMDNRKytgafCFqbtQLGISNJ5Wpi9J%2B0AI6Lxu5r5RTiEgDoYdbZx96R%2FwqTTK%2BWjl%2BVO9hHow0nbOGYkhNKk7XjPJF5NBXHo%2FPs%2Bf0lN0ZeOtzCARX1cV480BYUJ6h8h%2F%2BSsFi5XG5UksqOdiNsB%2BmOzbS1Y5tyzOCXUB94CV4ozdv3BbxraA95jq1EjfMLlMIGOwsEGOqUBjQtvUxhHkUapA5Z5FwW%2FmW0nOOcUznRCCLh2DyU%2F7uVLZTiBVU1XYvu1ycpyrTmsa%2FIp%2F6y959aPS983qRSs83hw89rJU5kVQ7g5BrOEUuQWZ5gpF1lAfFQ%2FGaAgNJNV1HFdf2XICzcEYVltlKu%2BNjCdvGMOUFfOXh8iOoMS9vRtywgP%2Bb%2B%2BHDer14i1gLc9q%2FShUrB%2Bk3e9jxWIyR%2BL1rzuJ%2Fqv&X-Amz-Signature=63061e5786149d18e13316d3123cb3834f52116fc0bded9600d9db645fa42a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
