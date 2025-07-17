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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGL3H3D%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD7pdJ1re7EY1XSatE42JFVax33UCld4wVD%2FPPSLwDXYwIhAK7rb0x%2F%2FDNj%2FfG5jiQ92u3YeyxeF4VEH9%2BFUI%2B4KMDvKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWNDJP6x3tyhgfsWsq3AMwpFZlFtRXS0CR45LNW4iDuZCW%2Bu41%2BoGRmJTHmoNUDe%2BYATvx8dtN463bdq7%2BPfkpT2X6rFHDSrtGP%2BIw7dnxudR72KRWZUn%2Fh5MO1hBFt%2BjiEylWVlONll6VbZEmFYoa9r1WeR%2B6bur6HMr9pUH9HRQx8wFCPbdhdpBsSqwecjBDh4OQaB30MWQfTywCSszOwMOyySOu4kEgb%2FPUTTlmqBnEMoMNl1RifMRORYEmBUfCDsSIbaOthsSyu03yAnh1CvqExAeles35rOv3ZQZ7CjnhIo2AYYYzFXyKj32VtOaQiukXagoN5prElSl44bpWTR1P8w9ILnyNPnphfbIOsQUb%2B%2BmPRSeK9ALlzOmV6wTn%2FVLuuAW6QIKT0Nud9tG7HLExclFaHYY3OMqxupvAxq4ay4FejOcP1w073eXS2cl92xEGRGQ2Dnj0ZsrTvmFNmbzwCrs%2FIsKaaCISokUasd6AY4rfmYaKVRh2Ve5SWvAa5fSSC%2F%2FQZw1G5L%2BpUTvmv3YLpJjttofO5PXck1S1ChNgMPDWrdPOeP8U%2B7%2FMXKFukmAOXkMUuidiU1QueGhkFvKPIOc%2BlfE5VXptcXF3TWN4RW1vSE1pQm8GUeFrfgvRUnz42c%2F7DdASszDd%2BuXDBjqkAf3uFqvxyG9aVSLxj9AygagfoWdsTxu5GrGSjYe7hlQ1IsWENTh%2FIgj4uc9zDKSyNVLLNAmocIZdvgGkrhZNhj1lU4OnvzCfYQ5I16Oe8d%2BXHwX8rXdIMF4TM79ztcjGlpZNVcM354nwRh8f%2BNEPdjIijBr%2FhCS%2F%2B977Qtel9%2FZDkJqgZLeob4o55u8yaQleLEfvfAQvuCs55%2BhYHBUoq3ec%2FqND&X-Amz-Signature=a90429088389c9b7bb1e2688d9d41cac72ca5647a7b63e98895761b454de683f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
