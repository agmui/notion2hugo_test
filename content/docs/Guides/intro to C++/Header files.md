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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REUU27P%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICErJyiYb0rcwU6gPkQo%2BnHdDs9rbbV3UPGuw3f%2B9yBEAiAjy52WhwMzcAkSzqaWuwfKxnpQtvt%2FAEuGXch9CHvqFir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMlPV1kck0cT8uBp1SKtwD84YwOzptdghsaN0D98F2yuHGWv3qDR0nvwRSo1rdvFSpuJCYnpG9yegup8XdjgGm3qOFDlfV%2BG0kaiYyE4wNl6UDOWBeLrhDDmAg6tvPXHaju0LWJsg8nfMZ%2FiQ00k%2FTrqmvZVrDi8EOFikACIQekNiPAFiVmxJ7iaYSX1wf87rWY%2BVjz%2BgZ0QXwNOYKQ%2B0XqGPxRdK%2BD2R2EVyynEIVmndkkCfaCGWxgzR0j%2F%2B57d5k7fUCsp82NK2qPJCOVDXTLpCx2jMXnVowW8koaDyX84GhDwOtHfxCoMJL8WSxSccF3KpOmV4KRJWvtBW5YMpL06ISdOnR7KrIHx0a0Ut3L6wHiIjde7wX0Ft8tMca9VLimTBlSNNoAkZSjm5%2FuLpvk7nEsAcDVf3uUIy4xSuzdceeJp0HmahRiXhUvgURVUXL2CxFd0kZlVLZY4a8or%2BVTFCNnAmKMKFD%2Bot54sGrw8ttcYiGjRD5Xbj3XkBFkszSCPAFDgImnbc6%2FC60kosvmU29gd0fjsxsAeWz0Z4Hig2LbW0QWRLfBz%2FcdlULXcVyV2l2iyaXZv4tIFji%2BOEg%2Fy2tnufn9say1Cvx8kL3E5frXwDKZ8yB2LIH3S6saareijvcxUC9oCYy6%2BwwmLvewAY6pgEmmshFlX%2B4jZ2ZhLgyT2WwaTbevTEqYtfeRAmTAHa0Jbf0SPPU6Rz7amFMr1U1zF%2BYxsKClo2MSRn4ec7vsZNzkqqPhl4Df%2FGHx5kBW4ub2XsEa9KTLNBhSl1sqiGOMLJWN9w3d%2FgnCn8ecZMgAx1XTr7bJciOBUGO5fyUgwC3CiDImlEvp1c5n3Isavz5Gn5y33ahcaL%2F3FkoJjKSOUkxdhxbVBEc&X-Amz-Signature=75d67303e0a5ea17bdd3412975a58259c521d8307aa37d3687696c8f68daf16b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
