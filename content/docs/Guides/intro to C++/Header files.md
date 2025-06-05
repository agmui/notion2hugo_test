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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKCIP3L%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwD4VlO3ioyAMsaz9IPmhikSewlTtm9xN6XYC3iHqqVgIgI5VS%2BrOU1ONDa2L1UTyBWlj9hiZn3gYcaDLpwTXkjA8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIuyeCkQxTVEXCoc9CrcA1PDry1%2Fuc%2Bt6RRRaRE6%2Bf4un3SiJm%2FGdq2NXTmjuqGb9CAvmgrfdqNUAelg5uqqPwM%2F4FjB4hKJVGX6FBr9XRZiCT4qqSH1pQqL1dHFZtVPl6ArXsdXywipxcuHlgKUMnXD1JWzec0tP4nbTTCgJMQzfHwobyhLFXehAHTqUt2%2FNOuOOZE7VTtQyDX0m%2F73%2BU1shhshOD6gnrlLLrTQixIwdbPPcTddJuMqJAActhb3ZG8J9xSf%2FnbG43UM0diJt2Pngqhd%2FiVg87bofY7rgAs4nAsVWe%2Fjuo7LdcfdImoeNbJULvDCoP3Jma8FOKKBGbgz8wy9O2G8Rn8nJoQAyFbuwbgp%2Bnswo0nNYTER1Ms3bI3gjVcGBh1QuC4FdiGHo4J%2FcCswyxExj1Th0J0HbT4Yu0Uv463JuBuCIVyxtosmWD7ZMKH8NiEmbXXvQB4x%2BAyEfU3purq%2BvPDBvoA%2FM4XIqHhiZ4o7UNz1Misg53CFSGB2tx5RqB2ZyFyQPk31QRGtcUfbBEQrT7MPNsZd9f9afQjd49f3xRuD8ISD7Pl2BldGbMuuOI3YzCc5dQ%2B1etP4G%2F2cM2vCD9A31goJ71cGOPKBEuUTpE%2F6do33z0gziiI8ZeUGJIDLQxROMIXYh8IGOqUBznPxWEQXVqalj6z4hvnktJrsHZEtFYuJci2p3D%2FEy11CUukOgJPqEKVkIUmBvfNeGNHxVi00f0C8GbOQbuf6Y95hKc3ZxDv6ozH9N8V0j%2BT39uoSV0XdEFiXKtitCbLcq2PxwjNOt%2FZi%2FDDqgS87W6Y7F1ELsQ1HHU%2FcwJXo9v4igFiyqF8HQ1X1yZknteCVSBIxbgNaf33f7PrE899s0283Grxf&X-Amz-Signature=1828536572382c2a7caaa18d55fe25dbd13fa8b421ee86171a75214edfe3e79f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
