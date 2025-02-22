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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKLZAHM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsW7U0uxSzoU8mmMt9Ae%2BAEfMpVZL1BO%2FXzAXk3X%2FEBAiEAsJVQMkRBVZ7IaQVAXx%2Bnu6%2BbL2UdNKFbZsek8gWeMKEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbNLidL2KoO2bjhISrcAzf0HBosyHaEZdspW%2BnCCBXVN37JEd2N6xdwZ%2F5QTjEM9Chs9JjPKIja24iED6DSx773A5189a5GIGbjBW%2Br2r0EI3m1Z4Ib5h9BLQ52aeFEElEl%2BtT8zH%2B8tSNsoU%2BOXNcOTYzQ8VXM7aHH4jPN1ZrF4aJNdXkJRW3mH1oMOUsONJ4%2BUfUK2TOJOy%2BNnns8yiBYo7q%2BN2otTA9i5Wccw8nM9Y8FXbg2On%2FAQQDR%2BAc1sqBC2q71AQ%2FWyuyg5Kc%2BaxHieOcUus5Y3T%2FkbeIJEO72QgINxixvtpVkyN6BmxZWangNEh3xKzPTCVvfEmDRjFCD6x9GR1y%2BLrmpKWJqz0RZVJI85l7U6YmRhKcliAa8y1s6%2F%2BFBVB2MKNlsd54FsAEER%2FveH56Q7g8EbyMu0IUum2pi%2FV3PyLjJiYKw8YD4dM2ecMmknbxZuiXoy1eegGXVY4dQO0kIvzJ79N3YyuAunFH%2BySVBUng9ZS9DTepgKgeLPkKUAii3tkFCzGZ4AZKHv1MCpaM%2Fohn%2FgEDsIt5pxpQscmPqB3nV7Z6HiksdvmtyJfXyvxzsmL7H1uDrCEmrvoSbSEtjphMSZyftwfSz7%2FovItyoP5NQeMAD3Yi0xwfM2MIFQW049M%2FLMK3p5r0GOqUBWBFuwgoe77ENMFApN3EY00YVpeMck4cePWZsrFQZulkzJW0frp98kmBbVXS1PASUpHzxiA%2BL%2FMK%2F8RLfFXriZzuIaR1L9YAhpPAf7SouZ4IVJzQrThmfNdyJX%2FTE6Dgy9lsrUC3Q4b4q1u6X2NEHdCLBSKAk9uNPP3gvUXGXTMisH0eWJ%2FzRCcSkgCW0%2BxHavpFrONTl%2FzLQKzeIUCy8M4GvOvJj&X-Amz-Signature=c4166b5ab911d75f0608f4e993b46cd11c172252350f3cf589dc0c91c11f6a22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
