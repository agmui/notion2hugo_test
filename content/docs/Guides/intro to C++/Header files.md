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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJRPB5A%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2Fzxmm0ulLjebvS0jQSKCZma%2FLgbyZSVdL3jP3uyU%2FAIhAMm%2BDpuDCkKZgjrpNfW2NhjUM4zeeH6%2FBqWzgr1vc2zqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqvJ2x2eYHam1pmAq3AMlhodSUR6k7QZZWOuXziHCDFkH7iOjF62npz99K9JinBx8mQubxUu9yhp%2B6xbUlOpjFGzEepWdBucwVdMlTtqzjMVW9I%2FDgwJG7TE8YMENfsy9lWq5QiEsagPElEctvhP5naVCzIvCslv2F4JW%2BBIiIlGMuC4lwvEOuCwsUgsyQytXXA%2FdM77O%2B1pt9t6H4Ljx%2FuyV2NJ13IuaZyqIY4rpcRa%2B2TaBxedFWOsrveEGJdiMZazt3BVgLH4lS6wLlHeyIZ9HRssFTFOltx%2BjIJ0m93pns%2F9FNTBKg%2F4Rpq1xMMsNp5%2FMhah1tEkiVbEa4hmffrvMfcTR8XwUPALRHs6sSm6dhTeNcObl%2FOPEosMbhSqYb0t3uMvvurapszvuCj5tL4nh61v9CV%2BzTcPw5t8NzgCqU0OYVZ9ziLjzTyAwETxSSb6fVxyuaHILUf0uvyUjp86%2BdYpvTASczd6CX6owgWSUqc3kg8QcluA2Ld%2BeSxJrYRCd%2Bfdamf9313pxZGU93Z57SYdibI0OHSzoUyO9FlgxmiIuRq26uuwA2yXbGOfZXIJYSepx3HFZVhL9nh1ItSKnMgyNQV3whaKXDW4wZjbt5V51Qqihf1B4bFPWmIQoNPikb47SU7JRwjDM9O68BjqkAQLA5tl6m%2FTxJLOZAT1ROKFEFj1Q7xuSWSxau48AjQyFQ3gP5hCFsF05SEG1xos6%2B3vqOuG%2BnAvk5YCc%2FU9Ei1UkPnTxUdpKk83Rb%2F18%2FM6V7VOUAZajUpvABwgz1dH%2F5RZ2Z93BV6vRpGMqaAa9d6cpIqG2CbX4s11SIlUbm8XBA1VnDjVZxi5DHzs7V0yR8kWi3cbEaP%2BuZcQGQH71OrfX2L7P&X-Amz-Signature=4c2d484e5c51b350733c96e27c6d3c83caf2e23bc8150aee58a061aea8f31df3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
