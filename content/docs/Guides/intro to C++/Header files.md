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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZEAYDJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAy%2BkmuV8mXbTtZMALxyysQG0TsGPZM7G7Y3XuhtkkzwAiBsrSBIp5D2btazqRykqt0Pn8rBNUa18%2FzJuTRKoAuzSir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMrWHiLcd%2B4eCfIQxzKtwD3Lmh3Ys22iF1RplH8qq%2BxQEE1Uo%2FeAfbuxlJjVTGyieg86l8XkWnRHjcwaXF2oppTepSgK%2F1ZcJWnskMiwRvQINuEcxFY2KvnLYj8DkoUiMjM72hGoOVQu6A019w2mTHlV%2FRAZ0xgxsAUWbR5u7ei%2BGH%2B4HKXx%2FPTcdpmnXO88LQxXYZJTvjH9FOMZ4mbx1lKFhbeT%2FDBweZLELbDEqEStA7fBcUCYGSEtwmOI1vbwpsUJPSLAHzvqHXOT%2B%2FfSrXNWpC8P1FicaNMgxR1DtGbR%2FvA59%2Fp6jxrHLyJzXWACQGU3kEUdOkAZ6y14yQ0BPTEZM4GLKyx46WW8M29nVcFdOZwgS9skwdk%2FkxRMZ64a7xcE0jexUkuEOsKsKDhlKR3U9wkmOSU8JltnU0SFR70t5okutPe%2FuI9Uk0b0dkYCj0NGHm0CumLH02CUBg1zjfDXRl4r5rtBOBF%2FSIU%2BCS4KAdEUcJDzMD8ii2DDs%2BAGuPkeVuj7TBTbL1wN4g2%2FO6bCzDg07X7iwGJtP320Doicr6BD%2Bn1Ewag6O7SCu%2Bo0Rp2xJQCcn%2BYJ7B0DOZLluoEPVnILezRaVTZYlXaR%2FUFa0ybPBiCaSMF0iZeG0BsKXcvNnm0wVmRDeBbzwwv9CMvQY6pgEQlDrxJgohEE4ubenK171lz2zsuuE4vBHae1X7EnuokaefIqKaDerplkh%2F1mIT%2FtwZNNW1Yd9L%2F%2FpJDR%2Bix2507gzlxpYGESjaVIkhELAyTfzRHtwG5EDgkSIBKIPkpfPQPp8QDBRgM6%2BxV%2B5iWHtpED5nuLMeTPhkTEGfPY%2F7ZzsbAxFNWOnliyTy%2B0o5hUM73YAg7mtR7qDLAbau7Ljg3sfLkej%2F&X-Amz-Signature=1c51bfd781c9a8ec15dda22899744e9698df84f6389fcc89ff98a37aa0d734a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
