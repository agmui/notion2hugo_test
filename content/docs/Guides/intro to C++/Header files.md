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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMCJIIV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoFtJLPm6hMSI3namiuXaaWBICIFx9zgDck03ZBNP4EQIhAPa6oBewprBCHHUey9wkjKwMLsZUxmn6CZzUrpGCWev%2BKv8DCGkQABoMNjM3NDIzMTgzODA1IgwBgLb6nIdTXMGNm8oq3AOvVbS0DV%2F%2Fw2LDWBtexYtP40xtqCb1esR2r3T4O8aCTQtQVXsfEs8mDIT0M1l%2Fz%2FoAakFaiKBrGd28I1kNMrIeRtu86rgvlbc8Y1vh8K1TtNlNbHErzH%2FiXJ%2BQSlCGAckCX3CT8PAG4SzG1igjPuEpecvwS9GD6hjUsVPGh50Mm26qqTl1j2xNu%2BLQLU2LS%2Fc5c%2B%2Bl8b7BtnJckV%2BWZ1zwqMZumsP7CBbb3%2FFXzfGzI27QsixhM%2FwZoKQ7RVCtTG8W9vWy2Dl3gy%2Fw9VdqILRJKUskBiVQvS6xojne9lKHWxFjiWic1UFeSv2OtQGUNuHXae9gDLhibP1p0%2FXACthRl2LExx66XljIPKu3bo55uYSRg3d%2B%2BiwwZNgjwLGvH1sBIkdDzaoZJi6x59C3JaVt4glaHWhaXeDN3miuvwrm1PNfHmEcGN59zEnKD1fSQwVIq8CDrt%2BxvvzcaHr4Iahj2epP7C3%2FSbDhEitsXsZEJc6%2BXPFuDq82WfFjuLZoAdpgkWLoEuFfdsdqJD%2FFFCJhrIp93moG2GWdGqgjjzgDCfKm9tQ6%2FvhX1IwQUwrqSyl3J8g%2FGD6kgoA4AuU0MkB5DFXG0CLGKQfibRvNmW7A7EMqH%2BlY8op5nJmezDDmm5W9BjqkAeFjSdF8h83O3uWDwGP3U3MuPZXaK9mhgxzYt0kwyH%2Bb9XRgudsJ%2Fjsc3K3Q0xKD1U%2BGCNwEgBdYv3Bw%2BXvmIvRF291BOyNaMGsNz7%2BHXieqcFQvb25XVbl8dnN3qN2UlDWblLBsObUKoZZl1InQvqo53pxMTCGPKjIh1gJ7DX5Bkf7rnu6SHrDYS44WMWZKhf2E2Vu%2FKADT13E3bdVSEND6SpFa&X-Amz-Signature=bf4f40cc66bfb0d1baeb300efbf2285eceb1395163dbb42b42f052d64ae385ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
