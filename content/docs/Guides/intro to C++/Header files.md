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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LI5TZIL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBZiNC7HrcN8jvv6fI1oS0uQl3S4FHmVB3yuHVTfmY0mAiB5CJTL%2F%2FyKRZtNevJbYfUkaFzxqvoBF2h4Q2V4qh0uxSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbb%2BXIjwaX6qfHuGwKtwD%2Bf1%2BMOkw%2F%2B874aGEDUzkjYk5qRm%2Bdu8%2BRx%2BtA0YeNWlO8bxMuIONVCXF3T7PAW6zm8wK085vLmABlbTDBddCludENRzV10qrfj%2BKLFfA0ypUofmDJ%2Fc4eGiCIK0FslJpTx4l3j3Yl%2B6QdX8qd3iHBHp69fFOQyPJG8dn7%2FpyOWi7oZFOiOb3d7c7oYAAG7VbZPq5UBaWS0gOj6KLs2cX7zu6H43tUdTd7j7Y3%2BHF9%2BI%2FO635HO401MRzTg2zuoaHWPSG1AocVJhvQZRQqz5Yf3D6PgN%2BkQaCuWcCIllYuO1AyNse4KBBvWh3w2JS%2BGE7EUEm2ZdHd5bwmabo6erJjB2GSZZsqQ%2FG5XbW7yTjhXV9f2tVLO3KxE9BDaq%2BriOeVHjNfml7%2FrZRwc3Ji5OwRk52abByNUyrRSgRLYmdNCukkrMOKaybUbyuqusHyG3idFUiBgxsU4LLsmgg5Y4mUuQDFx2RWvAa50Ker8DEF%2FRbQyPVGjRqMtRdM7g0lwV50KAYBZQJvCpvLsTMzMlFa%2F6lWFXvp9T7jvhjf6FMLEJdBn4bPJVTR2ExuiAtdnFTX9sUw%2B%2FAityZwGOlIcOz459Oub56ZiPHp%2BaFjivjv6o5oStQVOEMumfbEAIwmYm%2FwgY6pgEvuVwGzXbF0kvzJ1bkuRWhY6dk%2FbF%2Bl2qTz7j27vV9TtV0gONz8qtTmzaOKqBBIqcw0aePDN7hKLMXGG4Xi6bJ9kxUWyVLECm%2FTtP84X6qtR69LPR73WTG2FhXfRQAhwat9KCGJFHCixUiDvc5KRrA4UMp3yWrVxxiAZWqFev0%2FpabdjlsfqW0S%2FSPdMHkLz4zGBd1TxQ4GKrEaSTs4MsKSJlVk4bN&X-Amz-Signature=326392f229ad10e722abd1ce5f4a827e3888856a1695ac8b5ea8262fe2b5390f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
