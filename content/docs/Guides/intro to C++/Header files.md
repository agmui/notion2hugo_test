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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNAWDDH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD3hx446KtQxKpEISSp%2F6MoLcDL8KmrIvuKoeDQHdr7%2FgIgO2Qfr943madywRCxX1MDdjfdDtjev3GjIaKxupwicD4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOHhfgGr6Xe6KCNRLSrcA63%2BZXb6fuOLCJ4%2FyG%2F5I4Kt1AWWC%2FpgcpQuBaxINr%2BFWyi2cc9C3TS8a%2BnUlUP3cNEQbXwuMCQrK%2BakQQEhtIg5x0cv8sEe6vmZPmvizAIc3goHeYFaJp5xepftaXY9D56x321bpf6mcu4UObI7ybNN9UgCDPFBSXz%2FozaE1IOx9PY%2F3OFKZ03QmCH%2BC4rxhdafIhmxfj8G%2BOKtNIXNNjMLWih0N%2BZg1srSH96ytzUFHRyvXYGYmd7b2JU28%2Fn%2B35RYf2Rcd9U1VyMV5rdrxcsa2nnFJ3Y4LyObVRsgxROXAicHrIXDF7ajGvs1uGq51P0A4ulog56p7NhJLBACc5X2arldq3%2FN2gOarutmE732OZGnWPjb5I8NU60GYlWjAfxW05E0ZWBtTUy8ogY47CtjBX6SfWyhBgzO4lwaKkfjOmM20Q2J5ioQVGLtayiLZ25rqhvQ%2BBVI3QZ5gtcV45Ya2u1rwlb5D4SENGb20Xv5K0nzUEpDTq7Hzzgjs7QiOz6Top0%2FKdZ8UedOvPE9ZCwScdJy%2BpiYtLmNQ3pxP%2BT%2F7I5G3FWpAirVnoCong1G4T42PXv6FR11LBLlikvTFXkOXUpe1zXCmqLryqFKTot0J6AxeGwVyuVTLnzsMLiGhr0GOqUBKHoApXTaI3cXdpAZAovQy7bLqJvDAhqxnv%2Fg0jVeeLTzNZYWsnZ%2FLz2sFM0WqkQ4tZ1H7X9iASbq27x6peF%2FU%2BDxLq69OtrnHoS%2BWInDkSSW8RkokxzwZlPPTOI2eNmYFCGx6tVojGihkhMKwmX71nEdL2Qt8YPwFnj1sG3acLdPzWvu6hROZsV5Q3qbkLnTC6VdJEtcT%2FQ8MxYdq8H06%2FZevgvO&X-Amz-Signature=cdc2a6b6593dc2228b974268668be43216f65c40059c0d1cdd250ccda73556bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
