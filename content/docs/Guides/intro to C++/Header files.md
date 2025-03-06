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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMDKLWNS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHofiQhtK1jzeuzXPukuHS0vETFbG%2F3Qc8gXm7vsWBY0AiEAnov8m8xbZdsFwY5l8PdiViSccSu01DQwgs1eoqKN53Aq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCxV9WYEjBG%2B2M8gnyrcA6ZZxHCCppPpQ%2BHo%2F34nKjk6BREbQ7vSkhjVy2PrnljCT5CoGwjd7xmcpVArmgHEq7sZaUbYd108pCUqgbpZa49YrikpUaFcfk2x7sqKS7fT%2Fvb7rqdCAcSpHRhjGwqUOASeGQH6%2BQ8oDofQanckcd8hHG%2B0W999Puj7bazulpATmBx8KmmVwWvOZOIYhRLkFq15UervWBhF%2BclCxZj2xkXotB4o6zBCE9FMBu6htDfEIAL0L74CcudZJBQqSVpnlSJlkl7ThdHP3YbA5lxGewcDrGq%2FyvID6wdR7fRmSZimlrOQeSY8%2BdM96GlYLsnTH3IirB3vbu8Fd2kfkl1PC1bqn%2F%2FQN7I%2FbOL9SGgPfH3FuWi16x0GUKy1JZ5Sn7sHQLq%2FFtW2pTddLUtRT0Vgf872jSLabe%2BrwIQE1JEhNTBPrIIAGfXNs9BXKjNQ0RpYgaKnk3461C4nWyXbWWg4tvVI3TL%2BRtei1A1EQp%2Bm1NoaKSzuwfEdIGvlT4oSPO8SSM6SMx0gWRkeK6b4rzBbePWYH2aTyLCyBe1v4BZL%2BRYhNa2yQBFlWJjqnYAv9gKrtu2VI1oUIY2Rel7TX8tKqbreV6ag2VyfYBQQTUtECzauLwkcCxLeoKWreU56MPzNp74GOqUBxH3wMSqPsJ26MhhDoID32H7q3%2FsK64blxmhU0i0uChezjklRzWFdvE7GV%2F9Q13k%2Fij2pd4kHgKfh2%2FeHoUUNsUDArwyfHbM1ye2Pw%2FlNqc6LxnfCejmiXtYP5PywNngjzex6A4ap%2BAHBWLBx61HCy5vEAFaUZSztoaFnxfVePkaZ2MmQeazzzerY%2FFDrmXBbD6R9eHUA%2FGMKy%2BOKxGwWnaOip0Um&X-Amz-Signature=ffb2dfc4e10723997a6ff853227de685a46c57cedb92c04779a1596cb5c1afc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
