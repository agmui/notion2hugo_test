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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOEX2MS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0Zrv2X0BEMvT1qx9rOrQC9ExnPS1LZ2cO%2F0dNmZlgUAiAWz%2F7aL%2Bmcb7bd2qBLa4wAlcx7zNP7F7o3qRTQ8%2BBHCSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzN8epzK92TpxE0jJKtwD6xV28YuTZJ1SkoGPJInEyOENgcq%2BJ4zPEiS4%2FEb5j6%2FucuclRvqxr%2BF%2BXQurqahWliPEc%2BRXYaf5YuZLVUq2gpzXLAAV4%2BaeeLH6ENXCnykCMGtbPdvK6Qd3xwvRpzrrT%2BrXXdCUHSBTmGZ4SvJX5I2Uz4LDqtDXKpS7853d%2BXE%2FWl5ZTMM%2Fqdn8Pd%2FOVuPOwAWb7CZFpSD2ErjpBz1qHqy02mK1efzqly00xUDGmkBh6BzxyNYWDCA5Dv5W8%2BTgMUq76GKPD79eBBhDX6i9%2FCSbZZF6a5QXAIeIQ0mVvA3hQBFnG%2F1sWBiEOtB%2BKoODjIe%2BQaO0onXLDQbemhLndN%2FPnW3MDFmhSg9B%2FztDa%2BxyjkTCV%2B3KZcAg%2FIgCLGB9Mv4fDzzfriiCqz6yiKkkn%2BRdw35Le11C8LDZgRqm6sOaE1vWPZrlC0RuorVApESpiQ2C%2F9FWFseU%2FBrA%2BaOpLuAZo6Sl3KxnVrcOa3qVcE%2B2F5mtGrFgFIFM4SL%2BvIdH508W6AcnIAUrEI50KiP4TR9zxgTawkP0vggi2%2B4xTytN5NAbv1SIIyvrJA5guaRotxErECRKbAyn6IY2n1B729mHLFKDw%2FtM5m2YMjjmtsmDiZdG5ZcYSt3yhgIwiITrwQY6pgEb3VZkkyS%2Bo6JhqNcEcFIvdXRItnMFnehxjh%2BdrmeexKjV%2F8v0wlX99mC8eD1lSms%2FUVYzb8Rj8Dd%2BYzozKv5JLgrtvKgnybgNaFSeliYCws5r%2B91BB%2FZ%2Bw0SXF%2BwkA08445D9z1vZLUFeB5EX2fphGAXkJgan3%2FACN9p7RPdbrLyMJWY08JuCLZOKEMGaYLQVbXWFYi3IE3BLMbfJrpzB%2FXLSM%2FMC&X-Amz-Signature=e5c44494f47650d7ff0cea7a94e5d48602099b9bfc13f90a0929106ad7203978&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
