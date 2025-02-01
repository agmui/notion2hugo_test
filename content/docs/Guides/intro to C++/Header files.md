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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMKWRY6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYd%2F6IXBS%2FC2x4IaUZ7axkQHhSa4vd%2FqebWd0FWl7x%2BAiEAhbaj8tEY7d3wx9bHLpZ8ok8IlkhjQcdV1vocBDrsn%2F8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkm5LO1taprwS00AyrcA9dCibi2ShYRqnfuO0XBomtTF4A%2FcaE%2BDhqxFjcmTW5lAI4FU9x8OVdyn68C4wF%2Fwvm8ZdEVTBUuJCtinmQReyO944oeWehh9b4bR2WMY%2F0sXbq3AwfBc1zCTOdCKlBBnplRznLUX1qzV9tmcoHn7DPQoPzXwkQ%2F5AHqvSpnCJm2Cd39SGhd442kMHtRWpKPmqtOduKPak0Fh1v1xCNzcC2KsUWzHMO%2FqYJDOstzF9WIj%2FFZE5PXqt3CiCTceh%2FoFD0FMHKs7MbIFCXWqRTQhAbQSODPG3UnGMv0zZus99q7wDUl0ntD4RXk8g0PrGqJMey1iM%2B8RO%2BKlyBhOvQijn%2BiCKTew3UbdVlxtQvvA2N7OM2A78idbLok4pGgX%2BPpqYrQ%2F6ieeW26h%2BxhB8m4Rk0W%2Btr7%2BLWG3a5gSB2%2B8ADw0YjgwFnKSidQ70aWGBOlCe0bk8%2F5ShvdFpRsC972pYBMeolscVZjx8x3juX7v8nRiRYB%2BimmL%2FXPAgv50U%2FdXejXAL3SKkZcAWOjG3BF16j0qRIhhkSIT%2Fp5PXm8sjVqzj5CkICBloYZzIoEE%2BlL3SeSNK3ZoBR0AVXctyXc6XAJTacCsNqwK%2F%2FhiDxPsbbN%2BlxAjb5aOsHbM5zsMLDu9bwGOqUBYUxuP2NwSAWuakbajsZUr4Jvos4uhnC6bsmUikjWyMjuBqKawDYdmit51XZB6xgp4fFoGha0N131IsljMz1G92tlfG6N5eA%2B0D2gxsyF14Vk8YRSn%2BDwygkhsPHli3Ay80ygb6YRq350gUNbLSCnjgOyVBVC2uMRo3vmHU246U9XtqqQw%2FzY0tc1%2BvpozEUprxFDmqIbYlESOscWbpgQ55SwMYWb&X-Amz-Signature=2ef69b5e843e9856c072cc37ff26e3a5de076ee6729aa533bb9770d6e861305e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
