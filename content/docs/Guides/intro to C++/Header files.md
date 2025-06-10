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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIWX3NN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtoeO34P6Z85z8lH0gkJi9Bx8mpCTvCM5JxOsD87qkfgIgS3t1Bn8rB0i0nwwoBpDdAHHIhptmZ4zRX8nEgHZd1zMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRW1RDcsSoRxkPBHSrcA4035rRiQtjW0kx%2FirlJK4%2FFoBsbS18Ntvr2VgieILnW7mqtD928MCWuo04vvbxNbUX3mmL9fCjzDOQ4kvRU7e7uroH7JYv0WZmrqVw8IW2Mv%2FE0NL5D%2BAkw8TV4r26ktFSOewnCwK47FaQP0UbD4O6F09HxQhxGjgInwq2eA6dMSAmgAo%2F%2F4n2YM3KKQLc69W%2FrXzP1UbEA3l1EIwj71FE3rLpvp6lsBhjIBHZcXL%2BwJsDDs89sY0zPSHQWm%2B70n3%2BicgH1cQFWYtcb3y6xXct%2FwWzuHpWpKHWs1RebyFjcISGuc%2BuyVAEW4oFSq8cXiQWpyk1pJklx77rTQaX7zMy1gHreyvPluAOg2HORMocM1N7NqKE%2BhQxPeRsbXDtSRFA3pHGm4puNvZ01XQlcWa9rAok861bOd3ocy2UQn7paYfRTqWYZdWLGJbPu5GNwqSTXoqXPMQ6xAFtKXE4rE5B5c0us3xNXp1Tsj6f9NdFL%2BsbF79C8e4bbM12p4AWQqQLgOgEN1VaaXocoir5HWF3Uy9h4%2B82j0I8KszG2sJCzd2tzkSfBTUqIfRLAuzqgr3ICO0lc4ohY8p%2FYBUiZhKQK2wddhu4wmXVYsH48kN6PzCPjYSYCAofnBSwPMJrLocIGOqUBw1Ew%2FPSegeMaBBSSySXoj3iRIoNMfzXPJcXDc68c3Zv944q8xbSS%2BRDpkiZVek3a511otauinYjAb7Jx0PEMa%2FrfV%2BWh5PoDMk8NjZ4kXHfpmsLV%2BUJxMGMPgew%2FImNBa6ZeUZc%2F0HfHOXFY24geLBPnP5Aemo8Az%2Bv5KOTeWAgVAbmI5CqT1HbIPjK%2Fj6BZccUr6Q2pXvbl92BlisXMqRdt7qUf&X-Amz-Signature=ab49851c22710d934f368d9772e38c09884830dc77be4b964dfe67a11075e189&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
