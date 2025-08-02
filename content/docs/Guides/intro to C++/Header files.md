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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAZUH6CQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkkFP09yhrT3PHpCjLRbpFxzr3I8%2B5JTvvYkpmr3MnHQIhAI8wKh7IyWeiHT%2BppojTv5WkGNN%2B%2BmKXYFijvO1jZIcnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp5wWHbaz77tS5qQwq3ANoIukD%2B5jBIA7UnozHyPRtp0FwupTMN1oYgPZOSlP%2BGYiPJZd9I6JctVa6ipmbKX73PAkaWfuXizXKwaQpkav7GfaNmei73v87zHq4wSw%2BQeekDUqx3Qt1J%2FpQS992x13aCfi4Ef7GPkLNIsclldS%2BrHA8ZRJrq63mAM3WFR6b8jLO7GdRHsOSjHd0x4F%2F%2Bt7Eoch0UFh247CRwrJWiMNxN8N31DT2SEhzQp0pWZyEdBU4i6OKHK%2Fjcvl0MTQH%2FjWBJIzgW7uRG2ccQr4OvSECrx03q1zgputID61TZ55VcNYNXGnq7tjJ%2Bh%2Br1sDF5pYLiKOoLG5%2F1WvJZi46IKYg6U%2F5RInzqlF61%2BTTmOfPrCObN6EIksJItNOA7%2BUc9uS9m9u3%2BgNVgltvrgAoVyA1DWR1AIhhJEP63k6yvIcfeYMDTXpbyWCgcWADNwRfYKBReFnGFVAt7Dueqwcok9O3Q%2FNS%2Bv2KuwfVIMtZiMaLSXvBD3VPDMwOQCMQt5n9CoU2fSXjvtFigNvrt52F722IHoQEU29dDUQC9r%2FpBWJCAYL7XmyxAhnVG%2BjoUbtm8sZB3wprPWwlW8P7E7XqnwsWu71qbY5usb4%2FEQouVHuRVs%2FtGP8wtpWMCZk3gjC497XEBjqkAerwyAEUFnBNYdC%2BVVVCWaeWkwHWCSFcmpEMr6%2Bw02WhLhIJdcE%2BLheKJDQdfK20xaz9ws0ueSCWJivTUbVVUG0KiGpW69rtt%2BipxHlk%2Fh%2B3BK8bYxhleC9KLndIS723CI24CBWemL8znndVB2UuuBHtRK9xm1OygN2wbDkhJhEwY1IXRfhqgdxWY0TUC10E1MAlI1HAOF7ZsitF9ZxnUM%2F0PNEw&X-Amz-Signature=5a48565e656cda1c7fad773156ee3b1df8a6aceec5f2062beba37352cad7182f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
