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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6JIZN6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCPc31puBNRfIjENt%2FAPSWyf4rYqtGpONlmNFdESFdM9QIgVJGooMC28tt6QslnbpWZbOqFCBh7GevflCg6POvwYUoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9Fc7t8V2QfWv1i2ircA5yd8umS1m7wlsFEPQgGPFNsFNcnr%2Fx9k9J9bIgMOXKC8wJkYPhWijOxfbYeUBBYTd9Kjs83TlOQedqu4IoMICQPfztJKzhiO%2FUYjv1mmkS00CrH4rw36BPI8gNJ6SG1kcqdnyJTMSoicmHzcy0M80ffoWEyCLnz50Xk8fZMcH5uMKaVfsf0c8ju2h1nhgOaRgJGcsVyD1cEhr%2BkOw80TDuNOORl8vWPICDyHF%2FmxQRE38gMDqy2QUGJg%2BB%2BG8IWs6IDPFEB%2F32B2q5s0RVmfOMwm6zL32lvLpUsk8UIooQJPQoW9DxTQmMpiRS045P3aFrzgPXWf2hYQ9hxtFOtcq%2BTLBlwMyiLd833Jdfv2Il5XONKFVkMW%2BT9J3HCwT7%2FPKkCO2SQTCA9IaHgzSDYDcuZmNkN3WfSzbv6Fah4Se9V6VOm%2FCQvsqAG%2BGcX1HwG2polIqrbn6FCuUwvOZQQY2bpioBOudpWvdVi84pBmBucTYJ0hLW%2F2QqeQLO0YK2KvbJi9QLPu8n50E7B1jhxz%2FbJEfHvB0LVSq2IAP6WiWpTtKwitWoO%2Bo1Ial1JXYSNKWRx8zJa6ZpGj3oalRVZmSYqQ5GesL%2FX4a0%2F3mI9hz1dYkPhjd8sTSXDwIfKMM7ivMEGOqUBqF0bXZn3Ks8lgRUCBE8vFLw5n85nyOSL0GWKQtyQLLrqeqMSRsQf4vW%2BzEHoUJ3A7A8%2F4Gzi5BKsI9iUtaZkvqgnxxKxCuF50Gf5VFFfrQzRiJNqxNRrhGxijMZJJBqslmM5OiZeTl9UMwvyR%2FK1RzYGkT0RVkjSjykCX9hrh4NDayIg0S%2B%2BD0Lomt33dp8aKCJhA0Of5S%2FM8omL04Hyg%2FzEYp3S&X-Amz-Signature=0b066fe48f11305e91aa2fe85d42f8551e0fe94da74d8941885a9c9df376b00f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
