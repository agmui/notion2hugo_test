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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IKFNUU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIE2XErJBvBje3w2k2VUJS3M0x00V2wd3zHbKydPvtfraAiEAnW4fF%2BRxnJ46Uc8BEXTiwkrzajyMXuPq8gfADkaBI8oqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6TmpNyVyJFnkNXTircA%2FwPZckG68W2n%2F9gQFznAwt32oLdWEYpK8v1y6tzLWFWg046u3m5P545nJVtROBUuu1HA9%2F%2B3%2BRI72KGivBfF6enkapQNmGiim571OcI04OsuZIeQhHGQJS4dFdGZw3dYnl0O8s6p2dkejrvm1ZgaYKS2BLEAHizvwo51e8St%2B2swBU6Kut7KRVgglWv5b5IinNluYNk%2F3qb5WFhLHtHP9xpxa0SIs0znqeimfxcRi0vjbBRZZPa%2Fw2huXAqSusfstjW9hfsvPAK5wJLk6wQ1GIRrzkiK3CfHmQsHcj1lnlp1CpK6zbTdGU618%2BxY8CGZPwHP%2BduTHMXwGZjn0Hskx6k6oHzd6o4fABX9u%2BvMZEjGRcov0pOYSPlsRVe68CAboSE6I1KYCGGzckWhogbZAtRMGCR2t7EXT%2Bqy342aDE%2Bqo6o1vXv3ztHiscvavnM7tyfRmgrT6dju%2FB0hnrz95lrzkOmb1c9eUlaoLiWBCOMTN%2Bue0CEBbl4UIrpKccr0C%2FCoMjt31cTygBFRCE7HzMkDYyugOJnb1PO6QtHnVHtaSvOKsbCFg24Lf7u4ob3H5Lk2bxCiH2eHxEdAdEcG4orCFHUhpowAAItSE0KkZiYo7k6Qb41ApLJOH07MJe2pr8GOqUBmfjsmBPMThaja7u%2BI4YPAR%2Bohq%2BAxeSgN3fH8izFzlOU7ZDbsXs3jXIaigwtG8%2Fh%2FXDpK8hmMOrm%2FY8lBE5YIbm4eYDapNES1GNnimbwyZB8vYYa6WBjxbKU6OgosOoINalnlSbjCA8DKaAZ%2BJaR2GUhrBqoL1YndaniWimd7oPZIT24haOAIT%2FSY%2FnlUvVaso%2FlQpqXjMT46rZBaGZy3VchioiP&X-Amz-Signature=d1553ee4b408274bb1f0a51a9fd000693155422499b7e31f6258ea51df8fc350&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
