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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAJD3D5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA137%2BJwoF3Ja5ZfxjAqx%2F7P4PEr5jXVVrlJt2RASIeOAiEA7DK%2Fl18fxII9mK65PWCRK%2B11xJ25fY%2BNFflZtACjDjIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJfrEtoMKl5J9aKRircA6ALW%2BfCzyewrlsv476x%2Ful%2Bf%2FvNzarNU8rjT0J7BEbXbnp1AgRInkgxeBeAz3k3AUI5DSbtY1GnvBx5ooE3vVTyTA5bxUnmGe%2BadNBkAS15V3OWL0OF%2B1A7WYgo%2FKsRaxNDmiJk%2FVngqOXTENgF6N%2FHoWhyVOEZPLOgkgScSZOsEvbT75DAm91A%2FB6%2BiOOBZ7e%2FoYFwbHy8uNSVJDL4zJ1zEXblNlvfepiBno%2FMCQ5w0vtENPmKQbsemvxP1DTvnIfh8fYDliUy3F8ES7eb58qD1ym1%2F2gkBF%2FnWIQWbmDotPXJPtBHFZG0MR5hTbGXW7j9DCWUlXFsm6XOeTHifhZ6XF4%2FLHm4Kan26OoEC%2FUs9yukQ8OgBHkw%2ByDiNbWbJ2tfBup3JFXI%2B13XhlBZaoXF5EPip5%2B1SyprbNrahE2mZfOmzfP9QC4SvpDnQRvAimqH9oSqMtgI9s1KBz6gFJqRDkvmT3w4gby7zTqUqrTGKo9Sqyr6RCteamWwZIiMbZoGCaFVHvQNsX2vDc3FlXduvTXlh68Q%2BFPF2%2B1w8kK0F6hwnRJ45GJe9Xh34drLd5ly%2F%2BrB08abqfYRXCSPJhFPMtgswQirQEo18i8WZ0QlG68l5jaKbX5w8vgsMPzI0MQGOqUBoryAH3J%2BoXFCxZJTovUShOSAzwCMBvMQzUWHPI%2BSAXC884S1XyQfpSBD9MQeyU9CLnlWId3gmamC4SrfsXfJeZsp1E03EcvxqQ9agBojG%2F5Mp2H0UVyjbel1wY3XErlNWcGYSRNNmdiukmR1YgV117IrVMRAJFfiRRn5UJUNalrX27fPTv8RWvO%2FClr6g4GpR%2BIL1II5lSE8JkX11UNBRhzFIvFo&X-Amz-Signature=6920d3d165f50d2d4cfb576e390d99e0152eda722a1021d6dc9ab13982fac04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
