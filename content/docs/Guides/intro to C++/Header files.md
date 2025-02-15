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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZM4D4CU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEmuPrUFKw0zsVNtJJjpJ2%2FeqBFEn5Se%2BPhoBOnz7z8eAiA%2BJya1eihrne3pYLIpt84d4eqTgBpAJbmu7lzVa4cqnyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMDHe%2FW5S5mjBR7KXTKtwDqNMlayi8aoaXboNq9v9TX7kI2KBmLwx5d4Jw%2FTdIp7eQM8QC0DLjGs6EToX8Ue%2BlBTPzHvxqKmP5avqHE3sGGSzFNBLR0ncA3wrdN3COhgnac7aHPxN62dsGpR%2F7%2B0rRj2qU4JteKsqEY%2Fv6o%2BDdLYUgUE1xhXSxoxa0kb98rmAjD69o8%2Bz5%2FP5%2BVwdurmfiNfY1nAfV8HDEzxw2zV9efy5Mqgw7KtqjgjqNv7GCX54Te%2FcdtN45GSf%2BRqVHWsy%2BuF1053YE%2FI%2BsNaRDwYCyGPCfldfMwlDBnQelex42szO%2F0PSWoocns2ipcbyH1xMaAlv0YHaoCaDyVqLcgfp3Almxyp3ko0rStVuo70CEPCyLXEDVfiUqDV8Pt8CLddV3eYRZUXCqXqiP1uthkA862deEk2Ri5ffZslJMBOjPraadEEJbuwJxjo%2FyxhohyOfGPVSH104QXUqbqgQnrItlzn3Sas1UiA6WGUTnBOl80ZkgitKMemKFCeoC9WxIPFzCoyp%2FCxCNof4PXGB5dGvGZhBr4ImEkx0WJ00nBaPF5dEs9uYApUJ9qxDuZIA8ixtliXJuFGTOMnUa35mYWJ%2BuZX1A4DSndjIhsGPD616xKh1CGTtcxgZO03GzMTMw%2BK7EvQY6pgE%2F5ntCvRPbkxfG4rpGK9YeLAHsqqO82PyDA1xeQahy2Ik8ZNepkX8E0%2FOW0xwq3nE1Sxb41MuojdNGUKOekxtnDhNWlAEUmlwQo1%2FmLJ%2B6GX8P6xzvkzR21zh5jA%2BSeIRs4OdNIqYc4yY6hGKD1CZC4dxKIFnoLupSnKxTPhyB426idr1i4qfEh96ikQSNTw00TkB6Y%2Bh8NsdcZRQ4Rhi%2F9NsjWycA&X-Amz-Signature=bef0004eb03e27e68d1989890a2c05985f12c13492ea6927df91f446fc76f1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
