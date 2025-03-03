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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QNNVMC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbR5aS2CxSHQsfOe7dzpLtU7WB9ca3GXoA%2FOwfHmzMDAiEArSyiiTgVD1qvZhBzb%2B0fL2JMo8oaJdv7KgSAT4SS1h0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjCyi2qeB%2BAPwNA3SrcA9d2Ena5pVJ26Jp%2FknzYfK9CGRRcndtnCX3dO3uH2tmdKAhypP%2BREp7oNxI5jseeM1I0DoJMqCEKykuhxc3KAT80VSqLP6Ja2D4B6o8wqrg3yYA0aOGPZyRpve%2FzO28so8%2BDkVJ2mMmvHWrnh9fBF134Xq71D2iSMy6qBnW1TY9x%2BXykdFXnKeHM5fEp6GHccPFslymVnj0cS2LpoTW4LCPe3HN4PEaBCPRb%2BGjKCVW3p8a1o9Elsy7B9PO8IpV1WyaMa%2BJZOUvo5zg3RnaztP1FC80OCZG0p%2FURndcq0gdkmi0aL70CAzUBAlCKoEasPRXIt3TF%2B4d9O%2BIQ%2BLQIqBtd1M5x1XOT8mlOha7AefwROV7SHK3c7bQ163qHhXfHbPuX%2FGs2kH%2FY2MwGYG3%2FqgTGYQFXWEY%2F0U9p38x%2BO1zRarfzQsHfeRcPv2ZmKxd%2BCYleujR8VCQotHiZ%2BqIdMrS64VpTrzyt2zwenjWfeYAWJisNzl3%2FnvIWLZY43yprKToCzOKJd%2BcNF9WleYVKrbjxKlEaboB7rUBooMWaHxFEMrs4oOr30AkcYG42%2Ba%2Fa2fJFQ4kah03zuvvEl2eVKP0G5JWZ%2FwZSxZY3HkPgqMLU09O7pZ9XL8Xz3eitMNaWlb4GOqUB5iUFELFdxtKiSjmJVW2Bj2WBtefzpXKq6%2BReUcYdQ9G7gldYysvzHMUonUTwezEVsavvzznYQ%2FHcb4JZxQ7Jx0pESzivvJUrLXOTrNXYtidHgawPlTKN1Gb9o0E4PLBa01uEMPXUQt6pCVzTsrX%2FL%2FXAfeDb4z%2B%2Fxrak41XqMxCi3COjeGOloP0vYXo%2FK01GeifGmyjnaztAsLHxKYRSpk3RsjBL&X-Amz-Signature=5280e7fd1c31f445538938fd1dc6d5a14361f6f0c866a6e901eac74cfabda712&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
