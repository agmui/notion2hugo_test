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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2UFALQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCMGsJfVmcA9iB0WvUBhQPaXoq8BqVj7Amu5NQsNwFbAiEA67D1KFHCp2733ygaPf%2Bm2qqbrRIEJqfgyyFN5A1zoIQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDBt%2BiyZmImQF5ochRCrcA79tq%2BgUjhV2K2VeVIloJdDGNjyLfL3%2FZmOgtXJ1UoBph%2F0A9LHiopDGr6uW6RH1zyrbGRPAN2Vj2XVeX%2F9ocIBSZywyjotC%2Feg3ZBpPm5SiLQPAyRNH7RiFGxX3PhdFnBu3EKrQyLGAHksBrdeLHLQvqKAKXbw%2BhznAfFLkSdZeCPYMd9FVUDb95y1FRp%2FZTH0922xqg%2FK76bLtrQDAkh%2ByyybVeWpC5n7LqLD0uiR1MmXoz09Txx8wTjsooFMUXGeHsDn%2FNRddf5gPDTVb4A13OjHURIDAhx4xEEnonV%2BQ6Vk8x1kjDQ7lMt%2BBW4viibvsRnfwE8TNT84L5HSAUKpg7WB%2BGBZUD%2Bso1y7a82ELlFE1FAs8AOMfle%2F5pN7ZEGOZX2mf4CE90K5w5Iz8MyaDNB3ww9XGPEl0VwVywWxD%2BWG3zehFETu9M3XD1z8hH0xmz%2B7XcXX9xi5mC8cXTaB9uOxqNLDrjunwPdqX8RmqPndQ15%2BpzRmeFlWbm6l7Te7uADPDseXhedwsQJygu%2FmLZ8qwV9aR16w%2F53%2BisD76rUp9zvHCp23H%2FVI%2BB5NuEq2g8KwEUCMaMZZoFzk8jFrzLR8vLhpa7J5bcMf1b%2FCAw4AQ0GReib9p44fBMNva%2Fb8GOqUBxsGVGqhKJAvctBV96xu1oZ4pwm1ZL4BLOJe98FfcIoLhz%2BSjaEHpfmUd0a5WvJy6G%2FChAb17D16%2BfTVdPJotaQJGyg2AirNq8xlI6vMwOD7U%2B3i1kRqSHtbdl1PYuTKDinXf%2B5MKMV1BfR%2BOWPqUP7TO2uG7vIeIzQ9HYb6Ceo1L7vJuxu2n%2BAfOJMrtMU7PGDH%2BWPKN8PYNkSwkRSKQvnavo8Kz&X-Amz-Signature=6850ddb7b35d47634d339933b79d17726dd480570d8d671ca25ddbfbbd0a65f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
