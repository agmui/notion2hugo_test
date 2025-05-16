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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKIGP7P%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXqzhiI607seTRzN08AziIjfX2RZu9FQ1J%2FwFf5%2FAcgIhANSYvH1QzhS6nWIx8f%2FkAZFWFXRCBhCduMepZURNpWxuKv8DCDkQABoMNjM3NDIzMTgzODA1IgzuGNrcWS5udpts0a8q3AMRY0HaTtUOPSk0vRm4F%2BzKsjvtsizgCRGO3nsRFiKd6z%2BSPJ4DKlyltY%2FJNRqnXEswgvvfMp%2B7BxOrZZbXjAqFs2SSQ632J9kBlSeaAtbG8sFPtwe6%2BL%2FokNoc8NCfOng6oxlDK3FFyf%2BQkgKa11v7S5a0%2FTvyKG3mlgGQKKBfgpsjJ7s%2FZhczObVn5rfpjaBOqid5goS0j1zoAFkTHuF75ABDrXvexW7HX%2FrTjIsxHIZpevo87tuu%2F3fPn1zsTLmavNiCLm1twLFUnukOOtFmyB%2BFDhzp569EqFrIEwr0H0w%2FaR4Uby1wWnfA5dbSXJl9s8FuIbLiqij3p9MOjsKQrM4p1Vx7qxHcFt0eyolOL5qaHyFmRSqQqXuVutgUzSdBtWprqFNGvt9UM0HhF1S%2FP8wxA9yqPYxPeZImNT7nfbiZWC5YwwPakzxzBgelLt0oFbc3msNgNh4xVL96YWM5QO6Vl0dXj2NpebA8NC7rdA%2BU29hRzuBimSJkoZ0nlXIqdZ%2BkBewNewF7k3HzR1KrDfb57FwZyyE9QRfJFp3ZzbX%2BlPX15z2pbg%2B68JDBtusNz%2BKqsi%2F8wh73FYaYCRBLLZyqIFFbT4LHFXVPavanYWu%2BC6wclSs8n%2Fr97jCE%2FpnBBjqkAdSXbLr%2B7Z3ogKU32dbbL6QnImhtqECRieCB%2BkwKMnmHTGNSqp15P4ap3N0extT0AhJcxPAUUzL4pbwXfcPj2OjD1PTrWR5NDDjTFjOaY7ZZwfMg295YfDv2YuYILkJwEGyXrWsO43vQZ8zDw%2BqT4aG8lqlOdbn%2B7gOdaRIdvfUl%2B7bIKx0jkl4vj%2FH3b9spphols3kGt7F%2FFs1hNfJTdXogyFG8&X-Amz-Signature=cc1c85bf2a85d1c84f28c2a4f06f2574ae994ea6a034745dd397171a74eee520&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
