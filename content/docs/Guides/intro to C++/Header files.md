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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAEDSEG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6j%2BsuFfFi0PhhjtjLU%2BHZjLsFKc%2By%2BxpWLZK206VwAwIhAI4jPfRiEGdJM0mNGHReFweMDTqCS4DJW%2BruYCccCYt8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW5pFN9Rc9KDpkjZwq3AOHTycKe7iv39zp%2FrkUIfu2ytCdFNBA9GvjM9MLMR6fiMO8%2FMhZ5n88oSOMuMZcFLtRYh17H4JUsLss1CuyR8yIC5u0kd9G497gi5xNps8l9Qr1d7KDayqBml2R3LJkDRH4ALLMaabVdpsx0YzjKfCpPhMd4LdoAl7UnbodHeHNIq%2FZjGqjrMjCN9b%2F7U%2B3D%2B4n%2FDtmtQWymdGLwdB74ky6rt5sKP7aq4ZBsYvIMcHgzRTtNrnmEQy1tpmM0yOAY6bHzpqOnNPBevQZqKGLjDnmyhYK5mhUhjrR8Jp0Pe9AXb17X6VkmUqgt395UG4tpWWx2HG1XLQiJcMx5boJIuGBk6n%2BphT5QwSD4R0i4kZZUtUaKQhmHg6RItVEqq9pRzHXIXzwEnx%2FXIsEElBMr0Ngh%2BjX%2B4Rb3rh5BN0O%2FjJEFOx8huMsXLo%2FCdDmY4UslpaJBwJ4W2tlXDzL32Q%2FEM7XUPmmr0VJMfivhwJ5YJlB%2FBLm%2BjjqNkI8gWxxKKnrkWze1GxR4W3xexi4Ywb%2B3QJk%2FOgEtAjRUtc2hU5bEeFQlzmRbi4Meol4AP929e7Wdds6pckDLHk5V7W4FuAJeyWVnzF52alMD2qkmENeLdMyHXuF%2FX3GWO2rwu%2BqJTCakP%2FCBjqkAb%2Bvp0xaiLDRvOk35KX%2FpFlss2dplT0SKnzXphTUaB6K%2B3wqgcAQUEDBuQfysjtF2IWHnmLh3S7%2FwFSYr7QQwsgX2%2FrjaVt8GkgaMlZbvdS5eHVbpt0Wow6pqqo4P9ew1PMzO%2FUyjcc%2BIiHFCvjQjbkhCc3HYPxmdlFdn%2BV3bhXXEm0nRCW%2BVxfWzI95P443NJfop0ngUcWP5aemruhIHeqGy3U4&X-Amz-Signature=7df47f65e277f9e65c84db7e42cf23e121873084e42af0f127209f9d1d953022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
