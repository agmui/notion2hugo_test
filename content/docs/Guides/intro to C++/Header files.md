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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQATZ2P%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH17X6TpnsRIvUWwV%2B8a6qb6Cpx5%2B0yKeu6Upk12HIwUAiEA7qDTEDD4mGqILqTXFZcv2XVNCsmCpg6h%2FwgE%2FBsx6%2Fgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH%2BL5U8MrAyhtNtntCrcAyh0I78%2BCj5PG67K%2BLUalo2Oke1pXQzSBzwLdyejTCWAuuo1H%2B2bVCqaZWwaoyt3pzOjMQWwsfnPURG%2BonNBCZ3AgUmmER2TT24QgFfM9BLZiJRLA5%2FVWDBVKaTg6RUspfl79joHkj2M4dqB94u7g2%2ByJI2v4iVaDclouwfTp9qfCefQo2lKDOHCB7d9AzNxjIP5ixvqiuk8IzH7IqRsPmP1VBLjikWHw2fFHzMuIAQF0L5ERm0Jlkfzan%2FpzX8vdRmbbKZVIWU62f0ZQGnBEPoAc7ykTnqJsoGk1i4MN0JHm2svZXAYVG5kbaauhC4OXXvcWBNDlqsL%2FbxreupfA7bamzj0z2QCsBJamrRA%2FZEUAXM7QlDvdalEZbcLeqy4bx5hb26FjW57mLiPJdQYBHb%2FTIktmkuHxBe%2FKseazJ18EKjrDkAu5TrZltUYb3UN759Xsxal0PwaDO5qf%2FoxbzKltO9BOm6P2D0JbYY6VrgxVuHbPCLWQAI0ytbxuUbyoMVUhLTpDqUTBQ%2BS8ob%2FmAE3ShKcwrWLqMv0ZMR0bhyT4fUe9UYCGesd64qh51iTiQ7uXOzXKTWty8miOQHI8JX9yXamK4eiSfGXgqd138wOc6LnfCsLSMakvuzdMNSsiMAGOqUBo3mA%2ByZVSAivJGBnbqSuvHgJCqF%2B7ar8iXb5ZDlKCO3GDiylAdH5Pd2b%2FXceJurCiuS5fCV3DETXIB2tx0oV1HB6jZqQmON22R3dRlHSuS5Frij1KP2YlebhnQhQVcGCjR3Mu7arUfRV8F2DKXrcQwdJMxGpwozVLRxyzXFkfu9ulM9AfULuG%2FmzbbmyirgL4jvcCxWeXlgoKpslv9bmAB3%2Birj1&X-Amz-Signature=944306717179167a837cde035907d26ddc07a6868cea0279327a09e3a9247be2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
