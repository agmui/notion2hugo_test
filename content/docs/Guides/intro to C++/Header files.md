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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4P6SONS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtcvjbTcUPDCl7ZPT6HrdXofEM5guIajpd6mFxvnu67wIhAM6pdBYyYjcwy3RyrV20RavRZ%2FU5La50mJV5ulXqpeLHKv8DCEAQABoMNjM3NDIzMTgzODA1Igw9zFojgPwLlqiUUm0q3ANVuVZCZ8%2BOHcMvcz2Ki1jS%2FcDQPez2GcetrcfSRuqr9ldKCzSGuqV8U9g%2B%2Bv%2FZYxCahXwWKfJ5q7ovg6y6GfKSOSyUHpctTrkIo0EfHqBhISn2OvS19k1JEc6EvSL8L39q8%2FgsqM%2BuD4vIomvILSoZ%2BDIhjUdmehHf056CZ%2BSoezAk6VD6aQGSNrPQtjPXa7mt84IUYPClBGGndxXPC%2FW9Lo0HzZvZaNNajW7wxlda6qzSDKI8HlK4hm9dETbCiSDkqt%2FRbzcOhDbmXQSW%2BsKYr4SOeCvUnZGOHIhMHbshmygJjlzOHv%2FEMcBJmMolIHb2qEQzib33n7kp3s7YOZVmKMhtcUnPPviI7VNj%2F4mFo%2F9v5fJ2C5uvM2XFgSeJEB4UH%2B%2F6d0T4vbkD0%2BQ%2BxMhLWk3ij%2FsR%2BrOBKapcyvTDz8Cj5fU5eQIe2w39ZAf2glifu0uQ5RYbcRq5FRiNPeNLDuMkQHcHlUCqinPwaGAd5fl65WwCAsgLfdDK%2BjmYCgX64v2So%2BoQ8a4ax2QWuQtVzPbKH93E%2FgLWlnOI61ULLGFii0MeuWDRgt%2BumxGjvWEIHQkjcSXzu4xvuPv6LqxtUW3dfQUN8Ax9x2ahouB%2BczWFxveq3%2FnCwPKDkjCe8ObABjqkAcbIX3l41d8IJmuVfi6o8HqxJTpWb5L31hPiXA1t7YKx3sF%2FAOdn%2BFcQ2fbHsEcjYc%2Fy2Q6Hrx43C%2BRA96udZ%2B9MNLzsMmeo2%2FtjoFs%2Bott920wOr4FfrrJRCFeOcRN76%2B68MmRQ%2FWaL12XBWu1zkgwIB9wTvDnrk42O%2BogOh5TBwh6HzuHsB4A9NcgUdaeLAJvQOR5qAQUdk49pB31Em26PWAfr&X-Amz-Signature=d5ff9b63d758a55bd73daaea562fa89b58cab1d92651c8536b1818313416be79&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
