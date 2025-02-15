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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJFYFH2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFPoWxwvJXcdkTKh504MidPPqT24KgLRXJwuPMG0eF1zAiBO1mNNrrKfdUZbG4AcE96oe6q4PaoML%2BIdZlIiUTg0jir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMcebw3G5qzgIhm0LAKtwDcbpXudc2p2zZdgC2wCfbUlDJf8rKMXE5idRjy4iuMU8bp9jol1zH2kOFyaVfZQ3mFx2dMuv7WNcar22LBWM4KqjxKqxxJx6q3sp8asCiDvnx2XeR0HSuos83dMqkAxugatYMyaYcU1sAiV1zzFJ%2BoTbEGvWYU6b1AFK9PxbIZL3DlxCz8VHvGkFqFMBE8aGPNNBhZInRFzAWgnqdqID3Unt2Xz9VyGV6YZju3iEbxCNgi2e7levz6WuUa5N93Z%2F2kmvF3xOvPMImFhei6SMVMybwPFGFarme026d4V3soJ93a4iwbZQ%2Fx%2BXqLi8qG8iFMnjeE8%2F5aNfBAKcNWGdIGua%2BWMS5NfEE76TtJ4hLdKIZUI6urpPyY6lNe2jT%2FEDzD2T4XG4gSvo1LWZoTAm3KS2VTp5Obq4B59G7MiEkUEEpz8gNR%2FB6RwY25D5uRD%2F%2Fcel9HFrTVQSV%2B3ZW7tdDP%2BwLumwo%2FPzP6lTEw7JIvmLBgjtdtRHwt5xg1hsOadJcQOhWXXn1bpZ2zGCCnPemGprqqoMXR1%2BxCk1XE7T7avEAEz52hgppVneZmOqu5CHVqenRoGzLnkLV9dSDr6DEJ%2BgCIDC04SmRiIAIUsi4DVXLNr3G2eDSOgZkS5Iw%2Br7BvQY6pgGcSuWDT5t35yY72Mihg89Q4GiIh5SuVk%2BQotTEq8FpGc8URKyVNOKmj%2BbCPYKgW%2FfZUBPXqvMficLeMzqUEL1ofxXt5d42GrB4P%2BYTmgx6I%2BE%2B4bHxB3fwvy%2BX2IgiauQselOm916vOPZk2vG5Ep1PnF8jlEeGq3khYNvbYlKq4r1CXw%2FTBxhTWE5eJYsJfJfabnX39ic2fi8oHu%2FP0NO%2FIchQIWJ5&X-Amz-Signature=1898433f730f2c669c0d9500a089af7e48e059a42a823b778e7e061a86d99918&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
