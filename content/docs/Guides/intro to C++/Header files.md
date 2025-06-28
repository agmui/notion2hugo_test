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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKJNVUM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCid9fE3%2B10mwFLEZGcRBIBkD5UmoxC3C6ap30RZfB7gIgFPaurRqayxiWuo%2FE4iLqJ3%2FUSb4rEeOx9ByadGrgh4gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg8kTSaGqSqcalc0SrcA%2BtRLe1eGJMTslnl9Onj7wCt1w8rJv%2FRBcqLsgzbiMuOwMv6XzgU9VjkkJzYZz25CcPT%2Fe5dDIwvbdTbt8iHopPly2GpBH5wecSi8bPDxNInJ5uPPBC%2BLOTccaPMm4EiB84%2BHvCHY2T5PGMqP6gSG6jZlQnbG0bgb74TMakeQYhH%2FR3rXXwkUdMsWTjfsp1mY0rCQzNvo8IUajdU738hjdhyTxxM%2F5RNW5SCL7Amk9ErlrX6n%2FNGsaCi97e%2FG7cA73JvNSvvormX9nPcZGsCSkoueFihA%2Fwz6uWBgX2AeaHf6Eo%2FEyfqmed474uSUCafcNSRdQg5NrnQ3%2FBoXIrJtwD3LRR0ZZhbQejDK46w65wjKfxUdn8Z2n7mlfvYM%2BGhe9FoUbolxJEFwzCRYVM%2Blv43KqilLrpX05XJhPjTMPsjX9qHeFaqixaxy24fiGmENnkpmuddaPrACVUxRUfkdG5C9BK03%2BL5PBT5UD8rJnLviZsjmdblu6GjsZUbJdposwtDIdzhyRZvaHoL0AwSb1HhjqLS655XjcaCQpEumZbDkJaIazuhZKaiqlHdNhDfcMOJbKxrJCu99RMm9yIKdH%2BYfPMPtQw5x1kzhwHrSebPhUygjEdn73wp30KCMIOR%2F8IGOqUBExh2JOxHsoylOcPBax8tRfZiED4iNNjwUgiyGGjcArr6SUrfI62Xo9hVFOePMPi6tNYgtG7uCTmyaNujVAi1ox%2F%2Bvr%2BtykntEv1aEpLzHWdZ6s3aFkGjEScgY%2FcSg97VCyy5RFrcTLQGOP%2B6Sf6LAsHI41KvkcjJSajbTZkmkgLagiQbU8wulp0Au7YDc6Q%2BD%2BpLwAOZM3yoDEQ67qHDBURPF3T8&X-Amz-Signature=fcd981c06c1db5681120a4c522f92b39d3721f5e584cb456a6a8dd5705135b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
