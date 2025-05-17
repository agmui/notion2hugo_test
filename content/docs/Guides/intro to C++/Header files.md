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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZT2VKG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTB5cHx7jLEiMFH083fzfiF56RHPR9vu9dpKiegsWEnAIgScwOnQU10g1sqD0a6uINq190Aw9rGt25K37SKL7viTQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFTl9lYcsh0TGXPKOyrcAzPO9vmDeW9IbAQ9CroT5A9cBFrlCvCYtwYxzIYLxdUsDiNwQzFiIpGJPnQy%2FAQPue%2F52Ga%2Bt3biT7SPbSgr5Y%2B2hiLLbFE4IYNWbxFUaAhA4xYznj1J7231oKCCkehMRhuXzNqP%2FEMC9dixl7%2FqNXIITDHuJMTB9wPFcErrRO5laFxoC6l22A61rciZL2CP57HBoZ6B3oMmqu%2FDzvD6EMeLsSGUyRObpFMq%2BFdbF5uHN9UgRRNJsrAY628h5h88FilcRRvaIy1PSsx8Po7Ke%2B1OCa6L%2BMQKw3ejE%2BeKdMKhcGj3Z%2Bjjrvwyq9a215rWr5vWkEEetQKM7OKEZP79%2Bd6HjC1YJaT5lBxyqyTc%2BcBUU%2BNmKUwu7TP4WxdIZVpcys%2F94WrWR9LSux84hEE3aPQ5dOBp043uaeKsGl8ErE3kTI8yDioCKsbkbjpy7xb%2BylUSmw5dGBiUyfp6PDjUNNvKQa4jdWj7aLlTA0qaJ%2FLcUYCenZQrSXo1uRZnwLw%2FP87mPcpJF7qycbMgHgroyQJB%2BwrsUKkx1v0vh8BU%2Fpj2gE1UNZ5unEriQ7h22PNasvBZhWOzPt96H1RY2gCd3G%2BvNczvf24lMRj6uPzVl5dMWDp7KjZ7PS4mfaPBMOS8ocEGOqUBnyPaEAXkIZwERDyNvM4NENElnKPJGP2f2vlPCQDr9wZReNSUGh5IETxlBgRNlmBOrRx%2BWp8YY0oE2GuMxRMLgMHIn%2BTH46rkmaRm10BkP1EGQmtVGi0ymvEJJsWEnPSSxxkSeqe%2BoNDLV0GB%2BzNQNrstDkT6d0cT8WILj39z93omVyTOQwfC7qI%2FerdLTxDd7MYPIByHnKMnufIxnXXVYAbqDah6&X-Amz-Signature=cac16c89c22e9d39e698442507e6fd73b7a35cb20c5661386c3e59b5b45164f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
