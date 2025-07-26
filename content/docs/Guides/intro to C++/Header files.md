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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3QPUGH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE7CNUAa3ggbFmQw4L3N3oWJeV4hM1B1LSKZ6txTiE5mAiEA8z8Tcwam1vGJ%2Fge3LCRTW5fECMDv3V3anTJtPt8JNvQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB0IRv%2BJj0W6h0kzbCrcA%2FNSz5Ln5zaaGfYsk%2Fa9DJcG%2FSt%2FWVV90nGHenS6CC1Wz1aPRj%2B4rb8CS1xSG4NPQVIW6%2Bm7W8zaIkBnJXrHX9e3Pq9qsVOoFBTI8ni9jHuOgbuqdB0nlkRQvFmuUbL289mrrFSwbPoRVrxv9BPvwnZO2d6iM32uVpr%2BWDxmx9OjAzJO7Qp%2FLI9aeb8UJOgBbl3sDtGsjgLQfLnmANCwG%2FY3w09sS6JtQcHQlfvaTQXmu1AgDmq0HORFiNFxljy%2FQdzVRN6IswwS%2F2vNsIT2W5ECuHExMqD8b8QK4Seog4CokK48wr53ex%2BoTwueYVfdXqLXZdQNMLFpFtWXBnqKSylF0KVjTGg8sesa1ttwPjzzQgdiAH4MavYyEzyZr60myHL%2BYv69IKfn26ubbgumx3fVvaDeY9H2bHIoqFzk6xYi2ySAvu3ab4x4oSqansYqK0ZoRI9C5duKYluSP2RRNUEerQ8BwHc2qVtixWH1GYvxUzR8jG0yOPET9NgzFluuBHRNKZJCl6T8S68M2h8%2FQy8k7t4r%2Bor15xKHEmUJA2vMA1zzURFNDuvm5Dad2%2FWjpH39nUlYbbJ3Xika20vPEntok%2BpfGh%2BuGoJ%2BNcXw4f4hAYlSdocIyLVdZgoRMNf5ksQGOqUBCkZeJEHUJ%2BpGan%2FTsxzFk%2BOhXc1Thx%2Fgdl10ZVaeORfOABv6dzeaue8BtJgr%2FV8sdo%2BrzoSsdHyOOs0jyTcUk005NpmaGAeYA0bEU2%2BuTEPqO5MMjX8%2FJojCJ5JZfOeEM%2BrfryeFwqmWncEWTZEpslXkAMAAg1rerMX4llAfsseA8wQpzC6IGGTd3lPStBZj2V28%2F7MimZO%2Bz8GBBTujQdHX8BE%2F&X-Amz-Signature=b777a24880c7ac0511f414a743bfa4202d7be1c1fe642c095cf55418ecc7d11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
