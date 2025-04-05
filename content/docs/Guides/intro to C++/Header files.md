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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLE2CZH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9573QRCtsBF9Jc97JjnM9tgxZZxtmj%2FDAoBiigi3GzgIgCBRipykGD6CN7hXCv2aCmSexmvy7dWRbBL6Mzo1%2FXLAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKI8JYQsc98cUUPB4SrcA9YvjFGH%2FQssEec9RUa9QiwNqJO7xrVGHozxpkKXgyZ35xmnj4bYhSFxwXAPk7WQDLFcKK0hyED%2Bm6mny%2Fb7poRactzA83DT8TYb2jPAB%2FgiM2jV4yGyH8MHcW3D0ekiwv5oHv%2F3Y%2BwoUZ14SgS%2FCQfaRKGn49CCOBmtPN%2FriV4xGQ7SqW%2BcShYCLsSmM4o5O%2FU%2FHfyydFlYBFPHEqAoQ2UHkNfQaKJD0TNf%2F%2BFS96STAujwwv0LfXGEzyBfUx1JswIoTUYAZm2Ahe0KGwfpM%2B%2Fi18yc6lyD3c4rg8PYmj%2Bi3UuLFXWxKr4RbWxqo5YA%2FLO6nDCRCHhZZ56sb%2FtX%2FlNj7bus9CvFNT0j8Gn9BVHIhnWPS3kjKAyxi3R9SPfzGSCtDqEnWPi483Ek%2BJQHn0I%2BOW1L7niEWc4K68ehVae9LdTMN4twNefVFyqt41w46JN9DXmQGLjY4bl0tCJYcJ9AMfi4T2rX%2FYDje9YOfrJAFyw8wakGOniXkHpmdw84ncTUti5zPjjlbksqKxxEyw2A2IICt4tdKfuZONXJqyrJMqAXTuVWkxl36DfJG%2Fm3lw480t%2FTEZ53c2087bU%2BO2hzcHhmAzEtHXaTeD1zqPXzlsJlOLpboq4qRhsUMMLkw78GOqUB544hbv9DwYHDZ9Bs7Vc%2FxZocKf05uxtNfCLQvvn4fowsu6R5KPgaStQ43NdWRt%2FTjbQsh4%2FJ8LEopwJogS%2Fq%2Bn3g96jjLJTr2S4YiA%2Bay3SOvQPBX0sUy0FBil3rZE%2FH%2BUKxSHTGHcNv0XJxL7gJu%2B49O%2FEhn4mZ1UU%2Btf5KE%2F4mrbtIT9BRFV%2F1kADvfigclqNN65woU2K4xyW%2FFQiI%2FX4Xz4PQ&X-Amz-Signature=0e762d09399bd76b5c2d42a7c00bbada0f622e6ebeb130c5df1e0ac56f50501f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
