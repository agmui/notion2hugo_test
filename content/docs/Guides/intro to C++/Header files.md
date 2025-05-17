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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFQ5ISM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG3Yfc04VBdT%2BPSrCcvQfxD0xjBEClFtABtBuMbuJx9AiEA4l2n4%2FggxxGIpuuuk8QnVNYa9CqsL2%2F2Dodaw5xvqD0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBxFzadIQEavslvqVircAyWkrWMnAKeS%2BeljplFWkPVAgsjlo6Api7ozkcVLpG11GT0Xx7XICJjIRGMxk1iqPYef2d0k6FkQiAvlsyeSvRBS0%2FVh8ftAfwfYk2xS9cPH9a%2B6BcFIvHYH0GJKfKdaKQDHQsbfyBGVMG%2FLClVyfBHy4aPhKkfSgAZikActWyoauJAw%2FQmGPF%2BCyZqgFTJHJYayqhdVFJgG6mEUB407YNqtIfcWhTOl3DawhZCoQzCD4DSO3FXed3qdgNnjkHNkFIcDlwNOtvJy6OW8fd2534ambFYb9RANhyv5cuVI%2FihWGxUUb4qb2JxsbMxE5xbdqV%2BYO1R%2B%2BWc7gG%2BBIm42zQxKLmxjag1E0kCUCK%2BMuxnieY2oqB%2BNQMpduUV4wHZN0Nwa41oU%2BXioYL4lszbX2uc%2FA%2B8Od5U159QeXff7oHKh9rU2ETxHmfgEdcgWix6BtdKHJ4UTgQPsKS9%2B%2BYLeYqOZNSAjKAAQ6MeBUo9Ia8iwJQpKO0SsYtmdjeMhkAszA%2B%2BZGmFD9%2FhyLwkA0xTwN8ckEujqz5IxjuhFgqO9X1Vc4nPQG7hvIymLFqkL1Cia2WK6RtmPLTwPgIkcT9LP%2Fqi0OfrRsSb5gqfw7XKVMmjim3Pbi0dKBExzM2QlMIrLo8EGOqUBeSAVKgzRAwPt%2FP5ytcfgqOjfBt7zgVZxfoj8AtQA9V%2FLvIHOMQToTLRbys3SV50GrARBGVDaqdkBz0WskqExsb3hL1tuxqP6RnYXvZZcm49nQ06rK2ZRjtwxQ9LvxpjRM1x8sEEyVtrGrEt6URKOzDPSxmsGR4VX2KlJr28MEmFirH%2B0D8IxsVS%2BpNDRLX%2F6%2FSLtt2EqzeeFKSQsS2lwltXbxfiI&X-Amz-Signature=6cde5f88aa84108f727fd2182350032f6bd6125f07f30bb8b5944caa4e92da30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
