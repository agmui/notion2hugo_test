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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKUMYBR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCMfQJTEtQaEpaHVOifJadWKGq2IRY2HsgA4DAbPrF8FAIgAgkcwv6RcfK70eQevntaTa5ROZUEYjpL8f2ZXVrpm08q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFDGoxU9m4RSsQMsxCrcAz2650%2B%2BIqjVTGBPj2y1RQy17Pa7raJaA5BHJtDZV2qLWerLMS2CgobFs%2BYeA%2BOuymDX1z%2BX%2FzC24rSepjEtq4uqXuhhw2jcuLvUPmzD%2F8RLpOHzMcAr%2BJ%2Bf2tosPgePyuc3A8xvzN9CTumWNydDLW6DNpFxgk1uaKM8%2FuSCdTmjVOMIiJ1rP7W4erEJsZgWH5ZTk72crQ2B2UJNHzVOCYClThLFEmy6Zirk%2B%2Ff9rvV9aMjes%2FecdejMA%2BGGGVD%2FFTTBDlgALdG%2BKTEBXpgPqrVo4WPPjo3m%2Fu5hedp7kJbam6Ry0rIUyqT0inq385BfFfw4P6sGjnRLQgui1T7sOI8SDFZiZ3F70I3snp91KPXm1nHznKY%2B8duLHLLwtEc9%2B9Hu7L%2FXyDWg3ED8tDhI1vnWrlowYKlUk%2Fo6pQ%2Bn8WEHZ%2FDh2HnhcBbf0LeIQ8%2FtODSdf3jFLx1romhlSyaXjvAlJ0eb3BEwJUdUEuf0ZiuXwfovIErecEa0YTK60FI6Xelwbl7xIpzX4e2Naju9t%2B2pZBC1O89j9hBV6WRJyCiqzLYFUlvRim%2FXpCdTO8sm92NCyt0kRp%2BE8GjDM5ixnwJ3MeBTwwr846ONwNlXDW89NgcDaQFOTdGm7y1AMNrX%2FsQGOqUB7MF2P8jeFmlrr1rxTpgYAbRY%2FWkejWFD2IiC9ZtF2gPdv6WtrLfnvgFpCgBheXcoSa9ryLajRGKbuwo1UCcVTOFtXLESMP%2BgYihSp3xt%2BOFr8%2FVpMZqbsuarOdsqpQn1Str9BDoic151dNZd5w1lzRttCZ%2BvWqcoxwYECOfJ4vbXQrF4s9pQZ5Xp3PumW%2BNnlwXNEEVU6HIxDYq%2FBwRzqqFAeSVS&X-Amz-Signature=95d5126dc660f4846f46cb88d84320d1ddc3829d9158659b44542f57aad9e3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
