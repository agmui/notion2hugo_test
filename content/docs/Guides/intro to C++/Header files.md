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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C475LVS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAVNOquNXwQCTRiEcVn4zF7wK0uWN8Er%2B3HNYhX71fgQAiEA5j2aV1WdtU%2Bl2GaOqPs8BzCrsHthEMkT%2BlbDhv%2BksqEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6YYVwW6xYkiWYXhyrcA1WkeeG7Cs3kJGGjwqBV%2Ft%2Bpon4M%2FLXFkKtawLlGpoiPml%2BtJFtMU0S7YXOne2xsCo2uTuEtujuIsUbbXppVDJFl%2B4cP6SN3x2IJI8c5nY3ydlXFZ2D%2BXeE2NuWY995r83yLGy68SECthATp%2BtFMizV69SCvaFlStSbX6rpbKaR4cDYvc%2FRnZuTh1kFAlCvH6iFNVqpzZMp%2Fuu%2FfF8Llz6Lqdi%2FfYWKww1mZwk%2Flxl7DTIis0rrkY2IZCmMqHx1j%2B8zWsfeqmZQEM23FqQ7ZLB5FK4kNmX34W3jWlxANnE9wY2TaWyLOQ7FcBQkhpthesv1N6qkYofw1M8Jl2tMHyPxgA4hoRJV%2BkQQpnbadLx49tnKxISZJFlKscIS9Sq4D%2Fp97c73OfGYKIjZYqyzmT1OWu7jWhU9MF9kp1GChCSPT9VwYxJFpBWCtm%2B5llDzzfMsp4mSk4JEjRfFPsHvdw75393nvFr1xzNncWHm%2Bjb%2FCMSdoEhzbhCT3EOoYWg0o%2FwtZtAe0872GR6wnG1UQp9kWClbQ7ie7rAeA8HSMiQzR8Qe2wea2BQjaJuEr%2FKiAL4jQLDVatvaQZAiNi5nggvNw6mpYnjRDqKprAL23rwii6IcMPth4EB5XTuSeMNONjsEGOqUBbCX5dwCYBr1F%2BddS6ZDjsLe1uhDcZJu%2Be15r8Zc4Mem1TlmMwIoCNebIlZzZAdtxpCAY1X16S6gLb9PBH7Fp6PsdnJ6n5mLku9yC0YijU01MH22NRur0XQZ94mO1%2FlV6wYPSTWVCW7UqijKXCpvERGDkU8KRRz0H2eR9%2F%2FlzNoomXXf7cgQNaz2A1zE9W7w%2BuroUcG1hpcNtQCPv0pXeD%2BJHmCxl&X-Amz-Signature=da02eaeca895b6bd5ed87ae019d46ea4468d32f902b246b8e1aa4c38f3fc9260&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
