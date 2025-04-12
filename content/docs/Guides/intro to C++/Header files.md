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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCEGLIO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCdzYlcRJkrkvAUfYmHDx5ymLV%2BZyNmzm%2FX1Dk4xuIbfwIhAPIIAte3G24I8jPBzeVF9H%2Fqo21%2BHC%2BUEcdHTgIzg%2BxaKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGQHZXhRUwiz%2FZoRgq3AOVTsZMkn56IIOLJrfqJiyMofAB5sozQPt0jpk4kM3p5Ae%2Bog94%2Bc1Zyh9alOF8PBiVletyIvbP0Fv87f840AWH4UsaU02FM95PLas9JufCLVEEYoZrR3wrKUc%2BJDr4JJrg7Go2Umz63n1kGKvcT0rgtqokaP7UeXszOq1MY1bvsVO%2F1ZGfuKuQ2OO7pbRmvnCC8sfUbdIzvDKhX2yoRH2UXY%2BwN%2FiJC1BCIan9%2FrA4DFGgmSXG9WDZF5W%2F8fanxCyuPwL7NyRG5JgQ5bVoHsXYZKzyBGKYNxySYegqumtzpOY%2BvBUBJvVtcM6ERhB12SbHUvPJNIK%2BsCfN991C5oa6B38YnWrrRNhKpgCQOV5sp2a%2Bzkw3uJdDEXZkZHiZVUtowk3Hg9jB1Cbp2srnXkPJ88siwnln9JIYtU0a27II%2BJ12e1Wek1D2mjypJZzzMFwKVCbzRZ0lQkW%2FysfKTJkZW9BxDwAo1T9kMp6SMo8bnrzsgnk4P6apo2QRqQtjfgN52Zme6yfLpoUBcG3kNrDMQHVr4hmFWN0NdOMn2Y4Nt%2BKW51OcuRiRHq7Jv5H7DBi531qEYQrTCESfFe8sh5skUtougFyuJWRlZeE4ieE7WFZ%2BbEvDMNGxdMH2hTDj%2B%2Bm%2FBjqkAX2OxzChnax%2FUnsCiev7FPFpIp51uyxF5Z1phM6fOurG%2FKPNWP9pWr%2BFtOKL7CAbUEjtOa46EckPPNmSPu0P2KImkMlggIqXooRRs0YfiBTtmbDoMgUEv%2FHD41yN62V%2F5P89YJlbOc3TtY72RRH9t3ClonnRO5EvyeiLEqijsAIJ3aAN5qMPgijV3hudmuo1OWM1kduDTA32duOZuLHVBxfgFk1k&X-Amz-Signature=1e98414e03fb6d17d063b6d139083e36e6c3dca89cebcbee903686ea2fff484e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
