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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N7IK3A%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1zfT%2FekfexFVLSFbyialPKIRZhC6vEpr1AvXAq6aJ0AiEAk0PnzFtDM1HiZncIJmDKilpLvx139XTeW5tKrIfbV1cq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIZB%2Fvr5Zzi%2BbwpJlSrcA64NUMjiWhoJlOLSYhjMLeWb764w5BfbWpPsGY79Uz2pDH2z6Y%2ByngW2Txk%2BmPby8i%2F4z12P1JyO2wldVKG3gt44mCTrVDHO%2Fs4N0Dh%2BLakkuG5%2F2wO%2F8IPiAdjfIdPkk%2FlsuvTmw7MM1i7XQZR94Q%2B8nEvi8zreprhsJVsJI84G0e0V4Y08IhGQHcSTmDBvz%2FDKqqwW2eREavFQuzxskP29%2BoI2OTcTMOAn9%2BXbolVRzCqRGXOsjchfCH8gVI9o2Wa7t9g0%2B7vha8PMEOGgbn9Wj7uDUec%2FAYc1GinwQkgqrIT1x0Qi0AhF3tSE5itqdTJOz0Mtn9gTkDXJiNkpfBVeXGSSyttaYp9X%2FLMMWUbKkAWAB5m%2BHPLVU%2F6ajGJifRhlAPFY6lQw7%2FvtqtGRYtIgr9RNMwTJEfGmikd%2BmaBEDg93IXRsArw%2Fzm%2FPTBHtAnHhquXGJrcBQUA6y8zJBB%2BdjT6kTar%2BoqRSTkQWqoBWXzFkSPjDw7tIfhtt%2BMf9aWldVgdhoYQ%2BnurivkWX1v8jYIc%2BXWAO6S5ySBTnpzpD4VinbLvUE0DcKurmP1VBFOLHVOdltXAClQ51U03aImbcUdA9qp2j9ZX%2BsR%2BxzuUiwLWyFbBqVj8So5%2BVMOiFlr8GOqUB7Bq%2BB%2BtQg%2BYzp532Yo6DYJfHzB8jOlB8RqAsEW6BH9j4FejqrKp1RQTqMa%2FwXzWVcudHi8su704fbZ3u355bxyNpg9XkMwu5l%2BuwenBcbhfGFVmcxzWAi3c2b53i6yFtz4lJrpc5ucPiXhOZtdUXw8g4G1wgUBV5oLHFoXelsyhKhe0uBmGchP2Vhrv5mCBDJg994swr%2BG9LH8GKl4uDTk6P7Ook&X-Amz-Signature=6d850ffde1b4ca7c9b0ebc07d452d8d36013162d7cd4a1ac363b7073db0cf4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
