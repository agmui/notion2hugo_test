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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUXIBF6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkWhtGKwkQy6Azi8LrA9iEAAI%2FxETaZpPoidyntP3uZQIhAObHXg7cY%2B6Nu3nifWlh7aEIryDJ10jpwCzqnIIE1CkBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGwriRSJXLobKBIKMq3AOXEZdxBnBl7B3J7NCdGKgrEWgFXxV5aXqBAACyksa2PzOotBIoblhO431PJBFo4ZJ1kcxIzT4WtNnyWJApKyArZUvi280YkVLjbIoj0N%2FR1xcE9Sm6aHQQB4z6h3AiTQMtHcrXPiBl%2Fa7dK%2FOaKR0MphKT%2Bztz7F%2Bx7nBB3K8QCx4YhZ%2Bc%2F7D7Hm1uH%2FuwTL251ZqSIDF%2B8%2FAq3XWeOgxWhYHLAky4jCuwJCOZRRJwj9P5xmKBWOTG6hgr8yEK9HdM6mtP%2BiyciZpfPnqaM22DejwYBGKBM%2FF4gDbZQFEMTOfzFEio4%2FFg0qE4ybJQWP2veoMiJYVRUkIWUC99bJ2HcVolCXyFj9VZlpfXmYu5%2BEWPphywv%2FUFVwp%2B1EhvUPw8k7%2FBAabN5LMtpGzsAlk6kG50udF%2F1duVT3dI7kdJsQobSdPTeiL9fmva%2ByZZ%2FmmJF8omj60oBbITwxRDDqxhp0PHSzq1y%2FbncuaNGoIoxdr0Qj%2BAiz5Px69J1ytO25AuC%2BI8ju8gRzcTs%2F5UBP4fjYCI0TMcmFvS7DDHcotPYEUEjHBKrorfuhhm5kMfcxCZx9zDIO9WggggqTS%2By6QnEpvQ4WK9MyZM6OIZuaQMpmaFgO3m71VZh%2B0usDCf5qDCBjqkAYgMIMKFTcWlb%2FivGi6wExw5pLmOtPPoyCE35Ev2TevAoxJBK0Mqdphxs4%2BkVpRVF0yICel7ZdGF%2Beg9tD2Csbkgb%2BrkkwjL0xUYiJj%2BUrghTCDkbajjh8Ilo8wdS2GrpMxBJiaDDEJxJ9d9Z%2Bxkb6boiHbywykn29COmBV99BtEMhTErJXYNiRERXoIx1xskzFp6MvGmKcuT%2Fu%2Fbsmdeuzmp2Da&X-Amz-Signature=95c0b9fd08ac431e04e1a721896e45ff70d3ad305f256519085869ee9c95c7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
