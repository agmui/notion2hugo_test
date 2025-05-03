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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LSHMRU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD5EfrlC1XC7x4ySCn6M0NvC4QRzVi9O1cKjGttcdYJgQIhAPT0YLRk6nR8PsGaQ5StnoXINKEEzT4enpoa6HoiztcfKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FzI%2BHetOSsLu2IZYq3AOZlvrZcaGHMZUgRdSoa6seGRaIqi73v7GxDPOrtGDPpQ6y7b4dU5POc0VI6mBStVeHvECxsIVs2WJHB28EFUrFouMDDzSy%2BDq8weO3gyak4uHehqAtWMaptcdpJ7KPWeuBpZ%2BPGfKrEKw5Hs4v%2Bm1PNiNbhBeainIe%2FTX17mn%2FF4RHU6SaFbeBn6ql%2FmcbFIlfq57m%2B01E%2B%2BtEGPT2AQ%2FYNaQBPXqPSCO%2FQ2mgArQRBLuB1IQTuuZfKDIGjg%2B3ib6ym2Rzi1Dzm16NvdtwVX0AkXBVKP6xmJXUtu4Zxg%2FGQRlee08d5NdrYNHkXGKopzLLPS1H0tB%2F2mtjYQg7VCPDI2CZUMMQct2H%2BR4a61QvEfsu77NkBsMTNo8N4%2BAriOn0d2H9O0kBshHimCgjmy7cambIuR38P%2F8lLTDoBtk%2Fiy5qkT58ljR%2BLt5jh3KlSvr1Rkw%2BMt9by0PwXLm%2F94K2t1SSkhFWIOzGXEFt2sNZA607VvIRi8aWtiPMQmGLIo2oPKedWgWl%2FuNpi1hWzsF8l5h8mBts76AePFTR%2FP1tUxZL06dpkTPUNoqo9DKYu6V3vaml2C5GrAXGsq7GPqwF0rJibNQMeUkk%2FLn%2FoA01cEWFb9uLQkEfiYXW3jCHgdnABjqkAfQVHdBLAGi1uyLRFd3HthdGinHB36vM0egYBSz7eQvxZrrpEYa9EJ035nRyzt1SncV4eaQTCf9ZGuFnjvrGesFXzn0dDoI%2FpmOirs%2FAnYkLmtrdVYVSPptRamru4E5Lth6%2BjwoPy748S9YaKa1tlf4JMpOLc3ygKnkqVLRpvsSw6dN%2BO0qPCJgZI54H9%2FBxC4OH6QA3VkZTaDB7pi7fMNIvnY4x&X-Amz-Signature=938ab0f2619f93d8101eb25528fe3d04c4f3186dc00257cf84bf6c85276d56bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
