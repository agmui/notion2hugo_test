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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDU7TNF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFoTS78ihAjRlXwDJ%2F9S7RrA%2FQz1DaLxDPK%2ByhtX4q%2BUAiBDOhP0LUCiCTqnPY5cbhaWr2jdFjgt83grcsk0AbHRCyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMQfRruoUlQ0YuhTkHKtwDjl9mq9G8uJLotr8e0%2Bvow%2BpBltIfCKdp6cv6yyJyfmFnvPveDRWnTs3E6UACqTkmN%2F1osP875gU%2BxqlSOriVHnhgf5JTGcLDEMWq0GMNH0Q%2FVX3yLeIWsDNUtxDdOroDReSGd32z3Sp%2Fbk6yBv5%2FjalqkW%2FredH%2F1NDH5ExmzTyGgqAkbvE3CbDkLR8dF%2FFN2EOhLgY4BWBxIgt4tDJOrojShJ3HtKWgPzFWLw22QR2dVRG%2FP7PpNcIbcYogyjt8fVYNbcnonZlpPXBNU5Vcxd5GEUjNH7FBMbNqTVNq%2FVerFT3TBsvw5Co5vub5mv4U%2BYetFE2IpOyNe3Yid1OtYoHwqQmYUMzw0mlR4HT%2F%2Fl0Pd1M4C8iE6Y3DSTC9mZSrSTZAtKy7mNIUFge6snD29bIUV2ASueSrirZpW12a49tmqzt2cd5KusHvMKGGewz5bICiF%2B3S2XmzMnHTPmGobIZpDmhb%2BDBXfKs0Sr46uW1KfTLS%2FXK5k6QftqLui1kkkNN1vckY0rDDn8KI%2FsUMuNtbPysxhqLRF52t6FSrmM4OT%2B2OoKGv0SuaCBmp3xongqo5rxymWXub%2FM2PD8kSVOMMvSu3hBrnQAYZ%2F5jjjOYiKyPD145znPn%2FAugwhZLjwwY6pgGFymWgf78z0PbKE4wdJqjynl6%2F8crWGt03ZNmj%2BYAhMf25YifrFk4Ev8gw5y0T5H5Jnzb0Lx5JCcUoFwe%2FGXKrADu41Ol87jepNsvUUqePaWDBMureEI69mg2vrPCFeTO5SXNeDaZoS0h44J1Y34C2ApdJtItwAd96OyvrnHYgACXWhbOKnes3%2BOZNNoHghd5I0wpjePVoFpTT6o1leZhEmTX4N7jZ&X-Amz-Signature=e01ee5c0eb11be848984ad75a2ecc9d98f8f3de62c15e9ae8ab44c6669c0f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
