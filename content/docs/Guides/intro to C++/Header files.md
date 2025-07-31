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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOMWYWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmtIywfT0UNdIvM67XReb06WtduNlo%2FAnj2luMUqbsPAiEA2PDHwt4rjtx7hm2EKI1NFJYrNqCP2toEFAM8IJmx0iYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnqWk0aH4IxHTH7CyrcA8Zqa%2Bhv0Hmo0DdJJdSZJOQloilq%2FNNF3mDISDYm6QbaT2nYzMWmUqap0XTLp8vk%2B2xcVS%2Bh%2BALTxsvKGDemKbVtsXR0jxyrzA6ey%2BXfydCbUpJvtSFfQn%2BF8JDwS%2BRFQQ6tmIqAT3mm4%2FEvtUummwBNWx8ks6HQ5ih90JSCefYtev7ieohVesOM4XyFeNan67rRDdHsyWwqi03C3ig1BDgWUOIIRp2eEJmXO%2BPMO5ULx8msx%2Bwz6S1v2j2yEzmpmEYQM%2BzqfBQ5g9zlGcv5ESQwgWGO9fSnpTN71sWTKWzEUTSKz%2BUdDx9wpISP7MXOa8whxvisoYnjpLxeFynSLcl1YcC1d5h%2FBQT7kslTYxxtYeeRDVRAi2PSIaBofS03S6gB%2BtiZhqJ1p1OPSuMEOBDTaiJzp69spP3KZiSODX2P0dc9lznOVuI%2FaHmhqeaOwi%2Bs6O5my405o9Gc0muzn7fJzBZD2xkRbqptJcbPaFA44i8wjmmiXAyIBwOpKpC6MnG%2F%2B0p0PmdK89Osq0G6wJ4dXkvJxL8OAdzKodxKh5FUyEmcmB4btgLy5W1Tzr%2FdhKhlK0S0D30iSDAnBv1hx0ZfvxUox%2Fjc2bHcSyEQyZHG8Ig0RHtl6I%2BclavkMO3Kq8QGOqUBNTTXiDdejgHotpy0ZSfnU1eu%2FDr%2B5P3waona%2F4k2UvU4bykCfYBvumiiBjOFZvqeOK7u2S4j7pzDy3LQP%2BvWnh3W6U1K8VL3HFw%2BtaP4mTvJxFSWo4uMiuSVuwjpd1vpR8%2FnDVZkZOyuldZEY7cxusx15FyJgKcIiFIGUThMyvg6PcX1NUoSokCxy%2BCt9Tj8Eehbkmy84rAthffG8QlCkN0SnOPs&X-Amz-Signature=e9a06dde6641083e1108f8b5b480f64728063a66da851fafd4faf9a4667acf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
