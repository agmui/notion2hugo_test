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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJ6UQVA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG5Xp8fdyH8kHSQ%2FxLSbPEL7XhvreOI%2BwH6aXC%2FX7LsMAiEAwEvpEzvsz%2BC5%2FU3R2qkbABjKPJFC8bI7tiW6%2FffwED8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDN%2BPtYMUNig%2FrONl9ircAx7O7Uu0pS7J2BMuOU0QTsSI%2Br%2F3PNZaGKr86MeDA9q%2B%2FvRahrUM7QGh4wSS1hp3JhMeKprDim4cDGkdPd0jKGDqpY5BbpTJYMtrnsJM2AvCc5wqzZ%2FnH027H6LffcL1%2BGv6xVnQ6XfV4S31mOqesE%2FmMaI6VAH27rTFzzJVstGCEgh%2FxJbkh0nTH485w6j1G2ZL62ZFkLqbRpY4zmHogQpA9jjoE%2FFxZF5OctM5Wj2nLkjoOMwnhB6GB%2FhLsWRva2Ti00BdNDod%2BCpiCmJrOHDLKfD9r1jyVaqU8qPu2bgfo5osmfu%2FsfGh46wHkH6NU%2FtOCC3ASnoowJy%2BN3XYCljQ23DWxrq%2FD1j6ukbusM%2FlD%2FYDDf6XxjqL2moiTOMK3qk1RzynThmSaClLDjCQZsGvweLw5g%2B%2Bq8%2BhOFqnGupoPFgWYUwy3MV5N9qN0vjCTCwhRRzrXPbIdTS4u1P%2FrLNwQDNL0lS3fJkg81Gu4wDfLtwTptVsMXuwjxHYzl1j5GwZv0hmRa6E39qmJf%2FRJwgs%2FfvMaSfdy3dBhUqqQ8y%2BG5NYzzdJ6O%2BifAIruh7e3wJgGIyAg07%2FsMDigaxCl%2Fs%2FU2%2Fii%2F28qcqJO5LqR6Ak78tQwoeE2%2BIU%2Fn0RMOuclsEGOqUBF2NFeGiF5bRnEvvA7x%2FSH8i9vXsTXb1Cp%2B8vaA4DHeH5drf%2BXd944sIU8%2B5ZGADuyhGy4XoD3ICc2V2mZEg9YYIQ0O0RZYlguJF8xZgVXRbUiKpa432IF5nLsZaeDmDQV9NJaCxgRlXiY6%2B5J%2FqQTLqt5JkD3oLauQkR28ATlaoVmr2l%2BTeni%2BvbSRlhPPGIx%2BCPLn5g0cI%2BU9dD%2FShQK%2BKHhHS3&X-Amz-Signature=d40c3fda6f34f0e425329da712bec003535c0d93a38d660a091ff695ed321363&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
