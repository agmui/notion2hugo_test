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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHKAIC3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdhl%2BHZVRO9kmZa7HFKYQjDJsm0KJiv9JePlfdGyV82AiEA2Rs9RQ2hoE4wE7%2FxBNqgfjowI2wq6A8vCOVzuqEK0NIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMWkoGjbXexCGLx5jircAx8CyD3xts1AfNenMxx8%2BE%2FIG0w3SakvC4rWdfrSFguhMksFE3OzKXszy3Z6C5Q1XFVEfIk1L36hIV9XnqoVBE6Ppr%2F50JS0mK2rr8OSTe7MJL2igCThwpOJag0oOot029XzKrvkb5wR3dslqIZpzyviIjLGkPPrhYhdLfedMRoiixeyrvbhNx0YHHVU5jXgoOViiIaCfFKLxMH8kdqccIBXvxDPkSgwpOmdGjAZkW9981EQBnCF0%2BV9Qp%2F%2BkviAarGRoJQx3diCWF8%2BoaRwiPQud7JJd4fGthHFroqV3zrDzok7etD9iFNBfSdbRrKlS9pX6HYcS5D4gY17V6F%2FMw2Bc5zbRdb5N%2FT3KuuCxFH%2Fp8%2BW7w4dNjXVzxDhWktqohzI63c6vT%2F49Qv8EjZyVzjkRin3HXANcKfzgOd%2FEjmNIHoMXEheyLYDmNPbxYYpodWHwDsV3VG5m1d7TdlUy%2BeHIklYO1MoK1g8ERI7%2FJ%2B96VYSrjkb9HtoFMR6ulXDkc%2Bs4sqzCrQC2eKlBsYMiGl3wdgaGCL4GKGKV9L4AkqShVFn44jLyKr0kMP90mW0L6jEOU4LcCsIVJBzg7XS5h2863zGiJZrXR4sVkMm48bMGFJG76c%2FHHmIiTZBMLT91sEGOqUB3o22osQoUO%2BikaAMxkvA5%2BvSPKnNZoOcC%2Fb0TWixaDFfRyeYN3%2BM%2BJMGyxI2TqulHC%2FxPmGMPZVzM3IU6guHZWoMzSIBDVKoLKtyyiZAFO60%2F9NTgFANSuTDPVc32SCJGpJ0S3NTsC1RRgAXWCHCZ3NUtbL9GQBJDgvoffa2MHDAqSDt5hizK31b9PeoWE6gTPg30fgv9seP0dYulhFtq1dAmAZI&X-Amz-Signature=860026c22b83ed4c1a3bae0c3c469f9dfe2bf300da0fb9c97a1670d35fbf1bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
