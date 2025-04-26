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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHDLWCD%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu6skpU%2B%2FO0ThwSFFOmjT51iW2QWUmCyX0plTMTGVmwAiEA6po6TBFa3biY%2BFLOtyMuYlLd5Qzm5tSI5XDs3wWdt5sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOx1vsuxWYQqU7qhAyrcA5Q84nPoWwdXUSWu0%2BC3uruVXDlFwgSrTZFL49h7bWZRvDtGKQXUi%2Flc%2FnIP%2BqxEk7yBOdFmMGPWuYeD1sqOvkDoFUk1D5CrtnieCKsNOgatN0%2FbqEHjHVhfcbwCvzo5ruCkYgcZcjDjoV4i7yVf%2BKV9WENvZutGaisron37pk8%2Bh%2BZpZDeligdW1NWkOgCoKdf0FZ7%2F5E882HP84nXEjZunSOQuE9kjAVax1FcMfQJdE%2FO4w7iuUwPPatV1Sokn%2B%2FdP9MUnXarqgJhlfM56bKkEMXDoAnkfXk%2F2RVXXTvVHn23eWilqs%2FhwKeb%2FKJGmfKE9OiP4iQB0uCYZUUHUQ6SjBxM6bopuKGry6sj5LsvwHw2lbjrO7I%2BDCtRdqxgzYu3uQ2fFnfFoG0GuDZzrjbFkbtty%2FhWAx8T9Xj52IPhwzbj0AQJSgsM3cJRh8VJPBs31DJONF9imzmY%2FTPTPdana768tu6hoKGGwEdMEE7%2BA5DRTDwEpWDMB4uuy81ZVD%2FbGIlbbioCULhpw8u1heRl2L%2BA0M1plkqUl51DUr6O9m8uRMzBtb44DNhzK0PKrz7l3wzpmH0mqnl%2BgpB09c%2FlG7UBz%2B6TQkagaeLDnJYo0Hz0KgXwsDVel95vfML6EssAGOqUBASzE1tDgd2D3tgeAT%2B7zzZlDyLHnob7qL%2BBL7vO0QPXZ103%2FXW9CJ7SaaAnzoqzSFPYzoLlVAkAlIEGGR0UQW9VuC%2BY%2Fa3zrv1PD3BVjmA2dh7LKm7Uc5GowB9Nv9Mmu3VBLks1ahMEP0iauGfSjCs%2F9u%2Bf94gOaWKix0w1%2B0%2BVnwYYMmeayYieK1be2IoGxdFUW1IE8i%2BjlTGoBovCsYnc9qN6y&X-Amz-Signature=610a3372d883198cccf278b196bcb85b4444f5851a73a2625c8ffa3be5a8736d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
