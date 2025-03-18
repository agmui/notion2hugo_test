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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVBV2WH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtjv26ZXyc9tPsm%2BP94V9LTdV6Cl5DrEefD7UVpdOC5AiBhFN25iN291R%2BpfPekRRCfAa4hjOWGTS2HQANIyU9Xiyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMzeOhYZ2dvQArtngqKtwDKzxnoc3%2FQUo3oOHc1k0gr04EVaRX%2BHjWOf2wV5iFQwokybRPaNVvtSS5Z2z9YZSGYxHS9I6M8jESOuSP6lwjymLv%2FjmHm7q%2F57ZCIzbm1ffLmGgVlNCDgiKVHjoGU9qSbikbW6J7OfI5KMqZ6fV0HghPW1dG%2FcUHL6k%2FtFmRExUyCY8s9M2yx%2B72HAPMWIDNSA23MIfroSivR5MIZLQzvTAInEp7WH04P7BhZ91qeRByZmDpDRsYCH4ug5DgrrmI%2F1HQPiI0AS0eFARVJK49Mk5gU%2FAIdXbqOJjmJ7uD3slVqNS0y1Fy39uG0M%2F47l9ARg9SRXwXGv2ilulXfC4sg0NS2AcdqXUrq9waTrXdp1Zc005aHpdxdvHxvnm0hBMCJgMOOZ3N0MT1SHlI77Bott8olQlgfcgzyZeBy0HKiRtrYJIRh5yEdgCBVylgvpgRSJlI3uplhFUff%2FdMmVwnza8RrJ2HfC1Ck%2BZkPNrBF1XCVTf1BGA4jypHVwraC7mATra4ptaoR5phnKISnY44J3WvZoI8NV2srsj44GXby7VP%2BEM2siaGkdNDqZykNFOFx3bgQGx67uRh8EXSI8z%2BdAkHUTesn0WD6nmMUjYIX4xmsS8TDjMzzEc2HCEwrsnjvgY6pgFUNpfIArizDTxzMODkeewtJnu6dJUOtwFyY3RuGKdYUQQNCg16sXGLf2HTLnSNm16pQiXIZzbRykCvrZm5aqIt0Y8hVQy%2BB6ZGY6DYsVlssCZA1Szo7anUVoZL9IpxsZjDND7bjJgi2ikp8wNiu0oQ0ThnPKnppoDl0UtnOeIx9hlOPvls%2B9vbzQ2TgKjUO1f3vUqAIniTicogFSgWz52pcZ6tRMKQ&X-Amz-Signature=ec96a8e2bc5ec287d0d9280c5de093ce34949698acaa78b905ad38100c575bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
