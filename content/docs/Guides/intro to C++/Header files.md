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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWL25GP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BvlwWNEF6A48dpJRBeXgagC3szakncCpxMy7uYcx4AIgBwkarui01PHJvkPOyUwDjdv%2FBgHSy4b9KZQ3Uqi9aesqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHB3xgNArbM%2FGMspyrcA0gZYQkDO2BjseVVk2XKWxiI7ZBLLICmg3LP15CUVTB68k6zgMYYWLvb602fFFmOKhGpUB1ikSnBe1JSuh7461DMJ5Hc0tHT14j5rHwL3UwVg2uk7N2XKI2CaMaMv%2FB01MlaOqWALlh3Xpsi91UhQofS%2F%2FM%2B3QvMt8JvPKbxzWhuuPWygmJMAMtcd7Om2oekKEomXkfsADqgRzqKscpJIMKRGsR45KuAGlP29ztxDWoo1TngujX8g8OklCey4emp0L9uLt7Um6G609HbgMmoi7M2%2FcSEGpmGGr%2By202Z8LapneU%2FLCLPm0PMegxEIcPg7zgWoQSO7a4nyc1YoKJn9XiznXFXxFjUKOfGZXowGOzHY1l9ifUg7S%2BzvcbgFjjxPoyEsQDi3otRw0a4b1YZpt6Fwk%2Bp6%2Be8UL02llj%2Bb4I%2BbIXMWPQ78uqtNXqMJpbFsBeqhm2umcXSUyXtLXjV6qZqcAvlU%2FGyLmE9MD5WSbrTDKFekBRAzRlkSw1t%2BilkyZSIsgl%2FyMde4JW5DOFoWsBj%2FTM6rezjMtid3%2BJSC8tic%2BfEDdg%2FpF2%2FWJ6tTnLEldQ2Rr9lfZXdq57e3u7cBuK4KgQyB5fZZx%2BgF25zgpggORzQYdkloMAw%2Fr7KMMXrucMGOqUBEMxhftaVVFmvCZZe1ZaihhbHytfQr3PWhMt6AQJ39QgSdtqRQ%2F4RbkRBpU1k%2BBX72UKxdAE%2FzXXRk9RQiFe4vuIENxC%2BVjbH7Y6cQOhg%2Fw25eyQfoFpjUBoTS9pmGC%2BxMNiPiFs9e4XjVmAS3Er4HwLW3Sjbu1FWLhoBJQXz1r8hm9S2%2FSFjRr0oB6d2YJkrFbaN5JnkWqMilmfWZncCv2BNgogC&X-Amz-Signature=852f630193f8d9fcf81324b915b04c88462e3cb3d76c6676208ad0a3e1e9c8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
