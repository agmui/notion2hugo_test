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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZMIZC6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FFZG4js9clJBHeLsem0drSPeHb7wicW3rcly6wdYP%2FAiA2EOPHcYzexGk0S4WjqTqPhApA1KYi5qSIG7GytXD6myqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBJEjRwvN9PtOPktKtwDYZmMJewhNfA4HDV6uc5VlzrpMdyJc5yl%2FLGqQOrFYk2tiU%2Fnv1bQjIip2bQFLGdhS4RaIXGImmb19QoWiCZPgcvi5pkU8l3PIPBkzq1R%2FfKkgh%2BgvYEW9T5C%2B09t1S6EuZXH%2Bvvfv6h%2Fy0KZr1JSARVDWdQdIz53Z6TpF0oq4iPsHu6GLNxyVJR29P5bCkWMYP4ztgivIiRCpIVpp8b7meDjU0XfP13MuyRbTkqMbPuZv7RK1IKGpy%2FIg7R8I6Wb4Vr5byIdZXG094IBr56SZjhxM%2F1lnRwyPXsBqKqcmhsuYDglOJP9Eh8wSJz%2B1hwunW8KpPL4kw2Mc8HqIcYH93FSJ71so4SQuWZP0P2pALZJjcKmUkUhi%2FlVdxGssFhJROvFq1gphnWWbWA5DCIkIjpLIurSg5C74r4oJGqWVAA8As78vfi6j62E1afkrPGIuIQCMLrn2p9zRre0yjpe1uEfhb7mM3DIL%2FOEk5HiniFjca4NHY%2BhJZWhtGqGdwc4xG4NOu%2BxEuPKm0hkNDGac768uSMzLDRTDOZcCGaZR1kIMfa3vnPaM6njvlRqPWcftkq8JbkdWo%2B0I2kYEF97doHzVwXWHcuJdZ9cTDkkSKXiJ9ehP4BYSz7QOVgwg7fYvQY6pgHLz4prOOqnxrMH8DzRgw%2F4P%2Bwe8YswAQFiH51kq63a0LU10saQgGhbCREpr%2BYwrr6L8Fx%2FmFABVKMAQNQLHCG3WZrQTs2rz77%2Bo89iFDZBWin0x1Re5BVzGRcPBbuVLfmglbJfmMf%2B2A7lKRi8QKiGPlu3xvf%2Fepp6izjAiZ9jXl%2B5HM2A1qBE7FDTYtiFIadAzih8UmhvUC2roSuSjq%2B355mFQSFt&X-Amz-Signature=6c7a0432e77e15c108e7ba6b88a1691c7010bff08991286c134c8c4c7bfb16db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
