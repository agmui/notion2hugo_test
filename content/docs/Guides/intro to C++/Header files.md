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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YP72IC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCZ0HPRWFK3jnd034CZM9HXVXY%2BnAT1swILJm0TbpzLsQIge%2BsDaa3NwEGxTkcf9yc7W%2BGe3Lv0u%2BKuDLWd4i9z1JIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcugyVKLSFNA3jtgyrcA4%2FYiD%2BOntuHwbc9z8B%2BPz0MYOQ%2FMe1BvQm57DK4QvmzUbhCyqZYApA5X4x8B4%2BRZxL2s6plLeYXzX0SGhG6%2B0CuwOG3CV2Be1MmAYkKUB7LnjYcJESoMCk4vW3hQBREgehO5RGb4%2B37DDEDJxWPqee1e1JKLhdOA68aEh1K8%2FL%2B9Z3E6YwIDwAA5paNEEgX8HfDSnznucRubFbwtWu1CeYDL3JjZeeT3V%2Bs71obcdxJjxsPhvJyQ90Z8IGg%2BRbo9iaRXoKzQdFydJdAzybH6oStI09%2F%2B9g17JAd%2BkIKd7RFTxBrzubwtYGOaHbFrPObceDuA9ufYEueOa9NzXOAnUT4kIO3y3ZeKOTlukFdkohu1jSj8yJsQEk7q0UR%2FlZOgZbZvaYooY2INc7V3qk%2FwDPlmcwG%2FCZcfYcCkbwQ1%2F9ttBZRHL4AfAbZfPC24UVbC4z0oz4smaOBuP4lzdsSzS5oZ2PcCuZ5C%2F%2Bz5s49SPPUP%2FHbLw8VDU0tRlvilaExL8OB%2BCpeAkEKD6iHU1OdD2w0MHbQ4TN%2BWT273OGPi6ebB6Uqr3K%2Btwb8HawUUEx6TWvlbPaCJ5nqBWGjEdcE7RPQyuewsolkT8fdCmS%2BsMTgt5SI8unxZMv53Zs1MJH3070GOqUBjrXMbBTYavewLkjS%2Bs%2FlEIEhrA8Cn44W0lqp9j1GbsHHJhAXI%2BcNHyD4Z9pWvq9455aa%2Fr4brp3GN54RU8J6J7qFlqQ2nOAHM7NQ5%2Fr1jbmMLMgIS3yFhdSpNueoYnafyfwFfN%2FCBQJ1JPJd%2BdTsD0PSDFBcqDb%2BZsw7oN2a2ePsRT4QKM6Pn3Y1qPvmorJDJMTfpC9%2BTp3irkoJBX1A2Mn66q5K&X-Amz-Signature=d148ac461f1ac36c014d2ed6f31f30783cc75d502f1c596bafa1079e827a5396&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
