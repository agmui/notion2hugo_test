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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYHV7ZZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHIsZEWqh0XfvAVbSZEgZaj%2BkLaWLqKfdLAxDK00GkLQAiEAmVB7fCwcZaGQV24LsPP6CsF4Xt%2BQnpQ2OSn%2FjilvfUkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgMP7o%2BVNT%2FR7bqiircAzNmSL%2Fb5PWJxMYXed4g6tnsjWkeEX7tXRgfV5HGT1CimyT3GTAfRbsnhKGHJOZ%2FSDf%2FPAG4uCM2WU%2FR9JTnKdjSpy3ldiaK3jVk8svyp2QHW%2Fg33t72mrp%2FVdF8TPrkNI3aWIA8NvDdQAn4IATDHMrl3soUZ5cfAH3mkGs8pnvzipffLlnzFDoEctscetlII1ZMNnVJPmUEy8sPnVLiiGiB45KdpP4sFbIlBENIW%2B%2BN%2F%2F5cm0ztljZtrndU8%2BWerrQ7Eh2sp66FgSPDWeveXXEzx2tMYinQTH4YjV3gecZ1TAf4M6U3msAMXNVMmTiz0z8n5klhaaaS5txHcMSw94hRiTCufw18hkoQbImx3Wzn8wBTz%2B%2Bk40UDmniznp1JNkt%2FSNW0c9x9L5ZoM283sFqWFqL0yRfzj%2ForkCI2RFGjL67jqVPmjZZySc1lvM5m%2F81o14hN4q8%2BjFBA5Eaeo2nBEQ3SHQS3vL39g0wwiIUCDy6t1Zg%2BN1tdmxQxcCYMkJjgvDLlbKJpmebuQFC511YQXvGbvlpsyaPOQXH0pZ5H7bbJBXj%2BcsR1ZO1CGGgAPoPiZv7cLWTsycLLTjnd%2BF2QWwZ4GhT655Ibgh8QOxVjqktq13fLiR4%2Bdt%2BuMK3FvMEGOqUB%2BrAQ103GJV1sjJtM34%2B%2F0e4NOWqVUYSfuvkZfEL2A3qZ1wymGTcJlopaVGRmwrEnDvp5QiqM0M%2FE%2BocucIYihKvuizgEAH076qttGbx549Jkql%2B4WxfDuJ3QQ304h5jvbj4sZhL%2Bj%2BXZHE8lcM70LWQUX8Sav9yDQ%2BRBwH4YLVi2aswx2CluMkoPsu7lIlM7kspyEKf2PmJAC4KpDEBqtcXb0Vm8&X-Amz-Signature=0ec9554b4f42afd5e311dd149479abe2bc29a98bf1b1e80775eadb65b68f7b77&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
