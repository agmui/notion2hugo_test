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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NZ65LY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIB5kvBW7S1zSzxRr7s8dtUhRQspCtrWx3EwkmIWwOAROAiAYrGiCCd7XrM8HeplSyxnLfGRRk5OyWke8p7x8%2B6aKKCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3elcjHP3QmubXqb%2FKtwDkEBXFjVcc56grq45%2FKiaK%2BMEOSXyMXNFzOpBflDhEanHPbeyFW8sYvlwtvPDF1rvgZjyRfYcAUWlTaiMTXpfwmLeWBoQ6Gw0U1%2FQoPM%2Fw5aXdQq%2FE%2BWgLh7H5vGLGrEHOnm8Efe4pbNOKsCJXY5oJyllBmwGqWFcchA8y8cbDQNU2v%2FU59ETv2Yxrwkk%2FQntlWZWkO0aa7%2BwQScgyIHl05eUNkhgUlM5A%2Fq9fVTFsMtbYWy7ZAjxZV%2Bj0cgQtHIKA%2Fwg0a5hawore8u4zDeklNVJjnFxA8Q%2FfO2RbvmmPLnem0XfYlct7N4AXkMHjrRVSGt9wZNh864b0GSTgP0ksi9BKu%2FAxYWmA9uMqOXpYsD7ho2%2FUIesW7GQfpJbvbkPZlLSTTDvfvwyieNrxu4VKL7A9qPPSYuSNGMI3XMf%2BmUKaPSXkTI3d0yg5GoOfexXpFENlvuaYUTbzHb2Kz3UzQFwnBBlBuF4hopk1w5XPVipzb7nDSDJM10ZxyLphnQb6tdkq9OOCJfYph2szbmku2W0XoxqpDClwrkBxgmpkgQP0vp%2Fj6y1jhVxXXTPDLpC2TiX3qrvjEL2I5UO2dBG1Htwls1usSB30AGcySC74nu%2FBr8Oak2y8tsG%2Fbcwx8KdwAY6pgEJ5Z7%2FAYDTiCuU1cNQMcfvIY8uHJ3SLrXcM9NAiwhhqgCWlz5Hxb%2BicnfSNSwAHFCIpcYexigDQseeD4Vvb%2FV4RaDSp6D2kxorkYe74uv1YCJZZ%2FOEvmiobXvOAkHbOTcv7LVPNIqeE7hgp42DFL9vW8DYPjnthXFo64mGqC3G5rutdghrjsypmBLirL1tfncCFNini8JSf7bxKoNngOyV4tcVoFyo&X-Amz-Signature=f7e88772c65efbccd26e0ec6a4873e95b27640525f84d6abf12de502140c4944&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
