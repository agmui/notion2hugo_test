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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMB3WO7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDSwzX4Dn75P6NpV1%2BP51cKk8rGPiIFmkJjEAzMp%2BZcBAiBJB3ohV0HwtFx45ovAOMoSPl24L07%2Bf5GPQk9uaiDhmir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM%2BUteKpE%2FC7AHuwEWKtwDAk3nU6ncC62QdWIHSzR20liUgN0YcBN4s6eMHe6cfhpf7vvdlFCcNWlOGDzldqQ3FjCZZcKPsviWlL8STuq9qrD9QtLIQq%2B0HM6vENzOaALvk8QESNfULblx40vgufvZfAMNwsYJBjZi3ri2fCqivPetBtLqUxoce%2BwiCgugT4mNYlDonNPEhbDP8Q9bK4%2FdrmFwsq7VX1NFS6YM645zIRFn19dSP9cFz04UQ8WI%2Bpszm4L3Aw%2BIruarVdNlrrjxACCKXnXw86CVLqAh9g5mlT0w82%2B66MilBKZsuKwpAJE3K26qxOwIOvA4uKw%2FvZhtVJHiu6A%2Ft%2FWwcPHt%2B0zc1M60klMO9k0yr9aTKSvfjP%2F7lUmIZAN8lbHsiFKVifcWyGsseDrpfzCTecipruMCMX9noGuXiqM6rKC9mf2RyntH5ZgQuH0olDMlhDL8U%2FVKMYM1PgclG51QnXxrrhVW5%2BgpThKYaFNhmaZxl6S6SmX8e%2BZC5EfttQFjtmCIsY6x2GlT6yo%2FlyxoO5EAMb%2FJjgx4PX0bLrRrfnLBolXni8P5RM%2BbTft4JYWJk4Pv3BRCsjvOAbHmn0lMjuFP40%2FIsvZejKwhnQBye2402EBpmiiV1aOh3ZDMHA8Deugwmd%2FywgY6pgHgLq8Wz6apD3AvNs1c7GNLY26%2FxLvBk0oVHmmGKv1VzncaHoyH%2FROFrQCRZ6NoC26P2jTGaW2UzxwSU%2Bf15bbJsq32iZqW96jchnsLXqt4ulVNw3Dic3XU5pxf%2B%2Br1Oy3kx92R8O5zVyCjrmBzl1QK56aUUWE6iZ3Bt5PqYcgLUX2Qh10%2FIOqhn0EMD6gQCzJzIF0hIS0rmySVycm3p8dSN6%2BRZT1T&X-Amz-Signature=2114168a523798b64a9e0e4965a66026a7245177916645bfc4519389912f7a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
