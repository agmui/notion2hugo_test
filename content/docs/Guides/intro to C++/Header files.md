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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7OHXURI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIC3OBMvE024iW41H9o1DLxINBgCo4OuQLv6y8YLcu80jAiEAyZ%2BOSD4BeMd%2F%2FMfIEq6edujspc3OIG%2FFIhw0hNLHZBsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDH3AIyZyFBY7ecIkyCrcAxXdoMey%2BTA1R1pfsnMSpTOi%2BiTiFpSin%2BN7EBi1A3b8NZE9jE1FvvC6p%2FzybYwYw2W6EPA0dks3EXIJop4YkDGAOhQD8g0C4TPME34bf%2BMC8GJelHaM9ShiPMd5t4zahqzuvaSGv6mfhMrQs3cBVknBxTQZlbcrbX9Cd0vpctuR2%2BqNxINPf5dbYV9IxG3RCqQ2uEIpxNtflGjF92s6J4aFUSvGeULRUoRE0wZc1xm29NhAD3DgSt%2F3uuJoHr%2FGgrzaIfRAJbZynR38gAVP7iSwzO7CJOrVJC2HQ7qo6Sw9%2BQvuVuWSoydcD4si4QEVabw6G72pKPXBq28GqEim0bw2Cxu9mqpVlxu5BipRbx%2BFiyVwzvDDGi8D10B7f7DJtBRoljt0uE%2FiNVqunZ1MXm9U%2BMiB1o6cE6k96NWHKUauEnraqAZGq1daPY8DLBIEjvzXJfjpaaLcp%2BkCeJ56XjfyX5glz6SRHZDXb1ARXR3bAc0ff0EscbbvS3IdDJcnsEfId97zBbku6Ox3SSQCa2v773ZsHBcacCI3Bk1NPTPAAUDi41gXVk53uaDR5dBx77wq2QCMSbt9dLE%2B8Re%2BSG%2F0UDonvHzEfSsyOi5adUIDsmpk2GpftHpL38cEMMyEwb0GOqUBghm1PkYu6k2kNN0W3UYMedVSV2I9b1H9Vf4KDzbsp4X4awWFPt2RhRCEUlLXYK3HRfUzY0ExusK2vmpM3%2B6ktDLd3wm2QhPmM1kh%2FBz0nwRrMiuUdWMS87MDcCobNGffzmgGkzDg5GTecVnva5GDGog6SoIRKY%2FmYWFc528D1EV4Mwgus%2FLakT0cJ0bHnMeGwJw5%2FFOSYTPRjQUHJDt1SqGiJkAI&X-Amz-Signature=a9638a8910d55fefe74ce73526800e195a2a9ce2b8304a46f009f0dc7bac9878&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
