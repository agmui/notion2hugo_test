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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQUXIPI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHdyaW0GcEFQoKL0JWncbhj295%2BiHbW8KPWhDL%2BJ1hYWAiEAodPT2vCHpPlBTGFyTqnAPvvpEFczUfYAM0jszG3exOcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAt0hPRg2wkj9wyQMCrcAzs9q%2BECug21tKmJAMspJD%2FgoDijcNSy%2BwEV2hmXjg34Ks1r6zUzAhm3GhqRouOVoXPCITOyEcWvd1fY4%2BJSiJ7XOpdKoDTOzE3ut8hF4hAXhIGaDewrwhfMMGobX%2BmWIUSChRBYO%2BSNRRy%2BuF6pExI8dvFyXLwgAlHOZs4m7cjOhLiDGVC%2BnwiqZM8%2F89LOgTUxJl0ErmaAG3ODl6rG4dJSbIfHHTUQ303724v8DGzeKuqnmZYq4bf7Qt%2F5cmIIkPeHTcSc7L6HzE16dV0j15eLpunoJxkGH3ij9OTQ9r1fxEdGy4JBt025V%2FeRPMt%2BLxjcX7Vs4PqI40%2FaCkV1jpLfck2MTzBuBNig5jxai6jwgf5veXyGH7dp2wvmJNlJtlL6NNwwmhwe%2BskDAUUOJExHSW31JS8zhG5r4A4QZJrurAnnfNHzMC9ZCQ3oMH6d3ys0zwYnqUa1gsnVH02xQ6YYLgl9r0ocqbp0lmGEB7nIG%2BhV%2BQoIqAYMDc3fJWw%2Fp1hcfAbAtqF6n7cGD8STTP%2F5YXDMYDU5V8%2Fsw%2FI1oOXL3TmDYgdryAgOr81Px2E%2BP7dx1MrfXnARd0ASzwlqPN6HKPc%2B1LnFKH2vpqqFS%2F91ywy8nkTmKfYFrLKhMMGD2cMGOqUBbiEOtUQZ9qk463bcVykyHyKgj2wZFfpsSRS7QMZbjAlzm9qDmgpYaiUl%2FhvcRIbY%2FfOluf%2B93IJApAla5VrHy8iAx8vMzREZOVa7hPhpsPEDcKHl8V6RdxCK1%2FASdya95FmsEE%2BPTg1rdHedImtScCzU536ad9cLhgu5Khj8HCOYnIs6f2b413PRJ6r2KrxVO8unBeruZYoD4%2BZyp6SAO%2BV3XmAd&X-Amz-Signature=1a3e7d29047441ed5ba2a7771c724724258d63df4de752f27857aa5fb8ea2100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
