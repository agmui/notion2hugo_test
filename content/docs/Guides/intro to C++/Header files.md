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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GE36YV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDrCD3a%2BN%2FApZD418Ec1Rwz8DGPpjKqa2mAx6zJ8GjFuQIgC%2By5kVsmTse95r%2FltIGSezADof2yKPed43%2FSxkcjbroq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKelOiNCEVsmLYrfuSrcAzhQLwftB261GrHk5lRF2N18t9%2Fu8Sbp3d7MWNNL%2FznDrpwV85wV4PIi8Eyze9F%2FWieGv8jcBULAQRqtfMbSOYR%2F%2FcD6nwooo%2BYjkt6%2BWntnCNU7v%2B5%2F4k5JHvlyDED5zLTXwT9Su3rLrgkOSsqrVZYRQ1%2Fdce45LCbzoebF3%2Flox2UgSgxKmZce5HPmkYkl4PSNIedQ55RWm5Xvk%2FqTOkrCcIB8MObhZ4JhcbZnkyq%2BAlix%2BBkKidQ4MPJ8cwhO8amFoz0GsvFb6fBJaS38tjOIm3yUdl0uMt6J4yinl4R9SHOmsZedPQgfkrVE2PVlAMio%2BWUuBliSgcVlEYfOqlZlm%2F7ZCH0arZ%2BDY%2FdcLS64QeP1BSfStM8afZRywy92J6gyi3u%2F84DvX2hN0llQ8tUf7RypnkrB0PfebRSNT8dzzz3PKT2GJAyjrHQcmWXf8zmfu9rNE1OqJLB6QUs8aIhv2rjcgltaIMzDcuYP1GTN4S1mI9sQzjiTwZ95j%2BsOE04A09G%2F5KeO%2FjAcZlgGFvlwI07TE39T1JM7gP7trquDTau9qANfi89aBOEL6J5jKTscY%2Biobu5HckqxZkOfWJ3fKw1GkGdMR%2BVZqx7JzY46Cj7EYneUDrvLor2zMPHL0cMGOqUBuaYH79DJydVhSOIVuMbtuE%2BM6ndDzDrD8zKAf3YCY19JpMbOgudkOtj9o5yKJ%2FNi4EkTgEhSFU9C6ZRIwkMf8yPdIBtoKblcdnoqzTJdRl5JBl6Zm0QO16MutTlz%2FrZq0OAiikr8Ta%2FcnVCBQtnCgKnRYreP3fBHcTkVyysznv0pFLl0XI%2FBfK3ciS609QN7ppjWOeyh6K7SNwwCVIQfEte7irXO&X-Amz-Signature=8cb19eef9b1aaab246fe512e773dd7a5544b1386247cf65102ed1dcb26cb3d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
