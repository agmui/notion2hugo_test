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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXKVXF6V%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD12W3THsWaZDZEyuyoaHu5wPY8PdFEmDDwqvjmdEQacwIhANh4Y1MkryNoKDt6UxWLOyekSJG%2B6K3mJ1Y0REh6BLW%2BKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVF6RzgBZ2Y2Xwh9wq3AMmfzi4wWDj%2B3tGvnrCruSvTVRE8Zy7RW75wnnIuRTKqgvdBekw84K9CUaCWjsH%2BCmXCYTkJjnOyCx3twcf2h5RM2mzDgAdZICsi4WO17dpL7Dx6hOcRt2VKZ5dvuTmd%2B1QijWtWVvdhoWOvb8NFE8TTOH0Ky2CwpEJbqCvwwZ1Qd6x4FCjB%2BMc8KUAEnsom%2FtnCaucT5ksmYpRNsJdpYtFL%2FWRrnzARC7mj%2B4BLanPK9lqw04GY0ZFOKQ2kwaO8eJbs3JrmAhSBkdn0UKVtZ3Fi4F72Rg6T5xl9AEk97NqNBceoc6KdxsjQUGlJlIYpsnYcvEodRwf9POGKZvPUSn2xM%2F%2FX2wWtQeMHzaLtKAALND9YRiVnpL%2BdOFF8NTcjltQez9nmruvKEsn8rScvxIaw7yGgl%2FnPSf80k9zY6%2FCf6%2FPofOoqizBjg955Llzn8bLbmxIH6kkRsYtwyIstr5wrkgO5cFStabMVkabxzNh5lgzfs4aQrHCmNrr4wjIP6kjPLIRIIfZPibZw%2FTFzx%2FkpawisHYv0xX5xcAVq%2FsrPPHwgcJmXGM2kDyk2dRbI5kPOy48V%2FpOJUVPnMwkLXsCRRNVJWDwoDJ3ojZZT0KvKTkil9lPHnl%2FREqZBDDP%2F52%2BBjqkAeoyUX386FXp9QHFTE67%2FiyQQBtRTmfj%2FyaqqMmMFE6t4mZSL8Joehi2rymUnYULbissEq5me9pexYuuSZwbC0twOfVmDhsj58XyE0%2ByXIw4yKiL%2BepnRoTrKhM5NOThKiTbebl1viXMh029XojeuEyC3HXE8t6G64JCrAqWKE6jgaLCLcrbkVmOH9ajYdpXaxwnL0F12mFXzkSZZDRfGJrI2oxI&X-Amz-Signature=7a0703abdd259306edc8af7bd67f4d8b5e902c52258c40382824edb09ec0177e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
