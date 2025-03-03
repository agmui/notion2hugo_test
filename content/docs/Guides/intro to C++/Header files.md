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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67QCQLU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLrglmfOVh8cDnP%2Br5ZxJbzzsJg0I49ep0IYCLadu5gIhANITbwf1CDOS7cexV5knqguV%2BLCfcgrlZUrwXLXH27XVKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFudi6lFdhYkkOb4Uq3APaxylSgG3P3Vy1eogKns8nmvQghE6nRa9qo2ADz2iHnTLwUWOdpqXvdTOxbPdg246H9CQ3RAhzWVAEHbZ1xanUmympC3%2BsYxMOzF09chYtIugzavcV8oANzw4EkY3GdlXg71wXVkc9MH8WuFrjUW4umnuAXGmkOnV2TcBPLte58dpXhxs57%2B43K8MCn5slCY6w1yp8fDjGAhZDN00UD0tYtDeNXFz%2BPDuyXkxKfZau9rAgW1HVEtEI6uKB%2FmYaj0FUQVPlBMHQJ0qH7vtVLzjeXu5a6ip43KEQiBcmNsdwTqV8wirZZJtLvx9TM2s7wx8a1l0tNzNx6WTaqbu3MiTcLHycjT9%2B56M1gzMMUvLugJ21Tkm9%2B6u4jBApwlsKHof%2F4GQli3OmVaR7fZmFn0yi4Ff3NIjQczfb4KJV5LBVgOq15P5i%2BgvvC8UDeBN2aGPpRkTrIFlNhGBefuR%2Bu7MNT1pG4h4VULceESQh0uu73rxAtTuD%2FpF76MTbsTz5rulD7cbwfyxAmEng5hK0wlGeSdzIFvxSJ84Jouh7xM4jlUDHaLCrstTwql8aoUeHDpgpaQxzaVDT57dsxHbbm0v6o9VBbhz8%2BTw%2BuW5RAFhS9Ve%2FCl0HaYi1E5W1YTC1vJe%2BBjqkAe%2Fpt1SULXgWFvF5Z%2BLMBplibDU1y4Y9v0sKLXTvesmx8oT%2F0JR%2FbG%2F3MlR55eDazqleWeBUWz%2FkqH%2BYEYksfztzXUd%2BenDQq92nqufuIkE7EJ%2Bswkt%2FZ%2FCRSCOlO8DGzuWkEMUHyFDYqSALkVkfaSr4TEl2fwMfjvK3ttOxEEjangHotP7hYLG18knDBL5fA2ZunDUa%2FuX5ig1SoO%2BisPLmOSH8&X-Amz-Signature=a373cc7655c9bda2d022e60bdace916e0b2444b7d37144920f7438a0047b5add&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
