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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWHS4WU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc%2FfwXXB1NjzO80S%2FcwxR%2BjwMRWEPPyDYQ7eR%2BUCmGxAiBAmAb8so7wBs%2FKu%2Fut3mAEvojNGk0iVw%2FUtKHj%2FMItHyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM%2B4O9szFWzrhpZ20MKtwDAe3AUuYYS7oncyzB5TVmpljgswMEKgegaqcnpX5Q3DTwg6%2FWuMRba7oriCGQIgsui9v9QP0MVuB2j9sXhsDPjyFufb4frAiFOWimdKq%2FuOgtVBO0gyR3NO6qryI2OzQLYSO4W9ms2P9P9Q9dpuQ89n4tRnSkXECTBwnkSq62Zb7F3Y9jrz0CDdBaGnSiqfbx2uYCuetMd9GReKIoL1%2FJb5AHU6xS%2FV7Lwoph21%2BHwtmg99egxicpH3AHr992xibWXquzdr8XeOYXxFuPcOpcUX8R4ti8%2BxAY130J7WeaSYlSy8NKB1m7t1xIitOxiAXa7WZ71CBYqSYBT6eH1vldFL%2BqhHrqYpq7yxWPl%2BqRm21MPcgJAqIGbVMuLveVqRj7ABTVaCRfRe5RLF0fTAR05oX28yoh4ddiEPPndAkex6nck4NGECYhMWNQFWKDa7xhCiph%2FcTHsEhfk9VFY0XwYb43FWWfE8RZwBdYrmHYzu%2F%2BIxoUlXtXNut%2FgIihW8GqFKyBIZmALSiTVTWxdTjBEkYY9C%2BkPvWiSgmAKuChiH5gJ4yPh83KCgwRJsev9LT%2FS%2FTShmO0N4VSGSalDaGCexdxArrYcHZqcfV9WnMTr8S8cCgshPp1acwPxm8wsbSdwQY6pgHrtit9GIAVAfcebxrdjmohIYRB%2BbOc4MS1nwHql%2B%2B3ECQXXDUre9RNfu%2FfoRxILiqhbpcihXrbAdmpCkNGqGZO5NmQ0njMGUx%2BQYrJmRFvIP3Rnnq4v2rO3oWVuek%2BxWgzMDxu1C%2BxcQqRYmAmhkDTKQXgeFItV5ZgEOBcBtgAwXRR8Ll87FejqM9pb1AXucpllqBQw0EM0z76plsvLEHlMZVoXx3e&X-Amz-Signature=f2ea0d5c93232e8f0a979df6694854761d9bc025a550e19109d77d38c751a07f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
