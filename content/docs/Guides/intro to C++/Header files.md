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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRFNUI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDw7P6NDT7Ha1tUk9Ym5wcsGtGpisAvlk5HEsuBphk1KAIgFO%2B3FVx6hr8Q%2FCjwpPI8J124uWXMP5dfrSufUd%2BAGWcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FJS5deG4ZD0mYecircA9osG5SygkOn5XyDheT%2BJHOsuBB3sDH46ImUkW1Rw3qxDfApN4BiAWU5w1RzUeOrPZssslxaZVONh4I8%2F0bLtl%2BunA2RmBRNdEdbRjr0fovvvNUmDAJH3LeLuxoV%2BKiOjxiyee9GUBquxi3e4fOnHP9XuuEYRuWn0yWu%2FCkJZRVpZAW%2FcTsY91HzAmG5SCj2VXU4%2Fm6MvK8V4xc18aXijm%2BwCGEJuG3hbGC7SlVvblMDmNzsx%2BujqAG%2Fo%2FBIOeHj78JD2NSZoiTqjMNl8yMXp8DAofM02%2BIy3yMyIO4Ae8rHjyS1EHeaf0u3ou9%2BcORrknXKrX53MlnmhnfxWJ1wZjpFcqUsPRc2GnT7EmdfWHfRvfTN6CITQ6NcLM%2Fp0QndUTAlIVQMGJUm14ixZr1affBBcoMYs1uNYYeOtDFcrOTjfo%2Bk7bBkriegzPrTCKWCuW%2BNeC2BdEGojUr8rGM3GpimHaYii6FuVT7AIVjonMHzc66SzlqZtOISpeGhbC6MU6CY8wF7mY%2FipBsb7bneMtnK7MDPNfXNgGcKmjRmXtKNvCpCYCRn9tCjRfdf9znW8XPYERToMqYlaAtQna7SXETrA86xGNzNb%2F%2FynpqYMM6d6h6FKsSz56R%2BPTKXMK%2Bfn8AGOqUBBsHYNbJ6GDXlWqUO0iCDHeOuZmO5Pn7jXMTyv%2BiIe6JbickoxU%2BSlQauVp%2FQ5RHfO0%2B2ZvQadAr4bLKLARLXmeAww%2FaL2%2FGXr2dJBbjloVyePe47ZBn4%2BV8DqnXXTDhxkF6yWjmFMcj6aOo5eoi9rgDJl1nw3P8IVz7RolLCT2J5blg1c2nM6jSXJNkeuugC4GZnBzuBRt9INV95bNug%2FiLGyMKu&X-Amz-Signature=bde8229e06b45580b3c133116482059c40ca3be57912c5d4f05e4dab7fee3020&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
