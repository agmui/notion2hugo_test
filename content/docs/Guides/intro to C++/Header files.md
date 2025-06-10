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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBUJNNP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvIeGkGs4OqXP%2BX8WYBZI6XolzvREvQ8%2Fp4U0smRjKMwIgJc0v6%2FE0aYvH6t25HFAqN3GRhEV5ozTT334u3ZD5lpUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZxVrRwPTIfZ3OC7CrcAxRRzix%2BrhcZ5Ui1uGsgaeto9LoNCp%2FftT1Wmr4b5l%2BNeRZ5UWZTp7JyGMpMZNqNRwKShj9SSqwZzwsKZ%2BvFj9ofEHyv0UZvJeOD6ie2myjm385mTXar6HXj38jZYJZCOk%2BOOohGm%2F0H32hROdExyMNObLYNq1ZhPgwpJ9yjK4oOnASZIgNGAt2u91%2BmTLesujXKtOrxdP5OpaQjzIriWiFtjOtCMBUePv9zw8t0aafAkm%2Bco8JS%2FVT%2F2lq9Km1zt16KjQIAE%2BitjjVUNOxMnDtGYWskXZYWoQt54PEQKBZqjmEZKj1uTfWdoUFDUI2BQXIRyAfNjCnDpALPt4N1G%2BOOci9HkDp%2B9tG2DIUymI%2FTrOnhyU%2BxypMbouwUxNFZQr5Qr1DHIkg4ACYOU0uVS9DwT6DWr4cBWzC1QAL0UHUy69mOLk17Bnd4BDfLEMU%2BpqJnYoX3ynqYsc3rKYiiQOVGb8XdC1g94KohJrgw%2B5cj4wSfwusItTtR1gtxPkXcBCn9Gz978KRWGum5eGDPYilV4fZC9TE4KIK8t11Cgcd1D7cIUa4Km8y%2BxsbxC8pF2KZAPShl1IGyF10FPJQhd%2BwKemO3I60Lqe1er1McSKqy5he8LyQxVkwIBk5PMOfWnsIGOqUBB01n7sZ9kUH%2FkehDU%2FvbDEBWVkYJ%2BmSzjuQzfrReVqGhDmBEshhpUTtEUDziU9CBjDJOE10T2TSWhXDHZui0hQw%2FDKzAl9G4afJezMErnDrNOb%2BXnMA4ZOfeWJ2TZU8%2BBpWahyV75fFwzxU36w3WExGLikp0og42ML7%2F8nrfS5Qxuw5fr6iLaahAH5DBSllzih%2Bocv7dyx33cQm7wwMbtlIcPAgU&X-Amz-Signature=bd1a14ba242e5f48507fb6e5935c23eba5683a9005eac0c0124f74f4e038bfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
