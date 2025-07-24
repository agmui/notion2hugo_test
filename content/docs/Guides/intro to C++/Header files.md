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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YGR4WUA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDy53OBVFBa6CONUDaqINnGe8CWLuYxigOOmvY0m1Je3gIgD8mj7ZehT66IgeDkE16qDpMB4S4g5cmj741JWkGMVPsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLtwId2GUowFEHZk4yrcAxFy9FTzKb79thgGvoI%2FDcRgueUKJcMs2dK%2FWmdnpwEQz0fT%2Fexw0%2BQfy1Nh9%2BC96pzo5GnNpHq5aefzqmRNA0Nv9mHd1zWLpmyBCXoaR0vkE8Xe29cDSVnOPGrB94D2qM9M%2BmLr30Tye8zRO%2Fo2lxQR0uu4GY%2Bs%2FhLNVV47XYE9sDf8yNMnsmnImc3tpJ2SMr0L5wIYcPnloHRd8cHZ80%2BaOeBOHib%2B9e8SQ%2FDZvVidGyw5lLDBdrqWwUdd0bqXjyJv85J%2BBN6UDWm3c%2Fh7O02d09OE4v13fYLTeZLLSIHEseT%2BlCe3vDxP3JH0Wn%2F4HANgOW%2FAQ7a76lQ443pjjr921%2FsAragG6XVta17ZicrxQLsIrZYFCELrthTFEI%2FXPGxJZ5iYADpW%2FRCueVG64EX226yDsYgyaJ5ods0DevmcODU8i8XUJs8rqrGqrLi4Dcxh9juoN8kKIbTSyz8rS4yqYjzJBWtRECIuUQ%2FsqgoIkz2CGfT%2B89v%2Bs%2Bkqi77kE0XIzRCx8lvI2pyqlTaRvTD3AxTv0zQrBFq3uBnd0HYFOxYrCo7jZm0C%2FuD%2FnjeFjIu1LdeEc5ECU7TwTZ%2FchL%2F9vXmId%2B2ooorLEan2GB2x6YNx90apWkQZmOgHMLbZiMQGOqUBQcm5Op468OAEvZn6M%2FNiMrJk6CnDzo2wwaoaweBNa5ljWurpeA8OT5tVdF2LFF%2FnVwE9Sedq0roS5cXy4KNwOfGbBcumdO6rdXQigRWmB%2BFEQsPzFCuQZj03GA3oIKlJBNxc6GwY%2BhTaE38oVjyHVne6Ze9LwwANQ%2BYoXFpr9GwZoz3NIrHl3hvdF5zSvNRm2u9P3vex6ZSNIiC3UdX9VZQBdV6u&X-Amz-Signature=4d9abf07f90989092bf4510e786bd7c61892e539139418811dbe3ca79cad1c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
