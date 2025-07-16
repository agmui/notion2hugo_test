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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MCRTCI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIHMEFxe448nyqUG4XZRzYx0xrIuUOuWYBDBsqcEUv22AAiBSmBidO9Jx%2F0RFqmH6U%2FxWixuRHkQOPgsnU3k97WfT%2Bir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMVMqgyuaf2gz9C6ybKtwDhXULmIIcAwiy%2BJ55iDodMAoJnxdlXiOXwUivH8OdwyFDHOIas0V38s1WS8ygQ4DmGxj0AgdHiBou3tm4ITFsj5W19M0862u6WzvSMEosAMCIo8a8Zj8qofSfDB9388c0PMhm3d3HatYBurraUPGlWNDcbw2P8Z3vUNya0G%2BcWo6fTyjOzwy%2BLPSfbzSc%2Bl%2FaNOuNIVSijjF4SxquJCsRxyd2MbdoQ7zZ5Xnyw7gBmI71oO4acLQpU7QFC3JkKy8nbwvVHnEDIjmhf2AxcuXB9qRqWKINnwEMDKGE%2BX0cgtNDOKcGs8RIwButIMmSL0%2F0GrOdxzMXSBWaOkA4fgo10dUEO%2B3UL95Z%2B6anePMgRnhCX9EhupBr6Tbcm0zikmlkAnX9s3CAObeseRRy%2BY2TXatP%2FuR4s5owcY9mKCs1xRIA4jsJLRU77JjASAoaqGreRo5y0D%2FOUIFLQwiiyAiVSZFrO288SaBRX9vteiL5R7yw8vXK2%2FHUnZ8jpT%2F4h96QtDoH6EhePuyy6J9JptTiowDH8NttEEeN2iGa8%2BE7rcdXoFrL35Ti%2F2mtyCYF6KlifdLQwo%2FOKfp0NdCLAcAZJFh8HHKa32%2Bs2Jzhsa8fls%2FDbUQz881w31R6zSQwra%2FcwwY6pgGw64UCbuFqvyJNfaXVdoNJZZJkBSqEWYv9U9EE6tJXBPrFblGAn%2FMjYHU%2FKs722J0cpVmyzFkRVy85AqawrYxp7bsYqMJCQRlcpz6IzQOyc0kyN%2FtjR3hbm%2FuuY9DM4CNIS2HNRXmOGqxygYaOYZwb7VjGgyPcsQ66zJv1zUfXvTwqLQRWNppg3G7PF%2BQz6nD31VN9SgewfGAJmN9rNw38hUeAv%2BfL&X-Amz-Signature=13c92e4a8ec84cb68104fbccb212bcaea94b02b172235df0e181e7fd3874f5ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
