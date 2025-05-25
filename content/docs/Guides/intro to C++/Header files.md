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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCNQVTVH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCUgf%2FJBUT5Y6d2mhgMgktLcXjiK2uUO89l8EDehxcKUQIgSGnjpUOJodXPkyJjcuG2RO9ja2YrR38qU9wEVVHZDKUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDP0R%2Bq0Bp9v8sd5XRSrcAwBoyHTSOS%2F4k3qdWOPkDG%2FjtfRmSUA9R0gFJmtRQsEU%2Fml2kPEYwb%2B9su9KIKLkfLLTRk2ma23h2kKLK3Ho4g5RZHiFKT5orp52IAT6%2BHIseQOo4GBWNxxGak1inLkqzT7PRzsaiCs%2B48Buu8YGd%2FGcGQDxV%2FS9290fO22NrhwV9dtr88OwLziqjh%2FkAxGiP8zTMoVsTLCNEOyly0tFS9624JZNinPe%2BfwiqnAOQAfJi2H1qT%2BqfbyTrYL4hjFRSZzB5zsQ1rRTctlgfg59OLvtXMjDTMfQ65UX%2Bp6srgml8%2FMCk7B9SSK4fIuKKfMTLVel22CR1cRYYVUOnqgS8ZaGNzZYiEm3hUemjPct5AtpEt14S3WfjhR6mZsR4%2Bx4TH4hVlGpSrggCmLmDi4ok7sKLFYEC3E5fzv%2FTaDz2juAY3%2BfNl6xaBZzzBVAKApwZubGkCRiLS0IxgD%2FY9POKzAux%2BzYEi%2B6vkS7pSrjjeVKe12fvr%2FrHre%2BOL4IIb5DPZRAVlwpgkeEKjHB8P2CuO06d4kqWADg6xiapCd4OvQ7CdRBfSJ%2FJivYEgyNs5x0E1lo3DE6M%2FTY9yZ0Pxffl3HRwErjSv6GJl%2FJDl2nK9X04X2Jez0ber34KO5fMLnfzMEGOqUBoD5UFlMQjqJKEheGNQcYh4UF8JBMmt2oYwkRrMWbiPD2QxqpKYYFu7jdzJvyQu9A0m8XKbMbr0sXL76%2Bo2%2BDpqEVSfitkUkh8jSnkdaZpNRQCPgUf9uubBGbdNbHbSu8eaXLGLMVVp1lF3ovTjL5f7uQlJBnEkWyj7bXLee41a%2Fw2s2qanSsoEj%2F4ZBIK%2FNXtfpdEQmh3lRfO6acOxAcTTGBpODJ&X-Amz-Signature=91892c5791846e352dcacf66f3c641e1e91200c99d87a56b9cf685eeb581c742&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
