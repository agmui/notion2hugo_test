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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6INRBZF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaTOL44OhEfbXWqi6EDB2Mz0UX%2Bt%2B5znlQ0gNhLhG%2FrQIgXHqYj%2FQaRineHtciSq0%2Fc7uph%2Bf4I1EwM6KJDP%2FbAvQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBeisn4%2BdQBQRnfbbSrcA%2FJCECShbmLO86YHtO3yRsOAx5hH3uyE%2BMKd584nfu0Jz81dNJn9KiCXkvWUvczFBtvCAG94TSKJvkQRw5Zi5cImgHiFm%2F2davS%2BT4tWBo54SoYFEAPmPNDD3Xjcu1923YixRzn6ZKIu0sAc%2BqdyIn0uayNcoo1Tl5G4Pm7ru2Id4NlbZNAgqHAC%2FHcnr3mK7ThFR%2FIA82aY44gEknYyGZtGIlKIS5xqxUDQQY7KlPnOkxhi5M%2BX4XxFAd1ycdxbMoY3DiX3hwfERUACfTtaG2ZLxmGL6xmR5zyL2XMnJJry0%2BjFHO6Fqsd7kp%2BdgNDgeaH3c2iU5BTF5dnJ9672451griU40M1lz3BqyebqPKs4ZTrHpLQPJ3Xmlx%2FhFCFnT8k73tPcT02zT1VKFIP56Gge%2BCccdGqB4TFLY2DmA6IZACw7A7ThWoivJtqbqFeQ7O73EE0b6E%2BIAcIAuJoN%2B%2FbGUdmT%2BOuGiso4HP1LzSAvs5HHC7EjjxkweKg1ZvsPg%2F04keL%2F0Ff2NNK7C2YagyKK7z2EUmP5n3d9WjtYu4BU17U2z1rqehXw24YuFv0z8XiFUfpgSCSjK8IR0EEYihXX%2B6Gv06ebCICWxsZRZFhxDJm0oKPAnE0tlPe2MLOMuMAGOqUBy6%2BtikOBSUkQFpEcK2kTsH4x1kFrnonfW3457YxHSZ1LCDaEHsHAjaEfJYOE%2Fm0Cz4Nswy%2BkgLo%2BShGsr9b%2BSyqwxQPEYpJKCqALdZOmpUEAK9QCS8TGmEoCpw3CJZ1mGnKgo%2BdJ1R4EybVd01mYY7jSqGLSF7W7tSOFWvqcDTfSLXMb0c3J0yL%2BcSwUlXNrk6EN9VopBYqWy1A2I5Hhuvhw6xE8&X-Amz-Signature=c03b2144d5318db4dfc538db8cc3fdcfa0ecde7a6221606fb73af5f96fa4f479&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
