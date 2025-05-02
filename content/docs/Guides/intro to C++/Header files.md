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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6Z2PJGF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC9OS40W3ryVqo2TPgkbT8xzj0v7S0RQ63K6XHi5GeRMAIhAMKILT1c8mJ%2BxvMKSor%2BmyxaM5OtVz1oHr4ebSA1eD7aKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAUmLi85BiLWpPYYq3APgTJ%2BkClSls3OtGkbMPNoO7niNcD8w2X79fe9VaOFQ56GPSlChm2z0HItX2%2ByJqQIhXlaphFkYMtlp%2BJgx%2B0AJrVBZVU42HA13D2HV9wjpXTD1ExsZahcIZdyKFr6Sf6C96IgvIezsLkZP6VPjiqQo%2BnGB4%2FsPLvzUO5HtP77I6ll%2BN4%2B9iWZDIhLlcDd%2F96%2Fmn3Q0%2BgqOt8AvQ58B74y6PleFyIYAwTTgQCnVHLwII4CHgSWs2HD9ifqwN16WgG8LQTxL0cCsDejEdiCzkrBPZZQstjrdh68qVyoMtyfzV%2B7xKaB5u%2BJw0uJVviRPBK7%2F9kpx%2BD6%2BibBJK7gq7%2BIWHjgRFKQ8ga7nkociapALVOVSIBqJySJU7TY0NrWGSleRraP7ZLCZQ8xpQsXgJSu%2BEWZpCf%2BZcBM5VV6L3xIMKCGOHcXTW2Vd68IQUeyNW07oIOVeT3yKsu%2FWEVr3CQJv%2Bl369BIj5SdkWuqRLO7nn2NQ1Qd%2FVD9umP5romfQG4qmordgHLcNdi%2B%2FNIgni3PA%2FMrq05fDXaStVSYfrIjQo7rkuP39dkuwhod21t2k289pPBBVKLnJZVlWFtbqBFudSt7XRLInOOlXSp3Em%2BVEoO5W2%2BbCLCtsdbmSljCkqdLABjqkAUgnhTqYP6AxUFlvAit0jSbhPYMLoiJekKZnw%2B%2FMvltjW0HsHABiHjdLoojOBkLEUSENYk%2F7%2FJtUbRxmHH%2F3HsNaEoIsoLyJDp%2Frfo1v2wAUSDi5AU2nIxS8TBsgIaPP%2FjKod%2FAkjb%2FjZWZNs%2FaH8qXRNyYpoyYiFsYXXDKYaHBnx3jcAPLJBnhP9shqvrmI7MGj4u4pD9yZEJSUE%2BosQz7FqtYg&X-Amz-Signature=b56c91413291e53c2aa2f3e787e93d8f6de93e4e71a00c101589e75866115d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
