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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNC4FS6J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMl9att7VuWTzRoev06%2FcChZcv08ZpLVpUq2xiSuQajAiBV91Q4%2BrmFldP8vhWjkuTP86LZ2blTWFodAA5mh3BOFCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMXqxGq5%2BJvbEd8Ui5KtwDESCCx8eKOh55gFlnYKfUvqCNSRX59WkWcyZMbXqYr5SE4d8cyiwFPUs6Ho9QSG6a%2B6kKR%2F9EK95OZHG0F1T8HygY3fpcKfsozTzLxU562vdtTgN0rgkAMs0TvHGSMIIqjBhwLufxejtyZAZbCvga8M5CE9V3Gj8u8yfKCI0IhoQP9bgzg5O4OCaSppVwKjtg57QP3kPOK%2FptS23OMsAwQui4gTE4p1Z9K4uL2h5LQp3GeuLlKCTvJZmftSnICvvXDBre2hb2dZjTZK%2FE6flXEPAliNfMbWdeijMbAXEXH95RUYitLpqfVxPnAUdeU1Ux%2FLJIF5zTK8epeDDcNTg8JB0lTujjr1qea46lTQhMyUgAR4AK6xHdJf6M9qhTbu0NTpaUeI8s%2FP9KRW%2BkFSEUUeoblyzlGGk0sWicZ7W%2BxqegP9Mjxoki4LkXLrHbJPj%2BEY0WiWwtBBifODkg%2Bss1RYVxJzCjI1WXiwX9jEaSxVCT2SUxxbxSmR0f474dBjWQjdltzLyoMG4NMDXh9UQSQtZ87daSm5xZxAnYLbm074rkxltVlpisPexYtLNlgV7dIBPTt%2BEGfmAY3%2BaZ71vQTQVpLFc5lhUAEcVMT3wRGiGJuS1IhYFGmiYtvqQw5%2B%2BmvgY6pgGU4wa8d3pVUoSLrcYWW7dCBa%2FotQMvLa0hmdTXGujEcBMZhD0Kuj6dXEOnjMUlJ9csbTKe2Ex6e2ZMeuk4bb7klmoKMaEUDSF5J8F2LNy4kuF5mQO3nFjlRPJzPkZpaS0Ei8VqVNwrMknUHVmArlszOpGM6eEQlt6mqFMdh37UZMmXYhCdDHZhG7wQaH6PzUfKMJ2tNhFdRdc9AbAtpGOMrvtN3VtJ&X-Amz-Signature=efe36c8d37b549d20baf299f828ea03b96e11fe18c325c0f78e1926e5924a3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
