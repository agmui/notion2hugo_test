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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DR6TTMN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3dpx7jsNOaSypZwHTmoaBxkpXCLOQN%2FlZBDPj7ceQrAiAmUU4vFR6eDHvm1w%2FRQwxtK2tT%2FVne%2F540fNvQMCDJ%2BCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPTskhw4usRi13%2FcKtwDj%2BUm6MKg8%2BfQnqNXXvoN1C70TzLXK6mziDcSQ1MEX3r%2FUG6ZHCett0iRd6ZmDJ3Bj8SPVx2LeKS41qc3315GfQnDCM45knq7b5SpKtcqJ4bTQ%2Fcc16bgg1Ta68vcwGO7LcOi2tBNeZrGsgrG1PBmnrbWcLxbWYkeSlvvLefltUlL6kMcYiHaevB5pxpIiUBH8ztFtfh7M8V9FBUcz8fBUPk1g5%2B%2Bcu6glJjjwa%2B%2BjBBk3u8Pei0Dm%2BK1TuDvABBLinPanj5o1UmVuq3lvmSe22a1o6NawBWAsRPw%2FR%2BInwnCV1n4raHyqATyTdUcjJ%2F%2BJwQ7SfSWr1koaR56lP5dZTNyfxPsTBu3umLcaNPeA8ykYnj9vHW2PkDOdJoIrPAcwSqtIyglBeOi75%2FTMe69jUWAMYFod5y2oFr78pR0zOl3wSjKvAenzv8zOoNW890%2B5qTu2cFHNmx%2B0XY2zIsF4izOHJNWisTMFNiQ1WqTeMGsiAisYWJZzO2dXuiNcmLwc8WzNIAlc4vUEiz9sw%2ByrEIHp%2BIUvO6BfS4bCdAOMe9twkDiKdHZSIb4f%2B7OlwPln6qHhpVKzB0P%2FIZ33QDkbiHbVdwUP%2FBaG7jqmZIYu4v7RGhWfMu7l9O4vOcwoOzzvAY6pgENiK3okEM1Dy1ti20NUyYPCE4o4P0RXCkHQo8XhhKSDYCGJmvLKgUD2NTYS6NehwRg2veYRyve7C5DyLR%2FPHnV%2Fbg6kUtJk3%2FfVanAZndcOF0esr9LtYbPtLP%2BQPIajfZME0seaiD7C0OWWlf7yQDFEj9k%2BO8e6QWizpOoS9U9%2BAxlvK5UZOTS8yavZdcd3Pt%2FpBFd%2Bi5my4bd2%2Byp1Poou8DdCjf1&X-Amz-Signature=81673a9e7afce053e120574e42f2e7856d7680e27e887dfc93e6ba2bfff1ae0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
