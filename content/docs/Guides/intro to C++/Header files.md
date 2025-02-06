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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXIYYCJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCH9r7BeYCTCyHSP3tLvSVIMUbFEt0Gj0l4v9HbvaFBwAIgX0%2BIC%2FXHJBaidthUlEX1xzGhyU3gRfZ7OKyQie8SoEoq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCcmEPYPU3QZOrZx4CrcA9FC24r6cM8NWTv%2BnIu46zSPKf3sGW9Q7NdkKibQBgdTkGlekt1vYrigxUC4zn84RNdThi1Vve7vkVBMDnj6sHaA6fF7xfVXDtt5grlPm6bihlRcREfAyv3dWOM%2FQC1o1KR8fYVtuzgvNxu4GXjcpEnIHF%2FiaANw5c%2BvpmBPlUN3EgSzb%2BdoutUgCMJZMhMETSBEIhWnpahEguidtkRz9FAeA9t9nXTIRwa3cgZD411bCyl7g0tIi8EiOqIzVpJZla8irH9mHeSZyuOSD%2Fs21HtFsYmp%2FZkbzjkl4rfueJvP4M0eULaRJpJP3MNj3ojKItW%2BBCKi4GXgFK68SeudmDxAl45YaI04O%2Fs4AHnS2jITO6A6TTfmnIyvUSBr9YfcMMoFHl21RfIhwAkZKbeDuSynt3wbHM91%2BCFJMicCziTqN84lyJGeDwGRBqnanfpdWBccgF5z7aMluah2YZTk60%2BAomvuyAStgLMRucm3pCxaY9hSYV27wuJswVfpAeXe89EBrHDMA8l%2Fi3C9yhduuDpu4pX8eQUvpdyYNdMLTO%2FjheGPtTfXVrRSZe1EDW5UOZRc%2Bi7EcrXd%2BSZtzkzAnwm0eQAKU%2FY6O84QT9Ymkz5kojTLx4rknTgY3wdVMJfTk70GOqUBpTLIvDjzQ1Lr2ESZxnCuBM0W12gOfKKmMcUJuxfRN6HAkVEoE5vj8SXyys%2FCVH%2BZevZZiCwc1OIiLnJDl7qgDAyDXKuIA9fzFa3GZh5Lhysc5Mub5dVRTuQkE5LIAV7PlZQu4%2Fn0z4BTAS5G3htojkYMrBp5yWJk6YWEV6QcL9iVH%2BhnsWftIdYgi3Hormiu2iCYxWsE90iXouSsyVe3ZmIAQzcI&X-Amz-Signature=c36b9fcb24daeee30a2960024d5df133feb8f40c1aac2c92ec5508d1472da652&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
