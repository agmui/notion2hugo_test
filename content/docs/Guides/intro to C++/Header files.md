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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26QARII%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSD5wBc8gmmK0RHIKFWtVX1V6UpMHdJdY5u5Q6EhorFAIgFu0tx1JIoQPZsrpBOQEKx9QlQ6bS5wB493ChB2O5K5kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCU3QIcBRJ0pE5AtESrcAxHZLOoKMpcCZ4I3UgwAVTJAIxgvJ1NHPGuCg0P3YBMgdc%2Bd5S571yIfHsPdEXs30behPrUVQyynNb3ZL3PVo3W00B%2FVbjAZoXYuDGrWg5dhjyF1IoIMc7xInow1Bq65haPqJZXTZTq9z308qU7BrIzTbp92Gbzac8cSTwSbGSiJ7sGf2xxqAaZT%2BWdu77MYboRxhKdX2USJsfgF6l4K%2BUkEOul49eiYNuKNCekXH%2BRwJrE3xp%2B7QQ3bmW77xyDeDh6F2T8PihQaBKscOKLRaH39NOrDIGin0K4I160I%2FxX2ngzbdwujZppzbvsuvUFfibmqu9ST383Me%2BU9eFh4GNiBPORIa7oJA3lFFQTx11ZHy9mmEi59BQUlP%2Bo9qTJn9qImYFNAVCxrB%2FMNeydDEymx0%2FxxrCDFMbhdKJD5uuiUN3R5%2FcXnl8YKCPzKb78wjDY79EhWOsQvJWrl5oA7KiCdWMbvl1LDYp0JQGci4JD3A4wxBvL4azyEpObNFn4W5ELvO9dPvFuyY791fBahV7DBv2ryXW9orABTIJ5Y9elzpZkadXx6EilJNdDx27ujJ6M9ErgIfbue%2BDWILgpix620Ln0fCdvWFDJieyRB%2F1yPUopike%2FfU0QfQbQEMJaBkcIGOqUBquAqmsQYdVxO5TsXUzxNBygp7%2BWAS80PRgSFeAM%2BCNWf94jArQ2bCPnwU2Aa97S14GwtT%2BLtlvz4DVPwRj3aT9J6Spdy2Bu6%2FsB8AemIOUdbYruu86VMNPcv0PJ%2BF2SbPPZvf8AVB2dz%2Bc4Z0frykk%2BEVK%2FPew%2FOL%2BAMfbmtv4zflDFICGyYGCsLalrpkal0tlVTSTIercxO683p94Jo%2BFgLzXUt&X-Amz-Signature=69808cd2ac851a38e60ce283f601ae0840f0b60c422947c24132b096875dca23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
