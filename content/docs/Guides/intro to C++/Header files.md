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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XGHEHMC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnMC3Ct5zKl2QdJYR1UBPY01rb7rVH4HlY5r04hFJ4YAiA30Hh2FFsl7Pha8URdXFfbgGqVwgckN%2FIhLWC%2Fx8sZ1yr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQ88FZoLXL4QS6BOYKtwDFZEZYGj4lBxFCAwUB%2FlYuifar92P1%2FAe6keDHF2Zv%2BmfUUiZDo7XriZfWQbVuLSeAr2vN0KDeFEjxcql4oqY5c0kicvN0am8pykJ8LoW1vxp3gRsQ%2BK978gkJYznXLOCVsqbRRxsuxGdh4gbI5p5FiioQfgIi5Mt1CmNnTCJgVduG9I2oPBophEv57EqMGGmdBx9nqT%2BCoG2EcCPP1pYkMpP1ajODP6Ej9p3b%2BQOngsnkcJNFPi1ejaP6igHvg%2FLywb5R1BaYTMBkIpHtxaT7Ytkli5PlYkfx8wvDzYJ41oUGy2iv1MMsq3Y1%2FGNx31GGa4G%2FDdjHc%2BV5glDWdlGLHdY6SrUP9aQYmJmlNX7Aa3muip20E9ifJm8%2BpTB9DLiA1Bx6%2BkKzqN5zUHEYoxbo5fun5Tyg2PhbaA8ztFfSMxZ19U%2BeF9hcKJVAPLsVXoa8tJ8JpmPMlR66%2BIxFY50YX%2Fb%2FvdkfM5f5vNsTmeNfNlq2BBiQ6VGsDYobz4zuzXa1j2c8nqdR9t8IwGY%2B2l4vP5TS3y5CNENmmWWcfaSpF9rBakOFZeQM8S1QslW0nfXfZKl3qSTKORBkhwwVvWuGTelJ6NOcrfZGlpPDo386Z%2FUfAT1wtFp6Ma4uaww6KPQvwY6pgFXfIbLud8sedO0r9qJRCs4vMCdUY32tH4ONj6u%2BBJS8%2FBWc5re%2BVFkGlFqjy97IHfOYKNuCVAxf7Ey%2FMrue8T1qnMeul4dQOtELz0vgKF%2FIMEboTNlUyMCyjxBrhBBEvgwC4MtV0J3HxJpltktjNoIfLBfPK9xgtWgObA99gsQgRHoX5EaKHNhbi%2BvNsG0GZkQHHpzdon9VVb0qsDD8OxxGogmZ8Ao&X-Amz-Signature=3b9f44b9a9e215fb2a9d68db7d97c7a1143e62ced2fa1d7eaa44be2a9b6209a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
