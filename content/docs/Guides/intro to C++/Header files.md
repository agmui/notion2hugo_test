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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2YXLVT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAm%2F1BBXrSd%2Bug4Zf6XWt8Jnp793bwqILPoAvRINQ9vAiAuTdCNDPRQmjUizjUXBpYllsTUXg%2BcRzuLKSrrAGuhRir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMmU0%2Bxa1rrGWRVgygKtwD1Kz5u8%2BfY4bsg27w8R3Qmk%2FpfsZT7xsPiA6QForo%2FPtvTFkjpFuLwDhpSHGEvBDQ%2BYtRDNouuMR3E70oRJGSZJ42HrDRiGQEnhWXz5MwOj5aTVKRBa3DxlS%2FNSEFrQMNWdDoVk838oDwVw2ZCrX7IB3f3A73MwoAjh4yBFOlDv7VtHccE0uPLxFAZa9hmsxA3OBZIWRnt0pIrRco1OWzj7Mr965zFJMIHtBcyc6GQqmDIZMsqD8uL4s%2B5%2B0oYeA09ZEZmDLt5JKASBCJubRxlCsr3nfinpJ2Cu1Ay8vbnvcWgOr41VsSNHr5eMmTR9tJY%2FLFji%2FEbNQmphi2NXWt2P9MPqfYjRumn4nHwWdXzyzY1IdBmBpOt%2BjZeSgSO%2FoJP73jFoxJwIPwQUbpGX4ntWqMKhwnG6BVP0Bt6qYKc1Sg5GzQ1dy0u7eOmV0YotsW7dN4WBZO2xa8H04RtoDPrLQPliC%2BRIQB6iBqXuwYuKVHBZuirDAaZnHJ4PPhrpIUr%2BLa3dc9gWIRNPqotfrY2kAVbH0w4XFWz6AZos%2BXz3dn2tNiX0EU2okPWd6vhnc446HFbIrY%2FDCDX8YNoG9dv%2B7OQh%2BtwbMTkFgaGZx71n0r3rsYequTwJqxT0IwpoaLwgY6pgFD5ljPe0VkW4xnmPU8KSA7R5VgUt07jVR2g7t3mCZ7996zG3f85FD57YRf1MrWZklPzDW2al0vea7E6drlXNskzf2oIkISOUK19dCP36lmzLxOqSpz%2BraWm8FqRdSKDX2NM27lkfx%2B6BDhMa4iqJvxo3xY60joO7kudL7f5ij%2FCO3HQ1V482meU4Dymzqt7P1Y6IYjijewnzkISX5t7G%2BOKiG6I2Yt&X-Amz-Signature=f451aa51dc10c7be282d7b2a2e4cdf2a1159b79d87f1dcb6cd621a4860292cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
