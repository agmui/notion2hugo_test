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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSRXVBG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCddPlb7tK8X6OHgTEHNJZo1iko7CXuebPKwAu%2Bbo45%2BgIgLG%2FS8U436JynPMcy3Ne1CVJF0i6wO0IlaXdrbGh3eagq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLYeETBqyjJUhobOJCrcAxpNupae5e2acODrmPAYAgkLHQO8jQeQPnM30dhAT9LyhxVghoc1E%2FUQLTbZuDMpUlRkB1Ttotc82VwG1Ay5C6o2ZRqWgkyD1dUHaQympBaEau%2Bb9agtv27lfeeD0nG6BKicoTsKYZLmh3DvXz28EXUksRfCSXDSaovIUuPZT%2BjGsoEr1KIgbduaJWggW7rC1RYa3aBLEqbJTRfXaGX8fua7T9jltj17TSmlmvAkR%2FXl6Ho2A%2BK38BhqkNybChFFaamdYh5U%2F5UesilBPST2mWT6mH%2Fls6d1ozOqEgyhx6TibO2FzE0XNGbvVl7DzxXhEDGip5%2BAFP6A%2BXeWJFY55Eu0Tdsx2OXpn8UbX5dI0mLOsept0NIl78brnQA4PTfie9WGfWVlW8urQ%2FqhcmTujElarJMix7KUwKN8Eu8Ct4Dd%2FHwkuq0LwsChVIqEm9AGpUMBiMbWrV52h55rJOFDDraNrM%2BIiUa6fj2RW3JArB3dH1PQnP4hQBoONwK%2FIOv7pKH713VdZ3HBm1b%2Bae5Mj149OHPlLiuRWuwbqAwxRmcuSsujZccqdrm%2FHBTOKh3%2B1H545Vv6dTht1oE95DRbrIPSbNjspuZ8LPrGEV870updJKL%2BzpegaKNa97W5MML59r0GOqUBGGGZouudZPtuxwWNBP01vryATFLxnYjFgssZp%2FWO5IJ5jo1l0zeR07qKGavmLMcP2yo3xNSSP4dPG5AVUXrArKV7Bkt0Ex2AhmyGo1eNYssteTElz89w%2FQby5sSFdFgn4NgBX%2FDEoIbcivvta%2F82V0FjLRCbU%2FvftPchqvDnDRwzMkw0WsHjyjmXzodfgfCeBS4QJ%2BKP%2FeXIm%2FVoKB07d3zEgqJS&X-Amz-Signature=5158ad7864f8a5e1b6715a87ea97063547cfbe613049e68b14dea6c0e502d14f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
