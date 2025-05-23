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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JJJ67S%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDy2Mh0qHx6MTpa2EUYwl9AfxJQyfZcCVWH8VfeRKkWSwIgd0bdRZ19uLzkLPgOYNMY3Eic9NEJtjpsbretFsyANqoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIaEDaI0FFh0Cx2C%2BCrcA4XIMU8FK885dkrl9kp4P3bCBZuEeu%2FkmB85YlAYa0j5nDUSnRpcof3VBCFXjPc2jlbSjKDIi4TbFl2FD21Q6xwmho4zRBQGdKqnpUZSHs7Rz4LXq%2BXTOYKmGrIi8gjvr89jSCw1FG9JUtBVu3pckavZQumfQFyBGnsKzqYbCYNWOf9%2BC4Itsd2DdDh5rlYs1xvBozkiAVwEIlxq5wRQs55pGa%2BShObvk3dcEGbhN2z6Avge7Pneoqc2WORkb2DsEtrm0lMdlbclvotLU6AU%2FDiSu4GyMFqF%2Bug5rvPuFtmPiB0k9mNhB%2B3ne9hWMZ8lPmsZ7VzsOYziuclGvRp3jP0wTQsQMJe5j4i5WSRN%2FHqNPIcCDD42Fef%2FIUJDFMb%2BtzhzrMfaw%2Fdc4A%2F%2FuaHASpXgBIEca97XLC%2BMhxhzxEXvvhV9t52Oy30ixTy9OgKLbDp4s6flklKT1UXp2D27mCPh8kquS%2Fxg7ALZC01s9YQEeVx%2FB7f5%2BBPcOKNbQKOpKbmAH5UK6yORazWKh1%2BDxYxaqx%2BZktah5P6rCCNG0a4iPgFjlO8Qj7pkL23OQP2%2BUkPMku1hOeKrZWrkos0NGq8uTk%2BGZGE7BOIT%2BQ689BgxbPAj1Kb%2F4syTChwtMNyVyMEGOqUBRQRkI6nlv%2FCoKJIt2WBtO9CUWYBeF6gxGx6tA3IviecsM0oW3rJagG3A%2Fvo33qiz8dAnYWyVZBXDI3NEUBqcWu%2BVwTYvHXa%2FAvdOSfQt8x7MNeVcio6BHl5IDjON6Iij9OROY%2Fu7oGmJ7m9E12BX7AX%2By9xuKxMXwikcdYzGR9XndA5T6BN850GOuInfNEOK4gWeBmLBziis6T4f%2BDKlJCi1%2FJYr&X-Amz-Signature=5befb899749b70713737ed0aece0cdd9446073a75132e2b9fc1a6586a8c6693f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
