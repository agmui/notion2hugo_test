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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNHFVW3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBK2%2Bj%2FWty6FZKPY5H7wSuQuA7qQju6AlLbfNC5DLrNDAiBMtPpcepcu23orTJjDObRPaBMmcC2M0yBwCCX4LzQ4HCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMl5BDK4S9ZG5TpK7DKtwDxHXtXJ3c9GtY8dDpKFo560SARWFH99lkcl4qQFSJB904ajnMnNpT5AbrBBK1Mr4zXVjnKEd6T6v3GLorqBRBIj6zVx92NMBPHC82krfxpF%2BUNHM64zBSJbMbEtRdoR4oxFodewEtGTtWj5Qst5yueClPBX8UBQ7kQ68DaA8M5ZtnQ7IJi6j45OKi9aMIDARcFnDuhe0zSQ%2BjbMTVxNBSMoBZO%2FHUJQxsqu1KPXCkIQUh6cDKReGF12dMVwYgC6t%2BvHVUzAh%2B75v49dggYpdteyyGZ81abxNm0t2Qz%2FznYA5W61SxedwACVm6OwhpDRb%2FFEhqSHIvGsfSHK4dKSvmskls4DLSLl3hzrdSbgT1q%2B8Jzvr%2BKs4OghA26UohH%2FX4Z5RdIYtmkgf%2FYgBRLlR3kdIu39Y%2FtCS18yZb3SQteRzn6IkxdjnjzwowilEQ7lXd%2BysdvfegwH9jQJ6aBdSlLHYg59VuMmRMVGVQzuViHPLY8n2TGcNnFOC8C9Juhwx%2BeTyjyyILXLzboG9IDUNnsOKLabM1RkXqoqLIQsLn5JnZir8fD5AL1i1cELxLNTjbhhl2k63eA5ujLob6zQcSvBMe6a%2FgiL1CE0ai63PWAaoR4yhPrrIXe96zqWkwtJG2vgY6pgF6lLXNDcbs5zGzJn%2BW82XZ6w%2F%2FllHK%2FVXi38hoE9%2BcuJeouTM%2BYIggKl4BV3Qzg81xf2fDihHVyK%2BNIPc%2Bewq2nnh0CkYn%2BRMyeUr6jLgiBOxb5j%2FX%2Bx0FYSoiaSmc2vSRGWkono5NLKkx6WGbpN%2F1q1Ca8euzm7Ccse0fwQxptAffaKGaopBi5pzGVN0Cw3I21nEaf4TVeJk1xmNdlGwyDjK%2B%2B%2B%2BO&X-Amz-Signature=21dc6eda45dbf2d9cc30f2440c09323de9645b6be169f34c414ad499a2c56a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
