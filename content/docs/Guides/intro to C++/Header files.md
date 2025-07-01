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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57DRXIJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXq5mmzTXM%2Bwdt0VxzYBmoWa4vzhSQ%2BwWYtg%2BFgfMcUAiBQtY9Hp%2BQA6C8HArSV5qNpz%2FW3V%2F%2BiV6uDMPlVSrGy1CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2Fvc1U2gVBg3VD86KtwDKgKGbLF24V23QonVpHsAUXK%2FlYUQP%2F1gt8O9pAMs%2B8u0V0dB11IYCkjFCsmcUGSHf5etVIHRoKXyKDsNXIc7cfPJYvokMCL%2FFA7YTKkOj3gPyVSlxcqXM4x%2FMeJBrKPqj8pkhNkWfeO0ercBme%2FOsX0aro%2B7vAmz%2BO35bHnMWUqpJ7t%2B0LhofFbn1sm9b6KXU2zK0LMRNjPXjcRndzhjbgZkKlCl0W09uN2dg48ocpJ9zD2k3LOYKoOozjpOcU0zwkkeLoD8WYZSQFKndExofCXtsNv2Mce6YmNlMF383ulrZaoYEj%2BhYoU98odz5v9MV44uf3%2FSbY37i0Au4qHm8WXcctKVJHX6uU2Jo%2Fli6SKMn3hkgk3Zc5kEZ%2F%2BU42vLSkO9KM%2Ffk6Od4iy8mjgzNtPyy6lmHZTW3FlrUBg5W3cMKXfzXgG9PCc%2FH0XUhPS%2FN4ZfurDHn%2FrpdLQd%2BALJKRg0L2TpFhEL0t4%2B53xuHuuekogbPFNVoyeVmhCKDCENwBvT%2FRwdiL2kBapGcUXJR0bQUri6PQtCEodqTAgHkIoVmI%2BF1VXsxpSX8lIkSFQq%2BM6c4XPXwAxV2JNyyFIZKjgsHwPKE7qQt8AntrScyZYwc8Tr23S5JrVAPmQwkKWPwwY6pgELy7W4yDWrOVZV3aVxGgYgCG4kUuB4aoCuX43t24Z388y5GFvEkTbakR0634JfxEeectu4lq28bsPB5KV0l1n%2BkuuC5V6W1bsL%2Fb%2FnDivjAh%2FEwCt3Hfnvg0usKs3iM7Z1P0dp3UV3UulOoYdp8Zup4mFLEiDPSzMpWUcV2STbUTD2U2%2B2GY4IlrTZzYrTb10DsDHMtW9S52yUKvOXnyk445oxz0JZ&X-Amz-Signature=18653977584917f85bee1e3ed768cfe14dc9224f8dead8823916e71fe8de924e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
