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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRB6NYCO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCsA7vxaYJruqPggep4PE1aC8WR1BNYsFtf9Z8DCNguBgIgCDPnl4%2BABpgZX%2FRlV3Whq326DSk%2BEQRZ5JYkS8qDLVQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA6m9LBA8a%2BC8GDVCrcAx0VZFgdolLuN59Cb%2BePUHjZI9nllxDm21leZlXAsPMIydHcrGmUGnFs%2BMqVitDGy1oD0Oq0XkzlSEc5dPV9ps6eFqGttBu1sf2ZeuY%2Fsjn15onipbxJtf2t%2FHr%2FutBqn%2B0winnzuv6f7eH%2FC86H%2FE4mt4KjH9ml6IZ529Kw1RohPPgDVx3ypM2N27eCZDyMdyLp7dvMWhV4hLKOH%2FvBQuh7b5Y6fyzni7Av77eIp0qm%2FoSzYQUuOIbcrP%2BLTXFv5Ew6OR2VOHYYfNesvmx9GdGra61ngywN3%2F5kpP1Xg2z0ocTKKl8x%2B%2FFT7j1gnyv9lz8sFdMhSwh%2FSHz9Xa26OAcfFjeE%2BuvmeofhkRa0YfCsfp0AReM8aHXL1JZLs%2FSKxLcRBaZvIBH6w6kc9%2Fpp6qr4%2FoSgx8HP4VTDI9Wg%2BEJi4qitlvqyye6K3Yv7%2BYkVc0GhNLnx2MkIVx%2FGj6tQwtl%2F%2BEQgSJ3vM5k66l7Gllp%2BXriCKvFsrrTI%2B9rt6VYIKsJXcXCxwejCL3M%2FXTTRXveY2Wb3Z0z1W4ynybGHss24%2FbCWs3U3JLVEs11EhW2KLuuNh7%2FizUz%2F82gGCXVm9fPXXYW%2FgauQN2xEsAUByeUtC9gqOfeqBugjc2AyMKv69L4GOqUBY5mDrV64PCuBvLLOGyFy41QDeizbUllRHgTYGa17hF740koa9%2BlFLszDEVwbcdVEEDSVG2KA7mGCPDn7f89kwRB4P6f6bia5uyRVn8yugVyeYNhN6VIzmOk7o8kZom62x0jSqaNc2GuKB%2FgvCUSErDMxvrQ2S0dnKgFJXs3b6bm8Zapizx1cP5%2FDADBA1QceS%2FIyVs3V4ftCL3jy8BwyT5sc6WOh&X-Amz-Signature=c8a5603d291b30f4386fa18f4383addece02d986a9b3106f8a95151a3d3121ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
