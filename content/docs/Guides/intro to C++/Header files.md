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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=8a91cac92bfd084c974e197e19a3a58ed3cc6d09f2b727b2f9218a1a47fd7ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
