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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VU7DLRE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEVkYPpIe3TUQrdoTxRuCCm%2BQQkipcQ4oUvdA26XpYy5AiBL3dn%2F4pRPnMzDWKVQnZFrqCe5zTfE0mpaSuyWxVhURiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Rvx%2B4lkh6%2BGA%2BWPKtwDs3Vfjn3KhbQ9xzxodDuSeshyBss1GFgQjS4jOL9GR6h937uOnLl%2Bg9BqwrOUlgocJYTpgdnq0iY4Vtcg9XIm6l0i%2Bl%2BChx1V%2BU7pLRk5G07UfwTaQ6XdTuit9VzhPoNZHNphfOyKugJIqTzLksNrtwforjcXO%2FT7cEtuP%2FY0sURbff%2BztpAtRcZ7l00RnGULy41pWYeSgF3xN6OC5%2Bk%2BO1jOt6NaJwhuidsFr4WWGDGnd9P3Vf50qqu%2F%2Bjisq4lf6zd7Cx0HKSBnhrnLmSOa7j8QhQn6yLoRqHDi%2Bdd3fvY%2F1s%2BiXH0QhAsm2JFRlG34lplSZzgo8d6UcKavnbXNebAyqQB2Gf%2FxzC0dcovZmlE%2B9FhXSRP0k7PSKc4QZAYUTevcnyKDw6l19tg03FSVeygP4nCYrPx%2FzJKIAGF9Ee8gCwbr%2BOXTZwNhOI7x%2FNQOWHCKYzUAllrI%2Frovv5pd9J5sVYT5D%2FAIVSJQuQaN7fa4frLxW1ZauP1cnMCIQlIc7FebPtAKwhb9mGnj5QmFSvmXoUBd358yxvUEXSizrGIBAmpo%2BpTZvtsvtBsrzYB9vfqI%2BggleAB8n3Or5eYWa6A3hjp4%2Ban%2BXYj56GPiYg5gynox1RmcGcsMWOswyc%2BzvwY6pgGGfsNw6DgqmFHqKiR8KI7deSfZENkVbDkuZA0F4Zz%2B9C%2FsujgXULz6dDllIKDrP7cyFOWQwmgy9QWoVN7fgW3VCpNss6ZO2LaWXfbYaCf4FX0aT1mn3knIQ3Lrh2%2Faj6cWMjQBs2YXHBM8cioNvF38zAVNCPrFHXc%2By9PqFh1y%2BOA1vxHP%2FFkc1dximU35qAtNLprjcmYz4t40232x7vpbDNJw15d1&X-Amz-Signature=72a48092c36c5b13cd71ea907c47b749507a8c6eae5ea117f41c4b5e64a40690&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
