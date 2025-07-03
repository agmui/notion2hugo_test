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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMBTC5L%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD%2BkXcOCL3Wbz6JYIVhAkWewZwffAOtPrDzLetw7NQCFgIgLsVfogm2ubkkggf%2Fwsx9fjgS9%2BYwnU502EWmV%2Fhi4Csq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAJQIllbVkwzj70bLyrcA8qrhDMLwf7q83Ir591lFuonn3rFkuSVACIAlk02GNasGqMZKocIrWNR3%2FyLBo99mhpZVH%2Bg29Fq2vNrUsM1KSk%2FKLF47m8ZzmGgR31TD4sxSOp%2FzTImuLZP9yC4eKz6SApdp2DRx7U%2Fg4PWMVHdl3TUt2k%2BRgQat4mt34AYjvrxDK798y8UILygLcnDz%2BNvAVnvaN1H2Ngavcu1IV54RSuoQWRCmpc7qLOr2lh%2FXDPt95J91TNsJis9VdmvLU59MHOeK7P4vxbsmM5fl8okU6oZTuCXA4ctekmME1f%2B7I3WM8W1EcAULtvugorWZrZ7zhp0RUl8Q2ElbozjGkIdOLt3FkGAAIwgv2R3JbPp8LhYo1J0X61ErZwrO71gFqsBIua7hpmtuY3g4JSanZJQeuaD%2BcwW3O1NwflWPY6YKbQucxG0aWseF%2FEHRBXJceTCg3FePaEs40lyF0Bgl1u5I4p1zgxjy2RxOh2noUhLV3RBAsOT66RnzZuauGE876wfFDvrjbGKMQfA3LU1TzWwjRVEpdK1yZkjR1%2FkMDZCMLuctmS2TcmmmzPj%2Fx4Ho5FUOedej2VnMbWGVLtziMAdAfd9847aTOyzz8P8Cwqv0U8ioXBWEe95WAqwI9%2BWMJG3mcMGOqUBbq5JSfOFxeSe5q%2B%2FjFdq6CJWl9vcYKKbJaQAYFjyof1InyjFnma0yu7cEjKkx7qX8UTJfnD1R2eUdanlTOhpLp9rtElZqmYtZXu1E1MsGT9fWmEC06bWocQhiYCNoy%2BdGiwE4KlzS7OcaJRvNLQ3YYDRuvwbrq4HXj8L7YbA2QAyZx%2BJPPdT%2FGWc3%2BTQSQMAH%2FCAAHzoo%2BJ0UJPddyILMyLWTBLP&X-Amz-Signature=088b1fac36df70f77cb565a94c843ce7d067a560bba1e9725184df1123ef2cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
