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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRSMBES%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC1Mn2D98CT9dqiGzBCF6TMAJj5hThMf%2FdOfXQZ7btI%2FAIgL52AYTv1tEENiDIHlDrZMVYmqKhxfQDzp2J612%2BjnCkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjEL41sgjaN3i%2FbUyrcAylysOLSyVjRzFxujFCNSwDA8pJatC1pbSYqe6dxS32uvkxDPLU8S7DvdJHFyQzedGPUOBFKLBp%2FD6NFPyTi15iWYYIsSHbJw83p5Dvre3ADAbB0cwGfRCD%2FHRPha4V%2B6q6j1T3J2DEIFf3lDC1yTPv6Bt%2F4ATkzGK%2B4bIQHriGX59RB0wpAHtwgFimF1PTB7xXMAGR9x0j22ornQz0hlR0sA3TIt9XMMLrxeHGvnz1o%2By4%2FLZoc76iw%2FNnDhRjaVA7XCiN8GLSzCqJA1V0c7%2BhSw4KSo8o8cDeOjuEGvqOuKJ%2FUhwMQj3j%2BAqQ6MyYxLJXHdN4xdNqhp%2FsCfrOmEM4meDakk%2BpClHbAmAKHfe39Wx7%2F9Z8IyVSDcTtFFvgB7HFoQViLjm1%2BYW2ifsIuO9kMXyOC5p4cPd3RynQXb7%2FxKWhfYjoBc7Uag7Y%2BdyHfAdIJkIjgJ6dbHVE8ytedgRVPPaT37KGMjFu3Yt5A6eDpSrc8nfuwAK5Q9snPLD40kn%2BMPo23DxYDRNRl36xOTxXOUupKK0StlsAs8BYODMIx4AmZ7n%2F30SOf2F9rdi96wZK2pBntDV2hpqgcPd0GjcGUVb7luxTR4qE3RvINfvUcas8M6YgB%2B5p96ebQMPTb1r0GOqUBDoyEWQfR8c0%2FL1eqfAB5lAsHdjglQXJlm3ccJ7aUC0m0xI4JX1VuT9bQb5%2BvPgrRM%2BNBZiVRqQq8ny%2FSABKD2IjPqaXXo4609YxnuriynyEB7mfFDxhudF6NFzkys7D8h5wSPTfXBel9P6KVYU8FNqLqTOk2EGyWIVG7NPxKBXVVwnQzsnN4zQeIXihuXjT4%2F2HLaImU5S%2FizCRT5N1K115ZTvKc&X-Amz-Signature=6d3bea63fa4933828557a5f8626944103989d8a64e317196ad53776a21240302&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
