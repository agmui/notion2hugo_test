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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4Q4A5G%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDBqMv49fQeu2iIGn0jLezgOFPgsMJFnhQFGbc40l6mQgIhAMVxs8waZOFaNyF2lvc7o4p6W%2BhzqOvodZ1QuwKDlBQ7Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzAZRNBE2aU6lX%2BkOIq3AOF56T5GR1VFOhQvYUPaXl7C678jmyNqznv9CQ9cpecaY1xooGk06lnQPDDglO3b4BeqWh1ZKT4RPly6SJ%2FsZHyXfWehfFRNgso%2FJbvBl4hkevSZeuyrX64m6%2B2r87hgUuHIiO%2F%2Bs878vV871E2EgZmRJYZeZoSXXMWbwsHUbPG2Cw3K5HgagvPKaLAH5EklYxDTz%2FNernQCz1LS0m2tnzPGTaUKKfmSqqQGs3gehkv7t5238nGUHqoUy4zGLWRG63EVDCAA204cNZ8i3IRAY%2BLMslO8gMr%2B2899u9bHpy2WfaRQN2%2FbeZD9Szi553lShBWGugQLz3twZEX1SEJdcifK45BtH%2Fm%2FRwEyWvdtExQzytXmGmThe6o%2BbrVc7P5SUtvK6pMTOiOnl%2FuPQyOlmw9RN%2Fx8cqkb4X8YJ%2BleAYiIb%2F7XP00tpD9rqCDG1Z%2FbTv4uL%2FAKUEEBaMZQXRyJJOPOAULnvyQFMFU%2FrhjiP%2FJMhkClDTqz58ILSLi9rA4Z1f1lYCOQz1Nho4N4zhX7G%2BwXL96hC1Co8thCv%2Fk3pjY%2B5MSfVoOtLaggxIFIx2KzhKaTxX%2BLi07U2WQcPfEHYhPJy3QvjsMMYjtlxD58BgI1MYwrg3j%2BCDNeGIi6TCw3ui%2BBjqkAe5KTBrw9iOCv2T9khNUuCMx0Ia0sWjrKfFeeTmKeyZtFDPp%2F6Ogirl5shmfXIeR%2FJmGMYwc%2Bmj8fGTGidg2od5yzJNcLFBcEzyvrosumrhSk0H8iBriIzq4cBiLrFCYVFXtLesj%2FKwVqlOyJr%2F6%2BOHy164ztJ%2F5ERsVFHEffrTdZ7e%2Ft6bWbQZqkmr49xRcDNXBummRuRhL%2FJytJ%2BIdX1j5IDWs&X-Amz-Signature=f1294ac3fb6ace5d20f53cd5fc46be5232cf86783a86cc8fbe6d26b0b65ee1be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
