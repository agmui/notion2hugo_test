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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4FQWRW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB88mC%2BU79EUB2cfvS9cGFiC4JOc2DtVqJAimT4pTlY4AiA3k7r%2Bo1HktYqVUEhSpxFgjpkST40Yj9zT9lIjJiTkpir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMMDVDlG1hcu%2F%2BVR8aKtwDP9CFacUvlKL5qLDr6htYAfntRzW44I%2Bs8HOUADZ%2BGpZ%2BT1qntnaq8yBBih5Kw4kRC7C2Yk6gRVtsWt73PaSsVIcR97TlyOgt0z6Vtv4hRqfCSkdg2hRpsBoPAOBzvhvKjNWyOqfp8t5jTcDwVzBF2Ln4tf%2F4Q1cpbYxJvMReRP9MukIkGEHSJzwbRYymUsecvovtmaxSXhxua52UbOs76pk3ISyTA7aYRj2OafMsBYx3h0iVqqBBo3zaFDfRbdQz%2FPWax%2BH94R6FV7UMm61Kte14%2BVNW6nmSZsl2uakyvbG7sJFLayMrbIiDbpR9NO4vFCbvTWwUjXcsnQ3r8S5zR7qCiyGr8ZB17leTXtl4h4Af7QxaC2Lgo%2F8BkKDzAw64NfU1M%2FeczgsddvvJXRvaYs7gSJCRsPE%2BsW7qNPpT5h4D2mWPhNE%2FTBmKXWrz1mI1T0AuRLsvZeAPD%2FJBN4Jng%2BRYhxHYVmJ%2BMeuulsDwscSt6SdcnuAfzFu5deI%2FAjfMfwZ3O%2BQt3PyYbXa4BsQ40u7JWnuIpFAotVWsZRk8Ljx6QgZCApF4xl2c9OjU7NeHj3gOeltSchAYx0EDYr1ZxANr%2FUWfawEVBfTAkmTStKAbUGXJOKFu9S9pnCQwld23vQY6pgE2vAWuDJMQgqkkRwMNplptgQYBTSZA%2FKDTN4SqNmr6%2BuFUkVkkNRgOMUchlUhL8nh0RXxueJ%2FeNSMHWQGtiNWDxLhCcGaSuBfHO1wN083xqNqwaR00U4himBGl36AFk%2F5ry4Ws02XdoKYUE1Uon9F7h8AQTWqjD5wqoyxapFgYkAoJ6bCwaZ74Yn6eQS4Rhyx%2FlQpmqDHPo2uKqkEGRfSAG8m8aoee&X-Amz-Signature=ea91a4fc1861076a143fcfcecb0c58e4cb6767e545eebc4fdae944513c66abc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
