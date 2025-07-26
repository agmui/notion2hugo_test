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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KE2QVA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBimALTs7n3S41Y%2FddXwShK5di7liuUmvsmfEQLnboEoAiB9WQYUZnrN8ejWjrAq7vLa1PiDAxsKRT6MDIfZ6YReHSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMAGnwb24w485FpHKXKtwD5E8DBQyWgrl%2Bb%2FMpvONL8GKOM%2Ble%2B4l%2FgSMvplQUaOh4JDCkf8ZkQiJljnVKxxci3g%2Bglzgc3TSH44t5BuVk6KXNsvmthm6SxnOPThU53dV9zMlxxMiwK9%2BDqGJEWGcrkeQ9%2BcXCCjxezRBRijETW56RUhW5PQKSd%2FoeNebZHJEXjdgcxhp0w0giMbZnDdyI6vDdLyXcPMl7UJlhvM%2FqdHwv7QHEo%2BrkUDvjJ2vDD12YJgrslx4Kh8EGbi98mmgzVEzfcGwwL4iEuGOkXz%2BNTkBLm4XNIDVl4dsRxjazdYG%2Fup5xFpjNP2nREOkJzEvYVAChOrl77hPxGVs3H3aEEHO3%2B3Ktg3YiPCVoRlhULA5BIdoszXsRkHAIpj29%2Bi4xu4rAUeJzZRVo8E7b8Wajup6uGlln3fRbG34zhbnsNhqlzKfIPgMq32ajrzO3zI9axVUKGSOW4lOzFGr%2B5q8gx2l5YJJk%2BJGwFnb%2BvdrPuNn5Y6%2FImeDO6bKPirjAAbpV4Q7rVCxPXAL3WV1hrxDfRlh0U2lshkHa1cZv0m5Rh1GcOGJ1RRtYu0fwsWyBTC80%2B70vQH7JJP2Id6%2FAleMZR7dI7guaS3QxESicGQDUoW3pWuv1X2TmEYX9NQQw9NCPxAY6pgFP1MUs9tzsBpOnDQjG575rHEVKm2IBKFh4VCVSWGvmR5Z%2FVs08WbvOr3sFheLl3ivnk3BwMOCB2HdGoBK6%2BrW7qVs07hCPaEhVHXjGvNd9cEcjTuByjrQBCzGem1JC0GU%2B%2BsgsRZQgmJZtvWV%2B50qomEbOeaJdrt%2BtLO8L4Ea8K8Y2c%2Bk0h1WRdOIYVJo2Rj0wPKmYg9uB2KmsghQXC3Yk%2BVBzsqvD&X-Amz-Signature=37588a6f92eb068ac4eb90da3b011fd5e76f7243b6c7c38f7efb2135d34d4b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
