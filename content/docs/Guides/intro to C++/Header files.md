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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNGF5FU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTRRrY78yPHXaqyHkRcL%2FVRtsKEc7IuTolMRx63m9uVgIhAOhC1Ue5NRgmgeORA50BOQQWmayq1hMgoZoD0Pxxe1T3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiVk8uDgjyHkL6l3Uq3AOsJf2o%2Bn3b6EH7%2BzxY0%2FUC23H5hnLxkyZVVndWMSTiLLAHQaE9WvdBeff2kYdOV0xxo8dDRuRgIO1N5eRxOY2WswHR1%2BmYjUS4LEgpTDgs9S9ZX9gztbek9xHBZTo2FFPR%2BPeQrdK0WfTNk%2F%2BeZLuYdAlDjuNgiWLJ3srtN%2FOZh0a5QLyPyzfAbKqujf0G53ZpqBp3XiM1RHybk%2F2hhAfKRehRVl%2BTgCwOtm0TA4WmjtqEWFJ4wDpFmv56UF4AtaItAvopVOO9dzOTB58toy4EiIB%2F8Y8vBX6WoTyHeOIZRv0GEq17%2FtrrrFTwhf7R2rK7011k5HE%2BnmWglJdp%2FX3VypCVQG9LvXMv8qS%2BeGvF3bLaNaz%2Bu7xWcjGATiLE4o14s3lkx2GLZ3r5nwf7pcV%2Flyr8z%2FZVoCgiuTrN4FnGgPLdibJEEA2%2F19QS1EZYsC%2FGI0XiIJ46ryMXIDCigZVwQKyk1TcBmb%2BkhtYecJJYLoN5MVRUppJa2qwHI5F4bqm2WpsQP2GEpwgLo%2BF2Om39FA%2FMo29f91ppPGBYuNsF%2BHbIKI%2BCnF1cRBIkLpQrdYJUms4ITYD94FS9Im8mCfj2fgnZLRfEVJc7CQ49OLgQVlQtllJ%2FMB7PYN8m2jD%2F8efEBjqkAZ0X7h58urbGXPNAGuVLM%2BjBdcpQ6PXVPTO5P1CiRZjGYLVKkRcljWLPrbPQ6Zi0MU4g2U4bi5sRInO2aFjZdV9cfXwy%2BYd8pzWd8zKRGTbzGkFW6k%2BUBImW%2FK2Qh3IbLHpf5%2BCpMwWFyVMTzl%2BU9Imw3JKyEVO2YQmyqWDGHv%2BPcEd4AR%2BgNuI%2BiU8HxVM3gD3LU7XWGrmsHzYHHOllD1RyNgmW&X-Amz-Signature=8e6be69731f87641d6e37270eb05b614fe6529bec60fd273e8d4e18b2964daa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
