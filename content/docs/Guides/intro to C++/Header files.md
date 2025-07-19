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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KF5BEBS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbLNqAaaCF6LcvCRsQeKgXm%2FJlHdqAr5jnGx41oTp3egIgLrX4cYTuULzPqVvoCw2EK4u%2B5bEPrU9MYtGqb7nijhkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYNL%2BGO9%2FRpOIieWyrcA6qJFJ6Ku35QHHxFO8mled7sXU6cAkfW6GVUyfQf78R4zvJy2l4PYYQ3hMyz5I9Kn3lvNEjtgcawCo6kCQ0yvDSZ5ODCr1POH5ZYiKB0n%2FEg73%2FzegMDhygWXbTgDKUM1JfXV10D0nfBzTeav0b7r4mDF3AiLcKGwxNPqe9aE2cER9TFzGplIZumtrQeCp1sNkyYJf056HqPqTuIpRPsq0u7IEO65zy%2B0YM1SdXeXQK38xa8T6aiOAerEH9dC4jkbXe65kvhIQX1YJbASWWm2Dq7yF9JQts6tWaUvs%2BpGIuN328O4hobjIFxA1CafV7yxvbtFjeFB55umFiWjYznMVFM7OzcE8kB65KEKzq1sWJXJeVlXWx%2BsezX4JLDkR2yyvruhKd%2FsV188Wc9e9rYiYankIIF3RW%2FI7gcj37M1xERbc44f8hi%2BtAuczrsj18wvtksWUHBOre%2FzM5eo0a5B7Y3ucOdXrTGf6AdTKm8zVEjlz14nlxbUg%2FMeiG7olFlEfYp%2FTr%2BuPkJ01sRrmxYusekbZeZLMPCXmxTenByJpKHT6%2FSlzAxNftnw%2BPrFtWHuBngcLXXBDcLm5O%2Bw2XjLQn6yGxXZn5qbSN9NbzUyBdfMkMNaRbgef3sMprMMP%2F178MGOqUB8Sj7koIuk28tN8narN7RyUBxRawUVk7HUi7tQoV4lIjG8O0u4s16u3cKVULwaj7kBdTcZKOVx6prqLrLYSE75jsvlFM5cXp99i8%2BiTyry7Vh%2B4%2FtHNt2B%2BfV3r%2B%2Fqj4Plaext47o06Q5nIU7ungDEEJ6A7b0KYVV89qDGmxa36Z2D7y52%2BNt%2BbEPrU5C81UKBWrpincU6ETl5yIxpMMaOEJHY%2BoG&X-Amz-Signature=0156cd4cb50db718568be854f33d91ecd60244697cb1eae3f5ce0a61d0438c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
