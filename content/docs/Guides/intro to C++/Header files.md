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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCIIID3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOSsZ34BHkIymcD0A4BHlm4Qgfwwa2UDPEtS%2Bdz2WoYAiEAjncU9AoBDiRPnnhVE38ZxjDfpWE0OyRhkWIrnylalKEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrbtBe%2FXzqpQ8u2NSrcA4SSuer2awAhyV0WftAzeBBZI27On8lQs1NH7c2vPqMIQ89BxSaI8%2Fagq8POR21%2FalChqbbflstBIhuX4CZzw5nl0H3ugC4hUkWK72%2B9IG0W%2F9cCkzgqDxzutNO90c1hrygTcCoUO83khbrtHKKnxGW8WkhZgWPcVj7cQbMY8iWTavfGEL977mq%2FI8RVZM7J5oKjEdJlrZYLIAh0L6R0U7damtAqXE0H2MhTFZomkVDi39UhfqOdtbFYCxMFoME3I6FnTJ4%2BxbbOQlxl6OSm3ZyMqBDf%2BGpPhD9nRCVjJVgs3qWf0G%2FEnG6AH6HAK5cFd7vPvHcBNuAvY%2FduI%2F4e8A0TXuj4NtSib6cA%2BtVBpkNiXJ42iDUA7n%2FUX8sX1%2FemVtP5LG1lU1rjG0WcESNN6M4IAmx3l6gNZ4XGghJRjX9lz5EjuNeIVu7aBcYlyUoO%2Boxv1Y2x1crfYhQeCDLrpV69jRYNZP8NNUyyQ6PPRN6nTb9o4e69lrl%2BR376rs2qLu5pPzoEBL4oFLUaaf25rvFqxK%2FoDBGnnV7aZp%2BeiPcXFVIZAE%2B1zhDyPVI%2FPtDw4HDcIIOFuSL5SO4KdYVxqItZY%2FhOl8D3j0FHDfpeBUVL5gY%2BcqRDkGVQuAz2MLigyMIGOqUBP%2FaDbBy1%2FRYR3vXhc8a6mdk8sfAW8QzViqVL0jy6TBvgV5wKVe%2FCuYs9wKSDltM9Fl3xatZAhxlbq4z1gNgTvRQK3gMGHxRVLHXxyaxfsdY7RQJmNUXrx1huSs4YsAAOgZ%2BfoDy88nBM1BN4H0wzo%2B%2BApWorkP37cxPb%2BQV6Xv6Nl9Dj2z%2BprZkQ4Va9P3grPkH9%2BDXY9WgS%2FO%2BSYd4GremG25BR&X-Amz-Signature=3eeb31f66903dc53ae4579f7cd1a92555726c946a75b9b4a2b48165460a7d4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
