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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQEQJ4A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkLaKTNX%2FIFSWpbRL9%2BlkPQrOncWI0dZYdTOTi2QNmmAIgAedXacvUKndEDJdoSyHMCGl5tCjKK2SPpjDbt0Jl6wgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDB21hblCRtV8i9GGqircA3fJu7x3khO7zx8RHgZanRJ%2F%2FofG6iRf%2B5WKPok5sgChVDIS8ElSVE52xt1nqFvfARuU7CIv52sM43AqxSaGrTHRgIZ3srJ3t2L%2FPowHNTMmr7h%2FpHHEN4kgS3pOUI4jX7nPuUafM6NULv9NAwk3v9%2Bhsd9QsdeK1aXNEGBltvkoFLbyGDtVAZARqNERHS7UZEDUtjyySPIwx2Kyl8Z8%2FHwU3iohoJn13mHf3LYQk%2Bbrm4FEv0CPx1exUzmn%2Fy7ow9gpQ%2FjA9barPFz39BWv9Fk0ZzGTDfLQoBU1qfKnqqdgQbZduWvLpQl2T2iPsJEd%2BBhV2aJix24vTi1zjDJWJCa7dLQIxNF4baEgckTUhnWBbLCJokeEaR69SHh%2F6iGB26uDKKO%2BXa%2BHmPgZVC%2FHN7BnIpXQAAK1%2BIIPIP2VQ7j1e0UeDZHajW4sy9RVgEbruVrRkQAGoBQqmL1vG4R6IbjrzQyrC6Yb2r1egafK6NRBck9UFJiaM%2FhVf7xVHDJP4M4TOCDgR7nUPyzlTKML2diy%2FuyyjewYkp3wRbZX1k3G8nG2eZ%2BrSv3xO%2F7AVLmL7M6inPazwFTgmtUTu3HjudZs4LMWEY2WENNYHTH6N5PicpeUFa36LtobRmK3MJ%2Fh1L4GOqUBqidHEjVwmfJfaxMYq1TBht9Ea7UE474uGm6tXhSpH2Nji7C0kF%2FdMCGk0D4KNHLfYRL4hbIMyEkGhFwsVAk2w8ddj0foGMqI3cYVUeWNqlmaXAC2SDAsyYI0Gu3IHw0%2BX%2FimiZ3J%2BiYn0Dm0uSlh%2FJt%2BQTf5XeBh9eJg0uniyB0EI8w0xYzoovXOSm6ZYgjofTMSSW2IGnypvD0ZdxacWUig9pOD&X-Amz-Signature=5bad308669dc2f60edbaf55c45505dfab2d5019060262f96d15bdf20212e4ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
