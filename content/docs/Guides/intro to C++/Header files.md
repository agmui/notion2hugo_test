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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZQJPZS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAkE34N%2BpOeAJEsrDiW62ydXgzHS8AiGPIL1nJbqO%2FkpAiEA7EhaiC8IW%2BZCIF2gA43%2Fovhf1VOx3SLgIY6dMSZofisqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5Bj3tfZO7nATpstircA50BZ%2FAwb1c4imlX4TyshMrimxvUgi73ZA2kOfjss6hY2NpNHtTTJRJdoYvx2LL2lKzzEX2AOsG6dGz3s8zATgiZEfFN%2BGBjegaOOiLaRTyeSct%2FNxwiYnu%2BRUDRvSMTHXGirsRtEYRBB7Cl9%2F%2BNPeqCOKNuIMaBMrRaXAjOjeT7Yk8YmauJ4ZTYTjO7Ut5R3PTRbs73NYMZH%2F3ll6Y3YGz5TJbGZTnGZt8FJ0gszPO8jSS26VdZBO2%2FJ8qmjQ6q1h6cVAC2CFfBgNV1JNuv0UXnLJaCrfCoawsKoHlDaUNDikLKsX4h65V1AUZZl%2BL5fUg%2B45UH7SKVMtzKlIMbgjyekH5B0KX004G5666k1pqcv7VKQwg3liRjuQBmH%2FA7BHp7gFPyQCzW%2Br%2FIDTSl4KpCBvSPy7LTx9svB98W0wnoKRdBpHmjAuwrs9JhQMVQRMFq%2FXk2ja3t7QYDSA2wnLCGES8NdKpHDmVmzKoNXGLRfVsFPUcP1vq6lBSIAfUPnXEeW3kJgPt8%2FvJkq0HaII2OYu6cRIBCdk8OZ6T8XRVijyVuDkKfMIpzEwFQpHvwDIcIAkaN7dmUVsVNnVtUvL700808M1zoLd1t6bmq33MreMbMJgNOZHzFXPgvMOOT%2BMEGOqUBlJiZOy%2FxlwPcey9TiQSyS%2FTRcDQmldcy3ZfOoXbUj%2Fy0Sq2zHDb4C9nHt34rsd1XuYGnlQmoX3RGzOWbogACcpngqyTh6keyD8N4csYWNipBtPB5PP4KNrkJpB9%2BXywJdWLstLR7d%2FVaXQbBLpH4IF26HCP39lF7e5586UA7bjmh%2Bp568EPtMCx8Lbmo2mSdVRfFdy5RCCfHluNNzqnrEZ%2BWbVNJ&X-Amz-Signature=250e90474c05d16abb0f2d18009c7ab5f8390d6358a09b1a1068a399e7fa7711&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
