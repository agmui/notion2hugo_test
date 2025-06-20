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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD5376Y7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX7x8qWFA%2Brn%2BYo9%2F64zOX4oF1LQ08KVqPidnw7g7x%2BAiAp7T6w2YjpF%2BdVqx0PRcoH3F%2F3%2Fm6YI%2FjXbBru%2FCNZmyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJJHqx1iohHesiJhKtwDy7PdM%2FUR5qQD7m%2B4un2Xl3FiE7IZBAlLvJtgtYCKZh3vmqQz9QFYVHQOlmEIV9B7qt9al6yy7kEeRfMlmZQvxDqxs2IsBi8RjVjss63iaBMK8Yg95SmCIjZkYUXceTJuW2%2Ft1LGy6zmJWnN1WcYlrVCGUB3Bq4KbH1trQN5QuGz720oFFg6AtkS86AtBq5bMEEkl0WOruZsGjtnWmUwV%2Bj7Tpm9DseyGGvdzxUItdKeh3BHyWPRbpIvrkg2fZD8uj7XEniAM08MnhgCVa7cDEgavDpTcmBuXC9ybeRuamgU%2BPRs0u5c8CRpZ%2FzvPuP9n0xfc6eCIzPtaZ1%2FscotOBppZh%2BnieI5AEvhV9AV7ooWw3htyw6vgxA%2BWgJBX%2Bmp04DkK%2FSvnGuR9R2cphiAs40JHe5Jxxa4xAjvlO9jRYgBc4xTxM97ulRBwd2OktPgCtBIxA1GASq09Lh9PZ8mZBGFJ4auoM6k36HtJEAcejXZxHmAMWdsVGumXgxcMKB8uDuwg%2Bi6ZU6Z68AXRnHTc%2Fu1JaYD%2BS815dmNjiRkXQJeAi2arI%2BLgojYEPaxhhDE142r31K9mnrApvdymv5a3kdvhizKjBpRliJkFOEs0TbME5dpxq31MgHvP%2FOMw1KTVwgY6pgEEu8a41MS1Lc9HBwCq0365ZzxhF8KFdq%2BYGSEZ7w5nYrhDLe3pMXlJP4JYkzkDSKaR63x%2BICMpRCoTcvxexMfMskSJ0RTD%2FUfqYDR5zs2oB3CdoI4QIvC5cLy7Mzif2n1Xj2CyiLKWBloo2COVsrJILqHG%2F2Or9elLoEtb7Aei%2BqPxe1YSC979w7HO7UE1IRSOFgmVKD5lvqlT8BFvUz40yM4l8jqw&X-Amz-Signature=415a460101f568f691728a8f4f8eb8051ae6b6bf39efc72a9e953d68178e2c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
