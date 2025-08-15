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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4VM5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDCpG3nEJeMiMLQyZ%2F%2F8XmDaPLeQLjJb3W04D9pXMHgDAIgGkE8M6i%2BtEwBtGWIh8TRaTEMpJH6k6UY04tyxUcWF%2Fgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH4fwckSNwNkVEm9oSrcAwfO%2Bvxz6Xk6WiyTW6F4KWzzl2JyI7BP3Wf5B3vTICv2Fx92KKu4tDKXkLX53MkoHn1ZHrcRFUiHnoCExXsNasjpM0wZbeUFjsuZIwqXBBq4GrdVJ5ihzryqG3BoXtrrwDnHIgzT2Q68up13WucM5fdqlYp%2FBvdCJH8VwrbPmd668sdBY8c9f5Uf2uMJp18%2F4jXzFQffjHPx%2BJDuLMX38Xv9pU8kY6v%2FJd2LMZIqZxmGu0N6hnrCsJkBCFGBr6vtNuBGy11CSkHDLj%2BbMju4O51CE49Q%2FlC67LBrHqAmDNSvxcOqlS8z4eT9FZBlHr3RiavmnpBX21Cssq9yuxyLJqM7%2FP7wmz9BHRGvYCflUKRhTMF6qopk8llq5bAVM4ky%2FiaNB3f51IPAFmvUgy6eY1uloehwmqwOfnCJTbbsP1M9I%2FpU1V%2BO29j1%2FGMZWQ9cj6kAu7OtsLlq39KEKN%2Few9FA9gIPkesUU6NFeIhKkteUTFG1co2BLo4OSIITYr3KqZG6oRebJszJl114YSMAAqMEttmliZNx5A0XhtW8N0fVIygou2hNz8427rSe7GeMXW035b%2F%2FaOF47G8Py6aGtrRruZ3PrlUxx8rBbc2B8SQiEy8w1HC8p%2Fx8wUKeMOi3%2FMQGOqUByBZwThjNZv8GaO5DfHDIzU3M3H74PJfKPuK%2BNrdgEeSr9X2CG%2Fm%2FSMwMJ5Qh1B9zKtHC81cFMsHY%2F7PFKpFZLjg19MKSeSSY53VlPEMlPS7rNozIhpcrDNkZb7tyEpnqv6LFx4x%2FRmvOsF56E2khmH3LuMOI2vIyxpBx5sLfjT5FI8jrkIR%2BecAU1Lc7gHPcP2ejI7jJtet%2F0EI%2F1987SZHXpfQP&X-Amz-Signature=a9b3a97afe698841532d2706f3454c7422c64bf539e024db19035f8022ac9bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
