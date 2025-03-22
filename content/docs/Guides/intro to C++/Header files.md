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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG5AJOE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCXhFjBEcXrkqVFAInbxo9798DgXosVbMdys32AZMbyuQIgZ%2BI%2Fsoj8xI7ZGyB0jAZ%2BFG73YPL62XPTtp4WNT6TPLYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFtrKEcOrDpqg8%2FfSrcA23EgXJaE49fOzonqjShbjaEb8YmK6qBkup%2FdBLDpPUcVNhguwhcK64z6HbQZayOAkqMxIalCqxsFquKSvpdwNjn2HNntJ2UynEAJyiHKyhkEUw836AdcGO%2BJGNldzNRXIcBayk%2FKjYZdWlxPPwlNCdzyjV5kS2n3SRkbkLi3whOPhmIStqSgHuULo0evTny99Z%2FIr6b%2F8Hoe1MoSPbZfIaV4VSVt9wK9m6NEBc8Gto%2FCC9XSzIZIBR2e%2BX6MyzbNGQ36I1myXFI%2B%2BY2fl9Dvc2PbDwbeme4bIeNJ3CaDi8Ogm5ZMTda55cI5%2BKeVQ2xSvNfx48PB1lhPsajSB8Pdlzv96PNFephSaMxsU7JoZNonaLADT3iqnN27GJ1ZhI0YJKVSeQB%2FkQoa%2BxA35PCf0WnaYYfr%2F9sJ7J9vyc3Wc6naAK4YsammevD20oua5ycQhS3fd8jTWaBFYNBFwe1xM0ZeBkZbhfHh%2Bw6O6yM%2B6IS7tYP7PL86p%2BjuZamWc8sZJ1c1X8VtwSm7hu5IgYrip02pT8Ex2ste2hQ6AVRQuW0NT5ow2ZsEoXcVdY4rCq6aM1ghx0rWPfk5%2BUxTZ5ICsqrUBg8rlrSXBVFcTD3f6UbcsDC6cAKVUrzY3F6MKeq%2Bb4GOqUBLGqvCUXbHXNbJ2K04TTYU6ZAKyfHwW7G5KAssnGNl%2BhXGQ9X%2BUnAtjw5M76xpA86S9h8IcqjwnMPB4TTB4vlaB1SwZDMJ85zw9pD7NOtRQAFdWThU8aLQuUjazyvF%2Behr7vw%2B9umANQ0CUaI9zWe5BCXwuv2pjAgcg3ElldOX%2BiaR64VzAFTBFsjdGSVxaTUSr2idMxQR0CZjzjVeIxhrwbpaXh0&X-Amz-Signature=52d094ddf923a2f0c308458aac57f8cddb8cab22114eb8c18bf0e11e054de325&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
