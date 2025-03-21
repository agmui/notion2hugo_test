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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655L5I366%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDp02FXRIAswTgdGRYPXXRTQe%2B7s6%2F%2FKMEj7AMIlBPnTAiEA3VH%2Bmq8X0tmMa8t%2BcPvT3XT9FroUQyARp%2FHRiII14skqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISdXb4PzbPM3UVHHSrcAwYAJkT7Nl30PAAaciAgxaj%2FycMCq6KzcvAKRSXmoSDGQZv3XWGhcIZgGMUb2NsOIcUR9lLv1EUGw8MPnIchPYd6nzy5%2BqytXS%2FwCaMlAo8IHyLYXz4%2BS%2FQGfuue8P6lNg6mLnk3O%2BMjowobUIG2Gv2KSuVHREQyYFa%2F03zlmXh6bZRyDKWVRNub%2BXQ5WyKPfCQbF28QHxWx%2BFnv5wCKUrfNzIpc0ibvkubH4330IMaUV9QZ8VcrRmq2RBaXjhAwC1TfBcSwX%2Box%2BEWsMY8jRGzM4nA0KEa%2Bhh%2FLinzVWMUFKzcB5jCW10JSQqPZ0DAMF9o7xv%2FgQgEHnt4h%2BHfmfv5P68D77BQTd75SsFyOb8obgj2h2azCMhIgiuqF%2BZUgrq0ZxWJIcs9MknsmFcpJRku%2F23HgIpd3uubJ8mvkvC6zWJ8uQWA%2B19y%2BYg3CplixcNQIoDG0oahW%2BKYvQ6JYZ8oCDzcz3l9GrrohUpgMVCsRlTIK%2FPcDYJHU0IguV3oE%2F0ap%2FAA6LvAPPRQTDfM2bEdl%2FoPlMUjYBhTf63fx2OOpitCQv1P%2Fvo58b6gCEg33VjuM8PFSmGX81wF1%2FxJcLm2VIzhiS5ARBNYPml27%2BpniU%2BHXDVfAiDb5A0HvMNzb9r4GOqUBwuBnGCpRUpWsHskPihrbm1GLgDPKx2cc0v5bGWkV5LOIAXTXL1dw%2BY%2FiO2i4VMlLvqDXkytaaw4F%2FMVM2qKDUmWorqbPTtGNqyK4eRLWTPTvQibRfdNoK8tSOE8AdbxU1kvQbQeO06XOfKRVKcQx%2Bt45%2FXdLLT2aDz5i2vJ9hTJF31vBO1eAsCkVjhxb0acII%2FjnwX7g%2FoqrwQUtpHgoXM5c%2FDfZ&X-Amz-Signature=0f543aadbe9b5492f394ed5d79e36cdc5724ae348ee6baa4f4ea6f61b7e8bbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
