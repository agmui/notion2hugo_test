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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOX65RLI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCFYwK26pWCpXOSRk%2FYQeqSk7%2FHNBT%2BiizaUsPfwelcfAIgQy1DWEURZaJUTnfnK2BTKDg3Rfx0TGr%2Bd6nbFZGLHesqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKF1X2viKm8aWkzpCrcAwDPZOfG7x1MMa6oq9sYsHoCmrBBXbPmG6iYNlejdGsm3fctkxnwvIxvI0REbC1DeX8iHYbvc5bSKzvgj3pKsx9VNNvKtPI9EzLhTmnbkcF0%2BHgu1cMm0CJFIH%2FNLTksDYF87VfQOYI3Hh%2BOK0MsM5J19KhIT0TWT08R9UZikZJLbjk4OyKHcK9q2%2BGuwNZw5C6ysz8B5OYeJfcfvdRv4%2Bo1GyuPB4wHX0m1VwsyAnEI%2BpiOkrQVevc88195O8u%2Bsnen8ce9kF64ix%2BC30ehf5PTzIERs%2Fgb0IaUsTni0vBFnsddTtXd%2BIumPutgo%2FlS7%2FAkuOe8S8eFEfk2E2itxFwIcRq6VyUf9M3be1P4z5TY6ELwsYmJipNDtZ30OHR8O0qQFqO4i%2Fv4037h2BPauMfb%2FlQUAp1LbLgRLJDs1M6BCAMqIw63EbTdNThl32G94%2FhMKaY3ikBh%2F1g1oLiG4gLC%2F2zHyVhT9botQdLAeoEYvt5h45oThoKK1SxRwDeUBVE4ltx8FDp2gLxmE3r5OmKwihB6lgWu6x4LqAQFEX2TUG2RyUKOip%2FAk%2Fs1PcIhhAzLvAb9BYOo2CB3Isoj8ZqdL%2BDT7%2Bkx4BYak83TtoQ1tnXv1J0ecj20fMAmMK3lrr8GOqUBdVngaW5TzbTYndjHI2zVWnNMIP%2B01tDGnjJO3BZU8TF5JI6Z5mzV47aRMcAlpG9SiAzwEHvLlHQvv6gHhMJY9bmP%2Br7T%2FtF7iJXkMT3a1vU4rKlH%2B5DP16TWxiaBdMqNYMW1HVYOTAGH8uY%2BjblKrfgntet3UYFtH%2F6ytA9mS1ykfqTUtnoUZ2hBNZvBnODc2aXOGyQFGRzrEUp0btMOnqK6XoNm&X-Amz-Signature=4b630be9ba83cf6786060a526faae04d1e1ccdd4f94a399d124be55989590d76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
