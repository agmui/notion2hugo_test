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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXDCVD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDCd0da68FcUnxztXhZb%2BCjQY1IfS0dGMZeudpEUVhXBAiAt2NBQMBy%2FVAhO8i2Rx%2BvsclsXzVeIgusoiizQd7OACyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMS%2BrjIxOD30CdR7BCKtwDkFYLcCJ2BqfehjYnAgxvJ%2FdjUPAITwcSoR8gqHYnBDgfy7CmifkTOmPQKcZnTVv9USzvnsiW3nby8KlRHJ4QGqfZmPAohhYCx05kLDCKt2qRJTrTo9jEdEcGAgy0EyV4SEG95uDRDOUgbQp2C%2FjwNM92qE50wG4LdL1vhbp6GSDHndEoGzuMq4oP35ecguIytQSQ2TnlmNIIOrwF%2BiaDZi5m6ggADKToJmUckJppG0OABSw0%2FQ8sXb3N68ix3mOjAHPDw7RCgaIQNjc6iuHCGPYV9441KB8V08uJyu3B%2FUyMxrEvSevANGCHi3NNRwdLLXHyyp5u56LyYs4yZpVN%2FVdqErkthPSWNta%2Bh4%2FhRSak0%2F%2FMR4SvjfkFpaA5xzPkiIaQCXUxDJWzogqP3SYsPgB3fPz2sWpq%2BuBVXfIyFtV6Y9UmECce8ZXfkBjq98Z10aRycT3sCeVH6tCQqDmG%2FkGD2HckjQZ4qF%2F5JsqyX0gx55gLDCDZIJ%2FS0T6bJ6n8Q7UC6aY846HdTVAcr3a2LVBsOo0KCbzjj2XS3i3TUcMmFToD12bzZnCALUExY6v7R1kGDqPvYxWC1JXyxYRYVCfvwCtTrr4G9njcy%2Bx1lQloi2OXFjlPDBC0OvkwzNKmwwY6pgG4Dn08Zoh1ddjbOTktOaiX8Er8raQfH9d182ax7AWKXDfF98uSPXXbIbkDp4dvcE9Rg%2B%2B7RHAFv9FEkmQfXYe%2FlRi2hgmNV%2BJWHkn3pXsqeXPMvOPBe2y8P9abyZyGIQefqPsOjV1Bywso9oqf3fAVVvSqK0cb%2Ba3K6YNtEgy%2Bmvp1d%2FyMx%2Fk3k1PocS0c9JRIhr4D67CK1%2BDskzrwA0O5tPE469Xu&X-Amz-Signature=545d748ff870febf13b20a89cc165ba6c10c15ef4e5db9ec72712157d724fa0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
