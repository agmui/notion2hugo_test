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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDTTT5H%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChz64EmluNlOkzjJa0RIUJT6CrZR9%2Bd5S14TnKeMMtPwIhALkfeu01pn8q%2FESwRuUNKNHd0Tn%2FkVehIJnkQicyC4V3Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzqeSZym0IaASXzW6oq3API%2BnNVk7yaQWo5sFtba1QblY4swCJJDYITza4hST3HJ%2BkyBrjnaK800sPBa2FWmGzELXpEq844CyFBWvEnkT8qEESbVKGotFyRRuHpKqCP4DstfiFBFAWJh07kN7CwKBfc5oyT7y6lzSUF3W34POCNU%2BuCSpV%2FeZWZbnvpHkRaI1EfIEMGN0yuq7ZBvOdejX6LPnpNoa47tgbOxm854LY75gISI2NoLhYLOqiccKskd7e6Jrvv63SOb7rVk0pfD2R28LluaoGgJ4bvXgm4pGYYKqPqSvO9xkmdlUyNfOE6Hql6p9aaUgILQ18wFmdlJ1pPuWZxAgEEc3XnA6FVSXCVZ%2FyFVhNkoWrqYZiRjE6qufxFgiAsw6p6jLEd0RWIR71%2FsqGXtsynF5mVp8YHU%2BsBcsvORYLRA9EpEz5N9aplx6TKcMMNjEdOMM2Z6PQX%2B9kJgoL2huDAh%2BYXJ1xjvCEFRYRdB9tre%2B61yquaw6f%2Bu1EEOpy3YCAR6Srsr8rr1g3dbZ%2B0uwVsv6TwoqrcqCA8kIXOeOa8GlhqBSxaiJN7SUExeUiN%2BdbFyTGY9%2FLCMciltfAqEK3QUpBthcPY%2BWuZsn9Y4y0LPuafVnc8wWcMkhcOhe1ZYq1sH0ZaUTD9sITABjqkAXY5v2yOAwv1El80hUfbZWICvVMDWctep0JL6S5T0jc8d7wXWU53bVd5tmnVSB7axf3rscPhFLHuZnOCHiUJ2ZyWDPEwUn5xrgBY5fddpEO3Ve5yo4XaFXEGEAZFOj2wTQpDjo0lp7%2FZbN%2FGOxtpsfRiT2D0yNUUY2DSn5xGe7iJK8O5vFB7JEGAFW4H%2FXgMx4xTEhnYdgdd%2F%2BXG6int2bIzIpa5&X-Amz-Signature=e1b158a6c76c78286aadd9144ef3ddf4cae6d1970495b5361fde9bb680cf1e30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
