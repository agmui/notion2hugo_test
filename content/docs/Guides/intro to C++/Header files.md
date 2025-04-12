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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHGHQLU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDsyXndBYss2LG63M%2FKxJEClAHE05MmkeFLzd3JpW0oDAIgEWFL2y6AfpgQ9HW9C9XKNTGkChzyPqjQ8mLYXvxTjcAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG95UES8ZkLBJ3sp3SrcA0dC1hY4EnqljkjbilcDUNiKj5mstrM2gttQR0VCeC2LHGWhG8bLSZgTP%2BW6duTOAIsHzlBabF6vDJ1yoDMmpnf6PXr%2B9L9nLFfbncozlRczYH%2BcXe4k6j7Meh%2FDtkJlI0B0f7U61KowFpMLcu5eLbq4QTTgGs4WIYMYRQNzEfDSDWjRcLdROW4x5v24pVDgU%2F%2F1IqQWrgkdQLWe3SOpYPTu2ArM0elPyXsW%2Bk5IBLaorOmuEqg5VkoqwVElWN%2Bsr%2B%2FCLznXmS4LI34IQMEBWFoLGfQNpMlV2nd6Jx9f9v3rmqLDRFGKvg%2FBvXZgykSaocidL%2BDaV4CoyyVM9GZCq1ETo3E094xMfhGJpwX6SMRTGJxbjLI8ysvci2Vaq49OdPkGKA8plNxxumSITPpQDwW%2BzJrCquwraD7NHW1Nne0vQQMT0zxjVLs%2Bubv4VYa1S35gkIBIFkRitNMf%2BVg34Xco%2FsIiwdnsv9QGz9QHWy%2BWz%2FzI%2BZw%2FZtvDisX0%2Bc4sFMWwMzoPsSRA5nQNoIFrtPHngSbR%2BzfnOZFRbVf2tSIrqTbrkbQBF%2BvyaSoSQLG1JO6tChJYTE29D5G%2FGSGOVRGn1aJ8u%2F3GDLnCxKX2zqoeGNi62fsDMgTR8nG0MPj66b8GOqUByCxsV3w6kkG2IeoElxY8d9c3vKrlE3Fck4ifXEhmmkNvx2cf1Nrqb3DNkPNgAs%2BeScYbpZtrKyEuJHyNR3D8h342iAhXVL2OCzFAWKPfuoKEGn1QMXndA7gt54eRMH0gx3Wo6c7sUj3MrMVvcbfveOZM6p1sHq8Z%2BxHVLIBCaiqAqHRYx2ibGj3h4Ac0evWUX9Lx%2B38q0co6wvA2yb1YSyExEwzE&X-Amz-Signature=524743195fa1de6f2f9bc80f9c378ee126ba6c1809b4de19541b49adaedc29bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
