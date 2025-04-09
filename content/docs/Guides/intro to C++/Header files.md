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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDGEJL6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDF30JtwVBU%2FvdPZ1NIgudeNj5FqX4OK1NOoFUbU4Z1dAiEAtxt9IJNTWZj7qhZoW7ihmpF9mVcbVn%2BQrByFWhjdox0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmn9BsXgyRcZy6ToSrcAyyfcjwyjD3kZs%2BjufeNIOrikScaSlNF6AYYgoI4MH8MfJDAXt%2F1PRvUy90gOtgYnPPxafeApfkmv5Ue1GKd7X6Ahzi5sTI5vRyv9xRet1lmcQ%2B4DUBdiIt6vYXEobCVAprH6WoytfoYj3Uqcq1GnQWKKU4%2FNxiCkIAz%2BGWj8VnvN6QeLpg9o%2BtPhtX1rOM%2B02LWzEsHm9uMnzPUOiHqNoz%2B2wD39vKInknslymk9vwP29Pu%2FPtcESRsinYDk7eXpl7m9Nf6YoI0WWW4EKhBgqTxAKcEIDHENMUXgqEfsV7a4yql28yWrCKxSbLa6SW7jGcpNYMeqstjMBMTRkL2So0aaCC85j3kZD5Ap3ByhCzWnSLsU92oAXqcHa02rTPclVIYt7s0jjOSmpKuyhsb%2F5L56zsfLXjitREtcKlNO%2BsnnFka0wnx7yq5mTQQnNKMKDGpooWtkv2Bhb5RGigjGm1LTn7udwNgE%2BwWiAHsMDmSh9yVlLbfey3xooQ5NVImK%2BDRdVKfb0CiZEt0HKb5Prf0JTdSqilybC9y9upG%2B5E6Hk6LzseadA68L7LHXT92duoaEbFsDLYP4DD2Wc2JzY9Bt5VcqH0%2F9P3Z4SEshSlKyzSDK1h05CiZfTIkMIqX2r8GOqUByiwzDf1Th1JAup5K7TujiF3CWKlvii0Cw5TQ6BYhW6I81QaeIXFYRn4XpLTOdbLn5hN1h3FMNmFRbQPysERxCjLlpK2QWXuTBu2c2aoVNhcgqJiZmBTtbP%2Bd7j7zdGt5aFiQ7YFdKazq592xMyCVuAMNBPIiBN%2Fkf7ih1gi9Hn2%2BPPc%2FPXXF4w6KnmfecoWRKfFdD8YMjw4%2Fqp%2FOMmVT8i%2B24vli&X-Amz-Signature=baee6e4551b814446526270767a85c3d8125950b765ac331b621c06833d2e23c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
