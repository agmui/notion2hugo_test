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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVB4746%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEWItcjoBD%2BpZ88DTiylSyk0Qz0P4hQlzsZlRlYki7AtAiAYpXIZLP8FTubKmGZHnXZ2BjynPTPrtuN7X0FDTNaIiSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpm86GpFOGpKBUicRKtwDOzgfam2mhJcaaWiJBtrH4lh%2Fv9trWrDEveBQ61aVvsDCB5N6V2H8HokpoOPXLf55XeropgnZgKJ7xsENC9IEzDYAZF%2BQr5iVKYzVLH4%2Bohc%2F924F8WmTzIXaFmeIezj1A3RwkLde0Cr0%2BTXlHFipA%2BbRFvrzhZKuTTQO3IwVjs0kQYlvcXdObNDPpCyR60sX1%2FmE2iVxe7t5kk3oaMYavZMVRV62u%2B%2B2Cik3tNTyG5i7WwRNLGk5zbCEUqsFbTo3vvaZ0dXf%2FULPq4ZeaB0qSuAYxJA5wRNTwAeA0oem3Epv8NzQwQifUAKDSJMO4vhRwPY%2BRF9ygpOphE8yY%2FjIqY4dKPkFlu5AIiYOADRtsrhVhdfO%2FbA9JywtKlxfRpFJGgeZDSHgTZG7M6M%2FbJN6lG2nDIj5YmWz44btgtq%2Fs%2BxpM6fvV%2Bp3LErhsMnwR8Ztxk1bu%2B482pDpmpM2Cd%2FtUQ1axQUk5mhRDGO2V8krsOUdHE%2FEyEJIw1ZhP9Se3InWEf984muKhh0kuQcke2g2BIOTsFzBEWznUb3O3fEjhfbpHXKcAAGjU1F1RmDlX9Gwuqbh7rvtp1SwGvfzHdK8O32klZaIOHJiVqXeq9ktvYyIvKcpiWuzML9X0i8w0ImMwQY6pgFYG%2B4CBcvo4oksQc1iZq3bgSCmgzCyeW2O9qPSom8YhIj%2FRQx%2FRiBtut894W2Sl3mp%2FR6u5g%2FE3yfCeQFQK9R6Z5wNfFI3JNfR68hwPqT9Os4IcPinaPf3s3fswCPoQfaHLEYfHbbPQgCEUYeAfDKMWkkGtXuuc7Yl51YhQZpqzaiCb04FGaJ04Qu3kV%2B91gKpgPQ%2BG1ImsU9viz9FqdQvs5MO%2BoPm&X-Amz-Signature=6be5e8a8afca48660375ce946aaf38a815794ff00ed46b28d71c7bc895e018fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
