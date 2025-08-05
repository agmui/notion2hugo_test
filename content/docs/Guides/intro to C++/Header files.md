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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA72RZT4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDFXxOIzLu7aAjSylO6XBGVc3exLiwhqi0UnY%2BB0oaIxwIgegXlvkr4RqpMqJxyukDvuRX0dcvEJ8l2HT03C1t8p24q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHy30ckXPNr349UBRyrcAw7wZpFPO27ZnmDAHsK8cE%2F1fRtckClATcQC%2B8rnzm1DuLgoru9k4ybMcp7QoUQ6UZockqK4Mmdw96kv2Tv56JeWEkzJ9NsX5EaU4GfWC4gE5hH8RIF8v6O2vtFs%2F%2B7qvmNWnne0Jvm5oN0CD3xFkOVPBo2f2ABr%2FyprV9Q5QHZd62DWyP3Q1xcsO2jnbCr7GxW%2BAuGUg8lzCBQftI%2BZg7V%2BDc%2FychgPNtEm0s%2FtgFdwxU0su%2BmMAiz0TSqq7HCMamxl8dh3G%2F7pG%2BklxPydNC9ePtA9icUSeIWZE2PhWyx0xoGEQSnzGbVeQxZzskxeYiMAIFxtjyxiKJzbgfJq4RPVyfAJXOYzgnBC0HUrKnsnvQMqna2rN6jexSJwb5lzzPFF5k7emAauR5WrkVQsg5cq2zAda4KKl9cTemwtyIR6KxAUaDsIiC6Pgmlx7ORwAF1YTDK5L2rwFT1nqVuK3%2FI75zh8jtQpguN3FGoEPg%2FUjMDKeCeJpQt0sOYKW2RuRwjmUeXiidgJkTW%2B3pxDYS2pU5W4pMX69mtKCM4LQ1gbkT1ztQQ1xlqM0n4BTs7%2FjvT6CXz%2Bii7A1UrYacgB%2FSkOGwVvNYhwxlLS%2FzGVYKFPVPrUyrAI2GMhQ%2FyjMK%2FhycQGOqUB77IMROg8LsXTO1Npf5gFfWzcdaQNTvBkpqnb%2BkryPUVEH5BXcirvB7dNtJzp0aHDgmnEIfJRUY%2FHXmd3Gy1CHviafrkHDeX8eoK48Rhdo4UkADJsjW7UfFXs%2FmqzFm7H1JuARqROjwUr5hXrlzuSXnYXVRrwf7UdhgP4NjzxWJuQ2MrddoMo0WhS3L2bnkR4g1Kv39ej7tEqJTjffcmPP15xaQFy&X-Amz-Signature=5a96e7dbcdf497b0e5c2f12daaae05d6e6f6b6d8590cbd3feabc1824d3213223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
