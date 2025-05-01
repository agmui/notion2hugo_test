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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUIW33R%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDvEuvSShc1TPf3XzcIB%2Bb6StqG084dEtQ4W6ITAzzaQwIhAI63qIBuoITH6lXdvcfzBhjOkHXG743fJ7bilA%2FKhcRfKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ9EufforeqUMMT6cq3APhOax76zmQ7qDAgy%2Fa4v88SMRcJ14rKm9QFjdeT6zUI7WP0ByBLS6fks3IodXyPdEzIgB4eB9Yl5UgZ8qOX0eR43UDXJ64luU65uRIVMFBF3iZpBkwkj36WHTtJBk1ASF6yoJlBGjVRH5io%2B9WImeAJvJKRc%2B37N23ADfeeqH1QmYI08u%2FdesatLGxu%2BBF8Za1KqeizvF4inOo%2B3edevox%2BB8y3LwaGuhU7lgPDaNtxB%2FxDmjHCQwujFrNFdEJSKr%2Ff2DSzVZ6vMzSHWtR0aYnidzKCkgVn%2F6EtSM6anROLop8Bk1kYL6Ril8OalA3ArI6Rk2QIX1K%2FmXhQLkb6K9IPLiXF5Jv0q%2FDy%2FUrGO6cLMgIH%2Fr1hrTCa2valahjOwiS8N%2Bj2deLtPIO71t1nKt0kwojOQJ7mbujcgnxA6AY%2BsUc4xdsKx4gmq5Ln1gBidudL4sn9IGxNeSBabYYP4YP1AhWme7X2UY1gAHTRVxPy7VL64Tcpb9DMwhKAFpTPE8%2BppN9yitHa1AXTFFmt9RAL55RzayDPa9TWg%2FcIgwDioIFx%2FAd7dGrm%2BpMSv12eQnnuyk9O4lAblh6PeeVpMIoMF1A8BQGMIHfhzYfV3jxzRUyGCOp6krx2lwl0jDzyM3ABjqkAYY0i3Waqx52J%2BL1NpxVucNUasLmu2PvGNkp7GlCG75lWKutINGfiVfQ7tj21FkfaUE16TlW5TSmQLMC3kETicZGnwuraJHrLLiGInyBdaqDQswX7664Y3XygQNK056nhEeldj%2BkHPyQjs7ckcqHiMIyVTqKnNHR3Lj86ioAysSC%2FGcZEjq2BKm63EOTGjTyszzE0eORnkabfdWT1x5J%2FTL18dxd&X-Amz-Signature=20d78a484617a8f2b48c2d614ce825128d23c32679dfea5ad017dbcd16453bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
