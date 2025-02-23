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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NT3KY5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACigedbzo5PL8C6xmjlo9DqTBXbPJ2z9xhiGDbbd1YtAiBy6NZ8iKYDrPkLkwE8buSOeKpWuvNJON68Oiaj9%2F2DoSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMC1lY6DfsdPef0iH1KtwDLn8802MZmI5TEcR2uqPI8nguY4uoQvW1bQST1zZG7rCaLDlf77P8Rogm%2FYwlR3j07E%2BnzQnaG3t6Y6W6ikq9w9n6C6mcdXiFsd7ewkOtAfTSskhwrADHQMO6J%2BeeIZLed2irFxTff6Hq%2B%2FP8yk445Qv6%2FaoZmQQouH%2Bv%2FB5Y%2FXP8xGGzhMDF66mZMZURvU8nCuOXG1%2ByShhZQ6A6yw0w7n%2BTR46DgGBJYLwtsdFH165jOjNcn4PBfJ%2FcmCAUjN36F8IJin1GBNd5nKGSYVBj1rvn0FxjDCGcWE0vMN2uz6rJfOlwHAP97Rt3%2FdWFL20L0CoKT7MyNLXU7QIa4x1ikCnMSntchB69xDZs1OBzkT9BBS4a4HK2Tfm5WrLM01dTehpoFRVyUDvoKOTI%2FLVOntiJNjlzYlucIcSAc7sXVSz%2FjTbdaoblYgYINJwGpkF6HlF%2FteFLIbq4B%2BwmgFKueSth3YwvTVgcq1J6ytcIxdzEq2SSIxFgOv1fLZOrfVgTtwcqWGfMop0isBgPj4bVL%2F4nwIui8Uodv4N1fzhLdIYK%2Fp2cspwjXDHlHKfYW4g9xmNBwiUHyURgj67kqbB1sa0m5LT%2BHO3jX%2Bg1ZcqPuLey4fwrM6TzVvQ21i0w9%2FDrvQY6pgFOmHl4pneJIhw8TUeLSG8%2FoRfLjv915RbQxhbJ904y94wC3k3T4KA06MG%2FYvSKr7Pn7ATXs1eKfNMlKPXFJV9o6dR02LjJSbQk51d2lwTdk%2BPk%2FhVFRV5swyuNqf6cdnQRlKPFft6To8BIND317CROnuPjdkx%2BdT%2FiSCDGUwvGR8n9xpUPrCfoZgRhhP9qJIYtgasqQtG3icwfpxbyJCMtOuEL1I6c&X-Amz-Signature=0bcf1302c43364d38bad3d8418967a85b17243ff779d166c8b726b39294d71ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
