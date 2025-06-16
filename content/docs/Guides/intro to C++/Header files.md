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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDT2MRMW%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC4EtABeKANkHbNYleCJmyt4cgJ1MQx4sWTJtRhrMaWxAIgFsyv%2FznZ9lzwgrjg1FBfVWAmE8gQEzkKs3c1Ui1KvKQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDD8zIwR2dbDUInINpircA%2FQVVLie%2B9CPyLAeyQ%2BKigKgufdrwTyLCj4Aon86sNg%2FlwQR8UpDbSz0HxJuJs4ROD7Caph6e6dhhgpSR2qFdvA9XMI%2FGIGntT13nAT2aeQ%2B9GjVo5qDSuZbsCV4ssZ5yyWQ3qZsF%2Bl50RrPedP7S0ke2yNixVit0gICg3HIiXCmiIf8BeZFc2exZt1V3xWgPDzDhznBbUy2d5B8LYzYnLqobh6ccL5Y9HdfiPtNd4ao1xB6%2FPDbazkp10tGI%2B2UEyZi5wZyaOPCmI2KYHb%2FAbCCsoCa2PLA6R%2BYkzYb7IWtnQ7czXdyFHuAJ7gBL7KpZBzx1c1AMS%2FGGDDtTwzpvdsRYB6Ztwcgem%2FaL6ebSA1Gayg3nz1qE%2F2xs%2BJ4T2tS64wvlJ4gCLAB%2BmDKJMsnzGzfs0yWBYOzNCGXWx9P4hhDeNbYX%2BB6c42yAITK3PnZbFdVK8GrD4BGXSyOED9GYO7w%2FHOLKcfYez4yvud8AOGIO20rLs8hQJMXoD6OHa71F2%2FmU%2BFdpjj7IFI3NKsJtCmGsun4BcsP6z%2Fd5Br%2FB8A5H9T%2FdtqESAxmPYhUYubkP8lFF%2F1FbtQ5Gxz%2FWNnd1BzL%2FqDgxEiByiW4%2FRRzo0pYR1fTimwYfZGunhVBMO%2BZwMIGOqUBHmDWp735qb6NpWMm1bwTsfWXtywoB%2BWI5TT7N%2BiPMv2lthL64xSfocTlSEtEOU33aY7E2lpk0h1iULh%2Br3ZOq7TfulKEdJD6wG%2FWl4%2Fm3vJhPo35Qr6rD1coMOIOCYKBOlbKF4HXLh5PfWpis%2BCF5w5ZoPSL7g77siPWSH6P6iDdx%2Fz%2B%2FbtkSL8LlKQRC3dhFl8NYry4HvQQBkvs68zZqoE8IFS%2B&X-Amz-Signature=c7bf89234bebe6e07064f18ab98615c437eeefd2b76ae16a86feaabce64d26dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
