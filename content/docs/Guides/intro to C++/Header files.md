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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARTOYKO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHK88qLQwsG3GsrRhDdnB6h1gPnscSymXujbXWNLtuxOAiEAr2UTIv7oe8kbiKFsSsN9CCsySgVKv6h9Qmpo0FJNOsEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkUFJMH1OsllEKeUircA1jRVm9GJRYzt9J7RcfR5wVRZQMb9ouuBHN0fG4O9P%2Fmhki%2FDPSIaePBHR7Vv0GYJGwgEe37Jy6DJ6ACbwSLMxpXjIEjkYfG6%2FpEK%2F%2FmofK5ILO5BF4O9UqkcwdIyKEWdc4bad3kbaAxCvnFphP4tF3%2BSBN4Zfbe58fNwo7bHT%2BY%2FawSNutltooVfJajvXxFqBi%2F07YdcNAToX2LnTltaD8jgvD%2FRiJ9PPo%2FYPdsBVwGyLzZN0sK37x8U380YHHUKcCVtlWHaSj5aXGq7zqxmfLoDFCJJ%2FogzW7XBY8WixQQmR3LrjApaQQIGLxp4%2BnuMU4SM857ZJp4Xzy%2BxagxuWYqQnxuDU8x5i09xY1spUvES%2F51MaPb3beaF8oOdYCoKDxm3thPAliXELc8n%2FLv2kmAKjJTUbyCkHul%2Fi%2BQxYVZGXI0daktScsm5cC6blfLePVu739LHUXFW9XXLRUSs%2FGY0p8kWwlrlbU3xw%2B6LxgF2LC5fVkk87FFmSGn53EMlJci%2BQFO4s4u9wUbC4uq40qhBqFxSPCLF4N1PMILU%2BeupgDnuy%2B6v86PUXhyHBB5q0weJzgH8SzNr1cDIKdKt4N6tozZfuCZREFV4JGuqc14KdYOpUYelibBT9ApMOmKgMMGOqUBfkJzVBrChUZfV16htUx3Kjd0jHCe4oqohaCzj%2BnswlPdw5VdhCZ3vcstT9w4vlA1DFYaJMcFgluGVVWE6lGzR5G9sDeqUxj5YUF%2BHr9VKr6lYDWp%2BCwy5jLKx%2BGW0SpPuVjcCSCT78bhs1plb2n7bZQgeWL%2BPKiWOwtiJkZGv44L1roYgUU2KnW1k8pT6V93Epfv5FN8Fy8MtVInkE5LkEorC%2BHD&X-Amz-Signature=01bb7bffa48926919de3789bbfb6a9f36a738a21cd0e7430acbabe2189a41741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
