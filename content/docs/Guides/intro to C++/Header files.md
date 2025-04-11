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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CJFYV3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB7mwfrvejVXChp6SrgEtgDp7%2BhyTmhksBA6YSOjV48DAiEAytjBH5k4V0JGFq%2BNBhFsRybzpqSTldnVGDvcnu8zgxMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXtBHHFIhl07nww0ircA1qVLCgfOFLL7oS0xc9z018jl2VfkICUBKLWRihQSMbALGoGvnZy5kTi%2F%2B1X1cjjyC6JDV6H4or2%2FKWK4vi%2Bbxy0xBo2vq8vbkQmTzwErN2TQYLI0M8Y49h3WL5plY4OSlbVIQtTThkvQyN4xmIDTj79zNEv6sJEuSeAEMNO%2Fj%2B36ZLnR5KQwK1dxLwvTAaXfDOnzWb0nJz%2BvNJD7nhK9D2upEDOnNMm1ChYmHi9492rWXt1q4D3lLPSXrcX9yb975LdIlmvT2ouK%2FlbowCgnQx45N%2Bn9OsulUPqFr32XajtzRoWtJiZwmFPryY3O4UmP1Cv0gHVSuVgbTe4iWrFL6PeKE1f%2Frsz7eHBJrKhLRzVa7WmDpLa5IAPNICEJwTXy3CZ6Xus6rNRmMglZrVlUbNYj5VYU8qewgMguvQzgAoGV4s2tw5JfWkdLxI6BafkPXPRJp%2FyCh23ggvLVcol6lnIlaMgZxcS6W%2BFPIn3xbT91Rn3q4jfB0surkA%2FiRfIAhSC0Z%2F66EF8bwLbFBhHNMqi5PyiDzqesH3HyKeeipzPDwQYoAjPV9%2BW9xLIovIS%2FkBgMt5YTdvCOhsUiAXyyV2UgeniCLrgR5yGCs%2FEa%2F79uUKdNvJiiTwgLoHNMLWM5b8GOqUB8pwsD3%2BT5ste7uQY0B5E54Ofu51UdY3QTiwa9q0xQufezWufmdpnUQS%2F2MNRi%2BweogJHuggT18ZUlYBvFEHiWQUbf0y1vXpoBx3pqL03BzNilYnuktd5L9%2BMLVoTNuVSTJYEJl73Ul7bZfz3ESOUoXnq13d5Xkv1mb4I8JyR1kof5FkQdZ62ZHkYubnoDhGtDnpK9nDi%2FuvkGL2AQW9eiVSipAqa&X-Amz-Signature=bf2dca4eb69214e6a60f2569fb383f8bf0760674bd8d1fdb311a97e6c498ac6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
