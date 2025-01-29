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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TBMNEX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCee1I48PDXAsLn9OrBOUsMTCmt%2BCMyywVOXDuWNuF8jQIhAJ82E5%2BI352cnNsb%2FrnSiuZCIkI2liiFzxP4ryXvwZlWKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqjwANf631ubC6c6gq3AM1IbdQ2bFjkjEUglqUpZmdyiYbjj5GJoKR62TWidygkWGaPI5qOxosD%2BV4LbMgjmSqnE2FxlD4oRcQ4QqElcEBFxhylDHRPY5KqgWU%2FI44oWz4Ab1VjgivsPGTkZrK%2FYbbtLhGLO5tYYFiDmiPxmgyNXk2T96d98LKV%2FjubcVZKbEd37%2FiNKX2WiB5hSr2M2jsKNDnC5CH2mDmEaP8BRMIu%2F4I3s0jT04PUTPGAg1zqy42VXByQ9LgKCP4h%2F5SZsOkvb%2B9tRfxoUNnwh0wEF0z3YTnl7PE8NiRrV6DFnytk5oOYQHnYav%2B5md74RNGftuNJwSKg9kraNkrTz8S09bz024viungg9vk7ebToz5CEpI%2F5PDJ6h1vsmjQ%2F7QZVzrKsXOTv0yzmoz1aVuiaYPpBvMpahXc%2FsF64rrAHNb3WZCxLPVS%2F10Oyy5830VwGU3q%2BTa1StwJindWZEPY4UJg8mH1UXvB7EfRC5Cff1q1HkV9GZG2fpwAvenihjJH5zd8kyRIJt7SitdaCHM2CQvjcFNIjY5rzYGDWJQjv%2Bh1yz76KfQgwim5x5F0r2YrCbeyCnc3Vq%2BRpB3m%2B%2BLMIcV%2F2HL4o7lHZPT2GJ1Ak%2F2JI%2FQSuIFSxjsR%2FN%2BbUzC%2FvOa8BjqkAanZyLhgv9urkSjvNwl21GPaSJsYJzzH9PaLwbCQRKhFYFLwSJjOozHrAdlv7NbKcuXqSimkbr06MT6l4LN%2BXSNzgL7cWkkPJWp1vk%2F39w565bvvXcOm4TdNVXLXT1VlB6rMaVL%2BrUneHUpQnEM5oRO2LeJ%2B1EgLlPq453C9MABRa2dvdIUCUobRJZHq1E026xF3GozpvbJm01Vra%2FlWmsWenl7q&X-Amz-Signature=d3e2af8785bd89e8f703931ba810be82e9cdcb6cc74227cf26da95bda384ce4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
