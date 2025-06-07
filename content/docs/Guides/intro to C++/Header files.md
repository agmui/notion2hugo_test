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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRR4SU4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyMWqNo0c%2F%2BI1UZXDiYFlykp9nKsswiGB4kOynBEkssQIgQyzcCcnZgA4OpTVlj01gXHCh8FkmUBFur2XD2K6zkFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCMiBloTv9qtTOzQICrcA3DUj%2FmPhr4zYteMTdLbowPHTEO%2FLK6Xu5f%2BR2h%2B9TwmSjDmab9bx1w5AgWZa5kuQ6J3e2VeQZ5jF0CxH%2BAu2uGYhVg8z81qmanRzazw8JBk1pdWtva%2BPF%2FGdurZ5iCNDU7z%2BV0aFN%2B39keVhvaBsGRK0TxLKC5354hxgnLoFk4o0K8TuYEhUSnhOdIlZ6hRoopMqquuK0AuxBmAsMHOBEaFjs1txXAfdfJMkkET3dR2S5lbg6rNEtr7UjHgKXHKewfJ9LoFr6NVfHlvPwywpFMa%2B8SYWuuJhkWbUi055x0Af6sFcaVR1kdAmaKuBQF1pOcFAtZgKvjjcmvDsamq%2FNrJVvzcw8pY7Awx3w01vfRayPcIKSLoXEi5%2BdGW8ggAJNSR3fdrdY%2BhtMzDNvag4dVkc28leWNNWzTGZ01UJkE%2FVAUp5PGSUtpJEa%2BjA1hMWhR3M677SAZb8fyFOrxNVPhcupgRqzmi5Td5EqrEtWXvovsSEmZiBBv3hCu%2FNJ5aXMIowoAoMB%2BTxP7fbERJvrQBAufp2B2sA1mv6cwjjA0IrguobZ6tvSY0PlefY5xhsLQ3VlC2StDchTyR5PtbF48%2BJpJf%2FLdaNEvl6QaIzxjxoIlb2R0nt%2BmK7BobMNLDkMIGOqUBS8Lq8RrtlrCywuepy9GMmckuaCtX5qXvnEQKvz6Q7%2B5lbzz79eUjyhM97vreRCPODl2sqILCb5no%2Fn2LKfx7jM5GTHpBAW6YZUaQL%2BuM5bdFbzoP0btbykiTRNCqApy4GFu%2BUsrB2sXyGUiSDMddUKv8ot%2Fc3gQpdciG9KK%2F63yEtX%2BJkFiUZc%2BHDOcLESsBPm6IbFEXBBEOmt%2F9P9QvrLOfs9N2&X-Amz-Signature=9b0fe8c4f65f9992cd089eea37835a0f9efd94a7b528db4251358df85761ae4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
