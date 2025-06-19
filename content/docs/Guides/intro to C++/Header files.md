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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUPK4PF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoYiaaZpeVt%2BF58wX%2FA2Hyq6Fvb0fdyFB9GoTLTfUNDAiEAsV7yCU6r4fuHTzl7EA6917vhmSEkOJg8OdFc8lWghfYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoicbAiRkQjs%2BM%2FZyrcA83zeaqp0jZlC1NMLQjveHvkpRmdq33onTgYPiEU1BlI48tU6X9evh%2FFySrdo4Pu4gzBTZSvNbsQ9AiXlPRljZxd%2Bqbk9Em8j%2BNuHAilQT56hwaZ35w4qhB5%2BtHsMH3pbIFX6B4HX1wYj%2FAzFdrI53jXTVSTi8H%2FXvbY2q6cftSwUS60PYw4tf3mIo%2FKaZibspLi%2FdWs%2FZamc9KiPVDTo3zUCrdOqi%2BTxitVeNPSbYEM6s%2FuT19mibzJ93UqHVGr4XD%2BD4%2F8cylY6BmlS%2BwzbJhxyMY8bLTvQGFvAd9G2y2x0Lq4mMDsXDG%2BRAu%2B%2BsIa3nTUStrD%2FIlZ1DJCT0P4a3Vs0ie2QQO38J8YSbVObE6xUOfu3BfVLAL33FyozbeOPrQxV4wWDBiyl1zDfckTczPC4F%2FyIj2TR0VKeHeXBzwmAxfNjyoOv9MLyu6v6WePQrLTc3tXBXIizSJ5tWkwHxdpD6PJTTSAd3EuTlyQwZEEIBK5guDNoUssAg%2BKrGsd5HcWoW5H9vvRelKBEuqeXXMowH4D7ROutquY2jWBfZ%2FWafXl%2BTQVvd1VW7TMKJ8FgpMkFuUE0soUdim%2BFyjs4ezrCX2SvHV0UY1phWhIE3DxqdGwXDj8P1oYr3UXMMC20cIGOqUB3lNyTty9SOcx0MVhL1BZfLAUpqKIBqa6IHpnkmBzcvn2TyfF6Fg1%2F9OdUI7rL0i4IKr5oKYuwDwMH9ivLEXuuMjp6O9ROVj0LrJLb6zDoTKy5fNIJh0%2FiF%2FgqfzLHLyBXNtl2pFaslxKV637dVqpTLBcBX%2BGPp8PTtk3u4pB7oy6h7p6cue61t5E9SNi1bw13YyEfQNeG%2BGrI8VDWVIInyN0tMk2&X-Amz-Signature=7dbc100f8d555b16b3bad4124cb4d98ee68b22783b79c0c541fa1982834e06d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
