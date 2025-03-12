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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOPMQVP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCxhkKjpZ1ssmfCvwq7BrovN4UzCA%2BMvOXATK0V%2F0pspQIgZOTdt14qfkfmU8S4sZrZaMkHdcHaYq0TLBtS8GIYi28qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkJcea1iy1dRNXmxircA0rW546JsGSMAR2YmrHZtLoY9k78xBMJRrFepwVEtLb6f%2BdJ2vqmjOYmHnCjXXzpSR7%2BXNfO3gEm3GjnaBGPeceJek5Gt9wrivoEYwiPWYHpDbtSMBPb8OoCsZQoLbnl%2FZwMy2gT0FEVhPalMSyy75rH%2BOXX0JI1hb8Ig34Aqvxl44IYC%2BG7tVIVgs4Gin74jZd8q2kOtpKq0capF3u5meWJQrHPv4pGNKBB1RTyg61gWNm6AhJ4JH89%2Fyrno3egpCiFKlsJG2lVotovg2BnUckLcNmnGcs5aDz5lMkaJ%2B9N0WDaVrEC7QRw31%2F5A%2BLbneFiN0jk2p0LY1p%2BjMIeuM2elC1G%2FgnMoMtFk2e9%2BW8nTkZW3m4%2B2hGJOQ%2BSHc5vcShQQXnwyHvOcQiXFXidHM33oXiYIIgQ5MXHp%2F7Mc%2FN7Xk8oeD9r%2BeVzkXlZSlECwCZsWQ23jP6Za%2BbbVBDCVRV4WzYdpZYOs6IcyYZkieTiPrfxwbMULWEppnsDI%2F6XqAx5comUNXC5W2rnzHHw%2FTEm1pZzcJNIwDSJSDX14Qwe7Zwpi%2Bgw7uTRqQ%2FeGqRtbEI9%2FtAgmITDm9Sdd1IY1fq%2FOCwsnRkC%2FKvy9DZIiOCaAur%2BeSC18k5hXB2jMI3kx74GOqUBhj0IpSK1KLTvZLTKCmwx3%2FkNPJEVb%2BiOFleCBr%2BReY0Vi52x9il7ZAh3FiwWEhHYtBzxoqiKnJ65Uoe%2F8Ejf%2F%2F9tT8pVuFoas%2Fx14d9BFvwvDg61e3iFV3zFt657eIiAxhV01vB7tlRhcYPNnrbpBOzJqYSdRBLghxUqNgkMSIBDAA7Z%2B3b7RU5OqrO3geyov%2FAM3lLeF718xx3oDn1fZUt2sbHC&X-Amz-Signature=111b288597d9d3bbfc4ce44afd9026e95df96181163c772c9d9c40254c1b6450&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
