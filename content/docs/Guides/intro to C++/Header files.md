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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZC6SDYA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD7eqb0XjSgRRTaQAeOVdAJRqAvMBs2xJnr6vXRvhpYgQIgA2Vk5yGZQkv7L9lwS2ghsUaUgxH8tXRnG7w6WCIIg68q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBDnjeTrrNWylKeiZyrcAwW1ktV%2Fh8cjIjzsJD%2BQN6lAx69R7mF%2BenMl5DjZMrcqBG5ZFe7X9m%2BhpNIyor9NaRyynQHWZwwvzoQ9JT2QBvL4o2PBEL8kg4zltXZAx312pForvi%2B4RDHVv61Pj5pjG12%2F9tFnDPI8U7ja1YdfxXQZKXIvaAMrD9yQZViu3escoJsxBdNZ80fXV4nIW0xKLhwE%2BnCH3xl7BD4MK%2F8lISpTQdU3QcGzDl%2FiFhHdgHHahlqPaU2qqYAURbKDhJag5W%2BWJ0dtuOEaesVnO8heXE1b%2B%2F%2FwNvfnz046165T0cX9Q6S98QtXnjc6dMigY2Egx3SJm7aqPb7N1Uu1BSwIw3QL3sN1ax7pEXWzwhLQMCdpah50x%2Bi%2BfS9%2FT9FMRafsRaoXF2dMxCN0PnXpyH13NTqa6zl8M1xP4r5sqXcDAf0JepMYZvMfunMcdnVcTzeLEMS7wyZEliZYCw48zN7M9zhB63iWk4ghVEaBf5kZHEl%2FBjhgQxz4D8B9ikcEE%2B7rskOTRImBqX6or85VkyVKky6kAJcH4FHHdyHaLSmze7ceJ02RqZt1veqL%2BezyE0gIHdk%2FaBIsakx1JU83sEJoFO0LTehh%2BnCxLsYOHp8hVf60kJcV9Hz9FS%2F7ikpTMMemzr0GOqUBGULu3aZcenrT2ff6HsAMowWRYdhjlG9K3O2e7uaZN5fC%2FnBRWtkx%2BADw%2B30tOyMwHpHNqwtX7Rwv9McQb%2Ff93vQAOLzrXXjElFnsDENPPb9Rl2LwnCD2nBw1YYU0%2Bd%2BETXCzAPfew7lp8tZoe%2Bu87V4XmVKNcT05%2BMser7S%2BJjen3jjWvHzaQl9SaXrClXh%2B5DTZuM%2BSwlcuT1aXVTYZFfJkhJ88&X-Amz-Signature=bc2d010a3a3d3b2922c036ddc2cb027012b480b9b8c16de622591b3f62a4617b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
