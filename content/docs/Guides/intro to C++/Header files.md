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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HENBJBM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAVUl1Kxr5jh3Jut1nF0T47hywiyYYgqhPXqM2aA%2BjxQIhAO6zRrt45PJXarot5FdAGNn79%2BBqiGaH8ECPYI5WYaKVKv8DCCQQABoMNjM3NDIzMTgzODA1IgyYoU0aW75%2BRnELBYMq3AOseYQ%2BKmqpTmfOt%2Fpt3Kk1er1mbDGeZWLHKx2cINpY%2F0UEOzMMMI68XidMVrouYUFPjB9A88FGKTvlGVTykW3MkJ7qOrbHgvfLf4U8Ow%2F2NPQ7b%2BpBfnh04GyyNRaRGC47GWyJYvznz2qCBqLJwSwPS5YbF0NV0bOCptiE9KSghTj%2BBARsZRcfhsj95R%2FfMTtZTQ%2FlYK05EHPim7S2Hp2Ooy3KkbeHhjmx1RM3Z9DYtnGAhHv6Y6QVuR7ymIdaEdf6hteYr4z1p%2FGPq3Ir%2BviOhQf97MVdym%2BLMQQEfkFTLS%2BeY%2FAQkM0%2BYWpWerRkHhrEm4vDPRcl%2BfGvtVYbNi01NmVS0yLxd3fFMedMTQ1hNXOOamlVZXF3DZ6sS9Vd%2BRkEdgBRKmL1RAXd3fuu%2BP6AHLZi21JKvG5mGNFi59AXoim%2F0fIPCBJ%2FxmpXqFzGMZUDxFcAHwPsDhiMSWFA1ZC53YjZmw%2F%2FzLkkihphASIY1%2BH%2BijQuX3GMe7J8dN3d25XcScVZMHprJGYe3dNnAm6FJzgD4TGJ8ovxLQbnqYuIvm6%2FNEhkDxNpug1iL82Fl0GzDUGyc2EwlhSIMl3QtAxFoQlVIWkDUSFY7ZMEYsjs9HP0HN3hCiGAGlllNzDtnfe%2FBjqkAf4Xza3%2B9ZuWf%2FF0ggz28nBFzzX9jz59t142qhmA09sc8ho5MULmXERdb6saiTPvvlLD6yDtpER%2BPTGDyUvGVatW0URNwrBjU8a%2Fwhxrq3cI9fk6rya7T6s%2FEC1ZDR0zrJb1I6wgflbfp0Ssq4hqewqAFEHJbill59xvqWM4CFSwPLOd3swt4crY67ThMy8H8Yy9o9ViK4YHWRxGLUiPTxzhqcYu&X-Amz-Signature=18f61b4cc651934dc066348843d820c6d3f9828be11f012eb7a510f28290c211&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
