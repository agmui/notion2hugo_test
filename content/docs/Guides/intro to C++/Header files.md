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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=dced53b0b44534d85dd9d15c5d716cc499c95f4847c0f79321e594108f0ff998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
