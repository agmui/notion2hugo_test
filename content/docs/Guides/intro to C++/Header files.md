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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RRGV5IA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtARvU08g2eJ1WZ%2BQV12Mc8i0Fm3sSlyCslAJz7Sl4kQIgCv2psqX6YUZjIj%2BK%2BYDHuDCKal313yj7DO3e02t9gE0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHSS%2Bc4HXg%2F%2FNP%2BzircA92Qj9UNXGiigtInMP%2BlPLCLUJxoP00HG2xZ0c1SpqYJbRWukGLWFnUtaQTTfvUtxNW3o5pJDV2iy53T3kyIpniS6EshlWDrFV9KzhnPP1XTaRhosTy6Od0Hto5v4%2FqoCpgduSjt9NdHWDd109OZofkM3BVHF8OypKaYrpA7Gh3ipWd3G7SFE70pWQQpaZoRxPiKJVOgp%2F81zcjGfL2Q6E5o789%2BMitJgo7EAJGWtKgfxd7KmAsoXBIncPk4taYHQZCinfNtKiwfPyhN1Q4kVEd%2BctuBuOz9JrmT4Cntb0hYTSSKyEF7P6%2BN0Nt6s1%2B3ymf1d1yq8lZRS7oGHL2XarTmLJrF4wo2w0MRgE1rjzMcD%2BtLbnxhj6WubrJ5umLVliSn8vviNrzO7Xh4lG54P1G2zFSofciXuV%2BXPkaCIbnu2%2Bf3wq%2F%2FOMqBQ1Z%2Bb4hNW9mfulMcrg16FGdjQ87bFp77ZrZkEepggn6AN3D7XX59C%2FczltiLTbge4uI98oUQJSqWB4TBAuQbTDHOnXKQJRNuV79jXJP%2FSSE69wg7OK2I2cVkTEtE%2FkyjoQVUKCvT5l7bfY2eEnSg5p53slU9ftFavtk2ICRJ18dRDJC9KjRYBukskMRpyP8h59aaMOyq77wGOqUBKExHW3upC5aoY2Tkdq4tllDIQxjRzHB4pP6xAqGR%2FIeB6Mr3dvnC7u5aADEEOH6G8tqq4Vtf5eOFIQwAfeNtkP%2B%2BIILdLdJXvvEDs%2FmB0LmN3rYnuWqXOAKwuCPlllCvYDeTJCTIq9kccATocHVe%2BNrZgDt72y8D0JM%2B2fYBdPHTEzqQpbM5hHToaA28tbV%2Ba%2Bpela%2BRQbhC55bPTKr5KJ8nG53Q&X-Amz-Signature=7b37097adf597545ececd68d5694e6d41e3cef3850f232a168b295bcc3bae746&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
