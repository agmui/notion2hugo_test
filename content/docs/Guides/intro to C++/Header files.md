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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4UMUJA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBZzDjHacSqeG6lk21lPrVsUZgfQYEG6YiobxVqHdrI3AiEAiBCz2xe%2FB36oINRAv4eyxRNUZkm94R7nEZYqFvsiyVoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu2k7UHqMe8HD5xmircAzDnyojz0713W6WVa8z60rlAYSmAfXnxSD%2Fb1%2FX2FmRyG1HVKP3XEWEx7MsTQ%2FiKsU8yXTB7EP7AisVfWVn1mnTfYzd%2BE251IOMmST1bPGmEcADm2pfu0Em73vzM5Cotl8uTgQ0VUOYWOb94B5NQl4BwSml4M2tmP3mV2nBgaTy4zpJjC0cWhozBsO4LgKZHPoSrlrmTudI1NX2zTYL6wGm%2F39xFitRnIY5jCRX57IDSFVRrEA5yMoxy7bJnIfPS1W%2BALnhUjXCmcf8ZIjlYBnESMW4buNLvslrKiIGMmVBOMF2Kyw6pDna7Eedn25zQDJw5aUQAORusFYZilCRzvh0Yo7x%2Bc4E7FI1Le5brV5lyqjAksHxFcCbwpYMtV6Jj1AE4nuGVcVKztLeTWcC8Eqy%2FqOeal2Xil7qGl6NeV8q3RyAw2XqtPFhIq4o6Z71YSsRoCux3Tdmi7CwQqIfWrUFHEhAH%2FM0nwxnUlMtL%2BpoqvMoVM9A9KYnVt4zzIkSLLEV2aId%2BCBB%2FWFsGg9boQq3vl5ugdRO9llAAiE97pDa8dwH8C2HCsZzZIWEq4VuIl%2FePGF40aqBcJgIkCn%2Fa4IBZAI8aTGWfmpKCgPS3QAFaBMT154wJBJ0g1KntMN3g5sMGOqUBLzPAj7LcOo8m8FmY0MWjqTkVXMfCJkf%2F4yk3HpIvDeq%2FWuwZvRzNtkWPlCuWSdix1%2BwZN9wi0fRgTMOr4%2FJkOZyb%2FJiieGQ5yVTZg%2F1zIAJMlh74uTBZs83XLZBjDhmodwWUt6%2BXjmg71YA3TWoIpjGSb98WMwra9IUxclSt0OeEFccfYIp%2FkSfQL38YwiWxX%2FHSUvbQb57368eb6NVTVZjg32Fe&X-Amz-Signature=878a5b15790b745443961388401d2eac4d9e076aadb83a72ce65d9dde5940e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
