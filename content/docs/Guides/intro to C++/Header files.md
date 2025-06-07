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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z2ILPX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCieL0ce4N7B2rZqczmxm%2FAu4QLZnv0jBzOghcis7LQGQIgBKasCeJcMyV36Rg%2BsLPAe4er4SUrUad246pREqJcSwgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGvUYZwKQ6MQvk9DpircA5560u1pksKPGKgkwZPksh3pntSOhJLEMFx8cgbp0S60NCCu4w5BCrBw414t82KKYcZZk8DbyNs3hYEZxJ1lAT%2B7S2UPc36nOImVyCGH2cXeX47PUfH4k5%2FOozEDn8jxgWl6l%2BJHge5bIWLVn6v4Cq9dtt%2F6x38ACH85eoM9Xag4JwLgp0dMKtwNgD3Joew3oFlOQqlnVrEocQpW%2Bp%2F1dbrCn%2FUxBEx8ov9eZq5ixUz1p4a18p9SZ%2BuKtfzXROwCdk33CfV7FxzwaHrvr%2B5PQTEccOeEIqwsDATLpkTMyRZ6uqYuqmzTFcLUtjbnwPhoAdBiCjXH6DwLJ1M1I4Uv4ppMcLGiQrrwCMZnUDiqXhDP6nIgkB06JPfv2R%2BtaxSRUjPm3yvOfwpLB6iYFNDnA8RPiKwZSCQYovbHvFfTiB9fmV3Cpt8U89adpMc7bM92fpXI2iCsCwkyMd02lrqZe%2FeE%2BKlKNaSlgQFFDfeQaz%2FHxqKT8De0pxQ0rJAqA2l4xmag0i3sT4uy9RGkqdLDi50KEJQIDjyRq9hH7a8Z%2BHBn2ZPmsHeyErdjQ9PbuqxSagafGDsIq92q5CNOa8giNxhgkANSgkbnTTorYkpFS4nuoRLstSlAOyHt736jMOTAjsIGOqUBQmXRy2uz%2BWvisBnvkcKUE5UGTulwzdaESSnMmpZXbv7OS3AU80%2BybO%2FkmCeYB%2Bgfz6NAh1ybEOKHrgwnZD%2FdTvzFeIP6Zno6LKlu%2F0LhaV4Rn%2FISLCqJcE4ZNfXTWJ025rmC%2FL4nCJ1SARuwPUWjOi3ysJBd1F3pjRYz1ps5m29xZYkqz4DLoh8u7Okb6oIHjuHW%2B1TMV%2F0GzMOzAJ63yoY6roa4&X-Amz-Signature=1214b308a70067860c59393b10b241b98e795a8b8bb523cceae92d7ebf532734&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
