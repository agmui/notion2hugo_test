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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2VAVCZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1QVOtLOuy0L4RM4kIVvGMYmtJU37vSSjJbw7hCyUl%2FgIhAN5HICvF60G1xN%2FSyadgKjlhq5M5hYJWelX9kYHuur7fKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzfoeM5S1bicAlUdEq3ANgJ6FBfQorDqNDCYdHYzY2OtpinU%2Bqh7YWVOTHSscEQKnTeXL17I5371U87GdHlYMbdXnPfQjlZuNlJPV8%2Fp9MNPSww2hWNDu7BU5%2FFDfc0EQwFGuGOhnl1EysZ2sW199dskHU4wDoSPCwBeOvEeQME7j36LG%2BoSmIb82%2BBcuDjknWyJozphl3FcouoXYGEVmvxmEqPgUmLq287YwxtAN9L3h3%2B4wPQT7hku3JqJqLCjTnRqeiIOof%2Bs%2Br6yGWo7C%2Be2Kv6fnmLTSVvMCF3beaF3P4HuCOyWFCdPyY7xFDXeXmaRwV7OPJ%2FAotSeUDoOp1A7zyrhfjTMUgQx2yK5P8ICa3Zj5OnIgWJ53BR7i3jRg7M8PyreEsAHSypxl7QXyH5gdN3WfCyToDElbyFkiKkpODMA2qmYbI2YSp0%2FE%2BMc%2BvyJYpP%2FrpnEs%2BWkiM9fSwLjxlLiDCYuCRWnQfJ5wNld1nL%2BGoX6AhYBbaYsLnVCjj6Yn1iCV0oTnauGXUaYhQGTcIy%2BjvDvMiKp9pNbV8IpHWKrF9sMeIXTdr6U20qfGmVZCXlZ6htf3gL3pK9ifNyprZH29dRYoyNQjCw9lMA9l6FtgsS61xVB1tmrD%2F%2FkW6U9hkiu7c64uqIjCFpve8BjqkARTaL3p4VRmoNDuoQwrp5nzKJDYmmmPupgxxu7b%2FjUtyzQ2q4qUcXW1iZhZMWcjihTK5YQOfqrB1skhLbtOz7XEX62PwAfXuv246fnHuBxMkTINRWLdhHFBpp1jBKR4klytyr0tHGAQw%2Ffh%2FpJlWAXr5o9yTQXFLvUHNTo4BVSgSO%2B2nDLaAwR0JWtM2409aWO90H5ADE8H2NAmdFTvi2phR5gul&X-Amz-Signature=6291e42ac03c40c38cd656db0bb09a378d572815bc7d59882cbad1944720347c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
