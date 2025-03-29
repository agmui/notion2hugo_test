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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PA2DR6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAkmx8cwCuZ1oCcFzJEk03KPFt5eO4nw%2FUjIm98s3TMXAiEA9puIcWbzRlfCNJxvA5MOVMFMEHuvhcEd1zAI5xeMo48q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOCzA1JeEhj%2F6XSFUSrcA9pxgsVcmyIDfe8nyKFpu4w197UXq06FHT13un2EEte0oKYZcAgKsj%2FF%2BFBolHXIm%2FEIOl91pusDQTY8nP8zp%2FFS6PEt8RYMKLrMcdO9ifsg7n02eKztoeOeBj5WbayEqCPvvXxeQGvvJulWNnq5LgtNrRcsjI8wGBCnrXGWuILF0ByUmUO43jpeG2ODMM3C3m1ZIxJYIMGXRGhGKm2Zqx1olnV8NJ8rpXDbpskqoT%2B832BHEX2lccGVXk2x7S3ZRI9WGm0HHtMRFMt1W5C8puP5bcDY%2BXF7p0evaj7dRWlVztEMm4HyahPYjcivOFYQ88xFK0s1n7%2FaBev8s6nXIPqhQxIJhTLHBHNVJGVotHikbWIntxQdPCh0dI9Swo8%2BAvLvREgD3aEuomZ0Z7gJ7Hhgp6Qz%2BPcYSTnywj%2FI6CqFABGfBkALX8t6Fuf8t8plWfwQ%2FOoF7l%2Fn9p3wlVuNbPIDdjPdbOic0oX4WqDHgAU4lVpQ75q%2F8Z4vjs8KNXo5d93PTMG1cpWvrM1n%2BBp5nTx2610lBjfo08VvBzoxwmmUwcgTw0w3ykYIzv%2FGCITjQIH%2Bxs82kV0HLhfO4TWF74aXy2hT5ys74iRXZRKdLWiumhzMnBLH4IRZU8A5MJvxoL8GOqUBnV6goEIu5H0yE7%2FRg1OWQbhfHz11F%2BhdwAUSEVhchHCCZhvEJaCD4JQ9wma12bezUy6EN3E%2BxmrSoqZToqrftGzQJbVv4aLH8EmtDfa2E6r93A4tUonlVm7ET2DoqHDljYWXLayPYzZeUC8BjHme4Ia8nRgMPumjvZt0Dd2pfRwhih7WX0cZ%2F7air9n0mu00cwQr1XX2%2FdE7LtQlgq59BRGfL07Z&X-Amz-Signature=b461edfea392f873c254a8219ab3e91eee5ca4b29f617f8163d98d34b2de6732&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
