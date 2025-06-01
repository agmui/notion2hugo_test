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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUKM2SK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEAuieKDr4CfKqxvWYvCImApRbPWUTOBdi57jD1E2EvpAiEA6CdYMx1rNi2ee8Qanfe8CiwyKrk32vCJE9Fqq226BiAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPMrrNPYpWeoLOSqCrcA7w9ZcEkNrVx2l%2FdS2dL17%2BhTvkDy%2B7VLcpHjvJ86d31UHQxRjVbkzTtINSVeYzsWUmLAxh9%2B0aoc13Tvg0ZEQMkzpIYURaDenEisGfqpEwa3ZMpTuHhA76n%2BIG6Ahi5Kj%2FCyVHtQXx5142jNJs0wkb9OyKQqEQehLM2IufgvZtsxaVISIq2EGArLx%2B%2BSm%2Fic93oR5hVyAEycb61VZBwoTONG%2F6KRz0SWz4%2Fi%2BYfhhVSXrhYsQijOAm8ygi7OQ1U6gTrSHWQun8qHNRKGFen6l0CFhvbhz1PZnQBn3I1cmR3aU8a4UZMynUuCcRD899tJZI1iVmwH2wEncETeY0hZEbk5F%2Bt79FF8aBDUMQyviaDjBo5edPEttyOJN8D6eiIvs7A1y1%2Bu2WbNO9Mypcnvlcpw%2BgugkrhNqlLRF4art7gCTCZL8RZnfwF7XrsJogMCQYugt3qyzbXnLt%2BtrhEASPwJshg3X9sRwsVhVGokTP2zajWKbfNfcxG9pug2toNPo52j9YERXt1%2B48c%2BH8%2BPs62aZXAPycxTxNtD%2F%2F6dsonVqg0jNKGFqdAdRCNL3TFsfGKDb8bvOw3bjkSmGPFwr7VVjhOKLrkEx02hVy2BOUmvhTd0yNShcYmnv8tMOWC8sEGOqUBYAeX9oC4R13YZxTKsON94FcXydvd4O6X8skNPIs4R8Zv5QZAGsMSlBfwrxFZDX7p4ExG97uzMBRXbvkLSsNe37UWYcPS7ebHdnAU8tCUZSedjg2XuOfmkqPvwGyMW585n1UV0NI3vQgJEm6%2BHGCNfhCmKCpULWpfUbtWULCXkpqKUCPClNqi4OduZKXjZJuh%2F%2F7f%2Fl9y0NGTvWVNfTrRPaQ%2BcQ7U&X-Amz-Signature=56bd5f82770322f2cc970aae48e93513b29eeeed8d20560cc1ec96c1b8d3ac5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
