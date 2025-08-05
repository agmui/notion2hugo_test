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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYV4J26%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCGKuNNysIPVx08WAxKiNyV15MAQ07Y%2BSKMFFmaU6siHwIgREY6ETgIDvyf7bNEo7G4M%2F%2FZ3l68benUCb5iq3%2F2K%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIsjGOdYyGCoBvXe8ircA%2Bbjvs%2Bu1bkGDpDpsaVyO6NIIXKgARrweWDUGMBV5wephOiJh9LOk8cuqsnsey2Px4nwA33UxvGKb%2FKgfcbCoha7KXTzUReBOqKAnmEBVqB8Z%2FLLAbOyJs%2F8eUsr%2FNt9lgsnf3swoHCezynrxxkBemrwVsCES3nwrvv94Lo1VALiYTVXCteQjsWTPeqm5%2FawDIQfpqxkljby6Arer2hGDqNoWkMOgjrImGSBvcUwmDEbjjyzMBSrg8KInD41pGLgHX%2FFkT%2BH6nwvv1EuA2mUdqOVC6eDvV%2FT4QqVBtKkvA6yuDSF5O5%2F%2Bkd5UyK6l8ADQXOKe%2BqzfzZf8VjUqYKy4yyVjz%2BEwVKB3wZS%2BY0dk1PenNFdqn%2BTl5lsPr9fsapidB4eWVY%2BLYPg25%2F7tcOtTZC%2BmD9vAVm5ABXH2RjC0pfwLFJZt8tsVmSymi7hHZKCqMWl1gRNh%2BnFrg4uyH2gpdvZBiem7VBW8SL2hYDlJWIvEgjKj3291KT%2FJ2WJYjMC5GMnRAv1NiO2rtU%2FcgrlD4QAK2gr1kfzg94S2Z5OF9Q5MoNjoEx08w0IqdkR0ez5C1uDfg8uGZSFRIcGlK294dcRVqwHOZwE11LDPcYyP9dfIwZCjSDHZNy9CM2OMNjMyMQGOqUB0Ot6cYkKd5vhL7dBIrMq195mrvhrp0NB0LgnjRtlDnRMW8xS1PGHQyhFAg1sHoYuAM4KD9ukARsTlgt7ClhrbyUo2jA4R%2BLXVf6tYPwSLUyJGzZatJWDwRDajvW2UBgl46JHIw7wUAfafYRAPXCz1UvqqO04ZZbK%2FA9GEDJTuom9pFPjyBMjIJEwmANQyh%2BlXnuYVbcJdaCcCJ%2FUdt%2FxqjBiwOCY&X-Amz-Signature=f704f2ec21ec17ca6dc3983bf3f7002e3a72e71fea3da420d44abc00dd36f002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
