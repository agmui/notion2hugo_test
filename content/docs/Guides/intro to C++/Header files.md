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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ZTGUEW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnwatSv%2BB3rEgiVXt4e1%2BBYjxdzod3gXKKr4Qf9w%2FfuAiEAy60F9l0%2BTyxfRwD84Yw69NsEmcWhzZYcbbEJaL%2B6JrQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCktk4EErwrwi8ntVSrcA%2F3CrfEHry9%2FPclrFTHLX1kDfwrgYxhpSNueoj5HL9CzklmxxnONORfVtHx28ykv%2B32KfQct57vakXhXVlcUOxET%2BDRoA5yPCKZ0su1FGNNGTB93N9nztJL0tMdGDFG7cS6HRPxMlUqopm%2F692u3a%2FSPW%2B1VpFaMXHNRz8ABY9IchTyPi5OO9p425M0ff%2BnfLjzQqbMuIjbLa0XcEfewb8CFdbJJoeiIkif%2FhkOVMz0YUT6kXJhkR%2FNM8vLWLgvbGian4L7mgcxdGJ2X6YKh8vxet7kVmzPFJ6ws6fPLqZlGagHUTscTgT%2FqG5hGiYIgf6ZYPKsBEEg4EcBLqQ5bsAGyaXrc1q8rpxHnvVTr5GZnzDqGf85XH7LHjO3miac1kMeiMtYH3Sh6q6kNuFs82CvxaoT6S5PIuxDGNkqIuty4d6SwHL9GXL4wagXCYHl3quvjMQFE0ivBlPjeeLWDeWFNyGe%2F01XQMt1XbO3jp7EIyzcc%2F5%2B%2FuKXK4FQxI%2FQ8Dtnp8fvCHHSHt0EA%2BQUbeWOuDSxKfh9%2BvU1X5jIKGhF2RBjliRzSSE6AUCN09QI1Yqe59om5ncc0Dd3WIGIIr%2F2NkTj%2BqRb6rTdOVqaES9FghqSJ3aSeHuOZ%2FEfEMKvzysIGOqUBYRd7RvEcetFyCY41YzkB93OS1qi5hUAcfkxhRuFgij2ijPS1tqXwIpomRTYUserPo5qnLHoJkFKBnfhd2HF4iOv6BEDM0Z8SL9rfzNY4M%2BH%2BK9Al53prfj6QxJjx0G5yTYE%2BhxYisZCGoQjCs88pB8lzBq6ycObK%2FyeBfXL%2BEkdxNxweeJcUqLYhRoiSNkYk5%2FYztFOyaq8%2BlaY3ptDqwPWNrSwM&X-Amz-Signature=3ab8ae21cfec0379d9aeea3843df2afb6c5b2e48edd9248b85302a0cb8792523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
