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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466525ASUYD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzOSFUsub8cfFR8TVNlpQkeWLj8btqVzRmO7uxBmVstQIgUAn166yE7LhIxgmbPoyLhFregzrHaKIevY9Yh3eDXHEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGcgzR%2B6m%2BoAT1bPWSrcA95sJ2mJ5KyknSHUWwUEnBANsoWsZlK09y06Pb4OG%2ByGJTwAv93gGseIsmTqOsDv%2BQUKjzgTm52EV1DGND5VLl8bECrg2QOScrwsRsXhWTvXbtoJrAi%2B2D3MylJGlxweFPo5sM5uc0PKMCaoKi8jh9gKXrB2UiJ2BZHD2OsziAnFu3Xs8JePRoct8a80M2KAcaKf67P1BurPjaOGanHodlUKYMfrkWEUHqZDu8JrWdePiAsq%2FbcWkiDocmqCvUncxCx8IrztIFgumneYCCAyyaN%2FufYv6jverLY1XoixhBk%2BLjBEw2CJbEvHtxg1%2BrL5Sr1tBOXwQ6y7LqRpnmeflvStdd2dmoaoaSZHGMzpTIsgO3PM84QZ4esLUBX2FUMg7%2FiurlUYCftSN9PjfimyNpbGV8tXqVo2KNezyanqbKP5Ec462qp0unp6qM3DYXYapUa9BjSwUTmA%2FDSPM%2FabdU9t%2ByLdEi3vidkrwMZmXOmIPG5ZncSXUaB9Q9nBKCLxwbZZOt6EkG826bu6vEJO0jvnCdRs4n1kPd4I14nqqhAjNsOTLofUsio2NL30UAZ1S%2BidLdK908P5MhdpFkS3xz4CE6syenM4Fk4n6VHDLux10OooJRvQKp%2B4fMXqMIfCqMEGOqUBSykG0L%2BG%2BMIlCEIY6xzw4uCqEiShilt8Wa0dj4uh94wqgMwTmoL93r%2BudE81AJGIyVoKFG3hEXpoCUuC%2FFbZPuAvbQP9P70B8%2FlQ1NfpSZm4d1H%2FwqmGwJdxACOyT%2B9upZ0L2Qhm9udOrrj%2BVv0L2GcgzOMN2FhSUPpedIw0SWPzbD4hpRwrHXIe%2B%2BVayYrad%2Bu4fS7oJYbmBbmOY5shvDnkMEKB&X-Amz-Signature=8d343bf0cc83c39f5a0400972726e2fde83f383929f399eb6f09742597657429&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
