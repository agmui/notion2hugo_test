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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCXQ636%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCokkpqcMs98Ep14BEG%2BWcl%2BKMq3%2Fqgkv5sATdTbkfSTwIhALiT21f6ti7ln6pWPUmiSK6J87UZqsgrkdeCOK4m7nWLKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykXAM6k6ZNiZZ73o8q3APCjhgA0GkyA88q6mybiLf%2FVyVPV9lj3Pevbu4ICdWbgtNPKtFcBN8IR4ZkPXqJLe47Nppfm2WZn%2Bt21TuEAO1c%2BCdf1dS%2FxZl1yu79ZrRYOPYzqFBcsyhRQrRgGiI0ggoI8aI0V8uD%2F4t8F6Hthr6TIRNafQVjALrXSXcrlyhkAR4UNXPc2NSROHrS5DB3fTNIBFg7kyyfCJRRUpQJe9vteFrPGvdgSetSFAT%2Fl2jbKEhkaL0V2xj9rk0%2FuIWC0%2FNc%2FeWcdvhhMJ4z7uZSErsac6PooC0WFlbxcvrEkcZPF12BBulONTvj2Y8oxN56CWy7rzLwB9tR9zZlf%2BgpnlwOvcHpN1hpf1i17PwwH3hn%2FqcIsUJDfNa82q8H9UYRrdHE5vQEastxclctaUp0OlBYU3nVg859agkYA4bwbEXAIZOOkUcAE9bywSHO2SrMMzd2irG6tAI9wntRzYH37G6fLybheu0bETSDcUBWYfWcDX1m45XVeo5Jg9W%2BK3m2TVRqBm8oGmIkukyv6FnuQ4P66nk0GkZqSi5ij0HOJ3X%2BSzST8TkwLw1xzgAHWArhkkcmL1irdC2I6XIG%2BycN83vVLFjsiiYhyg%2B6wfxF0uqJBd5h2uW58LE8skalgTCIvsLBBjqkAW3ehyAH%2BDVQ5YCLYD%2FZXr%2BY6T58%2FfokwOxBlrIr3Xa2n6hB07SWROTMNN7T9G9PoseUkMeub2AnojEJyOuJ19rdiAnn7NieMUaoGRgKUaqxcG7vxEcVJvPW%2BCyjciuhdVaTaRnluaSxB1RMwuXj3sp%2BFkD1X8Adkdi80kN%2FMgFzi76cA5n%2BVi2PRDH2WY7uCnzP2%2FzxpdLagGgE2BayWKt09zeO&X-Amz-Signature=59d060578123b250ce6051fadaeba182e2617e75c038bf6dd12ee4abba5d0d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
