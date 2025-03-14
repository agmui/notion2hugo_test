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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6EDNNW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKpA2umANt0zI5e%2B5WK73D0Pcgv2rFATz3UjHKItUG5AiAs%2BKwiM7jkvqn4r2IdlW2Qsa%2BlIBxPc%2F0l0zzHpf%2B29SqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGAk7JGgE2SHU5S89KtwDyGXiOV3HrWN7KdTLAanuCayl8X%2FJpBPp%2BJmALyMpRm3eXqgcGqaQo%2BS%2BFPY3OltUfq6gvEqn1BwmGR7BRSv%2F27Bha4iNF7mzvsRmIEaCBkYXbhQjjCl5QFR7PC%2Fwp4FSk9NBTFxuHFKTNitg68s5thAXV1mXBBsHezFPc30J4vRNgFmg8zBs2MnqsBd3kAJufa7ZA746SLwL9ACpX0rthjdL8hsMoxJ4Gm2c95yuO0QA5cEwCeRHyfs7a0EHI%2FrH%2BjLc1rpRWb8vNsxS7OF1n7iGF0Wn7XULneQA%2FT1fko%2BHKmV0xQZ9nd7lqA6E1cOjXUR9sU3Rn%2Fmpkxwdvg0m7t2H1RIweSvRZH%2BvR99DS3uDdXSQZr7TTnbirfxsavuzpIFGQdWojzCapk1ZyvpeRh0R8ZL0KEFZ50NND3ghNxmls%2B5lVX7MXRZ9xdCgZd7iOoICdN5%2BdJiZswoxz2E%2BBOWfgVRfgBGgiBq8UBxdvIQxjKQsXuzfSdXu%2Bxf8B4xpj93ghcYoY%2BAX3AaogKG4j%2BJg39Bc9iWiOfNWzk%2BFnyB04gdbqceQ33IOcE0baMTJrjrW%2F1D2YPKKbw7csOQFBZAE9AZ%2Bh7yyPRYYFqgpenvNjEP317AcUFak6X8wtovPvgY6pgGsvFJVU866izrV%2FNMdmurH0XdvnfESJ5Sn4K6YD07zAcRRumDFQrcRQwkduNgSlOA5tsyU6CV50qJCGbxB90452b7IRCgYtDH9BrdTHyp2oCyfoJZVuAaNI7JUyJlsYI07uQWF5QSKlhMZpSjah3uD6WjNhvgdjSsZmiAEN5M%2BxAmbXvLkNJaPU5V%2F8SROxCfy%2FfYS%2F4p2zLDEO4YlK7eYTynJQDbt&X-Amz-Signature=05d6c93f2ab2bd64e6edfca5fcaae7bc97a93b86d5a780810b6fb7d81c5bb153&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
