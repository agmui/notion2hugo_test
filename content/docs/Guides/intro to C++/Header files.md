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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHRJBAT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTOsMe6wqIfZK0Hb7gS0wfYIb3VEiPogPx9Zr4iu4lCAIgUmbKUkNmru4a19%2BzG0cGFtdtalqaysduQPQWqYBnidEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5WyDPvuFxd7zIzPyrcA8%2FHCgPHjsdvm9nsfeMhxuhVEwMTyTX%2Fpzz7RTpoyx%2BLdlihVZMs%2ByzFp5ZW3%2BsoEJigVPeB0SmOdmxt39JZmlrltc2bBCFgSVnDUlQD24z%2FMH1yQdt0x8jZ%2FIFtipw6%2BYgd93YEk6sXeOYhPFkHKB32IoB8RXjXEkbqh9dzbqhqxpG57C9LZGwNtlFGc5s1UbK2HwSk9KzF%2BpMnS7D2i37xijVj9Zo81Z0ZeBNdj%2Bamh8Z619dXwnA3ZMBeL3mIGtefFrBnYok%2Fn%2B%2BtB0%2BNVqw0ed77xctH7zkjBLS0NCQRSHwmb16VtwBthP7nj2kk1%2BWT3i0Us0YQZgzFMQxKk%2FAVh3NKY5GjBwqkH69ZdFl4IbEtW23SBGAQ6q3N0E0hkB0mmczZFq2tsQ2of9EAZjxNzhaEQKBfZ6AdHwyU5%2BFYQKLrylmJgIod5HpRfykc99RY0RIP%2BHb%2Feou304Cp0a%2BZvlBDvYPyZd7omAq8QaDVMQ5Lsm62kdUfm6Rtait%2BSdidaOqSpee9PfbHOgUSPt4STSAgfcPKXVfd49HYCdlAdNQRko4X2E6jYD9sHFYEMbqQsc0qUlz0UfTceW2aYkqfNBJkUUe%2Ba3VGDTjREWt5Fj%2Bm1G%2Fcfpg1H0UTMLu7hMMGOqUBim68K%2FhI5WONwcUAwGByz68SVCKO2Cjc3qQp3%2B63AMfv0f92fg4OXe2m4qWRujFm%2BQn4BLi7PK%2B%2Bz6nGv1x7dQhf8%2FA13Y175C%2BnMtNQc50BRaW1ajOZrYs272gr1rjUjwmCQRXujmvhvl%2B7g6ngOT%2BhMlJM6d0piXrXw89bE0IgupG8%2FnoIVaKXV2Rf9npEx0JWOrc7i1Q0KqTElaGDXu9fOirK&X-Amz-Signature=5eb4f309843d6108aa587e9437c7aec878fc3e8e4823bebd8e029b4f6330d4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
