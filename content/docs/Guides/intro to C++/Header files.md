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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5PWOTY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHpFycMK5RqFNV4gTT7TQUxFg%2BVxv%2B0IKwxWWdnKIT0gAiEAvoOIE0tECndltlZPJLornMT6SkNNuDSFRU9DOfSyYZIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Epv8iQvbwfwot4ircA4hgDsSdxV%2FqrLkNY3Vfavx7ydt6TCpoZcWWV0LuRVTVoJ4WGcaFDFT1eYhPrucE1CWjBAm1eiL7WEcvW%2FWnYivC75AJkCJfsCW2KYA%2BmaTn5YZtl4OF81VC3Ih5L0Br4TAnLR7BhMtV7g%2BXyuYhQIad0KB45VuL%2FSSVMHnEXiwSBTcCzL%2B4OU0Evq9McfP4WHtwRFO0Od%2BReJw5RfGNAiUn7S0ShJzAWK%2FEEk0Or0bWhVD%2Bs57OHhFoPfwj%2FMAx%2B2tsuN6TOk2k2nEWFj3JRi3z9DroCmDmgd2ikIwZ%2BCXtdVm5ovaOCwCq4c363gC6t2ZKcHf03xZ6rbou80EmFXKI6tUczBC1ncWL7pDFdLeirj2x25K5tHsyLpwIlc7biet7MjQytj%2FP9Eeqb2jg82BVchHk6%2BH7rdLaRZa5yDdtsEBqILR1ir8Cd39I3xmbH5V2hUg%2FWbvr2Xw0Uoqy7ZerUOFKhVgRgUIHAMrrXhIu3vQvTqEoEtS%2Bk7iuGU8TqDwWIBjzeu%2FkJm1AHS1yT3N%2F%2BIM3PfC1dofaty%2B9DCkXSkjEi0U%2Bc6bKICqeDpIM2C5xtUFI7T7AQgprf5vA1wDLwgozhj53YeJq1Sw8vbMjis61hc5ROkzdaF08MIqRh74GOqUBWsr4DzihzG%2BiGReSvL18feRK6JHuJf1FudiR0%2BX1vjFVChvsK7UpYUMqM0OH0G9YYdld6aAbPC0I2aRxJvphNgy%2B9Hse%2BCtMXaHP6UOAayzax6LcWt8LWl6AOUuUcIyWFMm72O%2BVY8DTJwYUPED2UXKUkJYOI9EYYZheoOTCllOJKQKRvQ3i5kEQerFwBRaRhp7pUy22oZ9Ap8h8uHRDVHd6bZ8u&X-Amz-Signature=b174192e70ad9967fab12e5a2213e9db9d574660857c78a7e56169fdc55b656e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
