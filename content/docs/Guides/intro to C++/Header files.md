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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLK7IFP3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDFFJlnrqVbkv1drfan%2Bph0xyzIETMPN9KgEXeqA6i0cwIgK2O2l7WOmwclA3GMHjpyY0JPV5TABCmiTSijM1ZgmEAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCaNzjgwAAY%2BK%2FOseyrcA2YQAkQ8Sgg5AKVfg%2F9ZJn1f0wyPJF4mGXO4rLyuADLZ1Wtstvb07Vxl6HR4m716zRTB3Jek1PiPi0ukyCOCYFxzgGHvdrWZdvwRx%2B7yXeu2ZqPp9TD%2BzSPUgx9zyj3SE%2Fc8p03g0bDfH87z%2BVMLYcHGafNCy9bAyYZEUO6QvU%2BLzwCI8RLyPEJg4aCgIsUFcjDRIxZAqo88Y%2FbMocVxWcdoPpousX0I25jRIvM8ReZ9hMOh0BbRB8GNJz%2BiuKU3RJ%2BD7grp5ni%2BWJJuwnSByL25eyv5n1HeWDETnXLN4dHE8XYXjolxKPkwqQkmmY7t%2Bf3899AYReQz7MH9gByAY%2B%2F8HaZm%2BybEVAzt4NWCC4%2BTHhfVPVnc70vSvD8xXL39F1ZVpLowN9UrxR0pr346u9RumHh3Su7KNIM58NyLHDnFETXlm7O27ExjmIwq%2BOO0pwIeoX%2BjnuaqTZxMFygMbHxn07HaX5U1RZez%2BGpRBcjSJmzI7Etlvbfapo90%2BWJf1HX1Kv%2B6ITqKi7pAgBPAnQaA7TyYUvhGQCOgXr2nKLJCrNKH2jV2%2F5ResAYO8f4fzuzioCnNV6NK4JAJ0h1B2x%2Fxka8I2e28vNPZ8i%2F3OsWph7MtNZu67wVOl6MxMO6Ljb0GOqUBbv26FHB7TMXB1sETTvh5L9ia80ElJZSCLMPAIyk1aiP7WPFdSKUfVVuBA1TufO6M5OPf5R2P%2BAfFDzlyXS58sFhXNKspRqPmOgomKmmC2xSjKnwWrmPMkR1wJ0dlBfe13rAFafV%2F%2F4Zpq2e4oxOPfNrvZUs3743%2FI%2F51%2FWqm%2Bxg%2BzCAi27eaG2LHs%2BlZ1Ao6i%2FGT1uUi2uAHgyW5Udj4kpOUS8Re&X-Amz-Signature=de6429647b454099f4d2d7cbefef11adbccd03cd9a14e39c8b3ac5c144f70421&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
