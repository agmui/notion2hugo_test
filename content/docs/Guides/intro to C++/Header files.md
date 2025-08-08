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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRROHY6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDtK5o20hvAyCaRtdUdefuXvhXm4HjErqAxbCpKmJOoxQIgaclZ64RXHvIAZbe7UvYy5JwOInIyJeaw00Pbcl95vHEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvIntykTOHXEeo9VircA%2F7aOlLloqfTbO98O32lSZP%2FltWxoSu5GR7TPrFCe0xfUZFaCxm47sbMbOaisa1mfSSrIbYc2MVWRe6un1wy%2F4RbV%2BjZwqZNz3YHKdIfup7C5UscXVlkWog1dIuXZqTTcWFMyZdoBO4GfsrvtLhHs5I%2BtLdCOhbyvE7NJ9MeEXDd5tANmNC6h2kTD%2BXMKelmw82r0CW3EDUo%2BjAuabVKleIsZOvkdJ%2BCMgpMZCujXDILJO%2B0Loxr2VWylQnsq9IiRSO%2F5xn%2Bm0hvsQggOI87tkjvMpGVv39xIY0cnKfBccOWonXdxyNhmVTW4H0b%2BXYbO%2B4%2F3USDufSlbiKgnLX2MyAs5IaQPvgAmjb1PUUaVNQTl4NdbExs3gzROiIPRHU3MQB28ig%2FeBNs3woKbkIdpH3EW9OOpumVI3aJ8PaSXFVkRL0kEvSP4mr%2BF2JFjllfmnxpE2Vtzs4Q%2BWZfoq64XlFifpO9TP39pfwnQ%2BHG67nXxA%2Br1%2BSEIs090KB0MCVjFl%2FZMzhAd5%2F5zp0jiAdEHNPO1l259boJRjFcVm1LGiCrclBYxaH9ijBR49rnq0ASvM22JAgST6%2BgMwIrMaPGNjHHroWTGRjic7RdNDdEe7MVe1mLOwoYPvK8zn7sMPun2MQGOqUB0WFanNv%2FfAxnEO4VdC7jwYPfNWZgV%2FxPZhQ2U29yqqfBPbtofRL%2FkKvdyBkYtT3eDlzd5H5%2FNRwaNkoK9UUGBlIiltD0d%2BcFxLlXfMS5fcRVgud4YdEsDeXOlHdbh%2FCp91864GysH%2BwqFcXCI6qFe%2Bjqz9Ww3LG8c6kACRpuI3Yb970X1hrzqhlJ%2FnDqP0s2TIpGmxhxtacuGYK6XZ8xWc8JaFI%2B&X-Amz-Signature=2caf3f26d792b1b09c11c3d0bce925a0ca3025a695900e5175e5c7643b3038d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
