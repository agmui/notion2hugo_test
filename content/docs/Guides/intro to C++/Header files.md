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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6BH4Z7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHOffwaS83ye0AFRcY3ekKId%2FpBJASel3MwXrSFzpROWAiEAwV1xgA%2FXAkxF3K9mn3X3ZPah3Lgz4ERrs7zWbYvBcJgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGx788cQMzrvSpzfHircAxMPHFWWvHgVDqIU6iLJRKQXRrlBaPrX4WBxeBhDVFkMHaruk0iJxTDs4agjh7Fiet5bBKKlVEOfUiJofnxKGCuDGMsT7T986pNLHtk4HZbLPSDfSR8oIAgEjzG%2FA8PacwPGiMOLEaFTSfB5XhQaeJGB7oZGrDg%2FD5Tmkaly%2FjDN03pQUx2wzXj1I7r55Ief4UVPKMqzm9Tx3sIf4rbXjaQyVk9pho2lcsqmFRCqFOxO%2B6gNolB0ncnMM3AIOFUuMKoW3%2FG%2BxLD%2BCh4PsSY6r%2BB0%2F98nB0HZkpN1xJ8LAkg3c%2B20wD1clVPXjKkTFRxM9p89nPPMP8WHcLTHJj80hdVMGIUYp2mSXXWioacVHj%2Bei5RzcU7fOSnFj8kYex%2B4KawFV6Uql%2BW0JeLC3bmp0nyff1M5PuqgCVq7%2Bwp8iF6ObmadAdG3%2FBEz%2FEKCDHDhV8KkBZgjF8iPLGds1VXCz7bHGcD4xgCAAxMn%2BHfRFcNm3Ftbv%2ByMKxU9DbTeBlr24ZDXPISnLKyV4oA3MCKZ4HWq%2FAPkIgecY0LrNcxN9p%2Bv0i%2B1wW1RbWn%2BRFg3kHhEdLiHq14xHlYCctcBqcB6BqV4KlUYcCrJ%2BgWGkl6rpVuMUY%2FyL%2FhrxfdtmPZuMPmB%2Bb0GOqUBI1b5MmJ6vx3ceJRVKqDf6dPW6amRuUNl4NvL1YP3Qr3xgmgcV1kTxoidyiduGF6U1AiAzlr%2Bf6cljGOLjrFd6PXOg7p8OyynZ1A4lxCRBdBKdRtDcEykB8weLu9zgYEnANKQscpRvhtlXDv98gUTqUT1ERUQ%2BVwIzjaxR1fULi12oCcN%2FzqHEclqM5g320t%2FJaN4dhlFHNLSBsEVaYqOoTHQvNbJ&X-Amz-Signature=6c261484545986324e1d99b883269c6cc7cdd0c016de54bf9558dd3f1f2d3967&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
