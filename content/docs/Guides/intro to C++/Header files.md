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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RR4MNKF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFdDF2DqkV7EZxRRjh4XIF7TP%2BbHXVMdu2n%2B3HnCCSD7AiBL%2BnGXu0YV1IVcqKoWn4REWJCRDjH5InOt2V3PLXCf2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmba5FEyDUMYHzL2KtwD%2BZbBW4qQvPTjlOkU6JroXtGL8XEuOSLTAV%2BqfGNMjxjKmINHBw6TGLzzKZAQY1jHzicDV9PeoSma7GSEuf7KIhKcWazZfBh%2FGi44ENlVdby9tspomw0%2Fi9%2BuGK3g4UEuwEtqJ97n5SVN89BuORNdyF64QhlEgsEeXMIKoiQ2ndw2tMlWF66kUjOKSlKASHucN25WhYh%2BoOrSgKroubgAzBS78zC0qJiUSsmgW7l8SFFeQhMK8qPmrLxcOfu7NRhZDTiEavHd62FX0ymdJzKHtmPC3sSQJyYQZ4QybyidWHOIWYM6W9kA8M0Bh49jYo6%2Bch8XzO2AfOXk4GND%2BGOSobQorcDJJfzgYRsKZxl21vPPDIkAOY8xquTioVnfJEyTYS7vFbdStNGapY9doIG7cTkeb4jxsqXwykj79WWBtQM5BmoKLV%2F4Uyp0KF7PJGCA%2BJUSq7suMb4V5ZCowKbtjSYuW0z3%2FFICUqI658GpbXHK09JqtLaZ8MDk4IsFfrJUgZ0xm9yXU3%2B8RsmM9avjc3DEUNBlsJkbAt%2FL0zsrexnjxtQME%2BE6riXtJTjK6ZAbRvm4Bkb5myoi2BRDxxvLDsHLfO2DtoUMitKTECgAtKWZy2r2Q%2FTlYeODNegw4NePvgY6pgHek9rYzKJGV1JfPFz6x2sUdGWZaCO6eqHeX4I66xKveAR8zCKCg%2Fd0B5ifokRhDt1AEXgMRVOattJMuakSrqDIXjjymB3KhYuDnuicBab5aPN49ivVbRJPdu960iW%2FWFCm3l7qnco7ZaqmjVTJNSw1Hz7tYGNHJ0J7DVTNvOZft77Ox6EGyFEUFrUcrieF%2BrsUxxBEjYG0uQ4wpIj0mhfd2ofaJftN&X-Amz-Signature=fddd42b57599aac80b1deef96032070e3e9aeefd4c9947fe6ae42a7102d8898f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
