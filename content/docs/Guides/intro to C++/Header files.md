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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQHI7IH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrui7IBlbVEkq3h%2BO6TvI2yA48y%2B6omr5RvaLc5bxNfAiADTaV6SWYhFxgojBFuJC20LO6WF%2FhFEysvSSPM6v1T3ir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMLS28MAYuH0N8aqLVKtwDN4XwKwXW%2FWromCoxgwoOo9e07oVTRdeYTyouFOmZdG3N%2BFpJ7FS4Ch%2FkRkyWc%2FBK3cEgrAItsXllPy%2BgqdvoLBp18jGp7Rp0BggdCJphb7OyZyo%2FyrL3ISEUtAea%2FH%2BcoSgZq4ro0UONSEAdrqn5MP25rOyzTkI0kkTDX2nMod8UtyTITdUy2Oel85kXrSqCBeq0q1AsoskPD9fetQJDeoMFNbAULqI2ixbKex8RrCL0eb0t0Y54M1eCpLR27aQg2pxZLA3qFUKZCVqHnEbKWCZnwWN%2FQlsrTNSEbHcOhbhJ9tMrqpUtTWxtm4sRea16o6QvmgKyw9MRmj9wRTN86yFKpviD8iyY14uAW45Y%2FB5c9NmXuUlSz5DWQgiiStCWmFsUZVOZiOMmW50ShtesqciLpxsF1sLaQbyUGz0PXgE3mLu4sEjvFywZSzbtxzq714UX%2BT78IRnSfzqgxheeE6KqbewKpIMtqIaeBf1VJunPM4PvYzXDYA%2Fq5E3FW0F9RbspecDq4Vp34sKSDkQAdcscrJXzmqkKAjWdrqgZH%2BdX2desBL6dfqm0REuUzBISe2Rp0LXDvmh1sUIpJf1VFJG6FJcKZGkJqYB%2Bi1SXz%2BucQhXNVd9jJAIe5%2BEwwomqwAY6pgFClq2GRaR0dD%2BlLZUIC%2BPoERECjPLxreJcdFN3r5hsasMqdVIHO4d87ZvzH1uJ8RLCkrab30mANLtbTjrSKfUUQO%2BmtCwJywIDeO6748p50dYDXlugzG0OCNHN%2F2e61Bc2tWj%2Bkdo6zoa9EaU32%2BIp%2FNPm6jNy544nBN6nC4%2FYqxMdgHLsbmTIrgGOpeEdSc8kDzQG6weHK0jCQeIbuFh%2BT73vPQm1&X-Amz-Signature=4c38aa44c5949ecbe6743898980d0a4d17283fab410fb751cc3f264c9d7b8d45&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
