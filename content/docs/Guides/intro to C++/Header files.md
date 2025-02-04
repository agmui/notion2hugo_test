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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SAOUCA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA9BdmazOLZoKYbzoCmXya1GlksoUj88Ly81Uq7JcwiqAiBMPT82XFhVuPZv2uTqTK2ExyB5dFqUsyz8ZmnpRZqCDyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM7YmIXjAV727%2BqA5eKtwDkmA83O%2ByYHTTUtkeU%2Fz6Gp5E%2Bn55cVnAus5HzVC3%2FytOG8Q6F6UAr0tfpJzG5uCuVeOlmevTngvkRRo9W2pvuUZhFddDyyQW93NjPKXOk5h7h99lAwy51yEb7jhPOPReC2iMxK2M%2FQSvrCkNn4By9NRyLmT2Wyqbh8hgMQu%2BW92oXzaVYbW07Lm3ahuCFblNGsMwf1XmA2it%2FJMtf%2BquJPbIpICXR3JBbf5XcVh%2F1zPdu9AFvI6rhVGPf4k2DXWkCy20MQzSMPznHxMrPCQWsSJojBSBh2E6wI3h2mJYeSmDTCegJtBJod2RHkgiHxUjD3Gfz05Ie9jbTdVLg%2FMgE3iaTkHBz8hfDeD59s3TbfrAyb2DmpP05n4hEPM7cP2tDqt0vFpA19wRZBIDl7nYH0HL0a8mVAdqnTD3Rb54bqGDm1yP%2BTFjoVSYoKfexWdMVZgHsMe29CfycBD%2FM%2F9ZZbt3jn3ZFFay91GGnkxhIWLbMM4ATlFBKeMvysee%2BPuIrqNprvW%2FptjdpUxjsBK3ThBBV%2BgFerk1%2B8%2FlS12f%2Fr9C66TaHVeOBb9GJwTj5Nk4tfDMiPyTPUC0BypIpvT2glkKvV6nE%2BhgGb1Mf2eTvKWA0T%2BY1pt4YLCFWpgwjpOHvQY6pgGhc03hWFqgippbc6pznwGPPyjRVk7gN%2FkYGU8gqkAlUYMS%2FESMSCAQFy3TZ9d6Yk2ZbAXJeBZakL2iRyUhW0v%2FVuS1U%2BJ2PB5%2FttGK7NmfxJPuKzNFbe5g5IKDY0YRxbvCqRJ2b2EzGyhuSVnYv5O4TmznlVsQcSPNAY2E6ybi7XI5GjtsmrVj8lmCUUHD2a0QXWsIkenQoLnEabupwxtzE%2FP0JVNg&X-Amz-Signature=cf23e7ef67c790d0a45209624a027c8603362f839847d43971360af5cb0d19b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
