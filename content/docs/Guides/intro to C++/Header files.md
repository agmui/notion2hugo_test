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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMNBF3E%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGOlJXb6dljLOJK2SAfkCiDXvOLe0Kxzf7E9htPpgH0AiBjxCAaF9EfGUt3Fq9%2FdyywN8gDQa9KshoZNiBnmrYG%2FyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1q4VFBOoSeb%2Bx57KtwDaoaOPRsPcVKULpFU3LC7elHbti%2FTI1Goj16he65r0x7X7YAqOZ00EeSxFfem0sPWrcCfyR5qoG3BUraR8jbAKxPeFxd6vUElVzCL0cE2HxuzRqJbxSoiNb42t1ByzsInlV9yZpFZgJcmR6Iy1d8cUeRoBeGdItCyLqD5dPO7V94%2B26M7aeE1DH4103qllQDVYNBumvnmDQSWN3uoE0CPc%2B%2Bo%2FTTDtPCV0o3Q7y43xtl4Udr2IF1FmgzDXUcox69GI%2F%2BvdmiFAsIxWWSneCr5kCSsEPWYL%2FPFKXpWv6diHsm2aGp2%2F0tpJ%2FcE6%2B81oMykYRZyDNX08tsvVih0jHDqr6FVuzqLiO1iTdDy6m240qeo9fQHE6qVCP1dTkYT02NlAwkHyI539m1m4ZKCCuAeQ5TX%2Fflenp%2F5LhsVqfvFJgjh0HUlyTwCft5SkKQnOHtzt25p8fl345w7j0Gg5Rrr5m22HFfMs5IlLUcyT56YUh5eUSNuqzH5%2BubW9dSEYVYpM2LQzMQWBvspcEWf0xYFjnmOJuhRSSB2K2T4Hv3th52pBRv05Zv5xoiwnXH9LTrFMbsG7nuAoFxPqLx4cNPHI6Yv98xJGlANMNm03WAsEQTw1893bXFo90DrGMswornyvAY6pgE9mkbyw%2BQ5RsMYr5sOE78Jkp1r8I70tpLjsDgNQUm%2BVUySd8JtSWeh5iWbQSNURHJ8HoCtqGFW6LBDETOFqSOOKJ74Rt2MgjRHHHSwO125k3Cdw5pnLZhaVu64aqA61iMrCa2lZpNa3F0rTaW9d6CfQfN8R8xZB6l%2FsFA04fK4lb8%2F4LQJXCHPyYsthcFj6aFyieKQYsMzEpTsVjs9%2F%2FKP8Z%2BgBb%2BB&X-Amz-Signature=e260097b403049d322a57e76b7a4e522ff8c46c467254ee99653c73d8ee83ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
