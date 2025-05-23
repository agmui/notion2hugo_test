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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGB7MLD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCx%2F8%2FRGdERJvRm%2BQkrFZKxSwOKwJM4efqnwqcmnfKZkQIgNELuOLvUsZnfaXxMeke48oJU5qHy1PQq0C7cyu%2FhnGAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETFyo%2F5CIld2UkOMircA%2BCsECt%2FPYmvJ%2B70Ba1N4sNoElk2WUyFwdViMzkvOSDPRl2h2BXdNZJcMeotvqx9JRt%2BMQmc0OhRBvDx5KnzzPWGceLDqZHaUzmHvOH%2BQ4XZG5V%2B3VL%2FxYSo6SH00gClQ%2FqkHoXTZEU6JfYfJOPBxIo%2FSXspRmrwYnLd0sM8gyReu7hy0q%2BEAz2BiOcBfluJD1eD3KlA%2BZZ6eBU4BHVvjPEi8RIbXP39vfRrfgocBttdMMbt%2FkcwU7ssAVNbocIaq2vODtM0zv3bVspvyrjQ35fBHYvB0aqvm1cHy14HmbbzpfXc2%2Fc7uGwMC6OrQp8duYR4nVvEdzV49awYX2JAWbJK3see0f7PPfAwJaoS%2FU6FCvLWT4hdKqMCaUjFYbcwHxjJ8Gg%2BuHCymqcR11IRa%2BCS80R135mQV%2F2kcD%2Bm%2FXkwsqZnz0tN7KYatUYOfkhsyQZO8zvOD5XTehzoPW%2FSruUswhQOHUJIY%2BkS%2BgZc3yDtL3cyJeG4CC8wtP3rNcq4J3kj0mGsg2ByBpC6hxZzJapnwfcrYmopPqAH7c4ryEqSYN1ElHIcKUq3z7IZISbkVOcau2HgcvV5dueEf0QWc9f92%2FUApEONcyiaq54JVDohOXIMl%2FXM744eUsb4MMPywcEGOqUBDpwfXv9lbluL1kbJ2DrM8mwNzdnMdOLbTjTb3YuJfzD%2BupLrh2d9RQCjmzmXgwfhxOKBFSPg30452Qn3vC1kJaz5vks2sDU4ACnw05sxfgEaUZ51FylU2uNyLIWzpZWQgq5DkbQQWwEwEOmqSqbhAEyLNntNKBie2xdVJCnNLU7toGtHPCDA51Ku8FyqaXu4qWGEYPHoZTOSPPH%2BEZ9YavaC5z1%2F&X-Amz-Signature=56da83f430c03f94a21b7f9cea37e5514f3bc861b314e21020ede13cfb8a8325&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
