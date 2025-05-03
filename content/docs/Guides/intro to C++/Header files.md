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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5EGAJZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCuz5Bgi%2B%2FyKfvagMDqxN%2F6%2FcQ6eAeQThJu3%2F%2F41AKV0wIgBjDuiof2lxmysSX8UNsJ2vMtazvRML%2Ba05iq%2B2i9bdkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP2oAKfezPeFNJtqyrcA8SNUMkFufvuwPINATw2t5lKkRsIKZSIO7zkzIJkSDrvQ5K5xu7gP1PYGobZEXaGsvgrap3YMoRlpdSbW3tDMqKkxbJ0Cm7A%2FQcy4S8AMFSVWyPy9L0WLnU94YtFcmpguBhhP6yGfZYPL8ii2pdqMse0Z36WkgZycbnVRoeOsXcNHJJJnxDN9qUsL%2Blbrz3IR90WR5yHDW%2BuRrus23ZWL%2BOk85EZKqrecb8X7CONYGNIm5gSQNVKP8qvC2oPUGZ9KXMAI1kLcF%2FLKK0o8DKLM%2Bx3sXckjDKtJWbHqiLg5Ov8G6u2aidKcQjJI2pjQG%2F%2Bhonmdc%2FqrBkOxxpcO2KWuIrThKtF0n3kPJWh9jOPHBxTsLhjVgUaqgt3Y83U8KmRK9zcuGpotsuWN%2Fs%2BdHJ7GFKDwjoR%2BhDtGnMBszFCxrvnlS1VEllJ%2BTYke%2BAO1aSZN7zuP4A8UC%2BLHLJBiCTBRQUKDSV1T%2BqfwP5j6hYigl%2FMH8A%2FyU6Dg%2Fq%2FF%2F8WSucpEdMuuBQWj5LJqXy5wYS1xpfJ1z5boMHsZPHtthR02fRXnQK09YyxMhH2DLfJgfa53m847pxsnYdpO9UEqoTgeYTb8vcEqRq3wR23w0XdbGss3oNSa2Val23f9JSXMMLz2cAGOqUBCrpWfaDzAx1I1dKmw%2BRbxJz2beVV3ugZ3H3YBBDbUfBRJpSZyYWXFKGd15KIBVyESwo1i4fV0MJHdgixBMLUw%2FGCwVyOMaN8Xjm0CFY2al2Uxrxe3OjunNsKBiHNC%2FjXjpJwgAo%2Bys5Y3MhqhqIluhPw%2B%2FKf%2BZwOrj0HrATSpF0Yn6JaxR0sRa%2FwyZsBIVx8XQpyHLGJiRUHgy6b%2BPIy%2FUVJn8%2BN&X-Amz-Signature=ac23068c2288b0c62e15a63a51ea34a5117f59351184f7e7a53ccb62c4e76912&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
