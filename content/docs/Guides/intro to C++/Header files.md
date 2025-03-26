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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWV2JHIM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ4wBtYj0azOsqPK7Va%2BMBesyA6K9wcdvFkGscdiETDAIgHqOZfw0ec2qv8%2FOYerwGzSTKJhRUrYS7kcLqINLxvnoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCq3ScVfM30CKfF5FSrcA%2FgquNYVwTiWBFiMQeZXfxEYs4s8QoSYnN6P5vXc87SSsVHc%2B8sgjfLkHCv33Zkq34724mtxyEgI686DE%2FPC3WVZ57yFXHgA0mrwAOsViIZZwXqZeT%2FsHzmxq39mAHdm%2BkdJMxMVjWbLX5nXBoH9UR1duDMbQx%2Fgyw6T7ImdGyLpQWObgUgHTDlb8IcL%2Fnm6GTZ8yp93ZSwhnj3k9as%2BZ3g9D70TshiQw%2ByFW%2FE%2FIsO24lxWp2WQp%2Ba7CvyGrTHP96eETBhc7bYoU62I2%2Bv8O2XdZ3I3nRcB%2FifyJmj0boqPO6OgIBGn%2B6dU1F%2B1dHC3lKEbXf4hAlwkyvYuO7Fr8RMK4fmnDohm6PebatS0xdjX11rgdeZZrGBW%2Btmi4VX3uchYadn2%2BRwKv%2F506%2B69RKvf2xx159MXj8lkSw6SBHeHMEMvxFwKIj77faU3ZotVKzZflv8cviE1%2BtSnlj3ayUlmRg8m4jkJJuhyINNCtR2kkfiurIA7bdm8LQNYBo1yOTJ7u9vu13C0TdRUsVCeLalWPaJhGFZyFuSyPPKXVeN7WQXQFVK1%2FDvbwIiKLThH5sYGmgnh4O5rTD3DA0NkIln31shDrMHbixKJPqdIOAqYHjuG1Fy9Tc125JOfMMyKj78GOqUBoVJupDhmNNngvATHfGgE87TRH7ZsykkzwTjLdNUhTRsblb8KV1uUSUW4QL1LUWkUSIR1Qr1Wl9d24j5MTyCXvYYKI2V7Siqqv77SKmCpv%2B9IsDs3ZgSCmFJngRZt%2BgoPW2N4FdGq0C81Q9%2BWgGAUQdghCmwKJX5xg87IXZvElJP2s9LuZ88ASIBXJi%2F%2Bdn7t7DjcgDpKcEaXDgtOW1wR7chvTz5T&X-Amz-Signature=fcbf1734f918694883e8b954ad05436cf02cefe612e4087f18cc9c8019a4e060&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
