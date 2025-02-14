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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466445ZHVQ6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCU0NdksmClRjLHs3eL0gAGzhZw7wYVEp96O%2BCJ4ciPhgIgfp7dKKTo6BvrLUjWfbWrpRHviOzI7O6fKnT9tbjW%2F7kq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKed2LxM8wDYXFQ%2FwCrcA3uSYL%2BS1rG%2BOtgQtQzjHwvl2jCF%2FlSqzeXelzdNnIkgLOAgtAPmk%2BVMUNu1OVEflEG8APfxIJIQqZrSKfAGGsCIz3UEKF7387L%2BL6E%2Bvw9P%2BPq6A6LDp4YAgekOa16e45niZy%2F2poNcxWjLLGe0zMBT6hXI8JQuvlDKvMkP%2BD4zj7YdL5D1PVKWHpQ5Qs4MfGUWu2PrZENJ%2FURmjEVtNBjiMtg%2Fp2fN%2FpWeXPw%2BzY9L0PdOK2OhruAbHNlN08FARWGfr%2BuRFK1oyFtoN%2FDogQ9ZjSwd0nbANv6vyBFmGquDr3c3mGvvYuT8rPZCkdew4HycYdR%2FLwRovliK3CQRrVdj6t00%2B9NAJjqBiQVZWktJjYiJ%2FVqf0ueLQo%2FC6mGlFr6oBt4P4Lw7sNg5I84k7hTdr3Cmf0wDRt7H0eG1z5tqbsUZ1Xv5NqrfheMaeP3mwMwPOzjv0wfaS7f2OsexN0wHxUKO8n3unSvs6O6gTc%2FqgpBrkedbzz%2BmYHJrYiwzl5n67hmfGlVH0rHj7lfVs1tqcDdVhpKrqWwIqSJrz3zVRzr05OrtlQWxPyIYDuk4MYGm7R%2BVP0a%2FOK8VyJSkQjVAWDRjnlPyMAPCdZVeIFlu2%2F2avkt9S51pFBOhMP%2FqvL0GOqUBoGDcREBPCo%2F7DTizCAEdoYgkW33y8ePqXF%2B8Sgg0hvS0fmER7R4VjVUtNEzfTU0RohyEFtCQmiuUdSWlWZwEUnV%2FsFzdiUp%2FjkZxVbv%2FxygJxGmgBoIE6Ssbji9WZeWexxoaNai1HwhtrFTkDtrg%2BNdBUPeDFIFA0uoDDxVSB8t%2BIh6Ah4%2BCW%2BpaqWaBEVd5BVWP%2BM0P0oSt8T8rLAGYio7i4ipw&X-Amz-Signature=07f426636c786d31460059055fd13e44bb282cf7b500913a9181728437543b07&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
