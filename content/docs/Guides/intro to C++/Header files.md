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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IGRM25%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDOLZanq5r1qDfeDb6UjcS8XuQoasUwYWUIY%2F0Dk5ZgfgIgT%2BzdCXedbFWi0ET34ayDrASf%2BNGtWB0RJrvUkSfynoQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEehJj4TuB2HkU0HfircA5cLtJzwq1iZEL3bG2B3exr%2F0u%2BeuYPREycAeN5Cum99%2BXnYiP9hrinqlS6%2Fx8yG6Ba7IacqKcAAz6AWuejM2uuEizyZabj%2FqosQSXVAboYIeJOs02hXSuR%2BIR81ebfqVaI3lV12p6yLspIWOLxKZVAlD1UTAXBlWxkTlRJIjbMztv%2B6yikEFel5UOwQZrlGzhxELRcQmwQxnWBPh6bWFxmc%2BoSfTgFkvzqJwnTULCEiaO1sdJ0UXzNAAReCO5Dydxuhu0sszr2Ou6EwzKTmg0av4knrRpyLzUyyuB8mbRuDU4ZY1%2BZ7z36NCkmW8Mg4e%2BF%2FmOFGCVIsfrBD9y23%2BEz3sJ5EtcIPrbUIEfO4o0Bs9gKmQvd1JmFZjSr%2BUuJfcYvVSpYYp6xCB2jkmKzS0kneBGrp%2FzkkpdF%2BKNmQOk2ow00pbN2wswjwy3%2BmW%2FNh93SCp%2BkGGzFCBQMr8%2FLMU5jtTIRX7srMeX0%2BMZ2LcG8OdQP7nJqTsqmL3bunkiiLt4gN5pYSkJAJnJ3aqqSiuyLEl2cqH9SigMLajygKBqsQTAC9cUcSYSHQnHNxNuFY2BUlvgfRYW2WHZ7Bnw3VSAaxSSrlt4uVMhBUiZ%2FlK4rLOh9oV3ZhrCpbQFDIMImN%2BL0GOqUBTRygEfvIHL4yuoKt1LNUUeVT77wW2qWJqdEoFOQ9CcLDINCnZViWP6K9zeAi%2BjOfjBQKgNeHcseNunmhVW1vdmq9ey9xvU%2FzDW3hy%2FO5pMnKjkAfEk%2FSDPDSOYmV%2F8%2B1MaB2WMHk1dZXUFLVaIvFnML8GYB3OLzCRoOUspNl0NwwW7yXzAaVk0s2L%2BxeTVCnx22q6s3F%2B6xo2Dpbgh2yOmnxDYLc&X-Amz-Signature=55722efdef98555568bb8e594852ce95f181bf2c51507fbe4ae48f8b8bd5a008&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
