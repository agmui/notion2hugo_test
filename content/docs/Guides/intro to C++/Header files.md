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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCNE52EV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICs37ek41M1w954uJF6xzr%2FPANsg7jKe%2FUicLPic1iMBAiEA0XCQgJ26iuoEwkDOCbikpYxqtl0ZRq1R3Yvs0uuIJz8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpwgZWXod6pzUUPCyrcA3Ut9jAwNUJG2CWGNHF2rzm9Pg2rldlBWlPCgjx00UNYzLIswwUBJcgbkCXxGyNJ4TFtb%2Fpfmv%2FX2itdr4dQ3gZWDH5%2BTM82hJjvJtRHdeNg3FBt1V%2FvNdzIBpbBitqBfeWjKYhZOqiX9Kp1gkfaw4%2FoAxbxPQ3TWXDuamMKlYLfqo7wMWfWe8korGi%2FEv7zjojYgfCXzs99ZQ06V7wIka%2FERVhDGH48p5tXv%2FFLukgcrBBwq7a%2Fj3P1fS5gvmmEYPlYceJgjW2LToAhE%2B6%2F5sXrNHlOsEKx1FVQrqVVDIeAIK5HLPwdzfLZIyGZFnXW16A7LDi8lw1S4RbB4QLj1UNVnqBR%2BOCffEmgFgdI7Bq4M615EkoEfxxFG4YXPWR9bWCGgE41DqvY%2FMr4uCWIXaldl0oypMcBDdu782%2ByhozWdmgdgK5YZMbYPy6NzJzLw3CaniFYYx%2BKjxsIvMN0iYDIk0Xoh80qdekiKlARUwm3Rf7K3AHA8zn6u0PAP6AIvgTJtArUtBs1InSebFjPbVectu3EPQFHojNM1bGhFr95%2BbWZLOLVjCeItlEnvdLPkuU9vzOPEy9%2BEc%2F0kAcER%2Bs4YcWKy6%2FuRyaayxk572FaQ%2FjWHPlHIE5ITg1CMJ26i74GOqUBPcOpluEOMsHRBZFkO%2BtTWLPW42JDlDXZslgReWQRncRNeWr%2BHrTNRmQFGS2vnZoLFAG4c5D6hivbvLvevexkGweyHyxHGgwvhnVDMLpzj3BoBxdla%2FEda8QCtKa9mYkU6P1DGCBksUQzZWdw8J8GIWbfe91985FE0xDO25%2BWfJ4f7CbOchLLEC1%2F3SVAtavQchIoIbMJO7BVgPWJlb0RzLQraci4&X-Amz-Signature=437c8fafa9e974285f31339805e44b298bcb23515edc31d0e9552e82cb540ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
