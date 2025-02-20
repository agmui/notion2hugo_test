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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HO4TBEC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEMvnC6fUZCmBfRqtPCOUgaZgFdF3cRIAnvEoDXB%2BDqAiALHYN0TObUfaSTVvLv15IXSGVbY2WFh8cn0QuKHwRSwiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2F7mBxrudiKB6zTKtwD2DPrNSQwkZBrm6FliWXuw8i1KOj77kD968xQ21TLZLTFycX4woaosIVyUikTO6C9c6OZRoWi2TC%2B1IC0o0oxkBroEa37mSrtHTrG81z7bGfHiLRho3vsWl8%2FOdO0xVZsTWAiqaBJq8rNnSxvXP2CfecFogvR7Db%2BvGZvOGuGY2OYjsku%2FYduWRfPlqOXqvsxna2i4%2BUAJMZotv42qANw9URKJvUEhOme9%2BquoyZIA3bGhRO%2FoIT1E12hM2Hlz3%2FHAG6PUPHImnFuGE9nTV05MY9qo%2F5wZ48YEEiVdrhTviTFimSEHLgMiKL1aKfOjZWqXqwpoNVZp41V1R%2F0%2FEsh9VBfGcacnk5srdsxe5edxKjeEGNcb0oVqzAhbfKCCajejIh0oBH%2BGsrb%2FdwRpV7BpHKNQ9KDzwNOS9kH2wcWC5BN3wNVqlxgDiUK7dtMEeqMyLM5zvvPpHgtBKItFgCPbpOOow6karxwUdR2qSp2WZOSFJWHNwGz6Y%2FACHBji0zIz0MXeMGYpacIz0vPeOQEKOL59%2BgIyxvj5MJgmI3I4gYrBUoe2IEK2mseHC1krQVJfKqlOIET6FTKeesoiBHc%2FrFx2SPCIGq50qcB1junAo7CXWRtWKAYtJ9yHm0w%2F7HdvQY6pgEJvzOy9Yhn6B%2F0HPsO3Qv8rLJgQ6hWBoN%2BNTQGT0JMnmsN5F29iuG9BBjZMT6lmumF8p03JQmnkG%2FlqAO2XIKOkHkM8zpW89yLc9MD7SYFkSCY%2FUJvMKnWETtPslfU1aohEM6n5l4qhGroIzaFn9V75DGq%2B%2FT7K78VXHPW8cQHCAOKhXLpPS%2BzkOI%2B%2Blt6%2FVM2FxiwNdHIjAOokndClpd02%2BeKCtF8&X-Amz-Signature=3ba6bcd275e9f3d687b00298276da2a24fe257416ae95f098fb3bb1ccffa4875&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
