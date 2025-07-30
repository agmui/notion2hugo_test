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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DD4EPP3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAyRnUnPiG1OKTpEZP4qe58cjvuQUpdm31sBix1Tu23gIgV4gHWrwQDFVScQDRa61FcmHRYwVzvTayH2LzUC6u3REqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC7bISHmY6C%2BUW6syrcAw4OmACTKoDg5I2TeCXNWC3urYoZ4CODaUljFEQECSuWZE3x0aHxESoFXeaA8nWmqNg23rwjAp%2FfxN29okBicCUFBdHIimWA5iEX81RppZ6%2FM6yhwWQreiH0%2FQ1mBlL7udpMmYTirvyFbch6dQoiWho4cESSEQQOAVXQHC5t%2BSI1e1Pe2Gy%2B4kvP6ePO65gg4ix3AoT%2FefGfV4fDP%2Fd9wJ%2FLCTIk1AuNe2ihH%2B%2BfAte360FQvF%2FPCEFs4qBfnBLeRCTnsefsPXcvnDnnCzF83qeewnSqoNO6ahNDM8md8HF88IcMPK%2BcTmpiJz6JVtChIYa16fqAWPHd8QNoTJu%2F0LY%2B4qzqb1Z1dEEVTAciaywwE0zX7uECOuxiklx28ilmxv2dC38HcK3ZlDvcA6mgAc83KPCagndvDRPR%2FIQO2AFFx1tU6JfMKoSIoPmrkAxlB3z%2FE1pG9WBrndmIsE2natONs7ttEAjLY95R6fiL2F2cg5%2FDKi4VNuF4d%2B%2BLGIfXveRmZR0yP13w4mBAdZ5Bjb2KLhatM9ApAvSY7YvF%2FHJqZBJoivoWEP3dYDj3iyGVRuGclqkZsAh5637Le7%2Fcwa0ez6boJihcIbGtPLN7M7VE4zAqueJgoTtaGOYwMIOiqMQGOqUBQQBpJFnYrERIQ%2B8dHdfSVnPPJQ6GsMLuCSYedaOmmZLoQad8GoaaEHLP8T6Zi8xg4xgZuADUG7GeP1e6AjJ%2BSHV0uQcCwiilijCgboyHuTm88bgGFr3i8jRdGQqHK6o6QP%2FIdsTk73VeogKtsEYnxPf6q7EhMMqBEiFdHzs1oWaPLcXDD8mIUYLhCV8OhyoLDeqwKFqL8KmJuUkR99N%2BOo6UroIz&X-Amz-Signature=3c480e62c2eefb159e6caa00f5997f2221adc532a573397f22d10e3df0a4644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
