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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5LXOFH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFf7oGuKg1DcqoxICV0v%2BmGERA0F7RsxSc%2BL%2FawMXNqCAiB%2Fp1IXUmoMWEvLfdiLWplrpzEqNmhwqDpVtwfIHDktDyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGef7MuMsq4e3ypMsKtwDisMk46xSM6fWH8Gvzo2ijezzAtltxr0HHavwxC9TSc7L1OcIF6hvrNvFSF9CloLOx9ZgG0yP%2BfjqJfyFHYJHYuJ2K1gitcfwHUYGKiNbU4kRlRMY2dULIq0TSb7aNF4TR96dPNY6ZgWmv72Ut63ViNCF0I%2BPE8jUmybpG1dO%2BMqN7ylycvvw8tfEVVdBtsrtdwbboSPrHPSMSl09fJM8SfP6Zk%2B3zpx%2FiAN2s2XQ47j9G98k6uvHH4PTLRldMI8CyYMr7F6z0aaPG43%2F0uKqrssAdYfmuxYZsm%2BgK8SWP1CGUoJE%2Bm2EF94Ytt37gnT2jyxVIiUrUWwltXQiIaBVlEEz4O%2BVSK7Dcq0BX3EQUXJgMGAxYzdtCm77%2FJiN8CBPxTAk6UCJaa2NMFS4sQohP7AWqrljo6KkiqV9ig4UNLbxAIaRKvqRl3aWDm0Z9SomCvMwomwgY%2F2KgTcwB%2Bd%2BukwY%2BqKGz1nN8%2BaX1m1EfyO4Xknq%2BMrCDaZwBxWenV9NZ0UDonm9%2FcjlgnsOTiaWGg2tGIqYnB%2FYw02vqUtPSmzgn%2FLI1Gj6msC6iXkv8hXwvC%2FkmuPHfm0mQX5nKopVopwLRvONpxTOLG7v6%2FT53dLVfPNjpZI%2FmXksCqIwhubJvgY6pgF2ZzUFhy4kVZbvqJ34ITNUQhn5CO5zz2V%2BjHcFuIXip4PjYm8UQ%2F3l8Typoev5S3F4kj6oHKoJFC7qJNZ%2FWHAVDinaXUfue3xm7d%2BGywXBymX4Cx%2FOdVpvR%2BwF8gvvDDv5RBvuWOO5CtO4tlimoHCuAz%2FfsMavoWKTF6KvwV4gJ6Hh6Mj16wuWH31QX71nfp3G6Cs4TECEgzWLpOsg9xMjnONlquZL&X-Amz-Signature=a48e22a2d236fd5867325f1dc26e59f71959c018737cb2da0079d0fc33adcda4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
