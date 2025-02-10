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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNTPPNM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5khvsYV6KpU8%2F%2Fe5toVIxJPFG%2FW0ZLL55xRYrVpqihAIgeAPB8rCfh3Iz6QoYL%2Bw%2FLZ7iGFVh8NhlVH%2B5OR7N03QqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB3wN%2BJzXsK00%2BeNSrcA1dRRtNsb1M2cjULEb4R%2F0%2BXJW2gN10ky09gCZBbr0TIlTqkq%2FfjNOOh834An1P28G9uhfOkZzeYlIGGCA6q7g%2F%2F%2BKE3Tmw0xwU%2BGY2qCT4LMDchPHCkzDa2jXtU1PdRRIpNT%2Bcptoo%2BWjRd0iWTv6c6INZBfP1mPYgLqJ6icSy2WpmG7IrEvOglYiDpNXSJmfoOVkIj0tiVG%2FrT4H2Mt%2FPrHqSdy4tehhtFaclnO2dKJqP99KMM5Hiuz3dl3zrYjJsKXjlhY4G%2BKfQVeMCKmYKZ7IvT%2BCKsqBAzmfblrimSP4sM0YxfJafrDbiMsPktomrO7x2H1LGuTehKweGHn5OCF9BgGO5GX6D0s4dVzhVQfwkHe%2BEDLPE%2BFGSyztoMHxiVSiZTl%2Fmb3M8r%2Be%2FCqpVCHxTRrho9hhoeR2Td3J1YxUOLozVW2sDa478cxK9svAL1%2FAd3eqAhEPE9nK0sTRrOvSF9vmnwO2W1hc8mq%2B7cYgg2zxGqLdn8RwfUNaPAdHJN%2FfLtD58Ghw3KEBCxmLbVuYrJ%2BGRb1MQ3%2FAhTYBvtPIinoDsrnzNYhce%2FN%2FMcvBOI%2FR26nBGvAfdcz1OBXF66GUECtk9AfQ%2Bo0bY1Itm9N4TweVguV7TUjHt%2BMKezqb0GOqUBcDg%2BFeWpPuDTxGg%2FmiDq0vtMM2vtzq4rq9qbTfCxervWFE9oBgQf302U3oX8P9cXPKVhbEmfVS3iJh02MVNX2k1lJCFN0ED5oDmAwGFX7BkIo19K2V0bR4LXM3WXoApqg%2FeFFstVORVwJkqTFUVArF9NqL0VRLWfb8RISbd3nsp6c4Jrw5VWPWcnePctSVqqyGe7Z9tzbf8gCsnXIF9p9fBnQkuj&X-Amz-Signature=58563f641e985b2800db9be704c554ca65256eef157fcefc4ed236e7d6ae8778&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
