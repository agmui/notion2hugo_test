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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FM6MPE2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAJKi5alKKteHRBoHlHhvbi6mD%2BY9ZFE5mAYNEbd%2BlS6AiEAgAuNdwYdpXsmDGNH4rzag9MizzPCpNyIo%2FI5enVeXswqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBspsF0fj8bLRfOtFircA1BGBSX4UAOdmRe1G7wBQMKbwK5aw7HoDf8t3BNS95lWlmaqIN9ygQt%2BzLcTB5msl%2FQslh30tQSVVeIVvMhDBs5nO9wTp4hKKH5lPW6lOjV8WMIjH9aj2RHIJTibx3wri7ZeS4zPOxkJvQSSOv3FBIoTzMad%2FWc2RselHKIiUzP8SlIOpc3fsw1JRwo8RWnB62A0Wd%2BpcVzkqFmdt7yt7QbPSJ9AjeYopbEKP85Ysv4P2xS6ElSKElhrVi%2BzT9NJMNsGXzgFhrRmdojgoBrrZ%2F%2F4ynQUb3xFPEe26SqUD5XFOBoFfxmcyBwlDG0K3VzMVn5jOsqAsuNtseOgqK%2B6Xfno4m%2FEFoNLxax21G%2FhLnAwpL00UEI2gHR1B0lxNpP%2FAlyRJO9wQHpdkkB2w%2FHhsqRTvbdus8ba%2FWrspNTcKx8R8wLv7Ots88VX%2B0CdpLwlyZ16%2FSjqaPnOw%2FIjvFT6ydzZxSATTRPioes4B8c0bATux4QxernM4ytw%2FAhxy882s%2F3UAk9wwWrpfJ8M03pkQtXz3NI4lVN5WcMTtj351O3a%2BB1hVSVewOCtWkTd6StNTUKqt5Mep3cC%2Ff9Jo7DZLkBvUFFAIGhO58XXDeEXQcDrtHgikETgfUilxha6MJ7dxb4GOqUBCsklGW4Bqj9IIeDVm2U09qX9icSHUq99FIpJnL0kxwfcqUWINwahhYbHWTbzabENRdnMJIvnm5VITdZ0VvCp3Y6RWkUbEolq0IVl2S%2BDZFMoYC5Qde93r86X5SIApyIy9AxzpbND9I4GZra0Vk6mNO91XDQ5E6nT6wWv%2F4umdIuF62sIHLfJGaWjouxnaq2TkEmmDKGLqor15gomdjn7SS%2Fcg8U2&X-Amz-Signature=f9921e755d2d6a09c1fa007643d43de8fc6862d71f0932507990df6446eabd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
