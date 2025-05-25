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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVQUZPJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDfo4o%2FMLVPiCucseqMi%2F2upA3VFwDoNcyu9K7sp1Tw6wIgaFP%2BSjba51ktCvJK513k51xjVZ7QzfsLWX%2BDVBdA8Ooq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNa%2FOMl5%2FjtG0M9%2FCircA5BNhZ%2F%2FzsW%2BIXun6RXlxUXlj666lpraKvzSD3%2BUu7PYtuHI%2FZxfjqXJE8reyVz6l9i9MlaJLgqX9CXHsIlMcQXsrOOYq%2FDxL6n95agz5fF%2FRYfPFDxUjhY9VgdPFAl8H3jXUXR6Bdf0c4ovIkte3BK1%2FP%2FJELREacWNBgit6%2FIGH0nwGCrErtB7RPAMN4zjbVEpK%2FAyEXK33GNjQB4M3KKCW3%2FgIc3oOhvUTb4UOgb9wsNoEWScwXM5joSv0uca5WONqVC0WocxwUKeXma%2FDcKFsoHpBwQL23EHXULTlfmnTg25IEyONva%2FyuwB3mV4a6X18lCHCvE2LQTa4Iziq6SSwUonC1G6YGq1rLAnoxKwVGXLg3HCEmiIOTT0l23lKX58PGr1K29jDMIHiNQNuXI0cYuirc2upDRfqB%2F1z8c9krrtweNqUju31pNUrW6xIfo3AJF1rKsPCKjUouQJZw0ioqnsojFd3BjXuBCxicDQXvur9r4yhftpH7r%2B7ZeDXW0pGzljmv%2F27LE5x55K70QWEcNxvvoUlat3EQpPz2tgw3X%2BoGohT%2FN9z8VOKKfIn1sCU%2FeIsY2jp393lZpjgSarookuNaT3V00QsauCcwDmO2OcVXZPTaGUHXgVMOq4ysEGOqUBVvsr8zOzem9lvdomD5KYOmiGO5u0VQq6XJJC8C1DXyzyrTP%2FNUXiMvPZH0HXiHOgN4DNscGCuQ5tgYbsPFrQgxiq5%2F%2FFijMQedshu8b2HO6MxE8kwAgbsmNdMXc4WiRuu2qlsfSbcQQB5722RXQybOah8zDzfJDoV2XleMIZtXDXZIt2vjRAz9SDW0kRhYtm1cscyKZWuxL5RQ4OypBqpFdrIx2V&X-Amz-Signature=d0f4821486b18c768a248400a8975255e1b79eaa7679a9c89019aa0110c4279d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
