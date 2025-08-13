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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LURYXXM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXcxKr4y60B6PQ5ZrpAgrUHiUfdb47VD%2F4zGpoPjHbeAIhAMLfbVP6%2FSB0eG%2Fh581YPgXl%2FPCdZogxoOUDTd8H5%2BYGKv8DCCcQABoMNjM3NDIzMTgzODA1IgwiwPcdmOP6wW%2Fkhngq3ANx7MNi67J%2FNp4%2Be9i5j1PEno%2FO892fr86%2BOJ0mAF8F13ATUYVkmuiq8YKVyMkKSYlcFFSbrzbrxK5EKi2%2FGtqudWqinMS%2BIczR4BHeWaZj0C4QsDrJa8ISULU%2BlJiI1WTCflz8kN4lYJdV%2BqVUoeVi7hRjtDUsIrPYtyM2R99AarlrbuAnLO2EMizOHFg2bXm3tbCq2760Zq2AUGz6UoeeGX00iM611hfyDk6j1NjomEMj9M3NRAzG59e18%2FA%2BOc3CE1cDleiCdthL3pB8m7ZxqMDXkBn50se%2BbBOJfAlKo4vg4i0MF11jLaYCivHZRlGpASvkHH7u0VtbOww8AWrrmSuynB8FWYsVNTAO4NHIdhM8KlTJrBBE0sppY6BNS4h624s1F3%2BfQSBLXpiPBoryQQn%2F5la0igNUtcbmHvTvTvfAV2GMHS2KZbV%2BXrpXd6AmkZgtbWDAwglMs%2BlixYTaNokBCBB8bltetnQj2CVzgcV9RHX6%2BFJP1jRN6zgPoRVpAwMjpJw8Cb4o2MoE42SBc6JVYvOlIS1rqXUEt1cVbRGfacd%2FyiEYiA%2FFJxWWZ0FFtQMgShPsasV8dsxN4IlFy%2FF5PvuV9vv3BfTl1hBwNZxMG0vOjAQxXF0RIzDE0PDEBjqkAS2MMZZBrJgLOk6vX2t99M5biGjzMZ%2BzOcnZHPShABk5Titvdcx5Tlhcv49iAc7GhCzODWi1Mis30alSCImU8wVF5BU3d%2FBj93w0DDSQ7ewTNk0gNWRH2Si46Hm%2ByHpqOO43BQr7vq4oIdu9lIcOctS8%2BeZie%2B%2Ffu6f9YHc1LJQL4jr38jy32dcffGnY9Up3emhpMbH1gPS%2F9z2Lm%2F96LIVmF4bS&X-Amz-Signature=eb6599fc42048ad255dc6eb1a7eaa28ab7963e9864c1a20e4b3b53947adab03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
