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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTORJBS2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJFMEMCH26Ykk3MPN%2BDAoNUDgQxY2098dyGLMB%2FgTHtp3XbiCQCICYL4kND5dd%2Bex%2B2JDb2rGDisNuJGs7%2BRtTZ%2B856l33%2BKv8DCE4QABoMNjM3NDIzMTgzODA1Igyvtz3JAhplaGurQfgq3APR2aH4Ww4VXV110iDauRA%2BeSFfAsG%2FHQCVVszJ7VikKz0Ef2fuX6ho5Sbt0e0Gq5PpWUVQq8c8%2F32bmbjtDPRnJJHu7f4pYcLdo9rukuZ5wpz5ddTTwSOTrur2apMh87vtehlZyrl306qQoyKBc53ul4%2FvQ1YagKho3Xk4nCr0ccoqw2qRUTn2by%2BXzoOXK4Y%2FJcRBrmSBihEnlORRZVeWBr66a1fgaOS1siWuV%2B5djj0dBageOUa0TPt9j4inx7om7VUr0Xy3lOf18xtEbIr344jM%2FR5tNm0H48x7wBHM%2BPtQ%2BReLf5twWIEaymZeKTY6OwHcI3CJGQ%2Bga3MnPNlNMIs5ghn3DW4y9gvur7aepiQrLYApZ3%2Bl25U4xPJtPUoXqvEq6zcsAfEiao4Oh5rH86t3buZU5H4YbZFN%2BbxqYv6wqd0FT%2FTddmaWvr0ZYputBBuxAOUbcKFxtyKT9JLDVqqDpfvAqClOo1Dk5xgTMWBarruV4X7bqQbOY%2By875ewkmL18rSyV8sDQNdo3bFKyTjU%2BEt%2F2GETmoSe54D5YoVQjzl7GAiQ87w41tIaKeqlF%2BuORS%2BIFIXDls3TX1Gt1XXek8AKYwyBmcN2iRdVsOfvHbsbgeDpn1FoojD79MO9BjqnAVnkv%2BSPGsLgHIGNtn0AJvsyP%2BWGqD0cE44Ffun91ulnZ8Me8iGIp1vSmMu7BgfB6E%2FLT2C0PrfhC2xm%2F973PYD4oP5xKxr2tOK1MTFJHLI9uMOqhtRpKSvcLewMj4LSOFRysrMmSEny8ZpB%2BGCLnG6%2FR8UiLvNva0a7k5q7NbTn2SW%2FNgHD0bLQVfvrLoW%2BnnFKPJU0%2BfzqfnjNWHty0wOLYw4MvuHz&X-Amz-Signature=5a2c80ce64bc387f14bd80a5671e4b9a0b452109bd0d505edd7980c9ab0f206f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
