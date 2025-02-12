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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMMQNOT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5c5FE6kV3%2F5jE%2Bfo%2BsktYm%2B9kniEf3U8VKW%2B0wrLZFAiEAjwUro7X%2FGNgYlcd1Y0jbi9dXAupYFxizDZ%2FI52Z96fYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfVnSjTanNuFaHp7yrcA42SnTe42Vwy13%2F52oa3UGsbOKXGk0MDPLC2yjuR6673HcVJMOm7%2BP%2BI%2Bn4skv2ySp3a3Z22JoZnueR%2BX4ca7ZNGJmzVPe85KWUpNrYQQP3BoS%2FCCN0t0jTheNyA%2FOgGroAwl7FUQ%2BXgDe8gfqZSqRgTFxY8d%2BnCRbG0hg2usRxEcTLAor5Sl%2FzsRQ3lMxGtOzmdUr8hy6DY0caSd6VqyTSTQhl%2BT%2BcurWSmvh7wmOefajutbFiXxo0Ix8WPZsXUlue0SwNBxLHg1Wlpg0VYBNiY%2BvH9MBgxFPPG%2FbST77qNhykt%2BaNDyYvkIraffzFfmVZZoRvITqovG%2FrbfZdxJRunDtY9Qvf9L7d3FPSZJZkI81oX43UeM5U3SEgmvE4%2FD9noQk4aOGfylUkrGFoaj9FGrcQdOWx31zZlmH03EZE6lDKr1OAjMqGln0yTFiVv8qxk2JhcG1olkhThH5B4%2BlvodhRF8m4fS6U8Zx0YD2aZS4F27pGOG2C2TmNPRCwWR72I1aZQxwTdHx7%2FqfXmzS6SVfhGWGVmDjNnVKl0cokZY71xfzwUyowpJMqkCUyHOjMy40HYYd2rJ6OcMogv7r0L%2B43PKwOKS2PXl%2FK%2F4lmAMifVwy9I%2BuPHIm8MMNHur70GOqUBX8LW0xa04QYkC7ew4%2Bjdw2CzVO839zbGSd2KgF4PzXaHJ4K0UoNUCjqjEtTxqBnSCVUeL8kESxr%2Fx%2F3zfRyV4hpE7Jb%2F4S4XdNIJq1Ao%2FfMSSDaGMncVp%2B5dyskARbf6cTUfe973RH8Qq9pTnf4urp%2FkwWokL9My%2FyzcAbQBbjfaJ7E%2Btd83SWFZ99RJvM%2BeCP8KwwRNTYSaL4CAPxRznz3hUlTB&X-Amz-Signature=356f50ed1748b5d6f6d2a39f2986af51b6c7cc6abcfa9857b87768898cc069ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
