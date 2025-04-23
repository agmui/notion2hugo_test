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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFXTFF3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBGO%2BPwjCApWcNDMawmRnp9vn%2BZWx6PKYwGA0qJiPF4DAiEAqII81qBna7W9qf4%2B7KFh9JExRR44jCBjiXY4PhYYPqcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi5QuM1MuABOMKZYircA84i7hWHVFeX6zeUddNFWJp0QMQsoI4TuM%2Flnnthn6QccSbidJo1cb0HZtGYOk7n%2B4xE8y0Xw20dlLWhSl9m4dKXL2qS0qe9ktDUQWNy7S82tWYfA38G7gj16LpU8GcsF70XFgE0jujTWhoAFYSDpLiQUiF97H6YnrqrONPLlTXNJrKT9ut9gkXAXUl%2FK%2F%2FQTuqD39Ejr%2FD8ti4t2yrXn4yCUiYRfQMyNUUgAdt%2FxCA29Ctvl7l4QiIeKzUGrS0nx2nMR91eNeXlYP8s%2F3jX40R8dbGXecayV0plJuue9c5sXqr5dCC2Nx3OBQ8O5bO5BkEwcj6%2FzIOAIvVW%2Bmns7Sm1ruB9UXihexAeLLXwpRd%2F7vUg43li5p%2F66Z6dZSgxpLPz6azszhzAT32m3Ic2TELqnpltWFVg%2Bxw1A4Up%2FWgL%2B2c14JsfQFuc1tqIkIoQyofm42l4m3G7vONLTxFlmNBY%2Bsy%2BoE%2BXTwNe%2FcLw4pMvtn7D%2F0wz0cm7g5u8CigUieCcnhYITOPnBy9ce1N%2FTRaEVulgnI9VblKyP%2BCJPzzul6sp5E7IUJBi9OJAFF000q%2B0NmedXN7DIWYMu9jpOXTu515ALXUTTp%2FDsTKJD%2FvqJMKnNzZVvV%2FR09dpMJqQpcAGOqUB8xgqb0Sr5%2Fj0Y62B%2FCsArWWW%2FWwpEIuNmpNuwW4d1l0KzNkaakVizQoBNW2rVTlB0%2Bb7g4mwkdrxukbfbcDaWlPK6Ugkk%2FTtR%2F%2FY5576x%2BGMwlE27awadUjxtlK5k4OMXqJLCphBp%2BnnE%2FeI4%2BDa1CTu48%2F0%2Bzn5MvyEI8burIWhjVWhqX8pxon2tRSPuV2uizG6lm7pZDYbPSyoKlElimhh6WOe&X-Amz-Signature=55597bb0beccc3ccc92ef8539dac7941df8224be2544f61280382f392e0b4cde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
