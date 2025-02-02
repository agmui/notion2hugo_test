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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNEUUOR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVGZJ%2FgqNZbv%2Brc3XXEPYLiV96ajzl7wA6Rrrh%2BqfD3AiB%2BPJ21NBGstasrfYoCCDo8cicDRh4nAKWmPupo2dmwsyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5B7u%2BpoiSBZ8QtTLKtwDG%2Fs6xNPe1WpcAJUKyVmT1BXRCeKNe0g91Q2QANt60AC%2BgtPFUyUil7tMyrcljdOOMqpe%2BaoXuuINX0MdAJGz34KW3brXAqJz%2FhnKGNFWlrsChE7bA7d36f34MhyXP58ZuYXUrG91P3ZdDbqRGMuD0cuq05eVFjTkLPk7k8tF%2FcApjCs3Dc66AvE3yTMwZkg1BVpAJNJDz6eypMcv9vTm5I14iUDCF42gfJ32h9bxqX84LEABXSbjAJIeBPvii2begT0iDuI35MOjc20Jiy3fXny%2F3K1YUj1ibn4Px9ZqVhbxxnmzh0sE2qNXrQTduO1q6SO8JQOVqVq3JpzzldiV1l%2FQ1tnOE3N7m%2Fyp3PMXuItQoA9GjjB4u436McxjR5eksLv3p%2Fr%2BpacwbzjkwS8VLgSjc%2FQxqnq1y7fq83KLm56DLlF%2FBbp8A3lS86fW1xBfQ%2FQsz08TWYOYnvxPZ1HzRdQkHdn7yxqMBD8MhLo5yALrB38XviH%2FNR%2FyGBo9Ey%2FVVbRcgXS8PO0Ea783bPAs5EyElxxCY%2B1pOZT5SWSlnRqzue8lQr640r1xp8yNaoSMUG%2F%2BiQRtjXKCff0KolLmryn7prioLXBNnvnHArOZCo3hpopZG1RTJOJ0IOMw6%2BL%2BvAY6pgGu1W0n0zrDcKeDWckv%2B3h2MUwSF97bl9Ks8tOYGBu3lrqfbCxbW5sYSzrHS5JM%2BjXTNXvt4%2FImIWl3YdyITvjqqAX430hlglIu5eCTHyg4jAQsLnv%2Bp8uitdbjiWNpo5fNDB0yPCzqkQuwidaoR%2BLvZxS%2FYAsCRO%2Bra5hnrGQb%2FyLVQQnoLKcLSmj%2FF7YeG%2BFRgVXqWMuyNEiC9MeECeEHg9yB65uw&X-Amz-Signature=7887cd9d5ed16023229880c6f7e4900bdb37c30dd18c9cd90bef84327e9460d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
