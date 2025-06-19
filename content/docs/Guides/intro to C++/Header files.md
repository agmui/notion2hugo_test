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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHWGZCF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOzc7MvS%2BtR3LIsffRm1Q1qPEoo%2Bbsrd8pL1IsgA4JbAiEAgkDrb4XBRsyM6EpD%2FcgVG87nqAmxFawNVpwLvBc%2BHoEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8vuHn%2FPIVzROX1qCrcA6GJnUVRqRUbI1Aet2Z0Nzvh7VH1o2Mn%2BWjslyjJICd3tB2FTa1vtpBldHRoWBkFuAeVp9B55saq6w0PDWYi6xhKkS0NjwhTga1TrisLc3AKWU9C8IMeGq6d5X2v0eamyyNp%2Frc6kyLncejuLzWJNxuoz0oN20TwHgyLaCsCifF7bahJGvFDqHW8c%2BAvS0%2F9c4h9ScW5FLj1RQIhfYRjXN5JzG1eIDyirgkHrksyIO6CvXcipdans4JIpv4mRzL5M4I4bq1gdaMTu9twGI5wIIIm6%2FbcIidKXT6%2FCkVJ4Ou3aDyLupWukZurws7JFAcyIxnIlISEMn0AASHo%2FCeGdNivGdAqMKYgCXaNG3eL9VjhmAvI7ntQvoniIuAIj6IN4TFSjL06lxNH5ontflwMRJHyQW7ovOPVm1mVbKM1h20jCr9NDbYnsYsXvDJgBTe90rfSPOh0t7ghW2UqGJ2BW62Dp4Silwvd0yvkC4JZNKG1yydfKvK8B9A8SSiULL7VYTfwGg2CqMvCLEoe4k6AclVo0XbOrlRjjfjqcdET%2FPIjXeae9QrVuZOCfJ27%2ByJeayU6PuEIY%2BWJo9%2FoYArzsrbXn6SbOp8xJBBqIUdD2263lMXsEYjSIc%2FRnKNPMJSJ0MIGOqUBvW6zCC4hasYk4T8S1%2Fl8U%2BJULpYCDvk6AXHndnxObpBGyCfGomCNK4qx7crf%2FsD1UHwk7FKTsRC4Nynq43WavioFV153LuTwR9GDHBY3STNG3bD7VJ1mZOPYS9%2FGrqXnm0KYz5gdP1R72yOdvKdv%2F0p5MWkwx1BAf%2BTigmGHH7GQ4b1qS2Yr2MNKv8m6t9jBW5QZ6J1YLSWJL3TGYdMLLuAwApe%2B&X-Amz-Signature=9d33dec13f9bf411bba223b4c4ae1ec5cc8a7777598ebc72fe337b73c3a14e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
