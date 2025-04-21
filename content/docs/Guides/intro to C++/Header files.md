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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURWBTF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDvCbld%2By7g0lIMh376RhzG3FYnFzhXueDJlw1b2A6QWQIgZKhUk89EP9IK2D6k%2B952bmUoqpFPNdVlVpoS3gdu1qcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKhnaqGCK1fC1g43CrcA7FVMUS4Jvat9%2FrctxasuZ%2Bi3J5ZO%2B8fHxZfTmoXM0rjBN4d50uDPVbk15fGriobox1zNrrGG%2BIAYFcrcyiI4amzETiZKjDScD8XZxzru2KvHMt5u4PMXXctMTxxRtMWvR4jfMW%2FqlnwhNfUuC93CVWrDaz0l%2FVYaZflM7xftmMQ4S1qG1K9IUhtiWa84UzhXh802TOFPbFrJbPuDwmzyIbYDEkv7ctHg3FMPlfbmYqbJuByowkaLStV7LCCIA8T3SEH6ejVHlEfU%2B0dSEnGNxk0P%2FNK8Xl%2BzIJr7adee2wYGC4QRNCVuMAgkEMhv95pstv95Aq%2BqPi24eNfDfGq7oxdsgl3jdzZPMb2UvhlZulwLx1Nkkzay8cMhRGhm%2FAvNpFeZFpOZvqJQoJAJ4zquybayg2%2FDPUs1%2Fj8erOR8CK1lvA7dlxx3nlXW4sY1j8oli2wgXz%2BoiwU19ZMFAHVpymhCV2LCk%2FI4mCcCnJi33H9LoQEbGFLzfAEgoNUcN%2F88jz%2FYbgjOnxkoby5BZMdHab48qr5J6KKyIIl2dmJCWtDzVfalcnq0%2BrBEgwIbkeNb2apVXlqGATSKD7D%2Fk3b2V1zHeATh4YITDr8OBNG6OnhW%2Fxopw4SYdqDdZOTMP%2BImMAGOqUBF3SylLGvmnhBzYA8awZwJVAnYCLClbSwOGrFfKl%2FUW%2BuuWgki%2F3DxoeaQYpzMpn2j1hjg5L0Bz7iLocKnJAFDsnww1msuft799Tvis3Ocx42q30cRWfUN%2F%2BEFRHSBpwif1zhqo2aEsI0tCVwX0OITMH362R5dobPN392ZsV7sCiSYTsl47fJfPQk5PuKmfJDjRNyL2cehAu5IBVsNRPI7iGy2ASa&X-Amz-Signature=03511c18553e098bd1efedabb652219463e09bff76704600a4cfa73e767bca6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
