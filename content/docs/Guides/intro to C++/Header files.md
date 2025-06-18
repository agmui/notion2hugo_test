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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MDOJRB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8ms2e9nubECTJChJWi0xre2LHAMWSYUy%2B6Atgh8QJ9AiEAgfaGfMHYxzozB7fqbugrwNBaknYvPg0ZeJ5qlKEzIqMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6OqphqcV9ECCqfRCrcA1kMfrdkPAW2k0Q08U3X%2FirmaQMIHWv6J2SHeY4QKo%2BX7GUNbUXuLXxb9IrjvigwkcdMsQ95gw50wgKs8BnMMTUW5uwrcUQPflSGCxrNMBEPW29QpXqccPyJ3ew5JD3SQMolL%2BjNZdcq0sYyyBTCndxfgjybjS1qbEZLUr%2BIE3Dt%2Br6%2FIiFmAFthssM6q7%2BByKnatDSF8Wd2n27oHz2CrurVYXl0GUl5nzjF1l0rQsDyp5lnonkBCI58GEa0xfFdZLfyv%2F72RM9GRAMWy%2B2SzpckybBRsC6LHvXp3t9GIOc2IuexbbXgYPO7IBGK%2BS4zkB54CcBPyI2V4GT8Kc%2FXkCI3WjoL2INrVc6%2Fbm27drdUyK20RZNhevmsnUvyiapOuTUYH2uVoXJ2hXVp7P3YoDujUu9VxIm6GJbc8V5u0r5ttfSSr%2FjdlmoiPtA5GDzzMQpsl7kCuwGD0%2BFT7iyXOGZsHO7tqu9ROvSj56rVzuWAJ41gc0%2F1KX1LU1cYnTZwGWEnly%2BcEyVOZ90wbp1n5fgngQ4ISgCDTtLoQo9G8PzvYf1ffHbCNiNGAFnE0b78dsiPClH9tR85%2BdWzzIEIn9OBHnL%2F%2BjSV1yVIy3YZa83JZShbgQyM0URXvaz%2BMOHzysIGOqUBljj086BNMnImg2fB9eMjNECdXv666Q9x1NA4NHjtcAbQZlqFZuIHnFIuTJI04BmH3qob%2FQVy7tHvUXMsYSFsjEdlNWKj%2ByBVX79qbz23%2F8UoKFGG3LWGpbbLCkI%2BkVo5FVf38Wweo2gXmSh1oqniA6itnvjzew7KKVctfgi3fEBRBVXyEp%2FHjtpkWdw%2FZvZyFkjQCSRc3lFBb88Stq88t1iPAIlA&X-Amz-Signature=ef49a18044c37b22bb80a102cfece9911de84ed86241d4774d935b7a333181c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
