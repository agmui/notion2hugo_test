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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZCPG3T%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPyQ%2BwsbNZUcn9kpQnGpAutaICm3oVxFg5e0fL4NzHCAIhAI9%2BMmNnTZnbMfTgF3FzLU8wVdooOz4rKk1kt3oIY7gyKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEXRB4S321WhFQ%2Be0q3AMAWSZkskokdUWIan3tmee%2BS93KJgdaks5M40e%2BKoxymoFe%2BVih0DSCeU3KcILp23VQieqX4iJV2717I6krShGd47S5FpwNuydfgOyIn4yfnfK09qj2DjrM9woA00HrXNs3nH6h5AQ76maBbtgfMU79BJWqrLPztNyLXtbyZJfzjw9%2BIzwCFxjqwXgP4ZvmGYDacijmStj%2Fvt%2Ba2X%2BQe2aa2znUBTvvoonDRm0zIXG3dEAywBYM1pV9TLPIaVnYS%2BsH2fweHQiHvY4TF8%2BYJ8fz7QJvTh%2BRQ2o9iRuyruEMPxDDj6OLsvD2JLdc9yB%2B4MEJwcrBvDgpYBBrmTF%2Bek27loB8zmsGorFXqhh68MZ6NybaLRccp8Ykxm688ww7F19HSkIdrWLZkhA6SeC73aRDutv8vjsd84pc555Ar13tnYyIXgR%2BL61KZcuHiK%2FqZKcWyI6cDEP%2BSjr1QuLVSxHmskCpN25VTPZzMUS4FU%2BFlx58jBBE8BpZYF6nAmgbXL2pEQwVzGL%2B0GLlfXAXl1dUULyMuMuOow9v7wRfcuxe0s01DRaHZgP58PFG29NL0ua7VkuwvLgcVSXWNyfJBA0P%2F1j3ryZVtEsM7ZXYwSI3q3vxmHczhtA6jhraFjDc59%2B9BjqkAWPgwbyncq2rSE%2BHOhVikmmfxont2ehQ4%2BsYkO1OdwS45dq%2FVhj5Jek%2Fzu%2B7CipwfaYou5c6BXFQDOXjRyufXNbBVNhTAXPMlK7BppWPRH3LFx9xecg3rfVKwuhSwJtmJ%2F%2FTjkkj87k7%2FWP2OYPJVxTl31u1%2BuxdWjPcLkrOb1sGayljTMFzG7RyjR49%2BJxtYrxdznWhvOWvrKSxW4BoEUEgxqGq&X-Amz-Signature=a2d8ffb739f68979fe54c84db0409c3e20f8f80eb631be60ed1aff38364b32d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
