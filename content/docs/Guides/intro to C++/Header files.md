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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBUAAAC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICn%2BHN1bYMGWtyTQniCS2f2Y9Z2RiLPM65bLnpVaz5xhAiEA7ZRJ3AaaTEjuudfO4dQngZIly819nI3iVQX080iMypsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO4zuVgyc7nI%2BFEc7yrcA1VA6siHya2AQKt2O8%2BN0MuR0xnyo7YV0CjcrXnKHV0ptVK4%2BO76qnL0N31DNPVAKPE3KVnq5aA%2BX4Bt1aQ5z4vXYe3AIl%2FizTHZL2%2B5zlu2Eik6izow1iXA2osHm%2F9Gd3LWth80lHg9zAHLcay3Lwao5gZGzyG4bG0tfmwt12Ei4BXywg8sWuwU2e%2Few4KbCydM9y00Bo1wyvS9PrbWMkIVnfLN24NYVfJJohVf%2FcwaBs35TbexY7gefCPldng7o0H%2BFDU214blb73sC%2BBsNDi%2FTbUlstAvjDxJBhEWQemm0NrlDInN2xZ62aGj8jcXmean3J6UMT7IRg0zj2Lvf9xRrFQG9naoJrBO4044jUGWVpcCKmTWwjuDywqLPoeO0kWonePH783mgpn3ULhM4ZY09ZMToopWosoWwz2b25w1UCD%2BKJbzldw1M3eXKXTUlZ%2Bkec8ViGUhXel4FPBvsnJmniVy8%2FyIWCph5GxEXP10ggb6SNNC92psNQfXdVZYiEn6Ik7M%2BCNJmE2NRIYS1rRMJF2Wu3WcBSxL2LpGRaW%2FzVplOIyL9TfolgcES9rCLN0tj3r5c3pDTTHkEQZHTFcf4kTTKmCg7xfIM6OPmTVofsdaQnmOApWNAAW3MMKuhcIGOqUBMfEmDavlcvqcmNzg5jQ66Ca0PjW1Oirio0qWZAoIzuJ9kBmek1wEnIjj8cu6GwJvjm9O923qFiKBKdkKiwvbEjeb032m32koIIp%2FuymKnIrtJYKhpo2QJ1nhznhlPB17cU4EMMblpgBwP5lgfbSeaPs%2FR8ITuQv9XnoYynuG8Fvi8gGNhMpg%2FkReVvy6dwWAu9eNT3GFrMIxAKzO2M162Yu9%2B2Yj&X-Amz-Signature=2f049c85446d2d000b44add9ee814cf039b2a2ffb4fd32ef927bba553f146ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
