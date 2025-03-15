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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNEJ65BA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDlhmaZpGLDrO9YWqeU6HH76IIhemrl9sZ0mgg4B3ESwIgZvMDHNo9JzQUr3lux%2BKJa3EclRHNFo913CXSB6icsAoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCls82pIY81%2F4JllHyrcA0r7O%2BRJTZPa7uoF26WbDBWfpgFb05VCBHQHA1%2B37wsX47AT5%2BL2w5AiYeAg2aGnTYFKUQX0%2BxNU6I%2FfXXCQDD1Nn9TYtV2MW%2FoRRu17dcM6vrcwYFxSYRsmYq0LGMKB0HENM0NB%2Fu%2BGOsyEKFjJ3NPJTgpfetC7f1IhVZMMA02uZtlTJv2w4H0EgpZ0ud1Zi07eBziWmvUN2SDKiU679vUN05hptAXcjMNMOKlNL2O3db7PHWe9oOEwm6Zs51Bw7q5jHgcjOr00DTL3NFL4Rb9qqSl9Qqu%2BtKmI%2BIQRIB6S05eTPiqUI5duRixJ7XGqChZsqm9uifShU39Lib4mI%2FY95T3dEZfKX%2B5TP4OfWNxR6UPqwsY38ehb9HluQ5WUy%2FrZ%2FeZdzcom5YTKrf6%2FcJC2ZM3Rkr217vSp19qZsIXfvq2i7zXW7ssj6F1hg4bZJK0GlYH2oqOdUiCq%2BE8SRCk8Kj3Qx133dxJK8cjjAdeJA3%2FVS4%2Fnb8b7MUpZt279ebqUDgdQWgyeYPqgob5S7Kjlcq4c0HFdotxx7gGURKt6nx4flbGnyhFMO3R0pAFNNImis47O79%2FR5rxGnHkpB2XiLwwOY1D2KiJlgZ4YSiz9aiJKJd20Q21QRXSTMIDR1b4GOqUB1zM2LFJYegan0zdko4vYsAAuDPhWi9BSGgKm%2BMExWnqWxye0EgaVupiJ5lLS6hUGSChuju8h%2FmjUOL%2BBnc58KELPPwK2FP81vTFYTCdpzfOuBoVMK9%2BfNzpkMEKj2oRrE9WbzBfZ5RUfyPpTWULTit4OSyD8P6ZbfG%2FCbT24czh2DWWPP6gtTu%2Bm%2Bmz4JdFY%2Fj%2Bl6MbOuPJbjFVcMZI7UNHK55ef&X-Amz-Signature=6ff37b8a1d7455fb1f229ffcf5ed1902bd24665afd29480ab7efd0f105a041ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
