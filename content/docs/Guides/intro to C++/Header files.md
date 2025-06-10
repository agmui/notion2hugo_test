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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURHUPYD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF4lJbSUygctsl4piEY88O9FoZ5TU8MyWyCpRgBlPRgAiEAut5TI497YEZHoCaMAsynvQK1gyB2DpQf9FjAIFCITDQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2XM6K4dDqgnoVn%2BCrcA8n%2BGfsa8lsupngcOzxyCZRfieycKN79DXAnIlSqQ7mTvSbRYPFh%2B8IyBJk0f4z8S%2FrG1gmuxWkKQkNVn%2FTe63gbIDHPRhWlxyEd%2BdFnySulSusVltv7cdcO6T4lrPPAdGn19rDECAsoZOVlTOn5wTmKA6Cc0dqIwXW82rQSyhjGMz%2FE%2FLd5al8tamn5O%2FLMfMJIMx%2BGv%2B7AkmVYn6c%2F9%2FnlP7bSwYNaZv5cUltYvEbnuCAp3m2UIwyVc7WO44IWvSn0uiNVG9Z40L9yyXagNaYEopeAcw7t0I5KOQhGqp%2B4jhGiyhSmT44zMlLhSV4Ss2yxU1O%2BtLsqU1T2BVRBjlSpVakU4y2NORDzdObdhNw1So%2BTiOxoWARwyS5N3N%2FWBBlhRDBM0MAC824ziHWo4XEOsGCzZhZH4Af%2BoIPfqa5dzPC1CgWvkm8fIrHoPT0J2EaENc%2FnmFIS5zMGE19s3XyZPLq4mXShInwi5IpFe2COeeKHHnvLZenVJG5hvNR7oeFekCN0r%2Fs8ecF7MtcAVdyfWo1smq%2BIPMf7LPRbi9BXd3QSKjXHZPFStbgnSdwlL1MAsPjNAOTPmiK6U7ROZ5xSbtQd0JK1%2FExlDNV1F%2FmSx1kZACmlEm682Gq9MK6zosIGOqUBoXFa0ftBbd2xFoUwUbXZuhXR5%2BplCuJT5gpK%2B2WB9NuKUHFcSGsAW%2BEj8LZfE%2F1pymgtZuGaFQxk5s8OtpDknTm1BzFmIGEZX9LDzTPDSAFv8JytVncavfEhwb6FQSyb2BQiFAkkQ%2B2rcpEM%2BLDYZdaLn6lr5Nn9JXVMxyM%2B0VpUz6xttrZHQ8iY409Pu%2Fm7YwsMhIzP26EHgj4ZbgsbvBQ4Umv2&X-Amz-Signature=fbdbbd775be65d37ad0c33196cb5e3bb4559dce94d12f9160552e2163992db44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
