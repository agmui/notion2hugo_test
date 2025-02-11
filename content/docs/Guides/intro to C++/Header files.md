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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAWVMER%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSKKyYQgGYp%2BYwbxueNohiUa6xyMUStOS61%2FH6SYnk%2FAiEA6E%2FY6%2BKvMhmhxLs6IHMwH40i1AEdVEbC4qWOIT1FL24qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZrr7k4ykAHFX4jMircA3gwrGYVqvUyoHC1UyuvZv%2FWKeuMTTcpRDzQlpq3rlNinM7Feb1blGSD6EzsiA6Hj%2BNcvD3MMtPJLIxXPXsxUF6vzYyvuSOt%2B2Iqb9210t8n%2B0HF0SawT%2Flkqo2P71pKifeUINgoffsjz6ygV5MjTKRiu0M4jFrDTHmQblROhWLB5vTDN4gOtQnDNGDbrNEfnbSBCo43wBJB7lpRj4G0Bh%2FxybGN%2FbUNhVGhQhVqW2o1UN4abjpARmkSzMMILDcUrOuiBuTn84M%2BdQY79atZkwwwPvnQV5%2Bjod178tKrQvyf058A%2B6FIKKgs4J2egHrMAkf62QxAOGIw6mntMre%2BLYheR6se9%2BLUath%2BtluCYbAG11QbPgYuK0tnPy1QOoNN91FCnyrVzqFeLYobzJIrZh3rOT9wj%2BFgb6roThU%2F3eO4oUmryMBw550YzAIBPW9T0bWMTa8q54Z2VaOyLXxs887to%2Fv%2BzTfGrL1iYVL9cMuOaTEHiGFewE0CCv3AeDCeuYc8%2BKv1q1CBsvjTTxxUHxGLtKrkvZqX16tWSjAnXC3%2FuD5OXUICBIgyYC2WdTuaOEVpIvPdhEb9EtbfKqoIj%2BKKduO9U%2BViosNz%2FXA47aGs7Khrt5NPVtzXT0Q9MNLIrr0GOqUBmqJBIg89gnaD3pwZE7umhk3GLIR1tJ8DyxY%2FsHS7OCmIguIEyKC7lnX4owBsi4G8hX70DZ3nCiF0id67MY5KTsqrtXY2lLiynX%2BB7KAus9sFGuLIJ%2BBzJAxf%2Bg0i%2FFwc4BVSJXfTpMkJbMK%2BThFiwKn8%2FWqX5No2LhX6WIg5H%2BcpHx7yxt4m8%2FVl4oUd8oaN9SZrjLR1QKBSVsYM1IVs%2FnZ6hjD%2F&X-Amz-Signature=f23f13775f25dda99a1f22e60cb50e3ac14ccf23170e6443e5cd1636b8ddf86e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
