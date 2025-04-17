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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIOKCU2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD16ODmwPBFchsdzVuiPTk35Pv2k%2FzmeILpROtQnAd%2F%2FwIgUG6Bv%2FHn2Nj9591U9SgRtMBlJw3BLqN8jm1EMpnkpRgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBRCgu1pXb9YbY06PSrcA8moKl56N%2BXbO2O%2BawUhcCsUhxzRgbNDKFPxDZdtU9N2h3YPZ%2BECFuYWRN19Qrz3TxUMG%2F5AkrpRBv1I9TI7ViNx8eBXIICjNxnH4VLpW58WcuzHzVnkgYDDLuQ%2FJnxbYk4rNYXypuX3WpXI91Ue1sdkY146t19pdIl1GNgqK5AMvTpGzjh2k0hLYF6Uxu9xEcCqJetkwrEmvdt2aTE6N3JPpRGJpuZSaSEtomc03Ix%2BRTVkmTYyIznMRNfe8n1fxgHDxEk7cuMEjFRSgbrBC%2FkjeJbRWaRGukDEUhkbffanM%2B79sF1h8ZPWm8rNJVB9ra3JCgQvNAsaKTs36%2BMQkJ2I5eJIhQBfkYAa6X418iVA61RAShdREFUb3%2BmgtyIMNXHCT2lydgp1AB28ynsSHBOQmCWj5cV2lDpCmeyK%2FhCHCmVmys2LPgeZ7VKVdiEMNuXe4rIojsUgFyXqNI%2BN8jhmJGQRx1tK7bhMe8z10yzpR6pmT6rHMsUN8agpVl%2FSXwG8PlpeAuRixqB6gMSmm1uhv%2FoJeXlrAyGMyFWP0O6ZFuXkBrm1yCzrhzVf7oHMs9zKvxCzW7VrZ1rrko6j6pi76kIBXIu1z6ycwoesKI0Y497JEymy0lrVcuZ%2FMMitgsAGOqUBcyTjv0XkSkYTFpCFKBsgrSSNYZIv7YtyfGnmDY1b5tRVD57zbLvWacwwGF%2F1gxIlxuvgr0%2FzHeygd5TAwq1yywcL67vzei6J6o6%2FAB0sOrff0L7Xvtsus4O1blYLsh8Zw2TbKXW9yG9%2Fz9EcFOzpdGCn6SUM0085Cj5hQ06iKZxr5oUnpmNw2kRiitx483AyUb9STg4HB3mFIGveEReSyuhVEAHQ&X-Amz-Signature=a6853277c5d27b532544242539bf0b61dd4d94e5812fb84f4b4f76ab886c2db0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
