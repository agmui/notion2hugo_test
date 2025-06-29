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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6VYB4E%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoNmq4W0cumTr8D%2BwusHjgVE4C4148vQep2SbOYNmFcAiEAsZLTSTgOUZofhOMNr3sTKmz7z%2BYtxW8bpwjJxd2FjEwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6YckCHOhsh1EwmbCrcA%2BdZt4%2BpD02GNh%2BKJ8pBhffeIg4KJb11yUWe%2FjDcFZ13DAErrS3Ii7LM2%2Flj3BkmFHYouj8gja9mNkKtJ87azg7UocoZwgtUitSLGU3zD4mToWO3zJHshuSTK%2FBZNtsiUHPNLONOsy6rNOYhiX8I29pkvKNRcV3AdVLl3%2B3wsQmoJaPIYcfhNFrXJnRn3wpv2XxkVhwsABB0SrZtzX1ZhHiU649fis7cSxeToYy5fmKPIJdaiA8JhALNz%2BR%2FxYw%2BKazCQ5Fy83ne1MLo1ckcVG44H36iQKzaxyrzHQFER43Dqdr0veppD07uoVc%2BRjfecs8UMUvmwpT9cHeww2sTKEjnUAahmNSaqTwCQP9O1U4MKacRc7E9ymPC4k6Ob5%2BbvlvxoCGw4n923qP0m%2BJZUzrhKYAv6rG2RxMq64IIVFHJPM2KYSYw38REMuXVPtO7Y4fLygMqVGb%2F2Ua%2Fgqc5AuaiYCu6rZwPZdURr%2BGOjHzLD5TxbaduuavUmSHBM9RIqWssbkTVxYDtuYmQ2O5hwOhNoyQmtYnnHzDKgEv5t6JCROhIylYlNxxyJoLizL%2FKin2cJXpGBNdmRuEwsG5IXOv6r0C5Yf7aLhHM4f2kKDuPC2SrJGA30SpoF5bsMLqXgsMGOqUBKHfco0WLLeCICxcYFlJj7L4Au%2F1JFjGUjnZyDZE2W2l%2BFYJB9nwSpv0RvVcFr2CkbdyCX9fQNQc11sPvqri4%2BMBZP4yjKq9aJcxT6NgTzt0ypOt88T%2BFrkZ%2Btsw8%2BsvbfaL3khZaPy3PaJ6z61yDq2SbsYj17ZnFNe%2FWMtF4phrVwpOJOTAGjERoXrYCNaj%2F7cUsb%2FeYJLsBd3ViJ09hoFkBZK6P&X-Amz-Signature=e5ce408d6d195a53af734c1fa35f289530ed890d4880161c25d5637160fda0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
