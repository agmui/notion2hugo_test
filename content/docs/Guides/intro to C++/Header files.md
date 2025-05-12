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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWLCXKS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIExEUW9BUSQ1qewOqPQ9ZSwlJ7t%2FDPxPCTZYQadaFpdxAiEA2v1IV%2BkL6BSvoweB2rEkPD832YCFxaWYtz6PYNc6ongqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBem%2BHixkyB82plxgircA366dXJ2uNa%2BUJoHzIACWH%2Fs1joGdGwJf2PDQFri4%2BhMxk7makEuWxlIG4ZV%2BfdgFbSywCsw03mvLO0%2F1zF9yF7fNu%2ByK6XpXmbZj%2BLbdPTcOdXeNCwMk30r6VXq2gWGW7zIcyecqRR2xKhqJjmSGqV1lJ0qBbepECT09Qf0%2FoONEITuEmXjTxaLzZl7GyGSSDwusMOlMkWsR1PTSPgNMk2slWaPjMzv3ep0GwE8m1mcRV1fuGY%2F0jd7Xd2HE%2Fc8clKLSrrhHiO1IjZMcKdsY%2F7vJY7PBqhrY5ZelSos83UUCqZMETJbA%2FJWrPcdD1aLGMwzxt4yIcxkCB0jUka6l92R6zcnHTNa0wDOdgmNWVscQRQNYrVLH%2BDM%2BeEJaoGMTr%2FwcbGto9LsGeAAJDVdYOy%2BnN%2BV%2FZYLICxsHH6swJsnjQrZCPe3lqxyO78AF%2BP1Hc2QdxY3s34yzJS9bHeD8tN4uITOLJAq5RlDmyUVfDN6T6Q1B1r9jkfif6%2BIjndwMhKZRkQ0wWC5zDqH7M33G06Ro9i5XV0e0mtIHcrqdxBsa5Jn8VpU9x2G6tQbtaGV%2F3dggZAqjyXCMvafMm2fADObt5UNHklUeXiHBwQtO1LTlLKbd1fMxAKcu9GUMLTsh8EGOqUBorXcyaVDv7m4mBz7aSvBPUiDQnCzZIoWk%2BCAdBppuR0nQCLcxwC3NRs49XoED8xQdHML94Qqv9buS0fMoJ20ZRiyWP9JuvZj67DpkOn99RU812k%2FZYK8RRVe19Tb0zAPbcRIXaHP8cti2Z6m50HSYjrS1OgEnkJk6kYePLwu1lwK%2F5YvyIL07928Q1gUX6IgfdRbWyoGgmzJzmmCbYm865JRkcgT&X-Amz-Signature=5334aee51fa645b6955d264d45fd71f75d984eb69fbb9b75232792cb574a2e35&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
