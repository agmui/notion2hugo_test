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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQ5E5CJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeWGdGSPk0Nb3CMuhSCTq0Hb4wKPAFK0Gi%2BKG9I6KWhAiEAh%2BvgjAcEEkv40utdcjuj%2FFWLL%2FQcgDiTEBEyUcP27jYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBlDVni%2Brn0u95ha0SrcA6dPEJY8Ny9PnZGhJNaCuoEG5FvIsOWXetzjefwPSamdODTuWp0fybnja7Mi6wEBpYhnP8OO%2BSH97DFUKJVEGtlPcY10D0GIY67sX9rPcf1AbW0PQ%2F7SMfTfxPnk78RTKeNexQ3n2fTj2tvRTMPLwCZfYEw1Q%2BSplt3t%2BIQc9DarjjPrStuGM97xRZD12jkFrfr5%2FEFDUFfJEVAy0Qfj4jBXZQK2Y%2FHghU0MzNdG64S0JdQPpO6Vy7I5ewEcftDz6BePvhGt9qRhWM5DoZpthFdDXe4RZ%2BnwFQm%2FsybR0tokn0ULQN4wkX%2FiSHzlCvVsIzBPIaI9FBp22F0BU9reI2ub8Y%2Bj9Jd4mr8nFzCfHcH1sYdGdjsVNXB4ZEpE3kbVZHXWERgVvH156U1Z9J%2FGa8S3Yeh2Z1yaJDBS7SlR6MIxODgh6uXwffjfn4Uzu7YdGdMAO%2BI9dFB%2FJaTGIpuJttzTUOoNKTygpGde%2Fki2Ek90lsB7aM3wkQCgxf4UUFzRGPH4x7TxNSNh6njGITNqcFImq8ttxxMRtRvUpuJeGv3R%2FrpCh6ZKp%2F807uyFKUfk6yTEPqM2GLH1FmsZMs%2F7uiNc%2FyiLmRNtjhh5QwUPZ51nu5WhZN70DRAoVUGRMIm%2FuL0GOqUBOC0FKOeuEIb6fQf7yk%2F70CcLfNecPcCDPHjLdMEMC0uOEhqlDAqznMniK%2FOCwNKi8rC8FAaGyxBk6A4bXe1ZjLEa3zffJFxfxnG%2FXSxAn2DHKa%2FEGI4l63Fz8vpR%2BCBIR%2F3Q4YkCn0mdDcksJe9GtgMX%2BwVVwRi%2FurnCYKPzyfkK8BDXbq2tdi%2BAufNTS0EPN5O46frt36Dw5HAn6RYTSnLu5fWl&X-Amz-Signature=323cc47e28ecaf8218acd70c81826c1459ac3ddb3e2ff95ffb6af3d059fc2f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
