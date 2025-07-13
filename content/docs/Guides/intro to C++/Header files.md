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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4HPKIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKghDJ42oql9gnd%2F1OS9M5B3Cpx2pLQ13rpwKa3dUbkAiEAowrV76CNIaOg%2Bcn6Z7gdNqcLYI7O%2BDOSJYRc7t%2Fh9BwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBANvxBNt%2FWrLmPIhCrcA1OfLk0bORtAQIPGNXDm2mIeAg6Ct0R836Hso%2BhbR2BMBfSqsuBFUMyoqgKfsjcmUPWAm2ojf3JmB172qQN8GFtq7T8bIP5aNAQci%2BbEiUhsILdV8R%2F4uMysMaGSEx4MzqDSI2Y0l3s4cnLvIOQETgeeltBNUkfr2523%2F3b8Ro%2BGrGqY6QAlrSPeCeKq7j3O8G3zNq6ipOVsjsL3EaxnSahsb%2F%2FoaHKklWxn4Ky6RT99XTnYTPV8dhdsrdhSEsgZ7mbUpRGoudeNC0mS6dmQAKHs%2B%2FKxonNRWhY0dWvhWdvyznMZCz3e7KAxl5FMJy%2BW2LI3VDj%2BCnipL7X%2B9SvIfhuUzpvoOmZaGst8aZIi2lZjzd5mZyXsAmjrgjlAwR9APok5EjfK6ulznFxsVCgMKWsjU57HouP40OS%2BSKEd%2BCY30UZm%2B8ZVxbCeQzvzEUTiAGYGO9CgOdaPkqzD%2BOGXDB3zWvC5CXicfmU7E%2FP0gPqhtGZ0tRBVVY6ID2eqlJQ3Kx4wfjJQbltEHkMZyYMbcWKxLiubv%2B7MN%2BLOoOsdaGSjuF19GjmpAvIQD0kPuglv4tKLH70ipxn%2BAEtcd6KQjOxaUDueGA0HpDRBz%2FOmuuXiLV72pjzYW7o%2BkLlAML6kzcMGOqUBf%2FpUO6yTmcgIrVrhRfahDjbmb64UThsh4e7AQg0g%2BPYu3dLRor40BH7TQeNB80GnUEIos3LT8qreu%2FNpLUbcBuptpYWf2wx5Md54TjmjtWCFQ2FoNU0PVwOlXFmaatz11SeCyBkGgcvWBj4yApCgGt2QC25OWI8y2eZhRe3XvIUP57zLvwEVShkV93GsP%2F6O00qH2lKCcmCsYaapM6sk1YIWXPdW&X-Amz-Signature=f49613d034c58853e9be5645b4c3d2e4cae64d80df014e24403bf9c4ab6b049c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
