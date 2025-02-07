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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLWRK67%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDuaMSeMblicj4sIkIl7T67%2FUSO4%2FI4QDcHQ%2FvtKxAugAIhAPCdKELUgDWjWS9d5nYxOV%2Bz%2Fh3OSA%2Buktg3kGxVAzDNKv8DCHEQABoMNjM3NDIzMTgzODA1Igz4Wg2K0NJFKZp0A8gq3APyGXi1aWACKotjWqOsDIGyF0N9Fm108haztqaQQ%2Fyz%2BPqfipE8n3jiB4ghRR3wAEhsbPRoHCwEjisZ7TuHktOhJ%2BZDPkbFy9yYYB5uAtv%2FqBZ%2FFa07KkgApppJXTTRTBdIeIT6aOPjnRSm6u6F%2FDaeR6L8KFfbSsAU34zXhm72rFGKiw2GKfWrazwBC8NVJoe6SfmeEhc%2F029NcaKCv9IuJwSiSxTgXgnBYm%2BScZoh3EptGZqLeKe2O34uZ6ArYAMsErRLXOn8G%2FAvaUK96mgHu63cWPndsrZuuOxhFQlxcrhUI7wul6aFLNWJ2vp4z8c7ROgcTejnXeO8cWntrnzAWeWOkbeGAEbKyxOqJDbYhaHFlcqlOzQuUcrogqkdNWlT7MsVRdbAmWqQGK%2FEO599NDCiskNKYF4pVFX8RpYk9nLtIV4ExXoeeBwiipj%2BKT16SbcF0oBIYnZX0jS1W93935VTr4Fj8hVroCrt%2BFIzsGRHzRcLCBUV%2BfdZlxdQZt2YF1n1GATgoxRhsidy8ORHM9cG0MgPGSDnomGEvywH5UoHb2yxXUjmemrbfSsemT2SW6TJkk9ug6G2LMS5MWOvXAwd7ZpkxECsxX1D5r3E5JHv%2Bz3%2FQxV0kIMF0DDg%2Bpa9BjqkAYTK2L1o4AlPOD%2BJcX64Qb8TA%2B9cyOujzX7Ijc3pEIb0R1lV7w1DijYNqUtphDqRqtuBapzDdDhlUzXcjHk%2FXTFXGF3Q4lD03aBawTKLCwYsI6%2FELnV2%2FifwpLEB6ouHrMBermxGxP5sbJGqS75dkKWAFRn85eiM981nFOLSc0kJTk%2BTJhWAyeuvl9PHiZn2MVmd6QtARhMofejHYR2NOo0VvPHk&X-Amz-Signature=8f7560cbf329323fe26a9c310c0f9996d13a562d13b7c3af5fcbf0401aad9350&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
