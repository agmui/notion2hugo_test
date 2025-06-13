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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KL3X6P3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGC2LUBs3OX2Xu8VqZZgbtmMs1mVPtSFvjLv4gUCjjsoAiEApRGIdwTbxRPeChwQxpbiwv1rbPJeqAnebdVn68DEUT0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIkvB2%2BzPHAkT1cCPircA8%2B2ZcJ6%2B%2FB8fqWuX1otK5ox6XMZuHfUrfRP%2FnxLtxFqySaU8sAcN74o9ZkiiK7Xb%2BdtWlLUBKt1RG8d4uKiGXLIMzI%2BazNrOpk1Au%2FepUXrbOmlbmD6HtIREyGwKDFMAjdIWWW1Hj4hdIR9kLhcjw0E6B32NBc1kfo0smOTL3KVvGz1zy4XLbACyHpxENEU1d3r%2F836WWuA9ekKs0DfzZtYzpKxlaqGSrhyxlr%2F5jpabNjrQ5mbtxbUEaXjWv%2FbZU%2FjFxKmsMw9dAUrkTCqRVOwFVaUzOH2UuBZ4Zht3hwizwiodIrgLn5552iZUcyfXv2POkiZLB5WeCQmgjs97o6q7QRVule1jlmbSVyuoOipH1%2FSQr4gpb1oDd%2FOj%2BDGMWY6whaJY7T%2BV%2BaPN%2FPIgn4xX5k8%2BsQ3QV7XEnmjN%2Fgf3K%2FT5lYX3DfFLLQ%2BzFnz%2B7BneqDcwlW82eIGrFJRT3IWCsMPR7Kf1Xl8W%2FABKt4WGQb8sCzHEMmBNofOL78zfVCaw%2B0Jg4hP2RM4wcoEmgsxaPmU4Bg7u096TLYCzvZZa1VEJgt9zIg7CVBBXdTjf5Se%2FN%2FB9SH7rDsLPlueJ1AyuZnVK10yGh72fC6d7uxUDSpSOvk%2BEy8V184dMK6SssIGOqUB5oDClHSiIk%2BMj4JkuFxeuykOxy1Hentwt7hmEgMaKmwQe1s5i4bxy56axndo4MJx665NxhfxXrV97SvWcL2%2BCuSSk94S%2FKRc8bk3Lm0k4DMUnK2ce7cPxYNZsYT0cbWWGvwti2kUlIFH1aLbKC6FNV02jhHagxF%2Fx1KXx1Kj0izcKmj46yuwWA%2B72YDm314warjm2JL2XXi%2BxVgKARQz9tTs7yiv&X-Amz-Signature=ce06746c011052dda24cae99a710579164487a8d2770619f9b5884518222cb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
