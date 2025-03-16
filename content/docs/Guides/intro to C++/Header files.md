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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVICZXDP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZUYKsNdozABL5NGRZG66lv7PR3qlb1EhYFPOCYWXC%2FAIgJu2fX5BtWNw%2B4wjB%2BKqWv6wYRej7C0K3eOcWHE42Oc0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCAvDM6XxC9gHfl1FCrcA6SnqiVsGOBUwfIQBDgIwyhlrDd%2F2Tuc0dBd7qw79A15m%2FvIsrDC4d3pxgRxP7OleXSMTFKev13NTEQZWPcI2t854eEUKJK0gaM0%2Bt%2BL5a5iz7bU6IhCN6HiVg6saRSgVAiOsr17%2FwQvoh04U9s4And9BLaaRrBYtf6fF1BhRQ%2Bo2sfNKr8J%2Fhqafx3UOZALpE9k1PGf1GY0eBo8wGN51fQjuo47WV%2F5GkjBz0g24GpEDTPv4IJ%2F2eOwcxaU997RVhcreeUUIt%2BLHWMsTd5YMUni0L9yTYVPvsJto8Ck1iZlOJx5lH%2FmrdxxuS5Z1BAmJ4%2FWrLGreUiS6IKssjqk03BsqR5%2FXLj39MvvNDq9S3OA9cnYYWebK26oUOwqInQfmiF7xxmA5bhGIx5EoMxGkhr5u%2FHjQqoPvyQPtm0Z2gf5l3tJO1BAHQCtxlDxvy94Pu1Lbvwruj8T2bbpF0DtL4pqiJoEW3vERCG1G%2B0gEsHM2vPWMCnQ7eSvKjN2K0Ilr8siGCg9VB6ahPPz%2FmfLeP6typY9GvNloCwjqg9faFchrwmi9Ss9MLMGJu%2B%2F0kI6P9S3TKjsvxf0h78Meg8NG3nJL9rs5ECAp1OlTOvt2vl64JWYMOrl%2BjYj81g3MI6C2L4GOqUBbo4l54Nfgoj8VgBH2m%2FBlv06AQC%2BerjXFDQb0OTEQ3zNQVfZH0wYzLcW1QkuOG4lX%2B7P%2FIAEiqawnM3pbC1gy9MVNVlrAcVYfxMh%2FbYRovvn%2BrKGBRs28YyKOhK0d5tUG5AYyXJUwhUf4st3IUnYFApKt147Rc3EcFiZmQpfCguC8ETjM5CpVwaRuIutIYVUT1PCOkIK5DFsF6d%2FGU2sGl4Ew4v9&X-Amz-Signature=32beaeda2f7785d5bf61208a2b67a615e90d5ceabbffd1eb622844e34d86b3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
