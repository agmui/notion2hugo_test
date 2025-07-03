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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCGQ36S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFKz2jccPQ8q12ESBXa8jGdQ0xoNU%2F%2B6ygeVvGZZ7WsbAiBrZWM01UKJlcBfWpt842FEIiFDznYMCnVIUJ9mDBrXDir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMg2gKvvBV2t5ogInpKtwDlsFbf79rlWhhsr2Cn4K55rrWYcFs0k8IX8b%2BD0GcV%2B4OGc4e5YGpQpzLcqeLzDcA1%2BELr3JRxd5vTQ8bkzkFCee0ORDPTadI0V3e0U1wE6M%2BpOtcpI27kgyG0G50bMCiu%2BnXCtOXBrWfMDMZMoRC0oEzxg48aSvtUqUTrOn4oOLMgODjhS%2BovXdNt2TaSOEwfCJOvMrxkWRuZrn0ydv0gvQaumsO2W63Dx4ZYIf32Kg5RVeHv2Sa4baEe6dKGSsgmWVslDoQfrMA93upc6XcAiPILZl18f7wZmpQU8hpZ82hbbz0BF7eHEkRynF5lZGBCMHoE81lFprf9qjCjyGjpVarSMwnW5boGPMqZCLiIiFlPwJHMihS1B7LkuZlKXI3ygbLP5%2B%2Bz8Jx8hyv9GERMqiQ7uWHpKInnFzlJ%2B0PdhNyXg8QKp8rtPAqMkYRK2FiLd5D6Rg9CWueVIwYYtW5jOvnx%2B1AKRI4jpHwBDoMQhzDPOWqbPN%2F7B9Hh617svBIYyvQohFffip8HYAZp8DA84zS3A3xh2dI736sc9dg80GWO2eGu6ZaBw2k5rw%2BcJDzxtcBNMmAQxswek7VuuBJ6TOxGW797vECrR8dI3IF15MF5bHYSHz%2B2YvjtGYwpLqawwY6pgFdqCTuszADR41xX9Se957Q%2BodwxpI9p%2FTlmofoGDMwFra5xz%2BY7QMkz2c95fx%2BnK7zRqFVk1mnagrD7TcZOvjII6wOHlHMrz6N7wk5axz28%2BiqZ%2FwJv2GRBJ3cGS32wmBBvXtytGy%2F4k3BosRYxyXdkDwYXELhJGmLwum%2F%2F%2BePdT4U9pyoovmPFLZdh2g7mOiljhF0wS%2B884ylxSRfCUMBnXgo7C2O&X-Amz-Signature=c0df7550a5fd81aa68384f0dc3dd60e33ace4f1db1c36116338a9bf595b12aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
