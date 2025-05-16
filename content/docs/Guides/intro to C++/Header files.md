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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CSZEBKG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn39mV69kedYgivKSuPsCql5ZU2eD942akyAD13DIPPAiACWuDHYvyPCluLQiubzHDulb%2BpqWWIgozDQ6PBgryyQir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMrSbeGrwfYNPjWZpSKtwDB5WYxdSEYnmpLkem%2BdZtdBThnMZlf4Y25Pg1LWPX9e8JZ80wRBbwrIJi9ykZyi8gZ9cKv1mYa8TkjZ%2BWpdKUhfpQIBqt3f7lSQc5Ha2Gz%2F%2FAtUomAuyZuKqA2cw%2FOq7z0kThzUjG%2FDHBZ1oOwdQgwe6U19xqyGopgx9egBkuB5LALv2qjbzH%2FVHneyv0oNwXAS6yp1WOlgY%2F%2FCgTPAkAh24FMgaZf%2FVOykxlMQxf5kb7m16WLkyyKqyO2KqoIe4574si%2BpgvKNIt5ZMuSjcgkopZNt7tK2hFcxwenkO6iKEBntH4T%2FstFl7fFmiegWSRE6z9X7%2FPXUvLUQBVinJbJvhE3vfT2u1V0KTc6PtJ9gJ8mesvfpRIJGHp6ORvg%2BH%2BRxLf9pewk3rRLJauWyiLVDz%2FeTU%2F58sGtPQiL3S2xbfdDSWRVKN0fxz%2BSV6LPqshFwR1fXTIaM7oleVo0ObzFbnYyywXh9%2FoCSRHqQbqb35GcOp2zg1viX1kFEuyF5hUoDqZXCDfkSGamS6BMAGHfVQqUvYymYtOeN%2Fz%2BDD%2FhT3UOnKIpZ5GBwejScy7BUhJHkWObwjvfLtEvOSV2DFMOrJIMs0a0UxptRn5PgyIS0gB4KWu14ALNFXx%2BN8w76ecwQY6pgFweD5%2FGay%2B1CXYfRKeZn0yK1Q1bAKKqhHwP8u9kcddmaiGHTnvUc%2F1nMTZAmthWLL0Qj6dogaRB6RbAADwePi19isUcZFV%2Fe1f2GiAtjj7pfIrofvnKTYd1%2BW461Nrak4FGmroTBBkQGvV9TKu4K23%2BOZEyAO%2FZBEtXmoJ8bMPHWHmLIQ6JmtF7izbqggijIAnsGLITRoRjiIHY4HNCQ%2BaFoNR%2FmHA&X-Amz-Signature=4e88bbd5f4707c20f41292f15a4bb07a53e58579c26db7d87d83250c7eee9c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
