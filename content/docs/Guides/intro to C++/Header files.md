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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UD2F7V7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8fbTnLO8pO0mJ82JvxKiUVJZ%2B4f%2BQ1nlV0XU%2FFzw8qgIgLcIDodn%2B7KBy50KiWfSlJN9a282MeQo3atpJFVYf3QQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmVNmFc76F0K57PhSrcA0LdwiBwcVhjlqZVV246sdRf2wbCk0VJTB1F1avD82faIYpaIHTwGbk2Ov%2FThD6%2FeUD5J8WP5g0Uj2uQJ4ce5xvyUVrycmBz427jYaBmEr6hgZBsr%2FWQDTFFKBhjVWJ7vsid%2FlC3mqBr32JrDFmeW3gkZyAB%2FPXhgUBPnOMsVojCx%2FHOEfiiuSANrDcEuQZgBg6P4lJyGxTYHH5RMNgP1Gipv92hSflR1SJa%2FefozZT8ryfSq2emQfc3FvwK0SI9TjR5WtBe69HeOdlxNYDepG438do412LxtHQc4XRGMp8ovtGxz7%2B3PQXMY2TcEyJH7XOFUTRXQwHc%2BMS5Wf3RCpLjcXHVOTJYKjBvwn1AsJrHSyRUT%2Fe3Hb8iCi25RdWDRoGz5d6MtkiR3WygCVMbEuT0u1pFMPcIE%2Bwcqj7bq4GmtAwbf7vLb%2FpaEyQ1Ls8Ke1ugDkr492PxfEUQncloBFI1vY%2B1ijC7xZPIqlXG5vm3sHGvANienrnjddg7aQ5pZXDocfwy0HiYkwz3Fnu3ZPsrRQRX1O8hEa4AbRTVQjwFLFXMaIGcG8%2B4zo3gGqXJo5BqWHmwNt7Mzx5V95dsnKrFXXarbw3mvl%2BGfxeAVEBu7io0OGicPtZjaesqMNHo6LwGOqUB%2F%2BCFcFxmNrlg%2B27HoLWpOrvW3KTZF4MNWVWnmxYZmcicY7EM3j3jZ%2FAFrF9tng%2Bm09wm7545Wvqjfxf9fLlYRWT%2FkwoSvrvf7%2BF%2FbaRAWtdEm%2F2wFYmuFNCk86zoSZ42xc%2FhCkhuU6V6tq2YkyxlHIQ5OdivdPfew8rToJeyvIZ1Y6T922fU2pVPylQxGoSAiND7e5HYY5ES9SaIwwIHTZ%2Fb27jr&X-Amz-Signature=87e7f2b068a2af69ac38f89cd9bfdcca53bfe0870662bcf02deebdc4510cdd85&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
