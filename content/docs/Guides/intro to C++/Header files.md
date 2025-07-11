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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MCPH32%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28i1%2Fzf09cpQZAnSrJRpdPIM6E3xyUMUIjNGy1yNIdQIgDjlUsUBCXxOQ7HHpDm2m2Xvt153IFV3sSXcbU78aNuwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG9siKyZbqGEnBNEyrcA8qZ7JuKlEW4mjpPBny1xhTTepSyy9qhok6zhdpSMNLkGsjhBCd4LsjGPdobfX%2BCB6OeKTAo3nMWlczb4PaJD5vaY%2BfDPQ37lwCiOubyiPZ13lBOl9%2B5u%2FZbdY8DBEUtYzf6vusIKgzI1zWP%2FJlesdm%2B6NMvXfpOb%2Bhj0Rf9ku2rxPfdqdYiR6zGfjAn3Vfle%2BZv690ghzBAMJMinZocwTMKol2fPqKPbKeKGmvzW8imH5F3ygPUZahhro82JUcxohH2iERn7Wb%2FZoN4G95D9byt9oxPhYlxrDhGNidu6iz1aSj5LRpdixhoZihp8PusvyzTbo3xxZJM56sl9%2FrzxM2T77kSbPoBgdWPHL0NpG%2FNplSge%2F%2Fa2FUPSZIBJPvGX6gT7uOLElUFE7kPHXrPsa8VvOp8oWh0NF0CsoHYvrYxStZN8q1sG5%2BmgNKCg98kI9FiLGiUfDavfrUm0PI2mhqUGkDMGfOp1116%2B4ZasfWRJuBBgVH06IUNfcMAbSTvhwTG9f6l9Z9q7YPheHDxEa7vc8k%2FUGrUAA7ziGQwLJB%2B%2Bwg%2FwNpQL6uLPEDHNsZN6fsF1WzYnuYTkc4cYzDgrssEbFM3k3fz3ndi88O7cijSZJ%2Bk8pANbM6rTKeYMM7%2Bw8MGOqUBCVg7hiuDWNLicAFRclEZByTEXgeBYYrkfVK%2BJH3ljqEP1hX5v3dlhxMdalSHSvBOR6UvPoxGEgzrc44a9cH3za9srC45aMavmYdrkv7qHMR7YKvWNHxZbxRQXDTzoLkE%2FgDoPJyFJRekXLt19XltnVfUV7%2BS3WeTAlMZ18IQXB64xPHwYntkZzpRqsDqX3h5ju1SETtSL73XySuQKPtnbcA4iuHj&X-Amz-Signature=4e877431bd38c9229cb351028738b7f317dead2ec645f1c81679cc1d3c455da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
