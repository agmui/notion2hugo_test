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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREMZEX4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGp5RQrlPLDISst%2FoV7xjdgV%2BrKahc%2BYzqj6uq%2FTI46JAiEAqDXx58EDT0nkOo8U7SnY3NIooTsmcq4EKWA9s%2F3rlR8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKx%2F1swza2af02s3VCrcA42tfANHQ1lZ1mq9gMQqtcx5SKtKmR%2FSMpO3cOUK82VQpWu%2F%2F%2FW0%2BDopUlJtSZ6QZnVdNjdzAr04zW5Kpru4m2b5v1QP7%2FmEXbhy0n2qte0Ke19CCy1L%2FuyEYFVYXOkMhisM%2Fp36pAGHqwz9WcinFWEcBuwmyIlcdBfU6gc9e4ZYXe4XSjaJy0UJABWN2j%2BYTAsKBEiHJrHQ6cLBr4eW5grYDraeUCUvhwP7Syd4Sp0ItRCNprsOv3LJn7Sb8wghkU4XkTnxPbth%2BExJFMXkHwIWP%2B6MPya%2FfZpYyV4nDA18Nzgt1xwLsddyky2CDEGOoaKZhmCQute1znqAU4wuXrkM%2FIb6yUGfGsPEjoQy80B82W58%2FVw0Z4Yny6TwGXIndBxU6zUV2HaJ5KMdylLhSP4xKFv8rKat6VOJT4tw9g1QVPmTx4%2FI2tNvjnru3lcIra%2BTKFseBskcfq6Yia7%2B9KiUb5qc7khQijO6ubiLIMcCMIFQAgK%2B2ALhfr5yDQcZLHNeXGfIocesmbRt5a2llJGoHdZ737%2BkApCBt1N8q%2F4AISur%2FFWIsAM7p%2F7443%2BcxNYwkFDGdJQ7Z%2FwgBo93uDVoi%2FBorVosdmOUUbT5pmczp76QQGxCYv2Rjz2VMI3yib4GOqUBB2AQwMdZ2GCThf3D3MlfZ7ZGnTyN70Vt6RYeXii0YXw6q1aUxZzKVG2HX5Gp5AmrjaK7Evyi0C8G6dtbCoCDnk7%2FPIP5KWp1XSs5ZQ11ZYeSTrX77Eo6aY0HqL8JhjxOZ7gAC8JhSeo6ERe0lfMq4y4Opew6mEYVgyZ4Wd3tPghsJxBMazTbQzhJoiB20Z6qoU9WFQLm%2BiDy3jcBpFb1O08tUrzU&X-Amz-Signature=01ba2e936430b60aa503ce0ec9e18212bbb909c414f63cba75282c997d2ab3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
