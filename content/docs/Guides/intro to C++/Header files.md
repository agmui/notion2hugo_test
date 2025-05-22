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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFGGLCF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIA9QK2PNbXobysUcBMTOOKW901dgp%2BGvvw8uPo3TGQc9AiAhm2FyUF%2B63cN%2BaPq5ePSr8tKMpJl0wkqUuUzjt43zQyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6tclUv7bCcG5PeNVKtwD2ICOEfFIsjLgLWVmMLJiSiC9zd5BbrVdNDHceN%2BEoqF7ltOR3R8%2BetT2ISX%2FAA3bbMaV97ywl9pFAIl3jJtZUWwCESmFtmypXRrzCl0nPAE6LKQjn91tG1L6QTDltyXUDJKf1F5%2B1sKybEUNevurMosK%2BGiYirF3ie83z%2BEU5UwhABF3AfYkeANnE4kW7ecLmBBIH7LtiPec3qsxcoyeqhlagsUjlgTaPnC63HjF%2BbsmhkPr4mT2E3WIpx8%2BbW2F60DaJGatHCNzjR9qgH%2Bq5YfFR8QdVhmlM%2Fy7JDCAcQ70xKzyCi9%2FC5CjpQjo0%2FfiKHhl2KRxeWXq2K1mkTj0%2ByDnu%2B2v1zGreiEPaMUof6qcv8E4FRSrarZFJ8uACmkEEpbqvcLfu%2BZO71mYH%2BTlaBXHdtsJSerfCHtxy5WNkZgLu%2BPI2%2Bv2%2FYZRTS9ZM2YE4uByPDN%2B%2BrNGAwoGrrffo0IShjhey37clDGfudZ%2BXo0qKF2zkSOd6EEOTYnlnuCVYxtE8MPlOduYeVJE8IrJelH44XWZa9EioBb2Bh4gA8wUxQluC22dpDIifQuo%2FNITanCsT6f0Ef3aWPtvFU01YOhCopdq7DU1ikY%2BfSLKijCzslEh7t%2BYm4b9fT4wlZK8wQY6pgFctI5jN5RgNJkJIxrthp%2FeWYcwyRbTZQUqsiWuVoSz7NH%2FCBCvF%2FlFe1fRYqBBPdC6JXdEAgHXTaiVM%2FRHUM9Kst3Da%2FgyyWlq2RdcC5QcG4Xv3Jqp9rGg7hCntWpqGU0O3I1WKqrg14gsEFHvjzUb3fvlST6%2FByw7Rmg0utxM4pi59IxR%2F8J86Lj%2FvP%2B3KEGaadgbDXSdNPvvTXonsCDIwAsNUdgb&X-Amz-Signature=40f3f584ff7ea858f76474d2aa0a98ccff7180b59c444fb1aa7536cb705579aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
