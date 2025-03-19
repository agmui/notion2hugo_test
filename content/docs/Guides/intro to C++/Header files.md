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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBXN56O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGz9oPM6CuuR9Uyswgz0078CaDCe7uzOG2%2BGHa0dzzwVAiEAnaceMtEMKbGRtGRPshGfIMmyJEKr%2FDxHoedeaCnuuxgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKIf%2B3OE5rQc6iZK8CrcA2KvuBhsjdTotiLVC5m0VwzLDMS3sR%2F0XwVuHN%2FtCw%2FGr2ycFTrXK5walSscnGC8PLursxETJwqhh7fluZ0ExBsn%2Fr0NGfYPopqSzqJS%2FB87FCMxPddKtjLsb3KVX5N4N4P1VLaie0kLaYK2wHFrDECwEZ1mBZD1Ywqy6C6FjlByGOJf0aShZJKlbT%2FM0j0KcvOfltWgjqySBstIzDV27o9qrs9Sa%2FnHJGK8kooVO82gAtBdbC1H2iXeRXViAErx3cBzVM%2F3NXAJ7CAKcpc1SnxzDy%2BDIJVnuLCzVZVA980zfZ8XwopInn%2Fwy6b%2Bt42eIhEP%2BUdQXdmf5%2BT79Rzr%2BLON0tUsDBBUvlwmAdIiOjR%2BMZ3H3WU%2BAeHoI0iRDEwJRrPpAKkQ8uI4Nm3nbzqti48mJQzqbTeBnRXXLChQcfEro8uFOc9NC0cRdb2AsVo%2FHbQiMwdu5ZdDvABnM94q7kxhFYdml4aIsQNdTe39DxtWX%2Bg9meN7fq2M%2B3uqIVEepO5xeIn6V4CpwLq3OX4ygNYhNj5QgYLWUxxEA0j3nak4J1cTiW6gS5AF%2FY4Ih8aS1D%2BDwZKQ0fh%2FPNKCcKuXiFS672jDpAGNmyn1eo0WJhUGJYpJSlQi7YrB6%2F8fMI3%2B6L4GOqUBKpY9q6WkGCtEB%2F1NhGRF8%2FMCXJw6kP4fDiSvFPQlbg09tMDr0M00dEvjpOujRIsbAMDHZwn7PvRCMRBX9QTiJPU%2FTpHp9NpnQBa%2Bj8JEnmvuAmTjh8pQPMaD0ajjlt7%2FXgDktErS23FaencPpU8TipwcqTWaMOgBTut%2FjBOet6P4wtga1sPjAcna7q9Xh4wZMAGutU%2BrkaR1qlK%2Fatmc2Pt7HUAw&X-Amz-Signature=7dc584bd3481120a1e68b44b3e7329da9f95cdb0949d464ea2ae84de5be6c428&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
