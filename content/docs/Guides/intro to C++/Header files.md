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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BPJZVG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUj%2F%2FBNDNx6afyHZga%2FCamJPi%2BJflhXr%2B%2FXRTtAwFFKgIhAJV0UZcEv90R3HrnPdsWx2rfYFb7BOaALTMicUiMv9A7KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8LIRlsXB8x8HI7Asq3AM42cH6Om%2FB0A4czSytEoBTjU0IrzwAwT%2BtRbvZL1lpmlWvVTdhECRnyVPhr7cJ0JGMgk5D38jVDE1q0jMxc%2FhoQYbwLfX4RRirVAcSkrSfKoUe8gXEGVeeTx3mBraSzDz%2BaBN%2Fjf1LjME2%2FQvyh0cWXB%2BZIC9Sz0FvJCTxAPVvbhqs3bAMSg5p%2BKhrw1mUJ%2Bcn%2BXcGpqovfMpss6BzMzK23GKeMK8z%2F5fok6hC1OhHFBzwzDzrXDkPd5HR6k%2FDeWqtUsQE%2FxhtFoiIpePzMhRscDv5kYttQMwIO%2B6X32gPehMktg2WT4BmpxSafEkTo2dTzjRjM6Nh6%2F7Ta%2BFiPippIbOtLTEEGgZwsSoSrG%2FB7aUs6gGt9dXLuoX1WAmKr2jXGNaVaY33ztQenDXvGD%2BK%2FjQOCBkx%2F63ER5KQ72cWxaJ7oNvgJgdpvW%2FdtxyXqxe15vrdZFkqHDSw8EikqGuQEoonfagkLeBiVKXe1DvEuadMcDeeiGFapjJsxcwYWisxDOX5r715SbcbMbY8CpfLjhilloxrL7oAo4PFUb09dO2pbfDU6J7NRqC%2FvT0lLNqjIBvi2KbChd44cAAWG1Ep%2F%2F64CqPUb9nUjqdR29u1%2Fpe1wmMzQvqjWSZM%2BTCTh6O9BjqkAYHJP4%2FdQQDdGUybIAZS8KHN2JoCis7j%2BMhXyFw95N4ic6LXpuwZz5x6O5LjVCqgHaQcqTg4mOFnM2oOhH6tqzr5nRSQxnlIqwlN6zmG54Nf7%2BsCqAi32zt7G2pWTT%2FuSDXW9WFqmWadl34%2BgKbrDf22RuwbayaC0Yb%2Bi2zydkPOXCE1S7PkyNOJ4q1E2vvUjX1QxE8SCWfztyOS%2FTevIsS438bx&X-Amz-Signature=e78f9d34af5ff3b5c8eb0bdbc40a7bc54255ec4c70755c502617b6ee3d8d3756&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
