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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVTMCDO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEMRpXkgGj1D%2Bet1coHFOwRO%2Bi1YrDfu7AfIj0s2wAzOAiB2RTpCvn8Gx%2BCzrO%2B8kophcMK%2B2%2Boqj7Yzfpg1kZnk%2FSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqO846HO5kWNU4N41KtwDeY8l8fGUJqUw%2BvRKo2CrD17mtI1zL14PUAzoii48elaSDRVVUpdXDmuMj9RYPGd5ctn2Witicw%2FbvVVdDaS8O%2Fqz35MR569fRI4ornywgf5uogHu%2BLCBIuYDwJ7oSO1cjFhxfpxn%2B5q%2F9cTjD1XC3oR2hHQpMSGDDEUgiJX2sAd4JVp7SVXJ%2BFBTdcdZbk3daemn1zz7cNO7kl0rlN8Dz1857Nk7N2CMHlHcHC4c6WOPqajkwTe1aY%2F%2FKdVzfYTrZo8NRWr8RjMiZW56y0WeEZVYGzV6U807TnQpK5MSLfOCo9uZdtOQlbSkRXDFqvaEn21EgeK%2BBbHxAMCw0NrHIJ3zrLGlpHT73CHEpQZHEuijKDx5f703gtcG3%2FmCqdzEi2GiCq6inynw%2Fzc61QvD9GrBpdbJMHO0Iev%2Fj8epslFYPVWBZKS4vtKwYlZM2hOfR56jONa1HWGHwyR1UK3ZV2Oz%2B9YgRr5p2RZEaAYGoB9Ko7HaI5LgR%2F7G1wuZ9g%2BRdwengN8nkDUThz2MZEP4lah1TCvIf3pVa%2B8Hbzv4mDi27DOUSSDv%2FWG4L7TxfBYeL18imsWUeok1b5SyM9hmYa4eXUEfyTMiTNTvBKc8EjG51w1f81YopEs1vxAwz6OTwQY6pgE2i6bhhJ7qfKqlWikBUXe371bHQ7qPbNOYi%2BTb8GrcPtuC04qySbAO%2F4uJYmyrbe7CpW%2FpTLXq3zwbk%2F9UIvJLQDZeydBd7Sjxv6xRaiXwy%2BJkVR3sHKidWDZccG8M2uZw6%2F7ZEFUJymdkLB%2B7fOfWx5gulv8Ln8d0xk2Mkwe6IQyd4UgMj2nSm7aWlVrTljaXs1Ho7HIlirxPqOXXnyGfGIHZavMV&X-Amz-Signature=fa3931214c7e6d84bcbf3545c9645c61ed9ccbdfa9c4a38c55dc50a38c9ea49c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
