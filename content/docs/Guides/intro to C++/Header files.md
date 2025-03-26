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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN2FDNQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBJFU548%2BK%2F0kZEAuCRpXZS8t9it9jBcZPA95xyHuYmQIgMjUcRCJxkI8QmIRhGdvhEI93%2FrEeaavc1CjNP44dUVgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBNEOVMQXS3hzTytOSrcAxXljYmAYjYvZ1xRe%2FqWlZ3vWiElCdbAgn9zG8cLTbtKx3hULicedXqjUfrSRfwR02zDDEBi71j%2FYF1EMI4LG9%2FaaKWEN6PVypwsJ8mdQ6qrU6eEqOtKXHHw3Q3Ft%2B0muZnDd4yDj8FcesheCB5PnkNA09bGA5pWp2FrLVh75tqLUH3BSHn4ihDxUIgVVbhaYe6xVAA0qh5wo7sjvE0HqrTcw0MKmM4NUmMbLGZB1n0O7tv6%2Bv6zs0DiUjBCfnL0HnU7nPmtNlrC9KQz0I5c4ppfRfeYjjUHbckwAwLRl1AfmtrhZyZeGms6jiTjjhlsEmWoN6%2F2WhLlgnrGK5z5DXl1MAOsujWXU0uxaj4sTuR2pCdjKu3Ctuc3H%2FygEjrvD0c7dd0dG3hyEG6jbKiL3SVsIgdZGxJ6TIaQx9gskhG0q1sL4aSTTm2FfId5cnuWwHxMW%2BaA%2BhZJwIYeQL2zWVJJCxReA0l5VeIE4XZktXWyB8cCze0BplM9i418eslrQOrvakjIHK6DFwK3Twm88sKHiUdCmA7mgp3r0JA4SG5X1Dn0Wc8o5Dux4dS%2Be7cejEmElLqOIvqsIvgjK%2F1bPMhfotJDogkylFy5afMccXPCIWednThjOP8dHFDfMOuZkL8GOqUB6aNNnn2f1YSCwfqqkmAsmZyXckByyIGs43Yl4FAIIH%2FXfvvGSPqQjaclYrFPQnYliLxKU2tl%2FUE%2FuF7FiR0C0kasdWG5LRkgjE6pwolSXdQao7WtCA62wPjfDrdNK%2B2zaA7NGgnBzSshSprO97pRMfzeGexUzmnMgCJqE%2FoCf8ReQPQEwZBnv94QpFfw0IPlRlrldHnfCBhwO3sJ7Rt583DA0E1J&X-Amz-Signature=393875b12f3e06a074e4896eeae49f5cb1479a331dd6268cce1dcdf3c65b4c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
