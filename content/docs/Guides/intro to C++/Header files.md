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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTUBRRM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD5Ly6ibdJNKkiIrftRs2QHbKEiKQCCkDOwhvUsnUOcGAIgfl2BZyk8bOzafVVyvritMBjMQmRhXo6YwK6EGMuAf94q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDG7yQv2Dy55PVC0FuircA5oguMuYAaLtMDkdhKXh83n%2Fm5whwr%2BFQnmRDYo0c4k5qbf%2BFXRn6tQ1ovG7LTLtgAqQlE%2BMWIdcMaJtvmY4ES0DivU3Q57Pp9PgVsRNWvW2IM9zAmkxAmrB6C3WCSQTM1Cq5I%2BohdAmzSR7uMTg4JQQNP0GJ4l8zObnHDVm%2BPQMHHs8yeZFx2lsM4aFB8LDq1qOW%2FI0CLKIm9H6JOm7XxxZ1NMno0ut5jXtwLINr41Vtq1gIAKNIiyFXHeTvztzAoX5BnTrsn31VpoDgfmp3Bxdqpc0PuRgVDWLHU8V6k2ip0VVtg5qKsIZTIC0VRnhY21fYZZqtTFuufHUmMMTKvIhGqyuFKr%2FqsNKbX2BAUTiZxdZKkPBF5M3TDaENWrHk5lwg%2BdD09NFjIvYVNFOvQ4jZUL%2FLSf66uiPi9jz4B%2F%2BV5zQe8YlH8zgxAjrHPkBbUUq35LZXjHODZNw0k5TPta2%2BBl3eq9%2FmTB4vwRLsCYBIMgnJjdtchfzRwGWnmGIZXreu7EZsScY2o6sqFvq6ayLz0MyrbKGj9s3n%2BrZVbby8Fw%2BlJBd1wQYdtVSSxz4Aui%2BygUiDqQWwaKiwBZGWvUiE9sHr92uEqQpGfmBvx%2BPGkIOybk0yN2y1nDWMNaD2cMGOqUBsRgdTGFoqMUaTKZCKqT3ORn%2BqyUFUQWL8vfrgp8CmB77coqIkwut8yrJlbKFn9Fed2DbRBJ3GlAlGXUjiqB7kBxndQCz7SFptEoUzEFknPUP5WGqb95a5TbVWqyryBNyl01GM5ekWcEXKGuXbensrZdN4k3t67t126DdA839srlGFT6U4%2FD35CdkXVSpBLCmhdMDrWR%2BjmlQoDB45IsKLHU6E7DH&X-Amz-Signature=6fe11faebab18dae5282839cf6a771f907c83aa2f44071ee0037d84fd7b0b6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
