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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HWGDLT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCinwkyvoJSvWxr3rD3Pa5Izho4A%2BjWIjecdphUuDvKzQIhAMfGbeu7q1T6T74iSJNjvBmVQXxGjVGJpY2EfUlAfu35KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyR5exqFxVqUsgesq3AOpI%2FXa3SY31lJtH3YkB5dKDsyKRRlHNeZZohBTzmBPCwb5v0hCLFFEkhzf7fhSMe3ZWwK7zuiKSL8R9hZfA86JqkaJ5qFsO3v%2BfXNVUBGsNmOuAGuoeSd%2BH4B8Y1iDo5K3eFIogMGilCDKmN8b7EKFxQ45wltKytfi6q%2BZ2FdBPOc8jtWmW1bSKKjTpuL7Wf601yKccrFKsnTbxOK%2ByBo54ry6hFeh2KlyKe0%2BsjQf0ozivuNSHwE4nV0n6gbHF5TuOBZ6N3mhIkicwOvCAftUOrq6LHks%2Fnm%2B5Gg2vcd0s4NuhXhGoR%2B1x%2Fi3CvQVaf5%2FIWOnEdGSzu5QPz8Y7wP9Pdgq0xzwwMrVuf9ui%2B9qyp2qkrbKvclZ2xiVqBEDg8dmno5I9Xl23mMvlPFPPC%2BIWLTy%2FEneBZGNi%2BGCosEtI%2FD0UXk%2FzoVKrANhZt8lyuSp0qfMNllr1r9%2F5VTDyN9vzCjl%2Bx9kd7K1Nn2wwLWtACWeTJc0Upc%2B3%2FJIqzS05a06jLEiK1TY%2BS7h7Dv5BYDabXpso0cpE7Hjb4z80CVjfKaZUkqqM1ZNguPIzeF%2FVCQhTkGqkDSU45tRKLGeigjZKPLAEWLl%2Fn6HKkAml5BT7pStDiyxJW8iJStfejD03ZnCBjqkAe3rxHJEgK%2BvjKt72f9DBvGZSomqfsbAGKH%2FT%2B4xJaoOtFBqnLlR2ClpdwwuFYxBYWO3SvLwQ8dlUU2hqZZVEK2yovzkHzqRdJz9zi5SL7%2FZS1sCvt0ttysj%2BEL1e0lJq7d6naSSXDDhLD5OX8WVOqtEa2%2FYeaUr3qMrbw0HYhcQSXPRDo1zBIWCyaoXstq6%2FUHwZjXTiRxG88KhfAXTbmyS9lQL&X-Amz-Signature=cf2ce2fad369e75bf91eec62ad5785e5145541ddddb6e90f580c118d6d165fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
