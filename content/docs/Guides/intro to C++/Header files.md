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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LIZNC6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOErRTRQRmmljUNypxV4spz%2FwSo1NxO8iJmylwKEPbUAiBt7jcrchBKgBK5u1RCbsgZGwyPs4kBoBlzdlzanuMowyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNV9szLa9nGNsGTCyKtwDSuzV2t8KkstzHj71KFaDF1b%2FSpJqaMnPILyP8kJe7h2YGEG%2BFWuLDJOXn%2BiZNJyRDHRfegU4gO5PmL0k7%2FMKDRPsXwTy%2B1YasXiZr3Pb21KNhAnff7Kl7WIOXgGu2JVUTvPOcWV7tIqyNTMbru4xp0ZP4i%2BxgTk4pCjyqAoPEQAscTIxWct%2FpnOeyDh9f8rI5qgO1J7iBNKw3w2%2F6gs0SAQlDFlUxIYIT7pMrgLAFtWxns5lL7DeOESbEUcddxy1TId0Vv7gPOB60woIeBqLS%2F%2FAmeW6KTp%2BuJfAqwuDCB8WtulfvNreCTlCEzKmFqo1ubFUgLRz2xRW%2BryWIvvX%2FiFwkdqmQ%2BcaEqDBrHEkKEZvTEnPBIYlPiACyIChUZJ%2BOfVCOcMYgnd35T2bi4HeHBA9FuFuESHTeYzvMRcU9hpxWdoXNPajxvOSjlAP0IgbPSVi5agCTdv2ij6ODQ2yaIMnNBlzFjLHuK2C2Infwh09Avd6iVoiwVj0j5KDE%2FuefDe6c9F3Ue3KYkRwezyC%2Foo9yQv%2BNctWgRct9ZQ%2Bd3xyCT7ip6SlYCs8ArLDGhgdCydY8R2NhwFQaJptEjsOAFCJKdsgJ0VmSExCBWOeK8uLwg5NeYctfrJm%2BvUw3cn0wAY6pgFF3O744YWpRB4Pv58kukMKE4No2FLwoclMrGgyQhk5AXnTl5LCOsuCf2qcqpu%2FG98SVweZPigNnWIq8rEoGql0PuVRvCHyWvbTJN7MwsR4sUiVnZVbJff%2BSbs4QesR0VElkRhBO%2F8JhgtUVnuJAtDLacpA48XSCW8FJY0361uXjTwyQyfsdFjxQ2ORxoFL4g1xroKt%2BvJEJZW6Z65y7n%2Bv1rY01qrS&X-Amz-Signature=6f997635790522476b69e74bbab61d52f6dcd276234c62adc9ae3f916c3ea2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
