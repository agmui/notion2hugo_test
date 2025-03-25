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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA3NNHA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeXqRx3daY4%2BUV%2Fd1t%2BHyfkfC2BnQG%2BiQ3bEw2tBam1AiEA1XqVTy2VgwCOOyt3aPPTEZmIYzyFz8bUAw9KEp52QNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFFPHRr6%2FyjQEcI9ayrcA17BhhKQ2qGuR6h9bt%2BloqqijE0TSLBgy3DzT62Uyb2XiUtbwB6rS7jCAGsNSGe8FAwZ3X3HLKZg3wzIE4w87%2B9dXOmA256vhTlOOdBjNexqlm5cpwOMD9EW9g8o3Fo%2F0G22rrKWqfar4KtgALSPzmth%2FxEkwu7FSSm9d5ZhRFv3ZaMZj%2B9RDzbmEQbiRLkzFBLuuM7r80ZcR4uZ3PvTdrkv90uJIOJcarCD9aTpqvX1PweZc3mFFhECwXbygla8bEcP8bA3khusVvB0qnCnjzUmnl1GZyNaKV5kJ9HK1p0GI4aTPDolWa%2FxaeGoPCYqliW%2B4TgBgDk5mbLpJMG71nJAfH6wrhKBQKHjIL3gO411yHz3eiQu9nmlcN4B2LisCskpMtU74iBKcmTWVtzcxwu61k6d%2FdBP1TK%2BU7QwgwDhcZPq6NPodzJNJbqvMOJaTDRMO5sZnzsglHYrBQNuc8dwlsl%2BDhce5JpWEVFy7hR5ZZy%2BhQYH10HErJI6eQxzM110nGHdZsOn9V4fE2U%2F5TxTqbh9I3JptqwfpGRSXnBKw%2FKnzcGbcE791DRqJQu28w9xP3YNt8dPUgiM09cC9zvc2lIonEqjFaEPKd1mlCRZtnJKiiZCLIfl5k86MMSXjL8GOqUBgOSZUFHHS2yAY3Sbh5tRGj7C7fy69fwT%2FkyrZLYVthImeqpIm1LdSDq0ZL7becPsHXJyDhF0mFEu%2BnItpU3OrIGSnKNYroPHNDsaO6l7CWIwrm3umPpVMn%2F03pOoqtpoj7r9AJ1BQ%2BtWX3KI0DhPSqlTvwm%2BZWgzQ1fMPeEtWWSlPMTLPuWjl75yENKNhM8BmK%2FSMxQCF9HCd%2FqlgpolVvBi4JAv&X-Amz-Signature=3af255a62d3ac9cf3014606a465845942410e0256ac585e20d9b8d3812faa34e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
