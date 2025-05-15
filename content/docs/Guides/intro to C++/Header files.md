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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6NMDPWP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC5HxXfU0blbNoj6e15U1TECvfdYOIhTTGoQ51JsnnuXAiB5DKk5OQB4qLi%2BoC3VsLRYVRKRnvKIaL5bWdbC5PIqdyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM3hVb3sdHvvd74hfUKtwDOtvjsy1RO5Qwa%2BICS28pfN%2BOAxb%2Bh%2BZY8WmWAeXIlB4qYrn3An%2BhjF2SZMNmwcc9vGcM90RdwIqOOPUKw3d7AOVXuZmsDMFcaaaKsYsMVmY%2Ban8jQmkiOyXQ%2ByFGwBvVNjuQ9sov0rSSCZELiRk9KIZBcSj1R27nu6SmtNMUY6zzfahIPaHShKh3SvZLRcuKGd5l%2Fq7iQfxEGCmDMK%2FS7iPTSTE6BuYCNkNLfFpBHYftL66KMyK5OH70QW3gYwUW%2Bi4I3at%2BXy4wRDwPLG8wRsPdHCuus%2BSlnaPBs%2FtYD3zUpEqxgb4QNTe0geq2UPTOwbJmCVbP3dkAZxW15grX1bXEqoYQhwmYo9GUqFhsqNYfaM0KdML%2F54B4NWy4W32btEx9%2B6YTZYUj00kth9L8VFLbFCwxB7zFHjat%2B3odjceWvk%2Fm%2FSbiLPDwdrxunKjwebfgitDEDhQkfc5YIgcgrfkvTUrdjwTI2nFyS1O3n6kmruf64vCxmscNEYFwBfquFh6w1kGi3yEiZI%2F%2BEXflsdoJ0GdHyKWTS1apHEKXJgwHyAicXySgEaQVMuwC7H8P%2F56OLVnVToFgyUgDIcKBbYw2ZsDewmgfgYC3HB%2BXcLUFOxOa9wxm%2FHJ7gyEw66CXwQY6pgF1sN5VwWzYOu%2FMhDseadsOIFhBBMVhs65V5voTAvAkkLS0WPp3aCc%2FTg3eRz%2BU4f3T7nfXRegWkK1jx5%2FdDZnxbFOJQhCCuLOr0c4J2zu3k0dIfhkCaCDas6T2N47I2kS9W%2FwVwsCVsynL%2BrYbb2pNvFQxWyIURKnmg1iYq2rYhSIt%2BSQrEegvlr0G2APaneHUobXPHeOO9mhi4C2YKy%2FmrwrsJ7ps&X-Amz-Signature=1c651476d8173a6e0e8e5a0698740a1d4c51578401aaba43ab9bee526949e0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
