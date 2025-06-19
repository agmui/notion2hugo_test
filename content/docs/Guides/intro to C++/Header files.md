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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND6RDYY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgxFc%2FpjjIefd2NTe38q6ckMn8DX%2BLBekKlSeDZgfUJAiAQGM6wDtz8ZEFd%2FULv2kUAr6kSMKmYU5KZFdogd5QV3iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuM%2F4t4JkQmRQnEbMKtwD26%2F3qpYWAesgOFDv2xHRoPxSA70SOVObWCSUDeJYsA4c11W72cbeg7SafNTYvk7ddhRYBg0z%2BFWpL1wREy2DSaebiShatDksMmEsziuEqZzYNQcEmBu6w3gcegErBkA%2FzT0jNmckaH03UZhYm8D2cAapZeDnviFJJ0gmGH%2BMFwHleKD9o52rwPnDXU1c7ymanbHmBHpx1XJ0jkiQqemSdjbuUaDiohuUTmWJlaqJC3E8o%2FoA2WJ74qBTN%2FKxQTyZrq4CdxKm1P3oVXlmnqerPelVxh5tboUeiwcfTy0nL8MGjyuTD77%2BWXtPvegAXFO2ICG4JFAmnloF2cmHCTKKDAHKSXGfce996qZpjlNJuZpO0eKqrfKlW4FDcgs1sKwTN4j0bgCQD2gi0QWOvjOa65RofBGp3wH%2FvGRJQ00PpLg5BC1E2Bf0JSM%2F0WypRe%2BTohIVZc1C%2F6apqQZG8vcPmuuj%2BnBV%2FmBYeQkaTfOtwzVJROaWXt2CFMVFT9A4DjOMl4tIAu%2F2NfhrNGhiN2xhW%2FGHcRDdHw1OtXi61tx4Q%2F1ZQOtIJ9z5BI0647%2FgdnTzWLTVnPAfaSQm9SBWO%2Fbk0Q7In5TiA1QWjeLTJSLK5kQrmw9V5apePwXdK7ow3dHPwgY6pgHQt2DT14I3Oo%2B86Qx64ZMEqEXCpBzDIWhHHFPCVFi%2Bwy4TNUAVjW5k9QGDy3mQvtQ2md47L0eY7fhjmRbszpNwWODcxgCdzAGhxbleoPYiD7jhRQmI1H%2BqjOkcZ%2BhcOvxqwPjVHOFlCOxXTQbwwBZLMvuCe6%2BaWnuwm7O5QTp4bBI3DLx23%2B8%2F32d5wnEWJExhxnvZ2P3%2FSdeqVA36CkrQT%2FQFuXm2&X-Amz-Signature=f1e0f1cf43abc1978c856ff078fc63d64d56bd9b7339cd523dbebe51928c89bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
