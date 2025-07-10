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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R63CFUP4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpXC3wX6aZjBuAWtn3m%2Bzt2VjP4F4GXrAU1RCD5y%2BCwIhAJRnofQGGy5FYE590Qg0QP8Y5AEOTTCm7ItZs7x9nMp9KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVjFLb%2Fw74VSPaxRcq3AN%2BHzqL4K%2Bm%2FoKjsG2CH06kQE4%2BoYoBGo1xnGNxjg0dFnWsQl3tlhYlCvJSqIMtDbKhAWegQF52S0MzjD5AFARJxIfwb0PKvIwKpi1sF4p08xS9EVdnaANdTh1lLpT6Ui21uu3mtArMXAaLQgFTEcn17HLEqx1F9ikWX8OZ1CJwiqfSogzfddufScZhPb91wrTKXN%2By8eAB3bype2i%2BBjzGVEmE8ZJ8NUddCrZTxvD53XDnfSQ8dKuUUhFqo0iuDzCyWa7HmZ45mOD1ypGbRyjSX%2BHxQRibpGA85NTC5DtzQMKzL7EajcglQwcQ1gI4KkOdu13SdCNTJev7ZXNxASLL4Kf1eOfBPlA%2FKBBr4uxaGe8J5cc0%2FREB%2BFQxiy255NPNcjr02xWV%2FyEI6pDtz3plkG3xp%2FTEyokA%2B%2FEVcgRHWuKFYQk2Lz%2Bp05kTdF%2FebaCIDorvXfgECQl4vFS%2BCI3I%2BLZtVTOFCtWzJSL4AwfbGwRhQmfDbprdcJloXXYM9s9n0m211VzM8pRCY3i8AuGAcwIDMCiq70YOnTyljJFnpZA0VcMK7Bt2g3P4hmoW2ewF%2BKOvzyerQBX4wX%2BRDSVXAc%2BtWCPg2ejslKmCY23AaDwMXR%2BjF8r0iVBDpjD7qL3DBjqkAWGFEZfeT90eR5KGYs2ici1C0ZCG0mlMWfrA%2FMUBWws1iSIPtMXXqDRXnuVZgJiUjSNH2t8dDHLEX9QP2PSvUt1GSFoC6jyt7P%2BhSBsN42qO%2Fb5zVPqDXZyXKemzKpG%2Bi57xW4W%2BarUh6aXlEsuIwipfKqR6IxjXuRD39ivACVhTkV64BQKmpR%2Bhakc007hTVE9ihM0cs1d2D%2BzloDPJUt864ilx&X-Amz-Signature=56917ce015be6bcd391e3127eee7331f5682bed12afc9c64eb69cc98b1f7bdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
