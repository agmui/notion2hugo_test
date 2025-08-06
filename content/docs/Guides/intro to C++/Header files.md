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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDGF4KQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEX9xSPK34ea9EAvmI77yXCZGCoPy7Y4tiQpsEB6%2FF%2BSAiEAjaD%2B4aCY9jprn%2FWe3lLHaj0QnBgrfzQoiiFEBhEYlegq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCCcyX4vlvp%2B9Qx6rSrcA9RocL9pQluIXeAoE%2BOQl5z4RCDeUYUtE0oYyqEwXKFVHyIxYifwWTjk5bUmPPi2DZdCaK5KutT0dqfVM%2BTqYA3FLcfayBxeWrN8yOz7vETcO8i4ei1Bj1Uru%2BmjcXoGKU1P7exovbOGOR7tWejV23I84zpZeM%2F2Fdd7h7wHzlXj0fay1%2BjwbzpHiCPscsChcCzKGfGvC5yH1yaOL7Ugtb6XRglxHp%2F3S2HqhroQN6PxNrA1K%2FACE4jwSm0DUNELLFdLYLSgF1hYGqmjb2RPY2CXxQ%2F5dmmpA%2Fvn4bpCFUWal%2B%2Fqp1PrFbDhWblnuFtEFdk6LnijvsVRhAQBb9HIDjR2LhetdXR2SJtk%2BFncLQ30yFQFwAPJ2QsdWNFWTJ%2BBgOmxOc%2F3LHaBjj67GsDaxjHag1hpdfg0Dad5JLWiQRDWzY4Og0642y0hFOs%2FQBCR%2F1vZCWDGYclk9X0lKV83LHisFwmZ%2FXxfqyUo2%2BTOZ1DVXJ7d43%2BVIsP5jRPd72HXTfD3qqDloIXpDPRZogAJoX%2F6%2FeoiSUWvHi%2BBsLxBJ2BDf7si7eOieEEZ%2Bn0EYzKNEZRq88ICJxjlUwt1UqHQygbn4YFk31BBiKM99cLEM0P%2BSR1x9yfxnk0HZIpFMMfLy8QGOqUBmIhU2ejCkSIVoWNsSSS7IpvwLH1HejJIrpYWz418taUK1yinDDVMilVi%2BPetuLSzWhQu3CSB3aGT8P%2FxD%2BawEIk9JpM47AxiSHPkdTOvbVxlTb4RoedeQnAk3gVPykJ3laKgNIarL9trke4FXm4P4LEmC0vywyi84mFiZd3anVJfSdv9fZn4royNseJB5r%2F%2BCh8Rtvldn8BMqGlhPy2JRaB01gBk&X-Amz-Signature=4340bde669be580efcba6a8efff9ebef54165d6154a783d184a10888bfde8104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
