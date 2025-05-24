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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWMKY7Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAZU91W3F4KYiidUDrrTfI12J3ZSX6sZnsyaB%2F70Cfa%2FAiAN6XvEJkNUS0IpT5F7BGDl%2FMmv6bSoAvf4%2B9QD%2B1Pb6yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMfkIIk4W%2B16XqIr6ZKtwD6iYrlUdMNI8139v1AOfrjV3ajzll6UG0FKGpnpY%2FVWldMISyAiebQ6lZaKgXljMF6Lx7gk3%2BP7k7sJO679Plog%2B2n7CweOGrTijeM8GzUmKHmzddJdcr5QctaBhp9UThGB5cH8iH7AXifkn5RzgMjz8yDajH8K5H45FD8JrtStAg3eNPbNYz6Eo4fr7n1Q5cKoS1W5V7BFmymU%2B0tXJLGpkS2QKUeYh0DV5elVtZypzXUtGVTDgwpEwGuLv5AMKj0de2ggJmyz%2Fkm1BlNykjbpmcCMdnhnGMY738gg1g6vIA5AyseHMH54%2F%2F0DgcmWDO3GIgCcPFi6lilRgfDAMTy9aGA0sqkoMHlkcsiwmNEXhq%2B4XrzDR3fiMDJ1IxBAYRovQ0TLZqOi3juekxvBlBtZXYBit1Z%2B0%2Bi5W0UdhYBOxntQSNn6BMzWULM6eSSjDX26DBCXVLY11GrMLeF8IKhWolFnKsjGz5eIgwYfgpkW5X0p%2Bb%2FWDH7LHkR%2FVmFL6V5i7hKKQo%2F95zQDhffIH7JolR%2BoOkysoPt4RGFOQdzJW4%2FBaHvwPJYtqI39udCpf8%2BT62KSGtUJ4OnrwI2BZgAnbmtaDXrY5eAlGqc7u8wjdRKYprT96JAPEe5lIws5bIwQY6pgHUoaUK6slLlQGQm0G9rk3bN00ee%2F5eDVjxJarNmDndDEsUOpogZnYMq%2FY%2FXEF1O5cGXP%2FBQxDYefvc1iSy92LvUgE85wAoi%2B1HSOKoXa5am1buCu%2FCQdWr5MKsvXjodweoMoGVZpW7tpgdaKN1Js%2FcAHuaK6K3XFovcFoas4RL5YxEphaCLqeMyeKwrbNdQBRzlweetsooW5y%2Fe4fg1fP8nndio9ID&X-Amz-Signature=7a646efb3230637f47f81c6551815d07f8c39d9dee0e3e9c8056ad60452050e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
