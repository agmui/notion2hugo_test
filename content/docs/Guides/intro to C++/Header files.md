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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHEQNQC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbyITYfx2BkD4Se%2BVu2fTdCaWpMn5keo%2BDPB0R2Io1AAiEAo%2BnEogeqBLYxjBBm5MFjJByRslhJpTHJ851p4680jlkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhTqnVO5YisP%2FaRwSrcA02iu5GLCZGWvsAnyTg%2Bd%2BLa7Qm51gdK69fIjWYQ9sJgm4LMHH8n2a%2FlupnFhMVxxYU5ZXjhSNXVlsjfGePxvWjam%2FPOiQK6fgAxiFOjfwlYidcpz9SsJpfAjRMoO1bKYaZSM5ieIP%2BOIIFbszlXynls5cX%2BRGKJEYH733K5XAHxYHmSr7elVWJpfc2NMOEkfWxInTqgwIPU9tV1D80Fn6D3tmqPH9iDKUdOfRZ%2F1jSweoqCMxTP8whdtU4dALH8ofKG3F60qdMHyAQdiRnnlHD6L55bd%2FpTu3Sovrp9%2BkpLF5k6LjkwtfePiY5CCsGROXCfHwkyqrNBbAF48n9NK8fo80KCLJCTH9V2XNZE8P07lPflwO0UjqnodkrO4uBVkFFH6xX3HvdT8G%2BJT60Y0EpdKxzl6CtCsCtKAy2utUAnNoi%2FPQGdNz3rz1OJLoAq19w1DYNiTLoQwpH%2FRAzYPkljBHzsTvVzXS%2BhC1MZ%2FqjfGCMb0OPjCALQoQ6e%2BUOgNXAIqtY2GPtqw3yPUYVlptWLEV5S00i3bzmqrbMGjFRf6higTLCBic49Kea7tdV6Z5h7%2BmC7rm9%2FFlwMA8efsEquw1WejZ0yWqb0ZeT25HEJIy%2FPJbtpZ6%2ByPUIhMLvKt8MGOqUBrPVPsyHUvJCV7tYFFZqAPvg8M07Z%2BfHZAkA%2BVqIf3Y03pXpF8qhsVzzPcKRqFFQnefNvktBQ1aPYBxmcdAWubIiYHjOLhfZA3XACf%2Fnipf0p4XHB9yFr4hFCK0ywa6cu6ZS8tuOekXaTiTpEIsEphfYg7tK0%2BewgiUTx%2BQ93A8itZ9HpomnhzygJNV8jMj4DPOmLhKnpPgLZ0ytS%2BUGL7eWdENCt&X-Amz-Signature=f488a3fa7626292f00de19624066100e96aa318162c240cec8d7823eb399b3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
