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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2JHXKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCbJTPCNFVdgSmunGDAXrypZ62WkCgnTSd%2BnwHWzVZjOwIhANXVgZvNdH5OBug4go5svzTEhXDYy7zsY%2FmZfA8HNxkAKv8DCDsQABoMNjM3NDIzMTgzODA1IgxboI%2B2P6CkwWywuKAq3AM1oe0ogdkOdCfpbxs%2FXOCcysxDmReAgeIRrBgcyBf0T4v3GlS6Q2yuQeH8hGlRO%2FYNR2t9yf%2BHyj3f9O736PjT8TscFo2ocgbwjXLoZ%2BKFLm8HNnsdE0QlKfllaQ%2FNRTqKxYto3Oo5G62CmKxdjgRl1%2BWbLddZc8XV1QCKMEfFjcP9OeuScRX5NyHCuZIq0TidvLtfMSCql7rtMssTR0472i2tvIOwY6hCaixutV0Edg3xd9fW18BrslfRb8YbnE2D00AeJ7C%2Fw64HGW2VE1lB7jbfcBnfvFmlNylAmE%2F6qJ8FMCWaIWXIxrK0xN9151spOVsRiPN0%2FiRltb%2FVWpr2luXGNEcLMVI3fIbPqha37i6w7EfgpeaarWSG%2B35JPs4bDR7OMjQlHBbPLtB2dgpA1LfcZ6QSLkwIUsL%2FqlVtmTbz85W4nZ1SGXGhobtP%2FrmE83KX25cmKMjl8nyBz6arCqWGHtVuAu%2B9aUONoIXz8ntXeErPmtjGtVTIGCxgSG%2Br7erTA77L19eQmw36WkyQeBQc5yhxh5X35guKDbvTU2h6W5DUOqM46YPptQSgcJAYlp5sg7XrNxlf8hhT5jvocV5arEf14wsGeNOEHG8WnorW6CYJAiz7zwyKojC1hqLDBjqkAWz3zQm%2FSI%2BqIF3o0n%2FhTjSxZaI9hKnpGgd%2F9gV9Q%2F0aiur3RHIZ6EsiAo%2BIrsxaBaJi546WCRngJPv8HhXPeh1jS%2Bxv5SFrSGDtqo3CLTmiHjO0af7ho0zgqUI1NeNVyI5PBvEBugl2OoR49TiemhZWoJVgBSV7YrnASlmhaIfTdb6Drm2PxlJnuA9RX%2F1gZE%2B%2F1R%2Brd0KGv0rTcVywIi8CmPjK&X-Amz-Signature=999a007df5a0a5c0a50eb87e8842c05deb74bbe694d1ed9033e4fb48c96c9904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
