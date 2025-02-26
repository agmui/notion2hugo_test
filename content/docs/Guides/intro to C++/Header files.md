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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3EQFT4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBYXZeBmMGuOvLbydR%2BmII%2FFD3HeVv0UB2JzolHpGJ3zAiBuzjYyPMtHrjZBJg5luy17v1vRL6eALilsCbF1LKZDISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFav7jQ3bihEtan%2BhKtwDeoipA%2BdHTkZtErIqGGQOYzTLuC9UhL9FQRywic7MFnFcJCgDSxUJY6IzlbaUMlJLmUanyBQ28zxyrJGWVmHok%2F1Q1G0X2DLlEy4sV8a8woxeIUgak407g%2B4T3C0GYgDhvk768khFKJ9YMLWPNJXTC8iIyNZVyDf58H8hh9S6LANUe50HS63rrA0nOGPucCfKPDlVxW8mpV0F8kYKP%2BVMZLZLVaHVI7%2BOsA4eYmf8cPOV6xeHImz3fWIAyBRyb1JPgX%2Fto5IRe8zVOyaGZr0nrqnuDsi7Jjjq%2By%2FURzTcEEue3z6bGwr1IfenCbueL2JvukKezKyLNaZ7%2FGZWWNI9X15xtHW5JVz5BRFPhryUPXsSc6WqRYJNIsZ5Yv8m4zSp4Hf6etJt7oRNfGauGxYXQ9f6ge%2Fi7KnVIOSyw%2FdEgCqeKjbOWgCddY9BaVRVhe%2BKL%2FRPs5wADnK6crVTJ3fQXfJJVN5n4zrgRyYvlsLGIFb9%2FneTsIAsxGY4Uovnqy%2Bxm89EHoucjhz6YxRelW4ApNyLNp8nRFEzj85o%2B4lVlOGZaF3olqI2URkEde2FnkYBeYPj3%2FCMJ%2F8NQpY1TdaSu5hgUtiO3eBg9iYZ3IaMf1hoN2liHAsBPoibx7Aw6Lz5vQY6pgF7Il%2BRZfkMCyOlG8wWBEV6zqGfIgVQ5ibBqIbk6Lrd3mG%2BU%2Bb6mAISsA5psqF8cN2bg%2FazBVBaDI%2FJsm%2BKYVDfknzC4yTaYAE26EjQ%2FnMXanboOnHd4zx7mPLoPdEXFs%2BzkctAzcDTQ1Ue7uZPfaIL63Zdj77p%2Fvx6ydgqneZ1y3w%2BeRuEAG56ubBRAlZHliWrZ3sksUoTdKQBeFNmSvuUqWnqjbm%2B&X-Amz-Signature=7030bb3652b78309a3282ebeffed095b8107451e7fb96ed141564997b7d54abe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
