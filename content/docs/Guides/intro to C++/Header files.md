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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4GRUKP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCl%2Bdb2GhdNgXwh2yAOH8GMzbrxXck3KDC%2BI5WQZ3kuTQIgaZcbAyQ%2Fj9uB3HfAeCg0dYzCufzgaftEI8XUMUvSuI8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3i9tnDE82vlBjY7yrcA4n7hAlttX%2Fuz4O6FAwiice4NoexyikqriRx9taQUjTTjER2inYz8gHHnu%2Bwxq%2Fu5tP9JXGJ936ht0qtELYyv2RL6GdNIkTR0axnzP%2FrMUbcatHT0cLfm%2Bir5UhzVkNN3ViLnxvUla2P977bPidObQ7pzeIa%2FC9C2gUCFQafBD8KPrOCuqgK%2FxpUvbGxu1IY%2BFURtqKq0KcImgy2ihhaIvy%2FMMHj2rqW0xPndACFBDA3YbTyGypXv00RrvNJMa0vZw7TdOqYsGfcbI9IoEpQ5QdNoO1wRcA3f3DS%2BvNpveFq4kTzmS4mlDwtQGZGXQVtU3VQDC2Tbi0AhGHEheTdePS79OXVPQ5R7k6Zx0LWU48a%2FcorUvm5S%2BM84jYOs2YCt6lb687%2F1J13gC5R2k5FRUu4lCUx60XVqhtnzTSiUmwz4G5T1hbho4UqIXKidqprDNa0FP77OLkH3ivVrueBmtW2qRE7SmkjOpUG7djK4CVzVQWfg6RGqFz2WKTAuTC1pNvw2eCwH4CDaVQNHTAWKcAZJKFqpfYEJxtEbzhN7JF024MFLLO9livq0Jqt3c%2BVgI988%2Fy2YMUyPsPJHN4XLMW5JU6JNMxdYjCZYrGqj9rfD2CPQuCNyTU5yR3TMLqGucEGOqUBUJO4UDoJFnFUpQ3uLeJ1Yow6O%2FH8ZN%2B0qIpuVoSOCqvWckxX%2BhBoy1JLFRbiQWD7Z%2FBva%2FKSk4SpTlanwnJdsIAoxnVypBIE%2BnslSpxkoK5RdyXbs5DqtgrfKsYLWLPbz%2FipwGmsZF0oAoTFJGrGSp13ZKACJZ9fPc9855%2FRoLfvZ3qQ69fb2foBKQpUcZ9x2%2Fmg3tA1ucngMksQsXO3lL2i8Sjp&X-Amz-Signature=9a60a75ac7480ed09369cadaec6469779c7def8b155dfaec14a7832e98a25dea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
