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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3TU2TY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMPND35FmoJQbs5O7y1NIJOrXB7j4DZ%2FUktsP7lpIi2AIgFnpdzKqY7Tz%2FNeeGxOouiqfTvDrouWYzhibGiQKmRJUq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNvddTuSI%2FtWlpT%2BpCrcA5oU548z7BKmDr9%2BJ%2BA%2B47fWr2u%2B808BZQbK1o2EHtfSwiciKwg0WOLwlMJ3lJ3mohZH2DbYi2nRZdhoEcPM%2BGgQh%2FibC5T8tOdQoBueiTeu2jEswJ0YnmRnvBJ1%2FXuvy%2BOd8Rfrm%2F9fCHh6O2qn9rON%2FqEwQsmwVgmXW%2BXTxoXSbJalnNynvu2Yyy%2FzG2Qa3fCsntsawmYycdCVZX1h0hDoAKBECIYru3DrVjGjfrXuuFQtO5EtPajm9l90JSZfQvF0PRfSp9pWxyxp%2B8zsSAHrkobRNxF2OvPODFCtaNCQob5d20ri0YwIh7VN2hirTxx8pbAh4%2FuwkK3KReNgXG%2FKe8W6OFamLFbyNnybWroRGSp68hc%2B0%2B5PXMUb0fJ5eqGCkqsvEg2hzZJhZ7aTnVjEevkifj4mtFb3VewIRQegPMyCaebiIc6Ntc0OE10LJ3fChsYVRXnod5hraa78xMhf9yLBxcqlvcs6BhAq5%2Bas4mRm%2BxanHrBMhohMGRWsF1L5IQS73OmTymlClnpFcRshdJhJlJT7sOw6uVKRO73p20jJ0PV4FfzKTA2e4lcAJFatT2Y6tSBStlvdINGxeQzthJ7B4cdp2qQHBhrU0Tm%2BiRMMenUt12ukmE3qMO6Fi78GOqUBlqDvuv8umFNpSBK6Gqj7CeHzkHpg2eDMsbTR7W5uaB7AhxJuOcUc6dFIhRMu73sQEck5fOwghZAuXkxWuCStWzPWN8DqIBnw1Iq0MarACFY8YuKNj4sSWlYSnf7bRy8Ib5s%2FE95HH2Jm9C9RmT2n0eUdzW1Z3iqwAPxwH0YNKA6Q4yx%2Fm%2BVLGZvkhkuD%2B6sWbI5N2ebJSG97YNGKu%2BEdT4C0cy8O&X-Amz-Signature=47f6a00ca8959461853869f7eb5c14fe426138ed5da1c1ca70866c7a8c100a39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
