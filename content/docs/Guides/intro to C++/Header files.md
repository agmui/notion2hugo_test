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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWLC4E4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzQeuVuvvRnah3lxOFd5PwJJDANCozB%2FjOEDyhc0oY4gIgTHLIQQLVrWP7y1LmlDLbCCBDnVKoGuJ4qOoIP%2BXr%2F64qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhfEsULQXnNKmZKTircA32YWSvDIlOsFF9lMM0mfq5I3Tk4qjzqJefPpOzCPIJeTWHtmeUaKI92jM%2BhuBb9o5AoxTakIDoSfwq46fELUyVdfNhC8h8MTQ5XoNMb9CnsvSVzGLnESckZI6A2W1P4KW6RdCc3tEjQAGKItbdQQj2w5bwqEjirPatzWaASEA6xxitgibG6TfQGdJMdEV0W6WAUtVTdCo%2BrRh7MCddIrDVkN7jOnHDUteL8%2FBoJzHOu3R7TT%2BfJHmNmIW3qw7VWfBEC4bjbG0wDYTWoedaPXBKwWE4Q2Alu95V3r%2Fi6w7obU35mgDJyHwvQIlGH%2B91G1RM6iCtTTlgiciqeWEXL%2FWlonP5Ol0FT8vnzE3NadSsJoz6%2FEMYY%2FDde0yexkNWSry8nzw1XVHxYWYoxgpWM96mindDwpe9nYn3RTqw0VnkBfF%2FyNElDJDKpSQJyMgsf5Mv%2F9zI%2FuTXLCs2hca5ntHWT7X6%2FIdLmC7pl9IwEAXPpMrJu2%2FEBIhOyI2gtD8y4gTYCds%2Bh3T%2FVe8m0qwgotQoGzuXCpo6Q3YkJNlbL2LWyJpOYeio1UmaoBivxOLC2BOp9rD89lxxUznqsdjOmQXk7nrfG2at3B6aPiy5sY3dwzmlCykuL2JXw2WW0MIzOicMGOqUBgDyPMh0giThFl5UNem9QNGHYApBIfOm%2BqpSC2AeOnl5e2ZZxCiQs3jL4bqbNEZfQNjXDGPmYi9ZRZREu13uZiKFaRqkvPHYKe%2FGaKY%2F25Lvp9J2GG1z0sXGIIdIAz8UZMH9BRlc1jtlZh16mwf%2BVODXel5YDsSfhYFrTUNCTFIa4ojpX9%2B8lR8TowWqoV0uZi7eS5cIevr0L%2Fw3EaSVAhS%2BExTHb&X-Amz-Signature=3a2e86c99fdb630dd690e2ea2ee375f20710307f8492e62506a781c1a407fc55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
