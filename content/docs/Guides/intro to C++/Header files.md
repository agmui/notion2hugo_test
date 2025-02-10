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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCV4EUDZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK9VGVJHqEEFJBiD8OqUHe2wUtAAXycIr%2F3X20P1y9nwIhALg3eRJa1gt%2BkQd0x4I1LIATrrCPYJl4sDAYPDsMljVyKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQmHd8O8noQl2eE40q3AP2TzMjlPE3%2Bh0nVctQG%2BmDjgrkSR9MNGOScDDphgA1fKDivnuRdczaoTjdreEUKuN724plVC03NNhf2kZpTHG6tuXw6NbAkCb5GIFaMcSCRMChcBEMIE4uiC1wznPyPGQXF%2BnFt%2FRTZUjX5CnqEBpEVfDtCwrkCWBb7H%2FmaLBr4dRCRZkQB9GZgpF22joIj%2BjZlS4%2BctK1Boz0bJxO8mWneR7K3jQYi0zdJdzRwPciAMBuAia%2Fj5jOXtumH8aE0eKiTdRbHK6wJxUwy%2Fdoi3MVLdQNCq%2BiidtMHOXwBto%2Fa1jpnTfZkZ4RnMOhpVm6GMIIqhqrg%2BnEomhyR49%2F6fULAnEo67IHILQKhCU%2B1eBKA6%2FC%2Fb0WojYbkVfaoRQLPxAO192CaFdNNWaGAHRi7Ab7sgvuNtmccIoZ9aLDIFsiBjIzYrnuovQncAe56prBTnnmeW0PPqeKsG%2F2QRLclBKMSJUv46B%2BjoygZ4c%2F78fqSfslHn57acwFjLW0Ihlk9DVekoNHJcnEdHXWJGvPE6e1HSBrXnyTjR%2BN76QkRo95v2%2BNTKRUK9dEDW2sa%2Bgwx9H%2BPqsx0heHUH28D6GrrO8JM95ETU4YV5n2DJ3%2FBDhkX%2F9QDpnjK3zzfFvA6TD2%2BaW9BjqkAa9SF2%2B%2Bm94D%2FANuyg8B4X7rPBvox23l6RvRcY0lkfz4HhApHe5e%2FsQ8iISW2zoVMRdqYsayvL4Y2B75fewTytTp%2B8IhanxzGZfer9GWGBWLtcv1RUPR0UEWqlI7RY%2BfMKFtgxZDwfiZZencF7SxPCY8cmmIIHJ4hbcA7su%2BBSa1h8FPxZrruzi4knSdaAsgoPAwGBbXvPz8Z1%2FcJm4KntCZoL3w&X-Amz-Signature=83c520c06b472cdbb9a617924d6fcfa7124608e6503d39a2e7396f158ed3c9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
