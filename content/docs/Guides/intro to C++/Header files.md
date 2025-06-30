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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5IHZBD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIkKooy2HpkBTReKEAjIveu9UxULuN0SheE6WYvLSRtAiEAgE4ZdA0URGdukAREJ3EyYLmX7fOKY79b2IuaI0NTlrAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8dCSVd8EjvbzUnaircAwixZbZUxbfpv4p0u4qDjHMfCsAvuRatyqhmBaDexDy1yODvsuxZSPFoA%2Bht9YQdTOC5TluII0oY3JLdeEGQMjNSZggsto%2FUSlChKSI6D7YtbsKDWOAnl7WuJgtQrJAHMbD8pCX5HjIfzw1MlgtOgmdNc7SIyeZFflEJNE9RffaAAjVipsvpdfAXnRUkNaH0pK7yX8OhjHGrhMhASmEEERCc5rRAuGmeWU1OwW5dSyTvMJ0xqQ0vVk1l%2Btbotp8TCj%2BPLXZuUk6IbtGjhwo51ZDgawrdK7CR2ZHIJa2aze1UKw7ESa0cAIPg82BievFpaT5zj88Ol9OtMFWIpQdvalTNWA2afPKsYpPCuw0R51KeUc3zKFcPudL516jrng0y79Tgasoog9UnOkGuE8VSc5ZVBq0jP3wbue2fxztmDsDgXoSmp9OxgTtynalVgouUVKFEVdo3RlApUyn6C3tOmHPcX9jwwdC7xaRmDRdi1bjp9FCYUaCfrsSiT7BTX1TfP6pbG6b1YDiNhJAaKNVeVsiXRy1yBJWsZnefM9FsV3WKFDpGInNcwwyj5basv9atAZW3SzYX8%2FGpNN%2Fw4TmVdQHCgx2dZ6jzv3pnEYXNqe0wOHk3oEnTBWHqlIBnMNbrisMGOqUBdc5IMLB%2Fwy7brjYhngBcYSjvm4fK1%2F5Ub%2B3S83mrQ9rNy%2B77wV0T70oADm5Lo%2BqMU2IbH9bCzYzuyH7vVH5yHa9lPqhe1n3IrXcQUlnQQer1jIro4WonqNCmYAqmI8Yk43cYr1GuXkzSEk4eCK2nYf2pCQkscX8mu9h40DIoU2OVSHFqTUQ%2B7QujhNEXGLrg1XbSX4tqXStF07S3g1%2FXRtYJqbW5&X-Amz-Signature=0792d86daf98b19b5aa30548f9165f8d8da7409724f9bfaee9bd4748a8881281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
