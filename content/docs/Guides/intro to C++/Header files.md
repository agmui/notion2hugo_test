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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAJ3B3Y%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUPc9kJ6b7Vbaavea%2B%2FDLbFtLR4n9Ao%2Ba1wbjItxtFPAIgTEHzJiiEI5e%2FfKAqQsBhfkTD0mQ9Upihh9JbSqqPtSUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPt0XLUJTJvZyeaweyrcAwZBVEP6mf%2Bs9DN6jFUWoNmOajcYV75fcUIclu9l6IC0jRzpuPnL7fdWHphD85o6hyvUQJK7fjA8eJ0v5KoW5xccrPuuT8YRtRwwmZHty7nH4xdqIglXUs0h976MmI%2BTUPXMLjsBaOauXyJJddUgsvzuTphsQ9ljItkvxl3fuw%2FNdLm9QFfAWxlDJKT00bSCvFiVSzvaT3w0zaOUOQrHI1wcSP4L2wwp0GYfWpMi%2B%2BF%2Fzjpg1nFEe8A1UWYw%2FoVdjl9JJ4Zi4Hx6JUjBP4g51U%2BwWzCVm5kSaP63cNYkKgOOas7ickGWo0OzdiDC7cIr5TCzWc4cM2mAoyQcieqqxmHSSbsUjcdma%2F0W5kS45oS5NoHzCy08Ob15Vodpmk2tRiB2WQnZlv9ZX1sYR5xFhLMsDn0HODbSIMC9XoS%2FYNXGEwFUVqDhIxGj%2F9dFBud9q7gX%2FlcTczb2q%2FEV%2Fe1DZ7rosS30RD2dMBdV85atU19Dlvk2ucTIUnrvwX2OUM4Dtp32v3m1XGw7fIskgRbSikxXN2TzisClDJc0prMlyIDkYmTr1q4XS96OaF1IE2eUc75uRnCNnYdVwbi4a6dg5BfFoKAtxzNpbvOKinHW16LTJOpE5EvYp2e%2FZNF6MN6TisAGOqUB5MFIWhWz0s8%2Fn0V8KE2AFMzmeBXBnrkJXdRwIMlHNkmu0JvVtEq0f63Y%2FDNwnQ3w6ATtNnh3XsKr5sQS3w90aUfic6lJuolCc5116GRonfjO2WJkP%2BV%2FZEbSM90U8bIkBpBl4%2BYeSpocKcXr%2B3uSqgi6TOrgU3e1%2BRRyXIPal1savVHjQFqV7hX%2BjJ40ZMzoP0RWr4HUxXhN6AS6BFecjFs6gWGh&X-Amz-Signature=c87e5ac3d91e6351ed878937467c519d88df2236c9469993d3b94ac618ec3fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
