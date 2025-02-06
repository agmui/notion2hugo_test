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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPBPXJ7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGHxY3UMF7eDAujk4xfUYPpSJgmkMYDjkdioLjZcK1nQAiEA6GejC8YUWTLDC9NXLzW1Rn3i8xcEcDS7AvjEixNEcDwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyW7Omi5DuPAxXAwCrcA48WK59Ds3I1JuWPZk8sbOVgUIC3GbLryRQqEplOSpJq3pzD76Vp7fD3d88zZcoYgCZumihix2Ptuxx4Ahmacn4o8qGnPtY4oshO%2FFdyTDuO91yalvbr2b9AzZnPSrsG315waAzlfhEzRNnqB2VnbIlVq05zYj5XX33qbj5%2FxVR7%2FX1Q1A5VLElUdxjMw%2B9b6bP%2FQREAKKAHh%2FzD1VyuXvaoHurjULcr3HBSmj%2B2q%2Blyp2wmETt255NXvtIky%2BCc4kp2fev0xZe6dVVLz5AV5rfTPdNXajED6mJmlHTc3oXIt2qX6H2DZPONwBZiX0HU8n5XchUkhfYdgaIuLMDnEW3Jln13SwU0QSmIkTpW%2F71At7ah9J2V6sw3vHldZwCYBY%2B2Tc75V2X8AgosDTwBQ%2BOgorg5lS1KZ0Zs2gVPbGsW9lx1zmCyZNtGEL%2FJnjPfDIwcCDkTzSUS%2FPTfO38qSINRAxvgkliPnRAXw%2FCUBavrlKekAgaZdrek2m92Gac%2BxWjy2BPACO8sxLzXP%2B1HvJsUkveyx0YvvcbcWNIFWD9gV%2FjLByqX2vC9bWlAj59q10R4XjVI%2F6Nxv6ViQ%2FDFtapzksao2T6iqL0NZN8XzqGkq71MSdlMIDAxfURKMOvtkb0GOqUBg2%2FKK7UaZPS3zSrkUn925KE0DZiD4l2fhIc2f%2F3FuW%2BULteuLCYseWlsYR7EyA4%2BXvwZH533Wf%2FQpPQ15%2BizFQjCzK4DmSgnao3T7a4yvw82ErKAd6BzAm2tjpkV2j95uflQqrDRyJgs6C3FBTATzZLU%2BSzPIjKqz%2F9ACmrr4nXQE0JO2%2FStwXOuHi2ZnkkwwVpWmyNw9M16ErwUgB%2FZe6rj3pd3&X-Amz-Signature=6a272bd8de2ef59a02ccbf4801bef895a4039e6457f7b407ef76151ffd195eff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
