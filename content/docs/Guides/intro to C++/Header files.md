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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJ6BWLB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCmqlV6R8%2F1b1Wchejygcr3cMxkUoTibQkHIxWhMPLFCQIhALGTCcQyFH8ahAp0FJ8zc%2FvmQ%2BezKxE2WjL6Duoo4Vi%2BKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA4GREQTCNKNRo6eYq3AO3KicAlVu3YHTXlXpT13SpLy79W2nPX9rtZD8G44JTJMnR3UbTMYsO65CznJP02HWvILHaPqZfwPDtWQzxeDljzBfuyrcl2JI45F9WzPva5DTgq0aP011SaelftmQvmDe9bkQDixZ5gExrjuLsstwMYYvHVz0hdoTgFApih6pVt%2BjzgFbOdgrD9edIG3QFeO%2Ba26yRhhvcBBo8vbV8ePwN00BXdBrS2MTZ%2F66GwAAI1HWxfDsdTFylTuJ6BuUNdceDeTDE%2Ff9RChjY8uu7se9h0yCjLs5v4IGVDiqA5O4IadN6riClsbm9ebDBexU%2BEb9mT%2FybgUkf3zJ%2BT%2BO5Xjj%2ByRfsYDi6QFnmB4P9B%2Bjr1c26LbWmaImVG2mRL3AQPGcPN9PqtKYe1pT5jrjA%2FLDCfgygo10pnvIQACOG7rR1mhFoV2WA1OeC796haIh9ruY6dUH2PMfHl1I%2Fgn1FHSx1kz%2Bvrm1WoxqVct%2BT%2BBFihnskKfZ%2FVIFAK9WX13WbJPb4HRAeEq2NG7oF4jNkoANlN2oLn1a7l5uvz45CWRCqbFidsqEpXRIllV59KhDSlD9NDiOOA9vsxo5zIEfas2GPL8BhIg9Mk3%2BtBjrEJVW2x1KlwqZNQfB3HSAuPTDg%2F6bABjqkAYM6y0LdbV15Gwf7lK8hZsB%2Bg%2FIumMX0QC0XzSgyiYEGIL8EmocfTYjXxFjWJBZ11Zt0WVcgv1%2BxQJ7bZZSgIFHgvci44AF4fBEv%2BdXzrCExyzy8hZbJo8i7Cc5%2BZ6gOiYvkzQODEjUQoSGyFAl8B8VHq9NSShUaOR%2FyxNe%2F895BWBt18plKuNPj%2BLKXDt%2FtYm5icUWeDoZQcGDRbwpNM6UMBevk&X-Amz-Signature=cff7576fac739b85d3064c926fea219e20a0a8d7b7e35fc8ba2dd1bb3803c6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
