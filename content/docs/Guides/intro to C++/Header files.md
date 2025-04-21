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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUZQUZT7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQChIn2resP6%2BiCaz6Snz00RYnleqWO1EkWA04byQX9GHwIhAP%2FmtF2E7fxBwK6B3L%2FFehtiAH5r5YjDrcwFJI7WJS6cKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIr9ml5J2CrnxjD4oq3APGFRZpTjDA81wUtVowZvoVO03%2BkldGZ1qP5ii37H1Ym%2Fn7cGjoLOQPCaBbMDiFeCZUHc8l4vqMb7QwAUegun8GhoVm11P3YJlfKM8zVEKGH6PvxkxP%2FfHzcLBCmF3MjuHJSwDQQoF%2BtNBqhQ0DzLljWmZ%2B4EMdqCCmzJ6mnwv7otHFZXkfIQgDECGTXpiYXAsLfwnn2XpbJq%2FoTgnJLnswZ55IPYnPFUBcr%2Bg2LjxNMuO4qmU7boAPuTnEl7TPbJGGlbinqVHFnqVoqc2Mzqcfx5r8ttCIH7iJeXgB5MBPqlWzzA7LY%2FEYMvfZEEddvrV2wqzyBt%2FVeJEuidmh9tuCmVeiRXwMu5CS2nvz3nKVeJ8%2BAQf0%2Btz1q5ATxO5aGuxg%2BPdRaGmYTjjnb2OI%2B2CWeaezMyW2B%2BLOL0lXsPASbf2TDCHUgAqfZQohD9cst1Y9tckWTUXEn%2FU4pjbOoksBuUq25cNIPGqRheBn7ep2cK44Fgkyt4HkU9hF1HKDZKKUhyXSu2jbFUCxKWI0xx4KOq6HGrBZ1zmkzs54w4M9uIa8XO%2BjWzJuhDO8TW4oeYNSaXf3ym98Rsn4IC2gAUG5XZ2LGTPSKQSBIyE%2FGzA77BnzapMlYNy9o4ABdjCzu5jABjqkAXC3sByMU7mWgGxEiQlAxraImolkio9Z%2Bs0dAFnD02GL9%2FUYXkcpcOEUyMzTOEIAsRsYbmgHSHrbOos7sdkCaKYGS4PgaAQJAQ1K1t5FZPDdPpkVIA5oPaQa8uFOBcrVV56RThQEW80iQTyiB5lb3VA0VAC91Nfo9D37MXyyBm23Si%2FlC8suXNXGZav96FLPBDb1w6lnhts49GAqGveiqzwk5trM&X-Amz-Signature=143c0d0d979613114c57d5930a495732d66a33ca312720f5f9c76240da88a962&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
