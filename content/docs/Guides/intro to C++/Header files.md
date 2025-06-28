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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIM4E6R%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9P3cBLvVNDSs4FzuuBR6SPk9OM%2F5tNfgucPOReEaHFgIgRBsDungb7umOzSPvK4%2BIom3%2BUiGa2GYHPFXx%2BM9thmYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2oBMD9ZtIbUz0wECrcA%2BS7nv6VXVGG9Ss3Srs2QX4lH4Avu0qLzU0C%2Fsf9tnyPJAGoLo4wCVLSEvq9LvgZm%2FJ%2F5g5nXMFla4qEIp5YNkCQFY2LNDh%2BN4euzt6P301N8OWCZtmHx3xanLDwkVCNtfomQVXC2VF7gSfIxMXtabltSxD58vmBnIbNWwzK%2BK%2BQdDfUOhu2U6nGpFMFZHwKVShYQtgtJEq87E4lYkAVyqEtSqVN9jocFuiH1nqa1eT%2FV6vZD8FsJgy%2Bda5DQvtvIu9c7%2BaGq%2BF%2Bg4w%2FJfO0COsA1DVLtZPEqEBCJ0uvXKnk3WRK6HLN2ZsOrB0YhqBI2ddeGFxffDu6x7qeEMNa0Kh7mi6KQtD5O6I4Hr0p2StnOsppoiqGjKLfu9No5VKioAHSUWnc9VGll7HAA8c5ntnf8RhZjCeBcSAzkSljW%2BQO6KdGQ%2BrohS5Jnwr52EvWKjDNFcQdl2s8ZWUUd1%2FKt5VMBr5jBciGR9QIQEjBpTyB3Q67aiC1FCLmcUL9BGX75Y2B472nQmNE0aIr7MdHI4cmjjVPBA8h193%2BnzsTV9Q%2FJSwElTOffhvRa2X1LCPCySW%2Fismn%2FrCcA6TKwtN2%2F6ryoIj4L4aOIG2WZB8BGsMUNOof9te6W4NKb6ASMLiQ%2F8IGOqUBm1fPrmGij0yqRbPrGXGDG3opJeVEZ7Npycv9lOXcSmaOG8nTzm1zxqyOqkO%2F1kG5ftwHkozA2%2BNYkq3LFvjdbhfMn1NsMRLhctfn%2F1%2FDdbsOgLx6obWhzuw4HKCKR3djS1zYO8sjYYBOrwK3LG4TIdfgnMmTU3baxxm27PtmymZzedXJ4PdWnm7YYpK29vZ6AkhWRNublSdCC3%2BF8KOngfoCZhnm&X-Amz-Signature=8b2612b0ce8df6bbf13ba39040ef886f0af27d521f3ad9a42e0bc3013ff56be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
