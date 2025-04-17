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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637TSELB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHapOuOJMrSdOfTRAnwWaklfH03%2FxkFlcqrg412D%2F0H0AiEA5DNtvmKTHMry2ROIxeW%2FJ8P4FYMsBNhMXwdM4APYvbsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIejSl2i27a3SmEcGircA%2BE%2BHzxCNbsG%2B6ji2CDGJzKbx4pFZrcf%2BpLP9mm9pHnDNziLmEEnXg1Hogs6By2Rv6MNdoZWH0YHn2%2B2a4aH0mt07yXC4Kz3Gyb1mvSlQdP7IyE3WB%2Bcml04WkkmbxEamnQPg%2BkexhpkxkJkfZZCJXnue%2FRgYR1Q19ZxPRUPMapMTj18b4T36f3TMXrst3F8D3LhtXqIBHyz3Mc%2B%2BjD2OoLZxlIHehnaorrw%2BdgtACwz0CCswEkPXxCuWLxP1uGfmaRHaZlr%2BuQfFbkmy7A%2ByQdWZjePVnzNShhDwRC21hd%2BwvI3JoF%2FeFjpvR7bGm2ZFEGAM76BolDOaMBKhErC%2FanQ6B1zjlsJMfPm0%2Bboe3DesCanhIIFayir61GPzLobcSZSDq4Xcd%2FdCE79dfwGAx8TLi1nhIpesFtxi33%2FeEZ3UenJ8YZWdOYsb2HfcQigNwiyT%2F1pKhe5ZqCFEEEGd2b%2BJqTuHmm9TI%2FTLX3ngbGBkcQl6oOSwpwj%2F%2Bs%2FmboSFBTqG21%2FtWS3ggHB5%2BkrIj1yB6SYIah2ZX1VSk0OfjGnzrr%2B%2B0GxG%2Bkj8IU5qDLM8e3MNxPhzarmxkTTXRU6la2HpJbbz%2FibreMDatcGOuGNsa8hYUcEfOSjQaV%2BMI%2FhgcAGOqUBrVao7NeMrt81S7kUvGV0evC2SaE2A19%2BhGmxC%2Bu2%2FO%2BKDMKChTpE0b4q80OvbHhSyhx0ifZ%2BCoGhke8VaCAbL9yiXfGWiUIfeg%2BmMfIsD27c7tVLLFfLNZN5BfAjHikPSFCWG9g%2Bi99U4uDA6uweoyRBMhzrJOnXIlONEpdGB%2FviQ4gJhAPu%2FthXtHeDxfrZkryDSPVQh3yVp%2B%2BNwp9bBVu9HrHD&X-Amz-Signature=c1646d2cbf1cdc5981c13c5e7ec594c4b4f4b8f7751b65d911069a6f7d23421d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
