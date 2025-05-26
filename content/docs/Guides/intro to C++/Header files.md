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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNKBXTO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHvYplDu0g6Xd%2BOjOjT7CilnU0S7bpABN2k0h39dvuiVAiBcxhmg%2BkMe0MVlnP%2BB%2BpiUgBW4CIlhQhjjdvdkaY3dPyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM1RFKzcatnnmhoWmsKtwDrjYEwPk8l1tcgUAzQC6xhUOSa%2Bf%2B%2FNOkmPxzZfRRaNl%2FVOXE85oOFSR8oD63oINKOqImkiOPoQqm46L9An%2B1ckUsXYYeEGzr5ojty5SzsdazfUBjF0%2FLsCiipNIsauCsaEwhgd%2FDnMFohZck363fus8Y7L%2FhQti5DsLjltEXq9wbWjnJmxIj5Vkz%2FG06gKUDwJcClNGOvbNqdWdzz9YpUW6pvMMa2lvzz3L39NyKMuMZSbwPE%2FsutGOft151l48Ac5U8E71RqMZGcmFWtqp96l5lG5JwCk1VcTL2i7dS9SlipkzD5LNGE9iW3tN0DUM%2BKpP5KM6mnlTiGuzc%2F8Cn6he755drLf%2B9UAbbNhCiY31R3W1qw%2BGS4dKXKDrKnheZIZaPsumMbLxtMSKZZZxX%2FZD233s9ziJn8wZ2QzYNEVPAnxOyiGRDvlkIZ7vU8SI4%2BOyKN2w6l5mXobEXs4NiMGxrqxasqgjw5OI%2Ffas1nTzBCqdnAu2c5gsPqyQtrwU6s2auZXlMWd6WkYje%2B9jveR5KjaStfsc9Ad9cBRWO6GK8p%2FYrZNZ85oXX81mJflWYB7S6MmlVstqb16GsSsS50pfx1zMkLIVFx3cuMvJRsJiBZLiIeq8UT1sIsv8w953PwQY6pgGJmyekzXOQMOmNwWd4db5Y4fN1KM%2Bp23YwSco1CQWeTac5U%2FACKBVKm%2Fjcse9qJwa8%2Fg9wn0Ko5H2ymOorUL2xPLQN4JcA3rkz1lddLF9KrG94BR9OJ3Hi208zLVil2ZbjUULXOhwgmK1Qre%2BgZkWIknBbzXdyJHzISbaw0hf3fjB5k7OBAh4MKnZ2CZT98u1NbuirTsYU2ZYrm3AQnGRZ8OUiuoiK&X-Amz-Signature=7c1f28e524b08bf30aeec5a83cdc7b7aec17c719fc5de96c6a890638b9bd2e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
