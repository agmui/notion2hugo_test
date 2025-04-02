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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEAOM2RY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAj9CsLVOrL%2FYTT0RrTayo%2B67iVpDnmJ4Cc011bAlrwHAiEA8tyAcCW8eBXOp%2Bbv%2FywNebRvMaDmrj4wGsOcxSPc8BsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEztepp%2Fx%2F6Tbc6%2BcyrcAyisMFhElWpQUQUGc7HWYR%2BsBk0ZxsY8R7ak3OaAdM8GyoqDHIx19SrU%2FsPoWhls2tU7dp%2FNs5x3NcBnd3Qr0takkdOLDWToJWFrNONJy0EcQjaKB%2FOvABonowQS4zj4AYzZ8bp1FzmpYn0aqeC7nhM5GlwlxrPtMzZ8bdvRRbt9Fic0uOUaKX%2BGwa%2BiFb2KQUqV5S3%2Bm%2Bf2VzqbWQs0cPs41HFiUrDGFlyYC0zbCnaQ8gorJF%2FzWER9igLFH7sFO9Ql643eyqCWhUXnfq9Ffg3APHWW2oyNXlLI0rl60xhCgLwzSVAYnYtqAXGXA1eArYH9SlHpg2Xyd3CxJa0muLr3v1hdH76Xhd2UubkATn1Rg%2Bbg9Qz25%2BMVDpJQ5UFCjVMOCeQxUuS7NWJVTRwku%2B5EeHo7j8dZyq5Vffti0cl5DlPt47GrY1PHn%2Bbzk1FvT%2BeOeGjiA8aiT4AhyYCEgvkGlfBhpL3ElRhjbL7phkwa9azr8LpYjZ024jksz1PvH7UXxtvSTox4uaqHUehDbWpy1NAKVai%2Bh1ftWnrEC3DxhqachKO9%2F9kEKiDlkqVMiqZUBPvlONlIj7HRzpEgk4Nyylcruc15iaJuHBOFf6LPMxLZcABidX69MBH4MPGKs78GOqUBjG8UOSeI6ptNHnlShIpHbhFagCRmZmjqDjE%2FXhY6UC6U4ovGdYEnEU8ntDH6c1Dt8NedXsnQ0sHRd8jFydhsscW15WOZVa9HuV8WEZ97e3TWWasQ2K%2F3sZK2u3%2FG%2Fx2zwc%2BIpam5fNmbEw6Y43V1wFcm%2ByzEGEzDvOqz7RJ2d%2Bo5OG%2BET0dGtvHi44kjmF9lQklTNj7NIzm0bWB4S17E1dPiKxvC&X-Amz-Signature=2a185957fc52586a0ba5b370fb1c2f5a1159a3bceca290e31e5fccb4b84f415c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
