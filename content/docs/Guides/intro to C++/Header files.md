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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z637KORR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC4GivCklmqvaPRinevQxNtwQ8cVD45H1YZLCXjtbbH2QIhAMcd%2F%2FJMXqC0yNXKFh6lThZ%2FYKwhpTA2DXHD8rr2KLf8KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7%2FzEd3xoOT5%2FUa3Mq3ANRVbuGw99%2Bl5eWw5VgCHKDqzNXApwDlcZgY%2FNO%2F6U%2BmIsCm7tA0LFleIBFMhO7IuoPuZ%2Bqr%2Bj7Jq75Gwu4p0WvFfwDv%2Bgr9lG2eXSZJoKwatxzhk8UN7b%2B7Wqpvm762%2FgDnP5wLeHDMzUrN06Va9DPIRrbN%2FbCTn02ohQdundA7xaNub%2FpFUkShVsaBI4eEZYGR%2B4WDSWDy5PEOKqpuW9ow0%2F4%2FBEhJhzSpCIWIZ%2FGS%2BzwjK1GtAxYP0CFCKtKcJtPFWPz2CoFX96j9P%2F3rPPqmBsL7TxDjmWhQ1kmj4FexPK%2F8Sg5h8VD4ejBhA0JFmUBNK7eQFlVeKidvdysufuGT5W14wF9XCu4%2BbA0xOwxc2tOkh2As6dxLDeEQbBWhamBvPC6LY%2BYNBlX%2BHDkxBNEYn644WmfRu5%2F1UsFNyq0uD7ntXB3m66ubPmhXu8HAVpFFenzj2v6AnxO1YcgJr3kM7FQXoxrZCUux0UeDAkmOjFxCvpSMvOlQ%2FMbVGfYwlxClmXPUEUxXag0PhL4qMxVTIsu%2BN26%2FGC%2Fsz8%2BfWIvfCnpLyXeXOVHDFHIu0vbztfLZ0MfAQU26y4iDU5tIGI7Vx7Wn7qCVP0h9nTQTjV1GXp03DcDyxgd8CmnqTCb69vABjqkAXJazrANoQNwB6cN2S3Xf1jCdN02LBSku3Fihvv95tQtUbTwDuDTuMkHPStivmA96M7cqlP1PRQRMrmVvb9a1iU59t7LlWdB5MPqUXn3V2mkBGVZhT9ouTocra8to2UKgTqoKeignJPdJQkNIaNmwRxdGDqEJv5RKsOj0BBli7HBk8iaoy9nzoWML60E%2FJfx4RbOgBs8V98b5nHYhAj5cVgO%2BQws&X-Amz-Signature=241eedd099d7df9f1c822c2c63d2b84c92bd9fe76123120edf979de77174edc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
