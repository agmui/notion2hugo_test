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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5LZ5XX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBN2iQ4XB7q6k3V658m%2B9sw4lDVJP0Natzmccl7zPWC%2BAiEArxFwrfuu%2Fa%2FzO5nrRekok4ZBoCKWFpLCM0o8tS%2BxbLsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyr6bu8twNpWC53LSrcA%2BYMDMpBwWm1t6i%2FLgWBApfrdirzhrqudRkQ0wPvXxkqPlZzsAF2zH3ld23FjENzrQOiS%2FUc6odVypYp0Y8JK1r4BAMyouIIfmitRFQSHrhtYt2UKsly5AGoBR5RRhGxbHkCGwIKFF4VS0%2BNPYjpMQ9Bnf4UKpocT%2BVfiqlxwLDb2a7E1U33e9wXTJCpwDh%2FRan3D1LByyQ3qAOm%2FzJUUdBjkQYOHsXJ%2BPnl%2B7Cf6XCOmGlM%2Bicp23QSo651pr1UmyngHyuI4Ns%2F0qIg%2BZf1ATlF%2Bf2zy0G9XvfBblD8K%2Bnsh9VHwN5kGXoOSKgvs7V%2BnfsHTEBxtx09x%2BmBybzjmFeNUlyfizjAFIJaU%2FSjeun%2BQlbyNBuL6rD0BVTgyk1tBD81gHj5LM4H%2B687SyGofG0Xqx5J7ZS5%2BNr80GwIiQae9O6ieUzEyElQ%2BGUhg4S0MdHTmamvwg8FluRcGfgw6jmnfiXSWKtlFKSgOsufjvKvcM71WMbRbdZtHP3yVnJn20EIj%2FXI59MdOA3g67W9blobH6JStC7THgVt8INFD8CO0cvHrFpgM9O8U%2B7hvw%2BwZrdx6BYu%2BTHSxV%2F7xvpKQceVxHEiLvqgi%2FUPoZwzf09nsETCerzSYA9zyGvqMKiK%2F8AGOqUBP7pAagSbaROe0zsH4rR57G9sqnWdJ%2FzX7hfaVCG20WHrVMwCvqlnxmNz7dR7RQu5dA04FjbDI8HvjxxCXcBvCIJOfucJG2dv%2B4YC5dbVHcyUIbBBjjnCBdH%2FuGPB8AwBf1MGRND5rJrZ1sI1HppVSbg7CTAH%2B8Vp%2B4Fy3GeZib8ilUTf4NeIN8dCZRE1XOH%2FEXJG0foFC1tL%2B5DLG6G1SmBRGhv2&X-Amz-Signature=a093e85fdd2e12cb10d2e5ae1f4ccbd289b0641cea6fcb45b24d56a4090f4294&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
