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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEXZPWZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQAuBuP9%2FMDLi2VcQ93U4g%2FUO%2BrH5LI99EzoEnjqB%2BhwIgYfAS%2BL9MVzzyeSqUnMrG%2BhCKIkN%2B9GqZ58xxAS0JCOcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOcVz5VDWQ2QGrupqCrcA5KKPnH8wtYphu5Oyfjks8zv0ZewwgUEyyw5wU6jEZVFHUK6bM%2FMWsqFJk47%2FMQqiIw8yQlxPQv%2Fwr%2BmjlzI8n%2BzpZyRP%2B6EtIrnqQqHne0mZy2SUlE22SdcDnDX8wvgT6QG5F6oYLo6xf%2FI3SmQIGDpnzJax6KI2NM%2FbgN%2BNT7zrhvKTjRTTLk1mOpUxg%2B0RxENtAE8BT96K9Ot2sPjcmB%2FjifJUeMU1fP7%2Bn%2F5CUXdEZE%2F6JPPu8oOJ59w3bDCM%2F2aojzeoF2Ll6aitEnfHXg%2FJWKFAeKCoU1p8rFR9Ire%2BWzkMBuYjyJXNKgPHnNmMbFhffKZ0YcmghLnJjWyIccpyfIQhdl3csa0BJvB1lCCfN4rGg6i9AbF87g82XaqKAO4CIAyd7beyjF%2BP6kihPNKV%2B34A5PqQEdmnfnJBfqXBkFnqbFQG6Q4tOdRt%2FUDZoHPRTx0RhZoFNlQx8yfqnkGa0EhLmMsl%2FWp9SBX1KXnxp%2BhX3ybpLjdEvHIfY1hlkbox2fySc3mFicbv%2FeG2%2FkoyPCvN1mm7LagtM6lkoEIpGBp%2B1PRs5cXZZexLLlck6Xp2BeBY7hkyfEWpdMQRuKiM8WWJ2qFRfj9UFRuNDBFG8LPMhJXp4TIikb6MMOr1sEGOqUBL1VasDsybqW6qgtHp5XsAm3hzdEyljjfxZRDMfESHvegwmlX7CyR83RbpNuumPYhQpUM%2FVk%2FWwa3p0o0oiXUL2rOLNw2%2BFEfsi9lK3zrd5IHNB%2FhBGc9rxYkh%2FmJGsMye6f%2FoSuoFfEFLRjgd9bqMDSKSLPWThP8bVq8%2FDkm7A4vcT%2F9O%2B1KHAPIMKvQjnyVdttq0D8W3AntfzPQcXz%2FI7WA7MhX&X-Amz-Signature=9716b7556e287c9e6c524a28b1723a8091dcf1df61ed2d7643d3efb661424061&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
