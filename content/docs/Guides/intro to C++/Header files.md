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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMU7N7T%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG07O8VJ97zMbObf4uO4CRgSwCwceN2VAh34AOA1XHntAiEA5%2BpUbqm7fqkoCeeovOB0TR%2F1f3GjZtGnBb12lvghQLIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBFfDhi1F1oekSJPJyrcA68tRhAUIxKh9rcNpKjCz89WZRDIFTCBs%2Bs%2F3A8ypA0dS%2F%2BgpJYclrql0lG5akn6EoLU%2FL5WXj8xiMyj6y69iveK2fGCS0KyA9SZBTgTc2rnFv7aSxCRvK3mX%2B3HvChmzzkesK1zvqOG2lUOfxigkhyYpz8LnSqaxXTTeFzSvsESkmjQ9jur2e5Wa1jjYEbKBw1b%2Bkn292QmC2MomD04u%2BA1WyrMNL6LvTLBygTuQ2bbsHMsxKW740zTlHXTyYK54FnYwcoqLgLaJXdU0DAALJaGl0x0YVfxc0GUZm53d3gKcWyhXYGbVrzKVMz8gCQDlVD5SuVkkCEfCwuh61mEandlPle9EL9pFFx%2FH%2Fdq0qLA1SxbCPSMEsaDdNHCb8itcqWsHuG6IbMVkyBmlCS3j4BHVOoD%2FLeYRppQvVRYzlKtcZi7etAY7IVL50bOJtAbG8XENkADxQ4abK8ZgheBSaM18HwrqtqUGgCfoAxYyOOVPoOHmsO5kN2NZK5f%2BJkH8Gp38QKeOdFjL7umfdDMglZrQBbeyxqXP15utMlOlve0vxi0mjvRSFRaAX%2BCac9jzuHTHTAcmUUu%2FYAwQnW59JmcrFwpExxHUwO4RlhBNa%2FodIcduXTWcsY3i10iMIv95LwGOqUBY%2BtLPTAPSFtYSEkLjqZHePaWKHC8owYfOz9soQ%2FkVF%2Bt2XmF8xuIb%2Byg5c4H7sidZ%2BnuH6vS5ZXn9QrekfYq6NJoQGJwRmR0Xr4I%2BmFFxkEenmEZnWScALCb6T1MXHPxDPgZ1wpgkxBL5UpFL7FExAPzIUdjDlL3gfKTcDZ6%2B8wKLF9hgPXmaq5iR0eKHEP%2BprzDvKKeQa0tSYvGdghnu5HtYMk8&X-Amz-Signature=7cc67643e6d639d17619f697a35e6a5de5a54550e43f7a4ccbd342159466f4af&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
