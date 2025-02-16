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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPE2HKK3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCmqfO68nd%2FwcPXm0VlWaPLZySCxKm4JLP9MPS%2FHkyupwIgRzvRnVPWMIwDYseXnu3k89bfn%2FMQywV4EE%2Fj%2FPDsRsUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOhPIEkTxLc2dgBPPircAyEq6TvDxTvtxPwQXuspMuBZjTzj1%2B3qV%2FCzcdd37lbXzAsOVhUyN%2BxqeQG5htMXTZVHqcYzlt%2F7zTHvwfKMC9dsFdcbZfBYR681O%2FSmc1MI%2FwRAi%2BW4kmF1UkEWWskzf6gdIqAE9dKAzJCJjTtSKON23s5%2BUr6aKBWvxBk%2BR%2BCtYgI%2FJk0WBm9bLCoPdRxscI%2FKxPnjVc0GrPnFjrQ0NRuSxx3jnseK8pM%2FZeCECvlXdzj69g5IOb40z2bGjXXlbUYOMKnYCjoBIoRUKYna0lKu7uLPmGipkn2fjk28BCNWWdgXtKJgDXXibckh%2Fjyzy0XsSmb%2FBwaT4kpiKM2%2Fu%2B5dBvpS0oyliHM3LUPz%2BzpQlb0DbUZDsLBV2HCglaSJ8%2BKf%2F1bIHTGv1zwOvMJxSZ9N5uw%2BVN1QviOZ8dw%2BQFx6DLMEUj7%2B0%2FkdEBKD8Gi1Weucgi1shQ03qhRZyPE4c4HAE0GasvuGodmqB%2FdcFupvhIpac6A6BKIm572wGdJgqenunO32via5bJrN1ttzQTJYIlVMMATYGx3HsOaNiEqi2ljhfrgqcNmYIUabWvbk%2BI1opa2NAqM60JOd5DvBemk9qfXGni4GoOPhDbsNJBG8na0e1yoEj6sUcUoaMNepxb0GOqUBgYjLRW2VxQ5HHa1S5rPDEqwkR%2Fcl9JjBMbZEFuz44Krl6ox0d0000OVOjZm3QkrgKmEIL8pgWQgcwNPWj5yD84U9%2FGmhbvDGEfUw8D2tn8p%2BVVCyZFVnDbwrcb3FpP2cTjvhFXENUrpua82LOoi6qFOxL2pyWf5toyCh8QMm3QEx6fhPM%2BG53zdOIIjF9SNOppUKUzXhubWj2hIpiJqKZF9j2hnO&X-Amz-Signature=a6d47d3d4dca8fdce26de1e4edbe24dd08a2e844495275e71baf2b0759e8d5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
