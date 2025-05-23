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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFEFVVG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICKg4pOOACGhzvIJM7Bp%2FQPO7Yx%2BiNPvQGAqIGr7hhXeAiEAzWAlE3PiEZzllyzOm%2FQXs43tN6Uz6%2FhjCZ4tlHTsxyMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2qDCCy%2BdO%2B06SB0CrcA2ZVXRiOUyMxpNdxRb0hG8DJIMP0q%2BpZpAuxxL71Kvxel%2Bzb63hAoyx9dPPcG7HOBzfQFZYS5j4WySUztLdD3WsfNBRSenT4Tv5uv%2BfbNCVk493jRkoXXg4Ha5wI9UtfPO76wKERAmKWHov8Ce%2B77bTh15BzBkqxygmPnZrzSezhK9GOJy%2Bzlo3daVRCYPVb%2BD%2By0RKpZahKcRdUsE0Pp48%2Fzy92p599bunltzO8rmPq276earV7KedVu5Y%2Bpg2SwX5LDlxCbCIZhsgXNrm0iM%2BcBfkpzWLVbpHb0cWcmY%2FYzfD1d0xRp1vqE%2FUybov3XqdBc2z1jWf1MR7tpu3DnoZpWJdiVffrwDffcVOALJAwIbhtipob2s5ffMLdcaEsJYeKv4e1RATjjShfGsvvTrIbmCw5rVFuD1Mqno1GWLgS%2B8fD8V%2B%2B47huQwpWn0VKowFh%2BiJ3qf0R%2FpqiS4Y8csM4Po0AEfZJKV4VpcO%2BMGQNASK%2BFrrP978RuGQEm9rA9gxQRW47CrRITWmpL1GwnS1jPd1iW5ixl4SdihcrPLzDg2cezDpRI9e2wamFT6%2BSWw00XKj%2FVlojyqXnTNWJgNchy8c3bA0Ja5Y2csJ41195NTjbX1LiwBx3wF5MMK%2BnwsEGOqUBXLcocvvyDKz3WD5NxfYRnIczJT0z3ya1QK6pmIvJ3a4QaqMxR6X7rmCrR7VkI7v4S1s8Z4z%2FRBg0G%2B0Xw48qSf4p3e2CV5Zko17lpjc3ACEIHFXuHQGHrLnqKqUwiGHPJ4Kq6o%2Fiznqt7ZvXRCGNDDxHfUHFdIXNlR1WB%2FT9tHoYvrBD2BFHx%2FbTUzuP46w9LbcReutw%2BUMnZlCZJADU6UHeFHAR&X-Amz-Signature=f6e1a05ebd2c075c31ffb1cf77e9103c0fb871359aafbbf86053ab2086a25982&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
