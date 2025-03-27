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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4IWIUF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfzKx8H4A3nPiIXFHTQqyjGZ08ME2Pcwu43D9SzFyb8AiEAnzgmajI7%2F1w8k6YqIYo%2BPCGhaDN%2F39bGjfggIIwFUvsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGrcN4wcB9m8drERbircA04e6%2F9GQHBLVAgEeyZbbF2iixu8xgw8dm3pEYJ4xY1Fes6Um9LURqSrqrTujb56taMllMePZI3wc2ayLBoQ3VwSdS540jtBLAwnxHIGdfOnE%2BW6eMtpBPcElLUj47he5EPo2J3cnICoQtTvY7255LTSpXnOkbUwcVXWkedHEIAF4sQpLI%2FzPyupgtQ%2BVcbM%2BpcP81eDmOHc08GIdsPNem9DEsNc0G%2F4sN2spjrtcr%2F%2BmFYGg9eEa5BGtQcNXwnb%2FXpTnngzP0o5UV3m%2BL7tfnZzVABkhLJS8K7%2FHhROrT%2F%2FuBzeMOq8U8wxU8eJZbINVeTPV66K89Knj95WEJPWUrukDRJA9DzIlbDrT47hlpSxSJs1fwKJQMM2HvxQPy9KsvtsUNGLzgFGl%2FZHCZYlReB8bd9lXlFnUbQ33lHdddp1EvqyIaCu9aMQq1jOh9kTqTJSod%2BmhxzuUwK7KLiB6mSLgB7zVExiGtevQz0KrN8bh3wD8fbkmYbiAQSunxK98v0BZARKJyyOz%2FN7t0EUzTi1Ym0NaoPnamB4c1d96ec%2FOAa1noT0bX0hY0%2F2vYczhxCykMxt3VPPWsyUDeT8ODR7gF1QeJia5I5Wc5zhghWFytctb%2Bks2wXBkLeBMJeilL8GOqUBtdolYJZEuqJgcX5rHlyY6BztgpqXH%2F8dLiWvtIPMQmTHYGyslZWVKEjCmwo%2FekMfRw2HDTIfn771IiD%2B7eHCHWRAHJBAd3ynyILI6CMIUlL%2BEKUdZR3p0YxorrnjVK1WmIeTmg5SneoEPJ%2FC2etnkcJG6UkKkCkU5byqOayym1jgKM9D4vHTb225UXPlNzU89GwPkj5TxYCMGIwCxgXoEIA4nm2W&X-Amz-Signature=f1408ec6791afaec70b83399b9d5f452fc16021b0e5145cc78ac12f9e4d02ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
