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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4K3XW2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgu%2BuD04GhkXBAYJuf%2BKqMEiNyLZWh%2FLqu6SCbFojegQIgbQ1XMNhBYbUpV%2Fj%2FpMF1nAVsnMyVZndb8kAdoHmiSc8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE%2FY7or9IR72WLNUQircAybBy6bOABk9e9kwSDf43QReoHES3FSp7XZJcPJ8Hrp4kAuZn8VCMijFfN2g%2BJqUwzSXikYw4ZhjM%2FB9VI2yT7Zl33PbvyPWkNvIho91Tw%2BprmKH4GOHPiu%2F6YrIDDNNV%2BplexSwFS6HmpA9kplOThUCDDj0qwwafNh6wuOOpN0Nc8coTZ%2FUVlZV2VN9FV8LEQxAiofx9WFcctxBDegL8U7pzKtVeowccuNUVW6eJHHKp48pmTtdfQ2iwGZQIGRWGNhy8LRt5fA82Tc%2BOP%2BcyI4mVegatZj4Ag208idiB64K7jTHGRS7c6ud8CanzJqsBRW81qn1aMfbBp0rX4mDpreAlN%2F6eK6np0JvareE8ZNw3ekFOdq%2BQi83XNIIcIdz7Mq4py%2BwHW98okEj9yOysw44vTqZloBrAd2AFGUEZs3EIRxoO6RqlwskXKm9%2FbPu4waBBlHuzP3ziSBVyYfC3cb3JmX28iftL5dxPf7T3sQVdGbSXrvy3%2Fi1uCu2C%2BhO66VgZOgxIIVt4CpEwAGy1DTeoVuWVRL7itEEtW801Q%2FBsxVWispMfrCm%2Bu6Y0fDa2RNLnF%2BMECz6nqLPekGqDB0clLKHMFCWbeFU%2BT58%2BO40a8CPMUcbPmhDoPLWMJKZi8AGOqUBhSHe4PUPAWNbQF8I%2FTLNDsxt64Fc2BhFUreZ11Xd07CaLlop2WI%2FCinvU9RmSCESt5a%2FRouuVPQ0%2Bl7lgCUwkNj9CzbisGw2ht9dW030Is72UXMrdRCMJbo234%2BkqduZA9LqgzFxav%2FFlJ1k3li%2BDHGYKmHm5VnQS23U2tCt00o26Bxvvku8oDbpfdgsFA2PWxJbH41pH3jCGmzPGU%2BUUlie7gXs&X-Amz-Signature=0d4127155c4854629429ad567ad40e528de44a85297e2b7c0b4f64867e5b2fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
