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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPBDGIT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2swSKxkx8crDd08ku%2FZmrCnokR8iNdTOQAngVYpH2dwIgRv1lkuWJB0nz0T9YgXS5OplRP4A1c7G8%2F5QgRbktbv8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEclu6MHR1jhvJGuEircAxVdpQjCWV%2Bj3Pb5i1YvFih5Vf%2B5yXw%2Fhqg6QDXFGcBN%2BvjoIegMjd0jRuzwYVPwz3ZfzKJ3cFnrQEIV2b8Q79wGMoOPzywf7m1pqiWxWTLvrIXHIDXXgJrIAgss5FJ9Fp9k9Bha%2BQIU4tN5YgSiTeClfzGXoC4Qz8eLtbHROpoA2D%2BN0nsZ%2FCGxmOup2oCKJbMWNrFTjCY%2B2MLn4CAXycwmr60MjPZdRhq7Wxp9vUfO8CGh2OxqlsesH%2FAddPEbkUNN%2FeNl%2FWoyRBel35fqFVXkyH0jnrJGPXuseZI9cL2%2FFK6zDACXQ%2FoPlgK9Y5hETmNcsu3r%2FGZyjTOAQWrTloMSC%2F%2BAFdnlVpFbZLKb0a3ddc6Oex1QvaH%2BRcMRtNWQx4jk7ICjixCBQiH%2BUAZhPjgUKonsdZcHIpQjZt%2FMjJouBGRA72z7tJRE5qq7Mu3dD%2BJdw8oN0Vb%2FUa7gAkX8N6b4ASmri5rUH9im6KeiyGpQ5wPv1PCfXM%2BWS6AGskbsjEy%2FjFLfh4auM8pCselJndtu4ePI%2FPf%2BhbmRwe6Ro3XXN64xnvwws3o%2BXAAu4UfBuNn7g1Rg5IfResm7%2Fwrg6v3Zhx0MLQk4K8SRB1ECDUQGUHFhbW6ELAZsSr3TMJPLs8EGOqUBmFwwgoBtAb0nXebXdbiJs33yzRgCQLlUpgxeHyR5a98OzFgiSlef1ejRyX3Gb9xvjIxoyFhBsJ7Dn9TQPlZ8rVgwcleEokGik9XyvT3LhObBhfPyh9ai%2BJsCpVslUB7Ere3hgfY%2BaM6CIPlXRPLxKiJYYoHjLFFTu5Eo0Z4ie0qPr%2BPz7OvmFflDMAFCvk5DVPC0I%2B4%2BVGwPj03Lkvv64guYu12j&X-Amz-Signature=923bddb7c9deb9818257263ba97ccd5abaf9c87f64fd1d03fa4ec197406ef8f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
