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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424UDW6Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCF4w4QIRz4bgO4h7wUlwLtzbcMNtDxn%2B7i7sCnuvboUQIgVnk%2F8FWOpHRpbNMyj3Mx4XJqWSFMv%2Bw60n3lMxV8YUAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeZhY2%2BnW6cedpRHCrcA%2B36vLAAXukDWGxklZFC5P0o3INO0rqXY%2FSoXfZo1sfgnqDHHX%2Fk1Q%2BwhOCMIQUJ6E6QZAxCo7YF9i8xTGSbVHbMV34y627Z3A6M2p4nJrpepUfFEatAC3gbFsIkdvYtz8nhZFoihu7sce77dcOToMVsuSpGP%2B0lGyOzgjL2FhRJEKW1B5PjtUJNdG0DGbVc5qQsqDmwIeZx%2B%2BmO%2BIjg%2BuOGAP1PwjQrM9baByPTi%2BVqdTyreaeVqErqAQCiUPO%2FeW6f97HbZqZzcfyuN6h29%2FoOU2SS3idNzS4WQz1xkr%2Fb%2BVxf0sljCPbKJqGU1nTtnu%2BmsH%2BTx2%2FWRPUi%2FtMPL6vRxED7K%2BIcrfZtl5n6DVV3VdYPTksOLol8Bxy8wfhKvarDI6%2F3rYhXirsNjp126eGj3fuE1CDHqb3sgGJnh1A%2Fqre0ZDrk8qBUFzPV7xcCoOFRwXHd1aKyAUqA2pMx%2BhRLEdTGRSiF%2B%2BctDv0oNvTgsallcLI7G5c5IqNdmc31V0Pi09ygck03y9lkwkA2ET4KFILMxl0bSGALQ84sb3ve%2BrZayvrEfpmY3ne6M2sc2Sd%2BqE0PKnH8YX8ObZvmueMEhJe37TtTyKwiAPxZrq%2FKGP6PcaBt5hi1n7HUMN25874GOqUB7XZVG5dNpfQ1SM7rqcsz3ClZEYtkRc3MjjDt7jX3MKbnvHNHaK8PduNJIYX%2FS1U9k9IhFHeglztjPYbQ6TOE1bOFkrUQ23uDXm6DBKAz5Ltu%2F4%2B0KkJd3KGACI9UWlOXzLBKCcfyWCcoJAJglCDZtJHRO8ta9lQ3QFJ2DjVqEuj2yIyuhdNvbix8FfEGKtpHv4S6c0rEKTVF1%2BbfUhq16SQT4ZSE&X-Amz-Signature=50aeacbabeb963f3b18db75bcdb77c534c1cc17a92329afc140b75eaf148f20d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
