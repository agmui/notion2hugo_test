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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LDC2RL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIE8eRA51DDs%2FMLdgYYT87RmI19G1KjitWxem2jXlnuILAiEA7jzhE7%2BHXNqyKcZFrDfcBmC5bsx3l7he42uk4kBhAPAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF0%2BLMQraPD2JeDogSrcA4Ew5UrjaVrm83VHyLZ2ajkzQfuffbSrMdCmB34zc1tAE%2FDroFiNrdz%2F0%2Fpxfo12jKQR494kbLwCuGOJ648rRqY%2FPInzJb9xDdCVHYyFEWjDWuq3WulNdDU2PKzsb6grzlludlpYLovT9QzAEa6lnLLzmS7kUQKEhz6HU9%2FLHZ%2BSriFQNBDp%2Fj%2Fbnrt8S4Fcu0D7sJpQ8b8PIVp4LS1sIfIMOsUXbOd0F7E2iZ4iKqKRU8sbH0th3m0C03TS0TBzz%2F4Fifx%2BcpkMIDMdpuQ%2BcmfbnG3hkUyye9tkfcuJWF0rTE2JvlG7qCS%2B8Y7WCVLSh0%2FbhoFxAE2oaJ%2BrcjDfCb3XVrAahpXiFf9PlQPVXsDNN2Ts9k2EYRlZKheRVeiT%2FjRs4L1px4PhDWVETvFeKnVs6dHX1yiJpbK%2FWZPrCmiBErYu3WP72lT1DxF6f%2BHH%2FBzj%2B%2BDdJSANHOGz6mtc9VeH4zU2JgHE1NPFTNnfAhfJxlwmu8WFHxNQDyi%2Brcmxf2Ohx1fvJmGnmWvNuGLDFuv9otlna48jEyc5H%2BILOVmcLMCOOhVOSbGxaF0jNbIRHg488DP3GJLrmf8HTAVi8g%2F%2FyAGYg8uQzyk4tROj1YhFoOcsMuiNb56o9hdHMJzk%2F8QGOqUBvdJ7e7V0O%2BlGPf2tONtb1UXb5cpysS11oQZFxRxC7JKHWq5OhgVQLaPC%2FSZjJ7aYjOJnymG3MVsktWy8rGKLh%2FCYB%2B7jB1EpSlHmaMX7sxYGKO20lXX47yg09wG4fytUQPHAVSGRzO8ZNO0GUR4JxI05loeXDguJwVdypaG5oeTjXcvJbZ0r2ZjI3WzRW3ZA9oxDcunmjYAqBFoKQncG8gx1HDJh&X-Amz-Signature=e36c9c5fb6d229e78725bea8c24e21d043ceee7672ec74d574b511682f933e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
