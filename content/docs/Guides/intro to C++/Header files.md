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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ORSB6M%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1WqMXVFi7raQVC7m3NPSfpTLb922hz9A2pIV6v5j3NAiBbKNJdRJBVEA82B%2B5qiiZJGTaT%2F%2F22NO2T%2BGt9EIg3bCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPShcE3i62aq8MMMlKtwDAFEjPTdF4TrV8qObq%2FIUVALaF4c6on0JomL8RxaoNmkcUsTLvd2YQNsb8%2FZYfHTTGzE%2BXJ7lw0H3CoN2ru1pci0o3JUi5xLGY97Mxb505%2F3LrhI45YVUCZRydMfjKifX8rG6t8hkwYAiXXvPA92nrFj1Kw8Bme6M%2F8ELWl8n7%2BaFut9tRF4h5H6uL0BXopbrYgWgS1ppbhIkjKI68OE6dM4yAW566CZMpn9jQ6gPxlfD8RTMCs6cTV%2FHwseT5gEEixUuoWUTCy1AZA3Wc9N3pkzQ707C1uxuebPbIcc2neKxykuVj5Ajcn6miiJYvJwkcX5jy%2FJmFbewk7m1Ro1%2BDHWOwHhN2%2F6buEVLfkPs1RsEQRIUE%2BOnKX0Dn%2FA%2Fep%2FQZEVpHnrWKw6TxeEeLYwlc01E409lj1OvyZUcn1QuwuULO3cWo948w9BSIW52lW803I6CeeN1aCSeZ2GO1dtEFSJP90yODne7%2Ff31okRm6AXEyhHW9xAZvdG4XKOO%2FUWoQ8MFb0Ay1MW%2F7nlXbwf1f0%2BfPMJKP0bg6XIlxz0Mopqbzzojh0Zz7fkKDb3e0mAptCIHWVbkTX6%2BD7N6DN8UBxBosQanTeW38vxj4e4jYnGnVaOQby18SOvXAHAwnLWyvQY6pgE68Ium5VCXl1SaDa7Yyv9MfbCXrLALDdUMGzHaXD9lX4NVkKfDkfPQ7U38%2BGlI27E8C3JQ48m91fxsZg%2BC4fccRxnp8DyTEzcTWeiALu1EJNbPOrKYJVIJRQLit4w3s8DkcS0%2F28PMIOZJDapIol09mwtGA%2B4MJQntluZEqcSXfn5O9A%2FwJdSPAHNUmm3AbJ2kkZCXrsOQsRCQw3GGUyxpq5x4ZvBz&X-Amz-Signature=6fbb3715bf3f4122ad67a93c3fbbab3ba07c03a04ed8f5143da36614868964a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
