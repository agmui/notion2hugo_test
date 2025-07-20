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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJ4PUXU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH5u9mYiUmENOatOGNtYV7Elz7Nqp%2Fypobds7U%2FzlaLAiBJUcI1ZoeIlaw%2BR3bOM0ZYcZeVceWfLBGp0tPNi1l07yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKWGkjAjXGJWnFI2MKtwDZgFfmDCkInGpSJOnL80SSeu4KsWGhEkUzujPTrwj2CgTTzqAMglTITg81nuTdfBGh4%2BOHMzbqSEPgGrIwix9rONo%2F2w7y%2BWA6KjBzXjnkIo%2BK69GVNI03hS%2B%2BG2SPSRujqWdgQS09UJAnIOg0w0ykYO0uLF68EJIS1GAYeF2%2FMy7bwqkrS4wfocLtDVo8c9%2BkT2lz3BI6NMBPc89Hm0ZcDMK8gOQsh1celm1heF%2FVOdWBVihTuOh4l9ibBjVJpemEmHX6E13wPPVzqKOckI%2FlzdzIx%2Fs3sOCW62k5ojSEncFeb%2FDgl%2FLfIosm4Dik6YtrkY2aLVmSOrKWReQtuBy8IsoS2Wlhy536chPVvrlbtFiPkLKxu6XeG9PrR%2FT1%2FdBriwb7CmeIEN9vXsUbyVIhFGkMCkxf1ynHrOKsKrXT7l7OcMiczf%2BHmB1AfNJ%2FieUaqC59rREL2KY90gFkJfGzLkzDA%2FKfp97qEW1OFsRtX6mJIJMZJKfnTSLiwL1qP5gH6rnuo3qp6pgkP3W0I9dM%2Bu6j%2F%2BQ19KX2%2FIj3223ptg6D4Zh6s1HqVjtK1y%2BPiEvxDCzb4H%2F4u7jpbqJzrQ4wpOp6EXiUOtAKr1vLHpEQvFwRVxtNyL%2FPrkLxSUwr9rzwwY6pgGjZ%2BVH6B724gZtZwAQ15m0p0b1B%2FRw8DYv9SjvzRY4DuNRbD%2BtFPk3G1a4CqcelF%2BoI54eyQDj4QpyzSEnyJTd1ZQObeRWnblGiVwrL4xb5wflyxAM2GXVjVBUs9%2BhmECSZXduAbbvydxB7zU4YWp7XQFu7Xe5r4tQN9BhpJil0qPyQjKIifco6ed4RXFAwScdhaOEYFFW0Ee5WeZiwz1RkYYAhAJo&X-Amz-Signature=5f1568502a850fa498944a605ad57f9ac1dc30888548726044c2edc623ed3ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
