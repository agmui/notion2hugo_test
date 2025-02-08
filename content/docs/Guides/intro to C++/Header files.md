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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOKGG2I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAXbILkZjaE6yOcZNnhxrPX1ptZ55hE8SI2ZokmkOqdTAiBGKuIVHaOi2Kst2dH9mStDNc2A14f25pqkEdNlKVUjUyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUCFzX4KtDHmQF8dKtwDDB7CTdnxfuz6fv3zF3iyIXAIIKCU1qdZY69%2FLW4D88cJNoj2tp3rIgd%2B%2F3ItLCETrbAUQS%2BWLBP3BeQ3Ya928F9jYR4oQ2wy9JmaXT2iqPTeiHjH34kTqpy1spqRhdW10XyM15Vz9GQBurtFQ4MUxmEf8MSzU5FA6GpDPtQ5wrxNRG6fR68gG3%2F7cqnaYClXtfRvgoFAiSs1RObGNtwh4zj%2FTRsNlfbYEzeH5JhQRGly3mVB8swFDJi71WuxvrhlGiGRT4bj2X7tGkbf2TurHLVDqNz0F44vyIe8l5rDCJMU4htMiYiKXkCIeSNggMR1IlvMglD9GA15Putdo1lTSmo8LhVboTK0H32abHnA%2B699%2BdfOrVGCouVnVNCxDDSp7s460B3krkUiwd%2B9PeaLY6AKZ%2FxGpgF9tjjk697Rmltm2vxMMhWmG0ocpdaxCt9ZjtZzhTRmGvS4BK9qfkKyOI5HxfMCL2%2FU%2FNcHXiP27mdi9urkPyxc%2BnRZO4Qi570ZU6nrBvzNkiMtlpC0alOHbivTUIkVnR6yJ8Q9HS%2FoSODP7ygZwf6QCmNz52Q%2BL2PmwCStfHGXGwp1C7KVd0D1dYhYttIr9t3sTxnj7PZC%2FYDiIXB10mvkiLa8ydEw4IadvQY6pgEP6KvPyJ6ipjhKPL0FvzTrjWWVHpoTQMJxP9CxUxFvhsc9rd0UnAlOboVunX3Q4fuDmhJEeAIp6cmA27rmCUE0RU%2BEvh5sYrMV6Wr%2F5jRVbIK3soSEJrsXb7NG%2Bee6mVVvzG9Eh1fUb%2FXtJlLuoxZduCTaCGnVbCBrDFF1p5wexRrhiHBoLnRpZjGLCG4XdHZzvTYptPBMWssQX7Mn%2FESYJDl5z2kg&X-Amz-Signature=a367135130f367ec6937df19d020b3efa0a44f052ab3e52bfd7ed6f615a81e03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
