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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3VRC7Y%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRi2%2FDQK179aDaPCDn%2FUAYapQHkeYSgxbNk8D5M0qsvgIgbJwzoYDhsmzd24XwYaI67mVRHilZLbe8YDoRJltFIIYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbEkFhnKvJN%2FpY%2BvSrcAy4el7TfnY2xQVZFSSgVdjduhvYIm%2FZhv0XLivAq5XfbNM00hdMJlyokLBCoVQWu3LOlbw%2FMZlPJjx0k0wLqZWQ78LezGEzsZoptxpOKCC3U1GByS9GrzDOZ1aLgShGfIkBKT3OkH9bt58tKXKVfhBhU8mlVifqzzNX6Ebsd%2BmhuZK%2BO0pQJfuvLJ4sC3b6PpYG3uIDSfTUC3hlKSTsg%2FOhpkPOFMscf5I9IZQ01YOViSxxVi6Ss6AM1tqQVsUdCl4cecAeTTWcjIVFc0pQBeF9VOXHX10muQS1kTWgU1we98gaPvLs7UpCWIVubnQdeThd6raA0VJtgZAbY3Bz9cwWmy7%2B22%2FDgRmlplHJPG4T33g22U3F1dg0gBkXrBirvDpsYh7EsyR3DUh5C6zfg2Wl3rKt5lDmCGiIcSENl%2FTU6ZMo9%2F53XBxyG6Qp%2B%2BzOyAYoLKiGxG81X%2FrrRHOvkr85zHTNJ3dCdCIZBJi9%2BgNUgMYiJJ2Bc1F4rRObiJc9R8%2B5KhkySf8%2FresZqwI1aqVkBgSDux4j6WoGDRi%2FK4JPvACI6jch09lM4m59FHdqGXoAJBq0Z6RkThcXhRHRm40fBYNV9%2Bwzliq2CSM1skYIt9FF4fFG%2BReE9svC9MMidkr4GOqUB5ROjJnhVRl2p2r1YCWq5Wi%2FPMZS9voBcfa1uFZdAFf5ZuwmCDbfXl7DDCY40avg5UpfHObEht%2FK2L3lpNWuWkrhUqIS3Xpu7B82F%2FeczQpYuLyNktg5OcGivEjU5x2M7TZaSPClbIfwtSpHST%2BzYt27k39NUiRpbEhW52DAcCX4VamQWkh4V3QwxPROSO4dP98%2BCh5WpUc6YQtpSBc5prVWobVVp&X-Amz-Signature=fad42cb6f35291575cf65745a910073e90c8d6184a67577f29a57305fc69d9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
