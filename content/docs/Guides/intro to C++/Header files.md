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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NI7FYP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC7o5AXVR%2B2LKEB0s2eTPUgNkEvfflMIwoRlE1kVem7kwIgNy9t1PU7ANN7ocrvwtjVM6syBzw0o4iCutmMjYVuIGQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPs8XNGVh9ikfVYPwSrcA3z%2BGcStwILmItRTG%2Br8AxUBphbQfWtZxOT2nmT6yEZI7tFBT57lGrG81IAPBXdPj%2BsieJvjhTmtb5WtWuG9dWdjk%2FUd20RYPIYCN7pVfI%2BHgF11F83FSbLflqJoWfPE%2F6uZvx90ttyw7u7q6PZZgJgoL3%2B68Q0MpPyuyrcQRcx5mRA%2BcL5ktdCFCchtrn3Bi5%2FzM%2FaJqVxCfQStNQGCbe73ZPgNghWIArGf5wqUvBLe61Fw7Ma%2BmlScdQ%2BbYPKYqBV2FiKbPkx3ZXJ%2BtzJ%2FheVHI3e0OByLu7BBDk2lMrXlbX26piZhW9FrAlBBt5m8kspwkJV%2Bwgogl9rLSEGaybGwV6Ay9xPbImlzdlDnO3xvL%2FvgPUYQWO2jeeWJBcb12Kz0aXUyX9Ngai9JatqcrBxZ%2BrjYBYiCDDsLrfXdOuM4YruWwqBLWXEGe%2F44%2F9LbLRHlDVY928DCeWGkh3fJ2SxQxk4Vo87LBiJhLu0Glvqi5NIOiavD9EoSZ8N8xtifZwFLm3sl34DjxINa5Dz%2BFaKyqBNxLUKPQU2C9HYAFqmhb2YRUvX%2Fy6fye8zRLLkY3mF6vQ6fzJYG%2Fgeu7RtkeiEyG42Xg8aWGADcW8eDj7WN%2BtdND%2FgbnY9tTUy4MImwh70GOqUBaz04gLTEoPCp2a4NQWPOEt8HoGOW1RdiOcwdy6%2B3JFMfn%2F2ic%2FldJJxzh3lLOWFLzzXkCbllcbw7xczot7o9%2FBzySgQV8jFSisQFM5MTb%2Fz7lrcpFZpj1CJMyCZqnCb6RC5LrrmVd4b%2Fvosj3%2FGa767sfO%2Fu8kJ45IDVfoXQop7NI7kQphDn%2FK99%2B2TMq7QVcPPecPxJ7JX4Uqs9JYRUN9Ll1oSF&X-Amz-Signature=05ed3d0572dc3b71aa5ee1e3936a5fba6afa9d4fd44349ea9b746b78e1b3aea8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
