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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLRBK3D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FSj9g16lDMh9QlwX9YDA5I9oK%2FFMsAEsd6pC62i8D0AiA7ykpAL5dRHohxArhrRvszSZ1cN2WnDTWz4dS5USkZjiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM25X%2Blr0mRBRwjFUBKtwD55XM6BSbVMTN4uHF%2FVN5KVQnPhcw5P%2B7s0cs8tExErFvgy60e8uuIzBPlBeIUwWt299VWYHTafvn4TvRT6f7UIEbIWdZCY5vcnF%2BlZ%2FS02v9KF3K9JicFqah91rJjURuGVvytJRVC8R2nLOI9iAz19tpUNKem%2FkhwiTGrabbFVyXg%2BMZ49Rz%2BqciFap%2BSOuuwt%2Bt8tF8eIlkk5Bapb8nAG5Xi1GdDCwVOOtMnxO43x%2Fn3bTlFHfzTRC1vnjAiLWFS6euwFoN4ArmuGM2zCF8qabva7YUw7GflscveFgRremKNzJEYyg%2BFRDki8w2uJ8Yiv5I0uN%2BZamQDqgGjn8tvH4p51GLGjJfX3W%2Bs7lKoViMd606y622Xs2AV4pPg9bogWmSvZhbiJT3LPma34OuyBVx2WQtmvq3wB66SlsbN00ZpCGgm1trUgF3WbLKunSxG0DM3Rx%2F9SBivkUqDS6jgfDuLtK3t%2Fh1CT%2FRgYzT14AMUM2%2BvUe5bSSTHt%2B1TN0Uk1Q02hthnpKZoCH72f7sFivws8kelKI5xi8hW2SAGRTRb%2FdaPr%2BnxZ6C3JKxj6CPilYSg3LjNUaIqnFWtPN%2FPGlhmeZ9usyA83O29MG%2BnK5u67vm4SiMy88ThOMwuuPrwQY6pgHUiE37HfdVJv1nQqQu9wjI5n61U%2BkUQOX1xzqcYvghoqSMX0OOTwglOYVMtudk7OOLw%2FERwGAAdgPbwU0hCZvtvfuPYlKzFJVGVTLi9Oqk2Nb0JRp4CAvZelG5ZXqSijZICMGbZ9tccTEX6VhZz1kVmzX0m09LPD2MJyjdrCuE0vXyJ9Jja29JJU%2Bf86L1eL0Wyzv1hjhIt4Y7IxibB2IZhzNuDj6r&X-Amz-Signature=6d5b2b9b3ce59964bd5142fe4a8c8f15a4637d1d49bc80fc1fbefb3970ccf26c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
