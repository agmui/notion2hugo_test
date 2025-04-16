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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKGLEP5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnjwMOv%2Bz1hjszuSmyrBmniyHO2XSUrK45EHMKCAXm7gIgbxMXTWjqcqjyQIUlaPnh7RADoyrk0fxmhsHSzmfAcWAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLTQI73mbUVvUrWD2ircA9tYuasDykp8LN6M2u61uEoAwTjmauKHr%2B9fTDarbhzr1JmAtUpDBKjDcUC94khYEkgctcV9uQiDIdZuQOGQNRTzKSqay0jNDMAr8HG4Q6yjcRZL9npFVsnh8R8eSeUPNjHCD9PvH1GHiv13RlvFPDdNJJsOH1RSi1JTbMqJ7lWh0bkkce1qP4M%2B%2Fc37WgN9dJ90xigv0DAEu2OtZx3HPuZnQh7Pjv0D8t2QNDPpg0ANtN4%2BuX5Rkf7ORIChaqo0%2F3w91kb1wuQl1AFs3Nzx2R4ad8j%2FF50BbjjxiCjBP%2B2XVC%2BpJ2vDx9I8BtUalcsdHLVabweSa37vTdyOXd8kh09FqGqt1QDIoUoSSB0WcgZAjsXvg0KjmLzwI0Bvj23QXKUbfHuHbcR6jwM4EwboByj%2FPVzIbpmylh0qfwU7ifoxPO1whYIiBZd9aFZMtTScenQO7T2tOm%2Fm6eH%2BGthicUPm75uEJD2o%2FtOJm1ZsROjA4ySWsooAZQmykZzc6%2Bk7ZqpQNfW%2FdPduRHXgE6hYZaIudny6U2vVtQi0tO1izRicLeXB4LKFoF3AEAmAoKsoVBGUnDuMMQF9epybL3Uc4BPFfcLLgo3jt3lLAVhfeJ0YsUiv87cMEKyG%2Fa1UMJSP%2Fr8GOqUBI2RqRorVOKJpSqahdx40AZ69N41HriPOhRMcYBb8Q3GYlcOJyTsLXKNu34waVbUIfx9yORV5TMOV7YV57TbDa2J2j8z7os19R%2FtaX94ddVj0B8kgtpwJss7ma4aoQMB4GapLeEKSHsfPB4vr%2FOztIBzfT3RhHyrQAbc%2B7GJK0ZjY8rAqvBsnhu1XjHN%2B%2FAyhx1VnZnNUvYgnH1RZwFowdejTe9th&X-Amz-Signature=08f8cfc4792dde8097e3083eaeb17c9d8e8206e3e5e2926023a50cf058dec53b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
