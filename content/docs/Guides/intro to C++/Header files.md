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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RP3BAUS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDN82MyW1wDDsyWBu7F1Z1ZDIEqeetsSwxTvdD7cOPQaQIgMhQmfqe4HzfT03UI9kLLKvFnX51%2BzryqJOOmu8Lkg7EqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcmtn5OxCFfk%2Fw8BircAy3hSWeBMsvfcrMVC%2BVbvviJ9lRqgwl8K0UupslrbbvZAarQ8x8%2BS5s%2FsHQ%2BE1aDyWx1eLyDVUh%2B%2F3z3ifmcIlyLIfBDiqVHTWIJCwf5r5DGNNGgUf9tqoL3yt0KagViayx75rHkpzeqMtD2WHKhTcDmmN3nH6M4drjQFbW6dSrP07y2beP%2Ffq62AwyZCZ8FPY8IC9GR3A95iJb%2FPB9ZKDMg6qq0eyy%2BEuqsYqyIJOOs%2Bg7LnQIO29%2BRMWSKRjTeDWHTtFlbXHBVuKu9aw0sXmvR%2BVV7VyJ3QPjigb%2B9cKqV8jHzVvpq5EHxneBnDwEYuR2QVoNnAhwg81qXG1jLGFaBDCNDYuGJ6iuHkYRAQnjo8Rp0ad29toJKCJrjGeuLQU2O7C3Wr0XFxEQrZg9ttDQraX0JP3qvkMQFHpMO7tGXAG%2F3HkSy3lHTzt0TIjybTPDgQetdfOd1glbPYtcgQ0NiBsgojdzz1ZqNi9akcRL%2Bjchh62%2F89L6IQqY4zmivGgtElh8x%2FAdPmunoyQIwm6q%2FlCSH8dU3NUuAW6z0B%2FjjTZ%2F10nWoOD6eAEMHE1iYoDn56C0XJRSaXzsC%2FH6hOi0xGms2ORu%2BWwDGsdyNSzyrSl9m5dWBaOJBFTByMJuMwb4GOqUBlM3q3p%2Bd0Xz5n%2Fd3agx4Hl6fZGudpOklHPHXzVzoD2UhJ6achoJNECJ5PVY3Zu9VRdojnakYJZ7lGLFhJyePVT0u9H8jHxFYmrqWTTBVOZ8BaL6x8uGVppS5m%2F7z%2FZ7gP91cY7HNG7AhGiHSnGJk0F6qNQF6VH4wyFAkOgXQV1S%2FxXe317twLe7I1lp0%2B961Xn57AAvsGFiEWW9HHgnW67XuUJ3e&X-Amz-Signature=0138e4a8ee8b9749b96b24152690cba3783f73829636597c94ee667860f15df3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
