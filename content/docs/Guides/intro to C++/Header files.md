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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MTFX2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1rbEpYi4KvZlkKxOChOak5QfElRfhZKEAdEpAv4GxbAiEA6BL8ZQcSLaP1%2BxsIc0jD388e%2BdcHu3mfurX16z%2B68hkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7vlMwm%2BNFSpqJzgCrcAwATjUkHQkeToakrPjA%2F0Mx1Z5D4MfgtVvqJR7ekxRDy6%2B%2BZHTNaum4AFHgCD4D75wRT9MDUM7Lxi2X359T265sV25wnhTKQfB9QY10%2FXSJ5s3P%2FbeG313IOd%2BnGkytWNgqzSymVEOXP2LKeLH1WP%2FfxdN%2BE9XZWfWFT5R3m7ouPsHFsx3YDoDetNWrJYnOXA0Epih4N6a2dpvhQx0WVbABNR5u%2F6ovzd9j6K9dKws0RFpNNMKzgX9cIgRlVYx7tSeoihR986el6X029QsTnQLH8lcf%2BQgvhstPN3O2aUtgw8tJIscq12BQZV6Ii%2FjWRUoCUS68XGH2ov5ZxWrFszDwUq0owHwTPD8TLcVt%2FpzQyKwrAtqoNSijwnW4xJm3vfhWkOVeRKN7whwc0EcDrwIEwt5XTJTDmiR8T4Yj2SvlGqdfK5WzoBIdayYu77Ppf9PBR6Ks0iJ733i8TWvFmZtBecvHGItb%2BQDU2ra%2BVsrqq68LSUOQKL2TWhZLVHvEcmqln%2FRe2mD8q8i88KES5l%2BlN%2BY2rcYdj5l5yvKbVkHwZf2ZBVrbR5bfBGeb8AZlTnDX90zyegzK3yC%2By9cGSSBl0ziDlACPwXoklxycnIzF6gGzoRCbgqKpGrAQGMNn8wcMGOqUBw2KEt2MGPQzqnNf5tFKervgUUerHuotleOnz8%2BcomjL6UlcO2ZmJXVyxxGlLrHvL4WXRoP4JikNXNl%2FUnmtkDTQAkpYg50v8wQNaRyPTAsvC1ci%2BN9CMEpuNjpqYzCJeZk%2Fg7dPnfwAPx%2FiYP0J34Nn%2FBSTtroKw3gLrfRjgVuZ6zHYJIGjKFiBt9rCM9p%2BuPR%2BJlvKAlyL9TpIzPpyFkF4i%2F1In&X-Amz-Signature=eeeefb8619a37af37ff6c16310780919102f3e2e446b83fc31c40e957da2ef40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
