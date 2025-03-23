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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBLHVNP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDirEA%2Fx2YpIMODk3MeYLs%2FM4uAx4kqc62z1q%2FEeuypegIgNGleyODzGhW8qZAVgelAfauFC413t9xzvmUcK0EnhVAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI64uEe%2BYGdecvpzNircAyKTboAvZBUkZ0zlIrWlJenayM1iigwOdNPB16XczSUvsF1lZQilOxcMoCtVonqeSSJH03quCnO0QmX23zyi4sDWUBrNXUSDSpf6M%2F7oNVlL%2BPhEtFL8ffeQo5NNrMhbbcNTP3YJc6bTVBLNAVArpIwwiT1e%2FATO8LOSaXOufGX49ijZuJAtnQuCyvGjr7Xgzkk5EZ41rbWxB4s1v9B4AViuFYj2LgSTfeatAkeyqphF2WpP%2FLxkDfDD%2F0q%2FAvRqjmTjlBvE090%2Fi1FrVi9KRZ0aVWRTbQjtnxSF07Hul%2B5%2BzZH4Rc7d3kHomjCxtWb%2F1q%2FcOPhbxOHvURul8N%2BMMCnCSMoqWtoXmL6iQ2i42RjYCtouXhucwkOoe%2BG6QE4aa5bvMbz4f28JunEhcpb79%2F5q48mZC0LHL3%2BTQphdrAc7u%2BAzfGkfxuWFVWFR7b%2BA8IEht8h5sqt9V2M0e28y8Q6oSX4VUqz6CThT5TjuObXwLxAGaTaVm%2BxMYS1Hm3yFkpkowi2pKo6KrRLtojIfSc9%2B2RbpoBLgtsxRoiC4I0fbTEpSe0qUyaM2w7xAN%2BSQDDzmE5rMU4kKzjbBJMeLNyn1nlDTLj7rQQZU%2FzRxt9XSZItAbpN51LV6jicUMIzz%2Fr4GOqUByR%2BHNOxi5T65Z9CHM%2FiyVxMVnomBFPYW3rez7GmLE1od3vvNZcWWdDIbT2fgcLHap82vZHD7lyGy9TmjBOI0ppmwiVzyDfHs77uYaDF0WoBkpY64ok5Cc0YXFK9APoaDkB5DDSqHxRytXUziEUDnwvpbngVTSErNn4371GL6cFAiFwAbbcaDYmjqN7lQ04bt6nPp14CxN9gvKGSYzcQz2ge0Dqlc&X-Amz-Signature=0071648261c84631c3c0f26a233b0fc180b03bc49545ca6bb3ff15c7a70e7aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
