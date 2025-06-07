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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BS2DZS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcymsgeS9v1kqBdPnT1I4QNSKAEBahlt%2Fx88RXl5iNMAiEArBKm7BSp%2BOrXeM9ox66XsUPliWJHdYEASzsgMZjrrOMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAavHQFK%2FdImLl8WfSrcA3MT8AJkBR%2FcroBinZMoRRjq%2F%2F%2FOFFXdrSJFYVpQ9oE5ry5BziDFVPPcARhjv9Xz7a%2Bb6WODKeDXUxiaVfx2Au8EP71p31%2F9kyZDcqDeCbY%2Bb7IB11fckNWfJHurblDd3P10egtq0mISuVcLD7eeLNjq5CbzDf9QCxHjttixarisSJNVFtoXEsMqBnyjz6gn0HDmg8TBhdqaydh608s155UwWKD1Mv6bD8gHIuY3KouONlD8%2BIdU2YpbCGExk8A3zcewQNCRJHR0RTkShqzkIzI%2FpyRoLrqdASpqyv8oWPSvsCYHp2uIECslmEL%2FxqdbrHgM7SzzJkQU932zSJOKTOuutng0EGY6pBTOqJrP8V4rj3OBkv02G00C5owBMVc5E%2Fx%2F%2BFJKSWDOZ%2FTjOepIYQ4oLbZKf508n9lESTRpXq3SqRNzG1q%2B%2B5bPOdtMDwstwt4DpXT1Wj5iqupArODCeYDuQX3H%2FZlvunl0DNEpJugvPpecXyYUM2DdMk7rZAVSp3Pd%2B%2BEqlXnQlw5C2LRF4W6Sc7bGQpyfECXZ0fQiyFUMAy9%2B%2FP613S6dv3CxC%2FyaWt7TnwNW1ZBhGh9n1kLw%2FMmrunhiRm4aJ7qEdZDJkXXVTZjsRdZd0FTVvKj%2BMKmWksIGOqUBmVD8MzpqRhL4Grq%2BXw%2FMgR2eFI1KdAYLBkWzlQhrIqHI7wD3NkqQtiDmfFP9CXNRfee7g7p3rCL0MqLa4w6S9Z0F8uoDd%2FTsoCO02%2BNwDb3%2F1vlfcrkuavwWCh3B6SuekoTOBJCNs%2FUywrQqaOIKkAP%2BpVtPAyUsJplxkg7ScbV7cXvFTQbLtcoBKEuudYhhTRuvBbo4Bys%2BcdM%2BZEo1IQZAUvsf&X-Amz-Signature=e0ed03ae369073f829652e8c4e7904fb0cfae5be9ea0758e623b70d4b3a57027&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
