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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LWRSFC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrwKupT4D2vcGsSxB%2FFYB66Plni0is3UfK%2BO2fBDsFWAiEAwQTcwhU9AjF94YGaW%2Bu0MBGDOKMWWZ1AKczf4JndRLkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaiCvocMXDPDutMWCrcA9qut9ZqV9H0hUM%2Bsvwae9b93TjlBD%2FYyZfjaCDTLP%2Bzo0%2FpJ4yyjGqAwLV1qhdVMQJKylNenO0NQhxrzZNDpYkL4SFiR3Yv5X5gy1PyqOcnVhrM53d5OAP4FHSlRmVnMLys2%2FCGlJw1VdYt8sVLxLWXziSeaAW5%2F7Cf8R%2B9Q1x8Hod%2B1e9zfquPSa8WUWYV4O%2FpkhKvmJPQIQOfw9XMwHCnXybrIblyPaKpRTYhZsNvPKAzgP6itoLG1YL1XVWdeLBfbYuimQZ2zxNl2JENKpNSyCQGhCFkuliKy44GCV0xTXr0eKJOje59bxdDLB7I1gha%2Bu4k%2BnmiXzclrW5t3nKr4fmLks7uRpMW%2BGOy3TO0O2GeCPNRJAFArnK0b67CBX84flkEqwGsVxwiseeFRV9pxFM%2Bmq%2BUyxLHbaDqEXmDAlGxLQiwtlpT3ud4lXRD5B1LMO8Z9%2FfefkJeEWW%2BzXUwjHohLVm5TaGAUjwe6DInj19g5L9tIA%2FgWozIGCgF%2BRECM2Ne6HUOfq%2BdjqCp3H2gxz0gi3HLXEgq2o7iOhbTnqSKNS96kWlsPNbq27aCG754BJ75WcS1Z7YKq4RjNce9nS5EkZt98a7O0EaHJijQxai0sAlkaYFgQm6dMIGX6cEGOqUBO5UVN8P1zyJRaP2SNT%2FC9MEELgjEA%2FVN044IXl80rj6vIH%2BKVrDjYNYOpEsbIIoJxjj5ZPTookYxEyuzpd%2BIc7yxMHhc8VBD9KAEH%2BeLhMu77KcvqfL9h0P6jh0d0XmR4ZKaSWMxqZpQrv4z%2BWoebZ4p6H9wlq5ONjHmXcGUs%2Bm43GyH4rmvU%2FC5CBB1qJL5qT9RwuTZZTe%2FHgSZCRHxCUiXDalK&X-Amz-Signature=b7abf4a115debc11bcc8c2dac2a1c12712c182506b7ab77f5c79be51127eb579&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
