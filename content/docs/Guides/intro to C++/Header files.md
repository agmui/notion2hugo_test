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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXST22J%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA6VltFRFkT9DfHERFI%2B5jZ%2FIhWA5YfTs7HGb0d76HHIAiEAlCCVz4Ara72VZerPIfSxEfraH7DegALcCmmH4H0aJ9oq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNOqYht8QnDwm9SL%2BSrcA2b0w%2BgLRgZP4Enq1oz1SROLAR1LUfCodUYWL5IbLg0bCHZLfJLqUey0SkvFlP%2FAbWgkV0SakXxVPvogbK1ItQmydTo0miKxaHHbN1brnaH83t7W2okZA%2B4tSZB2gIqZLj9fhkI5s0Gf89ZDnIBdKY%2B%2FL1HEneHT7ixpl1yhV4NvtUv%2FGhI5O179xlL5Ie9QmT4kwylAjUhX1vwqXOm3dhf3pJrv47pHHasenUtgExLfVrQI%2BxXHgAc9Ix9WLUt00STMKqzVNhKlgR1MbxtuENrkGNb3iBnkDjbaQIMtyvxtjk3EZuhtLsDB1m8vEng4yY6Yx%2FCnn3n7w1NMmm0Mi7adurQpVVl11SHbSyvKHWEC%2BmB02l08t0WB4GGp5i51cy4i00GersQFRG2TBluak%2Fg6gruIV7SMb4w3WRQ%2FNN6i6xu%2FkgUzSjziWgeqfpXen37vYYOCFSUC%2BW1heHlirjJ9VDOBe5Ao%2FFVCx7V45%2FjTzr0NeQ2JwpHWJADenqW2Urq240XCigPyplGpYBL%2Fq%2FojkpZKRoLO1C6SuWmykwmjQtiaiINO25akE3UDrOhp5sxqO9W6EF8Azcbbf8HCBGdts%2FcdeeehYkGVtkLVxNijd0SlrXTcAM8Y7smNMOXRvr0GOqUBD5dgqZEF9RVA32R0rcRb5tdooLOrEYgwfBH3pynBmfsLnOS9cYHN6qdp4Cq9s7bSbCyNEOWTFdRFtf0k0za96uxQ0o4BJmGlfLtVdX7hrwyE9a%2FQu%2F3T%2BjLP95ZJNeoUa17AJ4nup%2FtmeUr5d1mhxEB8zGGaRmn3uyiD79OUlYXoHJoKenPysXRYVmrmmLuIXZnlsxcJ%2Bj7BHPsjJosGKFBHpk60&X-Amz-Signature=e8f91f7bba49e2d4896fee9c91f40cacda52d88d934e93ee30b81a4e69a61e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
