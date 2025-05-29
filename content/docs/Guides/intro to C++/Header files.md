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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OV73XAZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FSGIRgGv2B4R4D5ihxhFTAVUYh0aPmuIj37t0rG0jwIgLNcjckg5l1kOPwJNB2JlHLrqObEGbqvs3Oxooj8o1M4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9B01E3pTwtWQUkyCrcA0LuryXj2M1ulxEM%2BSsBHWfjN8aNsC1GdQ%2Bld00tiMO5MwcVyZFyxUjK7kcULmETyoW8b0PNqshTnVgcM9NtzkJeDUTUuhvLzxOGzPppTHx95W8OAFlxh4fFpcB%2F%2Bu59k22xRbM6RShBWvMvfxAxaZuWwiZE0zrQXsexMngZUUGWBxWVEP6acbfYKrDirGilGLpWsuctIVz6O28%2FMqP%2BvFfzROV2xu03jDZpcRAWZiVwtlM247%2FdngR5aBEAug%2BByb7MqOasW%2BoD%2Be0luZrVpTuI0JWE322uDADTdy%2BQZD0txAAjEh%2Fp2t5X3fkQlG28phmOWH16CuZijkAEwRXHGXWx6ybHzNmqf3cCL9l87E2Bu60N2H7BjkIQEFKO9zg8F26EmodmIt49Wqjz8%2BcI9FwjpouW%2FigsrK3uL1%2FIyIHKfCs5XT7xEf0C6KJcrGP7fkGDtVinrlie1XE5Tq2ikays%2Bhm1ZQkPm%2FgkbEm8dqgawvh6kxB%2FrJFlzRxE3g4qcexlu0yOIJgJPlPK19lt3pKGcKTw4cdTcIGjgnMut%2BgJ8sM%2BCq8YhyGMemWI8qMSBh8oxJ0sP1wzGMpccAcQaFv6eLAdEgFL8SXeouURqvknhHMpnMWlSD2ZyB5FMPW94sEGOqUBeBf16Vv6svWlDNreB27ePWWNW39k%2BZxFAElUfyzDB0rhqKmqyz8A22Z%2FygvlI%2Butazl3aQrhXEI5MZZtaqoMI4hBK1R36vFmpPwUydkybrx3izx70hmIPbVVMBxycnbRyT6%2FyjeOz3p8yjnnRoA8HVV1hFO6pJ8GYkwJIwASXugzFbEcCdbj7T0iHeNcGhcpgqj3mTlL%2Fr%2BjB%2Fqe9SKpVIwnr5PS&X-Amz-Signature=4df065e8e484dcfd1758bf4b680599cc2e6809cd74ce7039624d370765e514ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
