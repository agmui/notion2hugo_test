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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPD3BGJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdCHAQv0KwILRVExbHnpK%2FEHJt6wktChy%2BS0HMmPHj2AiAafycR54KKOvHPNCvg11N7OJrmIReKLLplQNKYIw%2FuWSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM44%2FzazhRspTVqcv7KtwDUeTsl4JBpdSAg2kYj4I0c9jRrEGYf818WuAVDKXpu7nnSN578ivYcX6Xo%2BYTHYuNFuXvhBfpUPu3Sy6mOheaWZ6fY48RWsU1S8ySdfXtYpU1G8IQrsYvY3XQe2dmnX3MGCY4U0RJSXNP0BgCBjCs2abt4dcYRQWAoy1KOKUVU%2BMNAOmHwltsTo7eECiAdddHTZA0b%2Bxc9wApa%2BHOeWDjtX4kq9KeeFvuXJbMtys49oe8dxvy3eGfKQ0Wymfj%2By9%2BC59IXU%2FhnRoO8kz6o8PB8udFzXsAgQ4Kb6Pl%2B5l7GsMVMA1CNM%2BbSISP%2BUw68wP0PBGsDlTSU2xIs%2Fbm8ywQyAo2HuON984yd6yGIOsGHPs11Q4udy4GCEIHYP57KqRNZ%2F0lrTTLyg5qkm2%2BFXmsUy8eikxxwmRJ%2FAthCaMcgFR2gnx0P2B0ztiWBOS%2Ft1xnSsGo6cEyG5E5bt%2F%2FFgmalkcHKqP%2FPiWPCHuwSFMQcLAKJPJ61sggfcegypTFupVhVaB9oh5vyYSv0VNRhoK38Gs4pmRg26diCKmJROyJxXvakhmrZIuCl8FpTtQxgoCsgpp4W4XN5Cw6Co3aG9rmUd090UB1DrEKV3iwukyoBLYiIUL4o0%2BWdS4w8VIw78yvxAY6pgFjCsNSeFeda%2BXRm9S%2BRXfzTsJp0x8JeGWMaSZeCjVSWQQxPX1QYzfiTvapixaGH0Jp58YSpmiDmjvNc%2FffTJQjSc7i5z4jiYnCJTKny4OOXGIEbxHwY%2B9zQ9ZqqTnQ3pQNMWhj0QvE2RSVGGRPo42YsmQN%2B5TdDLeop34zI2%2BIPZIPnes%2Bv2XNFQYciREsfednKIgu5474Dt%2BzCNTkhVEtOpGpkkRq&X-Amz-Signature=fd278724b4104445afd25e0b45910cec643a9607d5f01f9906dc665433441fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
