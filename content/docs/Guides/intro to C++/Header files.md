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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LSPWY6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDxAGHCoL3IMW1hE6yBfUsX9UwDXpF7cV7t6TLqwXLZbwIgcEM7ybNyE24Sk%2Fb%2B%2BOoBqGZvxZyVHa6cKRAeoYe%2FTp4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLYC9WHN%2B6uGX2%2FsRircA8QNDZJG9O5RMbbIanzvwDF5iDBAywlye9a8xs6gdL4xdcnOWRI6F%2FEwPxOU2rHqt2tRPuBPRTO6O4YbIH5ej%2Fy2QLWtuky9hK3BQ%2Ffq1W%2BnFWySsSd%2Fsi2i6E%2FmNYyngT22uFj464KCY4AxwnyfH7AIqftnF%2FRRSmyhBR4X2160gcqg1XtRjcbPLyTQCBGCrpxBIqdp1AuREvL4d%2Fchp%2BhImnn9IGeh1r8tSpZXlZzwK8Uq7ngQBHoy0Xpgh8uTAPAjDQZ%2BfYPTrz7RY2YUUAJwpVdeNjAmjuO7CMkQE5eu7SZXQ5vG%2BNWigSWbNJOMW0fQ6jNHAX4vS0TpTULRkmdTbOtSU%2BVMqmBoWlyUc8aeBZaOfn22ItXPNObG4deP4SGq94xBijLH%2BYRD%2FfrruOL8Ex%2Fpf0tUXL8YGwskbYuW7gM%2BkHN%2BMO%2Bi2CivyontmhrBjPa32iFZ5XWwwp5GE1A3WYUaixobk76eYqZ7wV5EQ%2B13RJYs%2FkcZ0GSkp0TkoarwzdfB6ZaH1QG4NRNgMLsYNK5%2FoRxZgSaR%2BYWOXdglpUWyDMDTARRlTSxSvoCpVuyYFHNOhs98PvnC9SyACAWHwjHsR2IBR4I5rb5xhyKRhACrs%2FPoN4zBrY6tMJKy6cIGOqUBZ2cdDAMIi8rvXDullenNtBHpueaMrRDDbWaoB0oshd0PQMci5NLTeV9ipvm02eiQEa%2BEGzxovEWpKnSmQJbljyTLBF3hxtEiPkwaYoIZIZ1whlYJrSw41feUdTAdeTvB8PSMqJXpVlELMh10NFCfQKjkruZ%2BVd26NUYc1xnPRSrrIVlLQK7N8zxdTjPdt4HJUvuwd%2BJyHCx4yHpJVgc6QAjfPX1y&X-Amz-Signature=5f1ce0eee472718ac8402d6c385092d59a2ade20be94656073a9599b68224c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
