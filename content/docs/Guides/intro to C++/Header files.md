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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSBBXS7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRHAVcpjFx3w334XJGjdmpmcJPceqfmMAwLX1JQLR%2FLAiBMOmpBfapDzNSxEWhzODbpYk13nLDxj%2F9kvnKrmxqJ3iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU%2FL%2F1ZmrCCyXfriyKtwDwW5iv%2Bu17mrZpcVeU%2BqiX42wnjyT8UvT2%2BejuZJqbeNoDA3R9xBlryE91ejRFsEqZCSPDiwr1HNrK4i%2B1Y9cZfiMNOM6yoEcx8uZWtONUG4XOU5XuTSvX%2FHfGlyHODAvoh1piyR%2B1Tuy%2BtmNh1hrGsvAOTm7QV1DlAj8qqxay7NaG6CCCymfFmWB5kS8jYZhR9kilFrxk2oem1pii0AGYqCaiWSSL2LIjmHIOqnAdUOKAx9H7jWvdBXlLda0yUGyv79aEjpltSG%2BZrDJkwR%2FADho1MrazN3ag8Ua5Q%2FT770%2BNGapjgVPKuJtQAJ8tVS9BXOjtPSr9X%2BB2vs3P3prfGW3C2Fc2Q7OXH6HRAnCrWfcb6F1LrZASHEqT7Q4w%2B6AhvZorm6mJGFQZi%2B2oeMyTZfJ4Eg23TyoIMF4c1JJGuT1REkD3kVHN6j9qh0KXDooRIYWuGW2RFWoWyPkZPJ5ygZTxPzT3cqdQnETvOGrCuEnVvrNwjAp9CTLHdiVM4IsGlwCdD4T4Vtc%2BwLgE4oRBVN2Ei2NJZDuL10kcWikME6vewOKFQ80MAbCml1a9zsZglgo2CcqOtyUZ1E%2FDuZ%2Fh%2FUXE2Aic63T%2BOK1RtQtuTGcIpby7M6xykpTc1EwlpusvQY6pgE7sm4eF1eEwJqyohBE9Yud2xWMRuHtZYupXoAXXWpyTs30iVEzqmiiK9WGAZ1toDWcBA6sLIHB0RljLzc80roiCeigMl%2F4ffK0u36LvmoFP3LwuZGW4MD0YEHFOuTTlB8CRrALu02lDlOmMkuO97XkrlbQlgwoqAYu7%2BDxUK6wxaALEflnA%2Bfi7VgIkZ0XJFIQLs42j1Ax4k7V1lFbhcUdEHq7MA5Z&X-Amz-Signature=85e9c88e88b305425da16ffb328c03ed73d438b4078b9e5880ccc4b7ac489604&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
