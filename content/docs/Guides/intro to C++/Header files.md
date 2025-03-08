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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZ7KN6S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEXEZEOM5vt55%2FjsmxOT%2B2evxlx6vfdnIW1QOogl%2BIToAiEAg88WilrsAm8KNZY0F0%2FQm8GlYdDwQ86OEaJU3e0LArcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNyLHqlZj1HIMp6XZSrcA5uQ3DsbQ%2B914cOk7KdhfjRlzlXGrAnwXANFjM3lkkmekdhp8mvqR9c0ti4RTzXmlGf0BHgjUVCymMebKWh%2BU4shog0m6HIVoRPHdXM7cSDl5IJjTelJfU15ImXjDPvIOD%2FxGn6nlqXuSojyYJw%2FOv07yKughUeNkVdkKm30LWiPedKN2pmlEMt%2BJxLVx4fYiuIjraMHn5fUIselqyj5LFuEWMFqQUFfMH0s3jFfoUyCqnUpk1xB7Evr39TEBvzP55eRuTIEIhYmxUoikNrFKa%2BwVn%2BEVKPwRCw32LpySG1u%2BQafq01g0NBiLe1PVykQJiJTorM4tFiZVC0FPkIiNQ1XY%2B6%2BCmjj93TSqQG7V2U509ggj6NekqVtxlNXhypUUZl34i8gHnIvxdVUQzfh0D0iTpNHJShF7EkvFb4cX4ZKhNT8fskLhNoqeXeN%2BIirO%2B6KFpTpFlSxRMxRUpM26iAQMyhNUtL9wGHDVW20bVkqXAOQXVjEfR5K2Qn8kJg1qKDq5RocjfDWT3VAwEr%2BUKHUBLefHD7oKT2upkmkVbRLZWUC1S2gQAQ7IDQSeiAzcJQVa%2BNC5ZU67nWVsWs62KjdRytSQKx1%2BtRKyPbHYSOftfLwmH4W%2BBC8KtDkMN%2F7rr4GOqUBSxyl0pkTcmU9EafixYXS%2FMu9wDe%2BjqPDrlJmBwMlyWy%2FUs8rlV9MwkYt%2BI53Aq0T6c9nLLXODlyeRd04WA1074QMHEFJ249mvzhfMPZepNY1kkFx2VGlOuzH5Ag8fIqPnz9Xr9kNAAILaPdiZN60C%2FmE7UUXAT1fEkoBgdK3vJtdhaTpLpPtbO3AtP9JLGmLDZzZrmrMbcM%2BNtYL53pBHt4KdpOF&X-Amz-Signature=52147a19beb385d72832784cdfec8405e19e9ad292e8407cd8068ffad129c9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
