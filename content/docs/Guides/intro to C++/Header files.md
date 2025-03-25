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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7FDXGB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Th5PzOBEcYSRm5%2FlDVldv7sjOC4G%2FsJfTd%2B%2BNtKqggIgJf1zNy8F9gQaOJPC7Pcp6lKa3tfu%2F%2FBJBCD1KC6vFdkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOcU%2B%2BHf7iwydphEYSrcA14uxT4pvfw6dytrKkXXXjJ4Wjydkt9DjU1ISQgHNU0zTql7ar2iRGds5%2FXD4AAHq0bfDawAclkjsNeVeUUlavBhF5N7LhVQaCzFrCNPggVfOm4kfJFeIb6YYZxdLu3yJIoflxX%2BG7Yuxrs8a8rJ9zbPjc7d9mZlcPKzeS9Xx7JDT4%2B4p8Xc8hD86JLmd5nFUAmxqHylinLDQepHMBiQI0Xsq0cPymapCfY%2F5cPWok5QRZ%2FgeJ9ZV%2FaHfszllaq1qvtV5P0Kub5KT9%2B%2B19l3JOTG8fyJR1Ip32%2B1Eu7cCLUuYfEEZcu9bTaXR4cSGX2UXuootSXhciMQdpmeCMTyybLc21z6eDWevxcf4GmElql%2FKMnLcmw2lagxbT2AumsO7xHF2xBhABI%2Fp7%2FvJLs2QsuZa1BKLJGFsDYSauTcoWxT%2FVuY05cRthnoh7R1D%2FtyXkAaNTxn%2FTzj7253hSSSd3Wbb22XCAkK05rtsESNOvph9TkyCl9A1aOLi2%2F%2BO%2Bt2UAEO5qf2KeexwAW4EZ9woCLxfxdS7%2B5xSY5tUX4FT8iirwJgkScs04NNEZ0KXffU0dlppr82NQc5Got3XYLRH10oBMD7RU5HpGkQ3NMePDMAlUYs5xlLMXyEgC4uMI3sib8GOqUBWS1iJg9sRstoAhaKWM%2B3%2B5OsEP1%2FjfoQ%2Fg7pxA85enfOhQG4PTsg4K9udTAQbVLxMFmwUhIKyoUmeVwXtNj7nO3%2F4rUsCQOyfK%2F9z10tZ5A75M2m6%2FbElIMhmepNX4wZOq6HblP5IcE1dzibMvT7LZk1%2BKwoomHYp9eoubPuG3MtWzgh6tTUUhEEb4mS4gwWcIFSiVSbhmtD8gZixdDY55Y0EG5w&X-Amz-Signature=4f5a456edb0ee5d3396c70771bd50c8e317558639ec5dc28cdd2602dd8150532&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
