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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GGJJQZT%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHRGuf1eEne5NMQYpDTIwXVXjQWr6T%2BmmBPPbuTHKLZAIgSYSnqY9sQi4ejVyfGCqjvUE2%2F7dUGvIkI1G5Dy%2FjZVcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBQveTdKS11jjJ4jmCrcA6umiHsXgoc3X%2FYvoUOo39WEEMSpw9jsQGkdfKmFSY2CplZPrpL4938T4oW7tASZkeV8xeRkw%2BZfXVOJ%2FsxOhZLiKD1NxKn6nsyhvcyxKLOtf8jNSsiCGHyPjNf%2Fv5Fc04H2lcKDhW3%2FTkjfweUNrCOaC1D9ZzxfkoXtQcb4usdG3dcgzDMhs4kdVoOx6%2BzIxIfyRP%2Bc8UXgtSRo6dVEZZHR5eFOrj55zaBzXxSRPjHbvhnILvLBBnk8F8V9GMn8u2qOlzA06MvuOgobPZFvrFJfby0q8Uu53w6wdsMJXpj969qh9mFHvq5TSvPDK3kHNHNv5O5yvAbVzQnLXvROOMYj8ssFWdHIT%2BSD0AsOWSHCHaGNGU74Rw6%2F2SV1jdcPlB1hTQcsGS6Fi4qij%2FjpA5NZBoUq9nYcVQ7%2BMBvLrT8Ty4il%2FLCf1w9NFiAGNrReDnOZHVPDreWdHg8FFjYd9i1OmlGKAOKuqVyXEUieUA0p3QjEz%2F1XQhD3O24NToORfV2zPNGxkOLCksdc2k9pIqAjlkS4krBgy929eKCTRGJOt3Lr2dnXFiNwlReoSGvtNULPSWeAr34Q9y9lBJSp5ynX55BLDlmEM4lUS%2FGGBjqRAr3%2Flxglf9C07eM1MJ%2Fg5LwGOqUBTVxPHojxu%2FqV7kthW0b4SU%2BbVxLjbRn45kYx4spffYOjPfjLHv0hHyr5b1Z4DFt5Xd7sDNPb6ws9kjkNAAkgI7%2BsTFmGMvSBpnzbzNrmy%2BrzBMKv1us0glveU9OM73x1l4I%2BZg3m3QIbAXn7%2Bsri6RjKUSefoXltra4zBfR7vCsXFPm%2BCI9ZrhuUwGC36aef5p1%2FWbpvpo1Az%2FLvJcKpDK0G75Fm&X-Amz-Signature=cd6dc47867e79a651c2cb86748b00846df8fc86a2ca62f6e7916edba453fa698&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
