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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKDKB6Q%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDFEePt9ddTbZu78UJpx7Pq8aoM%2F%2BWyLRPwz9rhrSlqrQIhAK7pcNfw%2BZGtNml0s0WWAL%2FIfHowz9NdznBbMiqa%2BnRoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrD8LWfhoWDTG8RQEq3AOALPkDyLoKXu9nJfMxqZqZ0%2BHeJOm%2FUYvFsBa2nPJNUOqZiujSBng%2BdLZLo%2FP2wtW71%2Bm%2FlsfIsWazUW5SK798Mg8TxGOA1Pg6naDOZhfN4cuig79RN7uWz%2FlUx3e7aliH5AYdSR8GYgAaA7CLEQhwFMWO1WDjfjMLQZ7VcVMvWgbRS1C6UayIHdiz3kThKg2vKxtswTKQyBkqxBhlQN0jsUBzt1A8%2BT61HwLqMP5vRLboqD9B%2Fc89VcIsn%2BKRJnVL2oje9SZqX9PjsiDpCLBFUSBHIg3xOt34wsEifEBOkCUUvnBa2kFPVQgiLpFxYZqh1ZDEMT22r5Bb1Kr5U53G9XmzLjTdfqL0UpBvEVD2p%2FG0ZsFuaQJgsavIUUCMMcgms3eHiA2J3XoovE4UNmPQqPJY5ARP3dseaoLSBkJLGaLO9CHqBJee3hDloT%2B3VW9qAimFoD1ndJIw3tRZBKXgzDEu2NLtV9BVeaL0jxDQYM9dbKlCKOZ5CRHI63ytfmJs3%2FYdHm%2B5unMv%2FHxphniZ%2F1e8uzJZ5%2B0vSml%2BY5iUtaxozvxKhvRM94FlYJ4pN1D0cM6vdJJeqAp4u3K0sC325Ubf0KjO4IE%2F1G7mzreZVHjm97ghWmwcJLfrNTCIjY3BBjqkAYpC1IxbRz5Fi9vhmy5IzvcsZz40NLDs4NLSkpoAFFeq%2Fel9viaN1tz5puJum96dpLlL%2BRJ3nCT8UvP6Kk4COL0OYuBS%2BhjUwnS77Kif355JMC5hvEBDBx%2FfnyplYVs62hUOZeq6tSXfE%2Fdf1IaSMVzQky7%2BqxQB76Ee5YnomCjVZREnU0lVJi9j%2B%2BnXBQHx8GpuJgvUXWSyKxcZxg%2BYDqZTxULu&X-Amz-Signature=4dde650b0a7801cfca4b7777240214fdda2948ba62bd722bc07824778a75187e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
