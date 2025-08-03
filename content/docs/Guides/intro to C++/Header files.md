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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBFS7XP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhIAHS2VhYGnSjXJWDw7xorrhqlPpDp0OHKIfoeTJkQIgLtMoPOLlhu2O2iYCAzuyqx5o5JhVzfdHBlUntbsg2HYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNacHty2Nx8s394etircA41Tu1c60Y5FrDu5HKXXDwyVIUBlG1qt5594%2FZOjUp8VF86uC3xkAW7MuH7fXCq1vglGMicLXGmUe7GyaBaMKNDVVWx0A9EbLq7AhTojlQ%2B2HC4vU2wbGtujbxWkl8COPDXS%2ByxbNFqesZf48W7eGtK3Fnd7N7kjY40WjiKFT5IdvEwEJRglbTL0QBoVoA0gnss4F4Bdng1AIJaWftjUz%2Fk8Onxt4zcW6Ss1u9SZbZk8NTJLhQgd9NQJgjcxdk31KZzXHVTrK6deFfoXLHPYhPSpQvO7JCWrx4tIO3VImM6YGgiIrB94Jf5aJZjYmRqbucpg7pMg5POpMgqwnK%2Btnm15z6FWZR9Yv%2BvZ1HZ5ty%2BCCzYzCUdXnr7Uc7tWJPykhax1tfhpY1Tt0r0Q0R2eyLzvB2CP7aWLwWyHpzOWScQFGcFXDtG48ijeXtTouRYzvUBXO4N1oYZKdC7A4VhHjC7V6ng%2FuWG%2FHik%2F3%2BOnkNQ%2B%2B%2BcZzAQ4MhkYYJM9gkjCe4WzLPXukXl5zEqZyWVFjzl0DgO%2BFlu7Dkrdxv8XZ1aIarGfLiUc%2FwWqcvRcyjAHMRMUpQexZ9ifPUn8aY84eTe7U4Z3PazTJ0jfbsL1TZMBktlZg%2Fpcm%2Fn%2F48bdMPSAusQGOqUBjJBxWqiUAtwwIfa9XjJldfq3wCD%2F0nb59DC3lx4u0NYcMPDYsjjLTFtQ5vPtKhmqQTWK%2FpvHoQ7%2Bu0p%2Bae7gSTVYBbjGaqJjBh3KsBIgvSHaY128Q5qqa4Ors70WG3hBFUEflmitv8z7QVWnFu8%2BiDUEdtS56T1US7bDbpCfeuvQbNCHUIsMl7L8uIvN%2BtB16cBo%2F%2BP3Lw4jie0PD89oPKoqvSqc&X-Amz-Signature=4362698c2b887127cfc740e158ca85e1c7ee7c56015fb2656ec30490ee021aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
