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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHIJJPA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF%2FcuMPXa4YrQdagxo%2BQ5huxSVxshtmQRUDkRBQ46IZWAiEAuUcTC%2BvGhtDnjgpW4OvFHVXoLVC1AklL%2FtqcR1rLLgkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCIhm92hMsHjYdbOpircA140aCi8ts9ksGGp87itp1jE9lh1rH%2Fpd0xvD8pbN%2Fk%2B4pWMU2sbfE3UFlFA43CRR%2BfS8yW3mkvnXSv%2BeTTjx%2FxbcsSL44erojkLlOFK%2F%2BI2mYngL1lkTh868WuFjmlMM4vxxRhDOdk3ZGJbT2DRPVujAHlkNvvIhm1Inl%2B7EdHZ5BeTjpAtqzCHizgiKTq2NYboV%2Bqg4apQIS%2BUFhauhPKEz7PZfhtv3yPjRKfwEIe%2F93PHBCNzIM16x3AGwBLY2%2B35VMwgPlv0wGXMYL9GD%2FhKOYqdSug%2Fp79hSFjETclM7yIiazQ3xd3i82rliu1oL1ChDKWyv8ALvFCW4uDCLqVquLiDzUQj1BDGdbHxsZQEFVf5XzVQiXyLfU43BnNNA2gicSXUeWTL3WA0ogWT5GgjQ5aUV1SH497n1n3Vzoec0RRXaC2w%2B7itNJvr98PHReVeGzA%2BWb4ACh8gui4QeuDAIAkB37M0JBs9dtzCYTr2fn7ro2GndQY65kjSupwST60qVmdy5kfEzrP45qzBQV7K1KJewPTuS6YI%2FwWgJGYJSDjIFILXh%2BtppQ4NO9m5uLrnaGoiZR3lmvn6%2FYq6o5LrrFgmxMS761OORdfeptCjdlOu4ur2YIVunK5KMN6MxsQGOqUBr4FXD8V0dWZAUEB1zFohK9itTAK5LmnYxMpSidgTXtphNFOHwZQhFh4qqh3M8cyJurnQTNaCGJ58zGpeeet493pPUvatoBrBon7d66GvNZ0WjJ2Z9c43yTopVDmn4qgeAEuyg6HShIYOZpM9AnEVhX%2BYs3Aclpq%2BgDVm01Sn6TcpXv12GC7EqufXVXWT7u9rcBbRx8hovyhDqP4eBBIe0oYDrA2H&X-Amz-Signature=949668abf1b54bb99c2b56dc761d9912d7ff38c131e3bebf6bbf6fe7adebab12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
