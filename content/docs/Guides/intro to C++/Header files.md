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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEWVALT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQGwEWmTTmOCYcDaSWfkY8jCasz0oboOGtEwJNGc2A1gIgURO8ZbWDTGZHECG1B3pbjM0kP5whL4ivpsZNOScRyPYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDA9xiTQWlzxSt1YooSrcA1O4JL9%2BVuImmZJjSPa%2F8p36moeAwcg1tNdYJP63ubIbw8GTOWG650nt5Ui6o9pR0flVuSSJTyFev0fHIGdiUMHyBb6YnIOTTD1bX2CJPYlcMkxZ%2B1GPdBAI3bxxn16MFTu7gfuyc41w7WWqhxidTyTbYW%2B6PtEVqX32h5JAQvouh3ivUvSDiwDhKseSKJBHFznMroqAcRSPi3MKsGsplEpa%2FQN5ICA3w%2FqgS5wd4QpWjhalQ9iofL5G5fd%2BzjD0f86zKdj2%2FaA%2BYPAKGk%2BMzvvfbIjXtXrIXKy6Pn%2Fkc5GVZwN7FKoEalJCH2f6LqC9MbqAZInmdaDcr%2BR3WeufFLjAvn5zHUjXiL3fi7rlYZgg4BtoSWm%2F9RBaTYDLwhLxZsxDYWHDtFrx%2FffvVj6HgrkV6EUAZCi%2BijqpoqT1U13kBothERS64wHug1VwRoY%2BFee82Ld4J%2BZD38oH2WNRQehIDUbpga6XGsK8vasJ4ZsXjjyPID2ZKm%2FYL25zeND9E4aAzwgXZ6XBQaXiYXI3cjDCmL3qqpo6R6vN3mv5iB3rpJD4abgeuKSIn5DkT09XfSsxz4Rsaq7lTkM6bdbrI%2BSTAH%2FiIr5Q43U3d0WQIpdaODInt5a9xY9p%2BVYqMPOx1b4GOqUB1vVNPj50q4RQhLtMd%2BIaGcinv2SgQ3xtL6EGc9wCW2mCLp7nsrieCrAS40habgP5OKRzeaBBCB5TX4BtStS9U%2FGvrW6ggzsv778NRvCX%2FDXiOY5vqz85kfDUeitkh415LbuP9D2FUYgq3798e9oSJuLeo%2FuUrIBaHhAyaMnbpR3AQQCBxa4zWRdDDyQ%2BSh6VFYkveO3NR0nu2KpZmUjSXaBW5ndQ&X-Amz-Signature=a4ed1ded7de0006cf22eca95ecb9ebb4b5b788d06ba3c29f8e03a9ec56750d93&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
