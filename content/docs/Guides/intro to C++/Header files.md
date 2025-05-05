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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSN3YA4Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIELyjz6F8hXta1u4eJWahJXyRimY%2FG8oIs0uVmv4v7I9AiBQL05PYi3pzMUpDGfODc8uPOFuoNyTRCA1iq0jO3i1zyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMt%2FAd9zQLYxgQLRAjKtwDsl0RFVMJ2J9e%2BpCdtUXu%2FAWKLgtwmHjmt1C8J6kOCPl1KrVBcxYP4d8jiiRLcyzbAg17KMILmMxnPkfxMDve1gwwrlKM%2Bk3IH%2FVCQIvyLz3W7lyK4YyTekCxmYwvedYbD2VATnQbyXc3ICJR1afjGv0ZHhP3tY38yckP1inkTAN%2BuLH7KxQKiClNPcGR02e29rovsV3056a1XpEz3gcM9QN2%2BDOfaP90DFGEWaTeLvm%2Fm3KQvMIX0EqJZjkNrPfqEPOQqs13FQRf%2BdqPsgbjJUFkVPSN0qDBYYHnqVKPQ2uDBZ%2BmtSDk3kUv3KjX7fJLn7PiPmsVYRRy%2BifYYm%2FhUNw9jzlpXEuhCvWJtvnOROo8i2N5RFO%2BPrQU0jMsNR7L%2BDaytOoC6uZarEafoiX8PQlo4SHjRfqJAINQELvjIvfYV3SvIdgcvCrECo2uzLsvCF%2BYA%2BzSzFe%2FXtznjQdyPzwLQlzXgSP3yCcEi%2BrwdeRFfdexwuuOmkp0BKK78WIrEX3%2FwxKbq7eOUrqOuGs0xM2YqlHoPRuU5qMBNe0pWqFPDrtjOTGU6ptRlW0cXXerORQN8mc61yGHNLPEbVcvE63DZqRRsNtyXilLjt2CgED91%2FMOOpWe33LFg8sw66zfwAY6pgHOgNUUDSR6BtbkwjDybo%2BjjEKrwMNALgGZ0IH1RExFR%2BTmcSkA1cwUyXxWFmyl57flSwAHWu6N%2Bo0Pf2duSQ50%2FkdzqYB4SQ58sCQLqxCdCT2uovGy9%2Bvta7qbTMMhsLOpiQMoBVUH3OZZ1gaIFYuV9lrnOdah8gAo66CXQsEmVola7jEZ3LDCdRHzHTKAB4eVMjWpFX4hETKBCOIz8%2BnucctAjOWd&X-Amz-Signature=95d1d403395aac99f3a3c988223af4b04181e8b40e359ec6b97f3a2cbdc1460e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
