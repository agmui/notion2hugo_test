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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVI4UHPE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDnLr%2FDDppRyNfiUHl60pG%2B7gDBLjms%2FDOUn1KZZcX2VwIgC0gvqzFYloZlHEyrfD3%2BQGvHJCv3CnziB%2B94eGYDW40q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMmJ8BoMu9dYM%2B%2FfbircA%2BLF8b4sIoGU%2BXIKdLjHsFgCTlu3FrZFpNgNGexVVbhLJ01OvaUodn0fu3eVjgAskRcdtGUjw18bdGf7rF0h3LW6vmK4wQeXlIzs2AgflDkuiSSzA%2BTbx1qUpmXEismPtBxCCX%2F9UeNfg2YzI16kU9kgovmdJ5PMZ%2FaDBv3cg8WQYzWqWslKd7nci%2BoDgG%2FjxJ%2BSNCmvrvvG%2BrDOqOeI%2FaEnP5Rp5NYkNPDEpqcU7P8BCbPDsS%2BIj2XCvqirTPecb%2B4bbIAU%2BgQRh1%2FYIP21tG%2Fs78otm%2F%2FtJa2JbxvYm1%2BPFZQdBH81%2BhycTRWPlO7nVeFyzMQrI7zTP%2BKwrg8Vfdhw09QcnvmP%2FCVFOXuOpnARVp%2BYID1DCrLcZFHmx%2FkmqPz03qZOh1bSDDJPRnq6D5bGMWkITR28DGARInhlLrEL8Sx2VNrcpHQ9FdgE8abrfsxcYxkSMmuBEJVU8haKw3rcQBJajnzoz9BL0hekUR3TBNTxXavM1Z1Pd1KcR2CbYa522EoaWrsdmM%2FIEhEsbcsvA%2BK8NislISBviT6uFb%2Fx8HCq7t42DmE4cTEgHPWLzq%2FJ%2FzTJlS5obHyYi51P%2BVdSleUQ%2BpI6pBUdH8no3bybkEqhQR3oMe0YO8P6MOiR48MGOqUBNBEnRf7U0cW5HgAKwbHy4bF%2BGl5GxgaCnal3Dyd7IOE28e64sArbccpM7DbZE3jlykuwZPlnkZTkCRlJiR%2BcwCwKSgUN2IzQ3FKl8UCOKArx%2FG%2Bie%2BQiVBl%2F48%2FlV2zbK%2B98JXyGjIJpCctzEEeQMVp11ejneIIUdV4H6mhEU8vybxdZgK3s9WiYcLMNLuKyyKip2BeiWIOb32CHQdJWcTj%2B%2Fch9&X-Amz-Signature=b34b5a44291fa5c3eae3f4284ab4afb080263f3eb420fa5c7596a9b64e70bd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
