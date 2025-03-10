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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTRMTWCT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICAui4HyFJf%2Bvdb2NPB%2Fj5%2Fd3jo8YJ0s%2BvE0VNaiVP%2FLAiBZPmBDFO5DVmQLVkoNEGXEs8pvEkHpJ5g%2BgMp06lYJhCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnHp14LOx8Ddeg7xsKtwDoTNnXTGv%2BZsM2z3EZxl6Ksw8aPdZM2k2GdlBGoeJs72Uh5lJcSFoWjOJ88WxgCvOh5vg8Jnc5xz%2FQivt1oMA97L1LCDL4IZ8LTJl0c7BOanVtU6s71ZskE9fgCS1KeaZObVLrSWYU7WUioaOoEwbLB7o1CK3W6Mxr%2FsG0uA7J2NJBXXhuaB9EGAJkuzcfKU6lcdjqmkcnkT%2BqKM9tEr3SvB9Gz4soACVVkSpt6Eh%2B17pMzW3fZ0WoxwivpS07BPBef6EjXzLl3Yrrepb51vpOgrywoScxPtkKt%2BDgBeUJwec6a0xlb05ezaFMvGgr0RyYHjhBMhE0%2B8isCxdrpFxwiZZ1YigVzqypRaQ5AIRZ2dFiyDXRjFfCWfJgDx14UrGmMSZyj39c7%2BW9Mnl7632tj1I0TWc5odQiot%2F20VeT%2BJXJGlGrOHLbKuTWI8J8QtBIPEwRm%2BtFDVsxMIIhV3sNTS4YJLtdB5imXZkLl0OfOKWwwO23Y6S73rlytBA%2Fl%2F6ngXJ4HKRlYka2lDqj5rj1TaWNd7mmISM0hrl7%2Fl2lyKRqGC2Fcuaz9X6MDYhDfvr1%2BbgFc5grO%2FtfpG3KmKbTj%2BXmu2HtdPDh5TuQwxF8cnVwquOKDCbe%2FNG4Mcwnvu4vgY6pgH6%2BMaNJbiJF8O7R51G4DbYQoIoXccBnPyc%2FjPCrlHowvtknZgJyu0Q0ullQEKjvzkDAXYBxOltytjM6z1oPQPpAVY%2BCocecXgqjEfGxdS7YGQKG%2Br9vRdhIWxtJwV00EflFosHbF7XLi%2BVCL7D2%2BETSZo%2FvWfGHlZfB5StTtNWqFwXrO%2B%2BTv1Udl%2BtmC01S5s7ZxttyBLq7uyOYJqlb%2B9ImZH2jAIZ&X-Amz-Signature=3013eb5fee3a36eb7a06ce5605373969bb34dfab4e94bb9c348dc82bb07bb8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
