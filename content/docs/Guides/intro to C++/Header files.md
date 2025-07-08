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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDBHZKA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC9zAs3AGK5P3MvkIrfLMLa%2FOj%2Bg9tfg5VN8KEQan49xAiBkcsQDzyi8JUWcGdUB14xZUGAVcNn51dmKKz%2FuXbHn8SqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3XYyuUv3Mrf8vF3KtwD4i1XfF4ONn7rLCHCLfhhAMK2B8PtyXDWZpeRqJYfvDKEKqXIxdZCFzv6HCzkMShJxE1RDmvNQPQHxdrO3lDyjqou9URfEwQ0BxPbA8ILIOilY0vbhYHCRpepfJw6ADdbqrCeYHcx1LzWZbQcDqip%2B0er6TdMl4ZmSElfFOl%2BtxE809wMizGZPOz9scyv7%2BiXgQl2ilXgov%2BasK3OolFwObwNJaiOwiUlCHSt68a7wN%2FbosgzAXu5EKAorQ7pVWuxWNLliu4dHeOSdPrVen8Ntgkg%2B9C0Iaz49gUUz%2FdiLH5dpsEHckkH4l%2BBpe%2FJCDjFmhAFboeuzvsEwwU%2B8t%2BIYpJFEyQlvz%2B%2B21yrI3Axe%2B%2BnaGQejZkD6ZFRbuMs1BVKafstaT9IWKFk4uDOS5age2v%2F5KvCBtRDPIr5Z2qFuXceHCHcOH5dxGjVsfToIdD4Vj4DFd3CuJgTiGVlEyunToq%2BhdbyAux0hiyQyUoojb5gjiNhr7nmzhBdGmPErwcdy4db589ke2Sgt%2BRoWgqzk6jD2h%2B7BfYv%2Bg8ebqDEgvxiAjSSt4Img12Ii3JCCFDBxQhjZXqTplQK8FiYieeA3kK%2Filr9%2FTRytw7vK%2BJ56OlGaAK5PmRLx2T10GkwioWywwY6pgGVE6uij8wCq1I49VRFIWHERMccENug%2B%2F9EqyB0AyYg3%2F%2B%2BIAwr82h2xMZKbp6ssdMfq1dkSE2LLF%2Fh2xk7XnxoZkAdlF4PwD3OFKvh%2Bi2lj79Y7nfpNUXJuJw%2BJHqviChSxo78kcydsFW%2FPsw82m5tDtj4PH3AFe1QuAcgjdxK4UXgf%2BhTFjEWzDlHoB96dS5n9yA1otqCrbiEfuR4bvV%2F2y%2F0pjmH&X-Amz-Signature=bec4ad4a208782ca81b474f95701ab1218063c3373491539a3cea70772d9d9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
