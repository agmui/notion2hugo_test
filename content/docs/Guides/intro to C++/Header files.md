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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2UR6L5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB4vEd6rIG7UZFMOp6RVt81aGFrNSyKTPg5tx07aRUyxAiEA%2FZcOWfwc7l3DjtGtLIpUbVAQz%2B%2FpEB%2Bjesp5k6%2FiPegq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDO4Q4WaKqLj%2FEt26nircA1hzIVFsNa66JygeCnaCF4Gk%2BfNpXTreJDiqPEQMJcQHjGCXS7Jf0pAsBfjmx32%2FdkUA593fSDMfdRR7n4hYc2zbkMiF1f9Aa3Oxt90jBtMzwaIJbvW7j6fqtqi%2BFk3nBODGt%2BXX2YEuNHkedZaTg%2FwwkPxDOKXF3hgjjP%2FKSdfx%2FinjGwI6IKxOtOSBo11Jf%2FxNClKXZcWXry5T1zyypTwVkRuYsgM71YEm01%2FKzBRDJtSxVPeS8q6YpUTtx5vok%2B2sC6arSi9yP4kV1ihntzuzAT1mVgiXilKqWJ%2BPdbqGVfFcCDcStQ8zj1iZvqfME7UKYGQIpgax%2B5vQbJTsCn8Gbbn1Qf7Lu6YUZva4ZouHfMhbthVjWgRvRVfB33njxrByfFhE575V1tdqkp0aB7lGSx%2FGX6MKCU5peyYJYuNZmt5k6MCcgl1ZR8Pl0hBKwzNsuKM8m1WUKJCf6iTx0%2FdXqRJxa6uwH7XmQUjh2u31SpRuuI14VDOofLwaaBu%2FDQ3Cgpkkniizk4uSK%2FZi9rC0SRWdCQGTr0RqszFhckCIoY8SsCkZlwSvPNOOW0a78Nj%2ByOvOz8aRebLmqRq5RJW9TtjtfWDBGkxdXDTnbD1kfTPv5vTUCfqrDnpiMLDNx8EGOqUB%2FebqOzPrKi9WZ33gRZcugpT%2FW9c%2BzlHSQODHCgRIyA9xK%2FNl41uj7R%2BcJVZIhLJCPELWdmwP%2B1f5CGA%2FW70yY8VK2xd7qwoH2kfLCp%2FZsC7sfDshhHcA3SY%2FyYhBRESiMjI3fYMGIYTNouVBYk2Bjfk68RgNypSjZ21mDfp1q74wN22jdZ8MHqzYr09whw8TobY%2BDBON8fpgTlSCFXckYUH5UE0A&X-Amz-Signature=391eeafcd9400ceaec5c9020eb7bb94308091f33886331e5baae8560d18c8774&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
