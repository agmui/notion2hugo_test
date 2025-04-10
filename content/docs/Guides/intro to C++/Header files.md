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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIPRZWW5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAdKvcH51ah14MOhJDaHlowBGrrC%2FbMsBaiMR%2FC2%2Bb4aAiEAzEEIarM9sN%2FhRtvUSrzLfKRMrm5HBJjcAJ7%2FihV0aHQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BV3NBRrB2hSctlwircAyYoVgt84N7pEkuktsU73cHL2zhpbRHSaTr6JPVgDzP9hiwKQq2N4Qzf17SNpVDLXbiBsH3mLvI%2FQVE3ZegRxN0qBYPpm0dtAVT6M0NJkv1DzJyL2FCw8Bg%2BM2ATAmxNeoA%2BsNxAYFl%2FcNhr0XIa5%2BHw0FK9dnqdjGYoplxxBGb82mTlNJyTCyn%2BhEKOyR%2BrXqATucsPIMRilaoy0YjWv%2Fr4u0bjE1%2B%2BS1iIb81kjIBGEMHOQDgBYrVJaytdsOguhtEi1qp54dEzEwJfYKbX9Hq2Bq2cr7h65q6%2B0wv5p8vJ3IAZUKNYkvtw6NifZTvRHFEi4xWyWFfc%2BNqkDFFcqHt8imw7ELiYZo622mvzSZWpRm%2BqTROP9w%2BL%2B4K1qtF9wusut4Hnm0jaCrWaNfe27mzL2vlFS8dUOaleexmFd1ZYfiCXhA9cqw5CPMpTUHlKDkg2s7kZFVJsRVlUhpkfeqp9l5pqjcU7%2BprMcKmVa0sz0374vdvsENJ2zA6Oool0dtYHei7KRsf%2BTf6Xz1ucro7uk3AEOfPkwI3auHPR0%2BxEsb%2FL4meiz3xhMIEA%2FD%2Fcc5cuJPR51rd7sWcBWlTYaLtSOx2WnwhygBiLbDaSl52%2BDeZeNnF2uwbcfW1WMNnF3L8GOqUBVw43t7%2Bpx6eXSkab7J7dVjRQvUy%2F%2FIRX4FCroDAAV5%2FqmfM9h6QErNTr3mlGRnGstOMW2iNFsBqLCY8%2BSJwDW8AZY8d4CcQuHgb9LB%2BXTk1DGnW630hQdmgTPxnJUzq49lJzRNlx3aSEwyrv7ay2uAkN5LuUyeRSqrVIByKEkqyiUxnBeefOwmj1QVAwBYfH1o2T7C9ZJimOsdeVG31jH2hITjj4&X-Amz-Signature=39d8da9f81bd32c26df14a7aee505e843ea24774f4e2ef7fde214b4cbf8647ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
