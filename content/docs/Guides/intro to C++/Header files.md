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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2YQUBM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI4RBe8SNAGrRZn1Ln9Bckrm%2B9I%2F34M5b8eQnT%2Fq1D7AiEA4GSNm%2FEdjLl8ZPtf7QG5VZjxiqkKEbWr9GsZ2obmkMIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDO3AYK7GX86IkbAoGSrcAzvPZXolfF06Zks1EZ9S9QgJvsa83t5z9pvopx6NzgmviH7iPVBKUITX20sy4L3sp9bAeFChinGt2DASU9BbNljt5CzAwJXrx8LwKL2oBnm4sEVduWegefOo8%2FFC3GQPkifoINMIJvUI3%2BPDgVl5SnRAkiQT5GIeT71ueTXyA5CwEfrcxxvQs0dqjvchU2jAZE9OWFvHkGecYQC2RBlUAjf36UZBt%2BjmCKU1E0wO4g%2BOOO%2B2qNqtInbtpq%2FxEykiV5Z2gOTqMV9aeO8OeeWmUandtdQzBhU%2FOAl%2FnIIat7UJOdwUZCUfObjils588k2dFMdHV9EwAy%2FtUtnxtSCcrgah%2Bfi%2BPfI4ZFM2POLWLtPfj7vVBnUkKftoQ0ePeDLj3J43w%2FRLtjiFT1baUsZNOYlyFZ%2BrTnUhan23M6dTdZ%2FOGxnh%2BqEL1YajSydsfPR83JFcvDZKBDWntRCav89u10rceiT6%2F9Jklz97n3gCBjxEX5G0KT%2FbdCQPZuXE%2Fo3bRLDR%2FgdGofX1EHfjcrxTjbUTCRZAzAj%2FkzhYLN4pdMGRg%2BHvqFLVtKAYqse3NCLMQPBLPVdqEwD5wgV%2BIyhBskxC9pt2R0eTuqmgUkFKJeE8seyHWvzJgmqZcMUmMKvO%2BL8GOqUBGDtMsK1kCQBghHKdxSLmsoXYabXB1Euyea8Dirf4IVfh0YpplSt110Cw41ERmkUU3AnAdj%2FKpgXGu2tc7ynoNw0NNCmAYbQzOMw%2BzqlUoQjWsfxlCnlWBGIvDwhEr%2Fvdn4O1KwrHNun0F75RxmVL5SnepDw4tDbfPITj2OWn0hWtpeIICvcrpJilzyiB2QXQmoYd4OZIra888lMtOw%2B0rx8ijvrr&X-Amz-Signature=716d0973de7c9b27adf84109f89e1e4a1933279901e0ae9ac12cd6ede7a29d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
