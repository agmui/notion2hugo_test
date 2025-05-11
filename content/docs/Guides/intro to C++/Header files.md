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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3DBBXO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDo0o6b925y%2F7HZV3sw2zhRoOSQsRVg2pX7LPyD54EOQAIhAKgW6oEDTsiDW6HVVWdaAkSjCaoGvK%2BaTMDBPhabhgmPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCf8gC8EX%2F2gcDjtcq3AOfbgyamS8rqtbw85d3r77LcubfNC276T%2BFY1LbcnlSnFFJs5gfoaVujN4roRZ%2B6pkwVWDyWRvA57dwpu2l6jKG56WTrbR2T11kLqlBVcJ4%2Fdh1phTCyl9zzC181g4nDFNX2IsZwjBo9X%2B9fNPVmWaeYkfxiAs02G3Sx1BJeepySFiOD5M50tSMqmTx1sEU2mElDllgxyhfY5P2HhFZAs3LWQfINhyonpvaD%2BPxpJ2anhODJvqgwQH4C6UrWbP79k7d9A0zbePU5frvA%2FiwX9WJgm9i0EOXdkTtkIZ%2FU%2BFvP2cc1jc9pzU115N%2BgsQ9sYbget2%2B1UdNQLV%2BHHzWmRcJBpdV%2F4o86K9huuJb7lLkuLhYBPUbCAzT%2BNbU3rz4P%2BvejVeddAVd7hjaO7I57HXpMMEwx7103hw8jZQl1UmoZA26tZxAlhe0tIGeMLm5pPSixtFrcpvFXA%2F7gllFEg5MMcLsPQeDjnkjCDLv7fAi%2BYvK6CdE%2FD4ZSO8X3Upz%2FMPPK7ltycMlRmjmL3Dc7Ttplycy8A5Yt4l0nC5BAQr7jeO%2FpoeYaAqCgPtjBpaf5ys5x3a4bY5FRycXKDNE0ybDBD5MtaCVTbCNCZpLzy3KmCOoyxsVdeIwtyJrAjC0p4LBBjqkAZe%2BTf%2BtAPNTHJWBkev1eRWJKxidt4AIJBB1vMy8puA0wO30QESt7U6A9HlV%2FRnjIDn9LpjbXIPlZdMQneujA%2BdKq4gN04j2ITfRSzWx9hHJttDheVv%2ByXSUqEFo8u%2FRC%2BWkUGrI7%2Frgdns0mlsIBSb0tRss%2Bzh9T82rQ1t3175iPqd2Q27SbbLQX24vk3PHYsp6ZFH4yS1nJjZURgVPjrH1Vtl6&X-Amz-Signature=e3beff84396ee22949639a3ad88aded27bb4690c49b2a727d45ad9705f09baff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
