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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RID6MQ6I%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5RGKWK5sjmSf9YQkGF7ytVQ2H8AWTKAhQ4O9PlhLDyAiANwEgij3uNPkYZVu8vRntXv%2F0%2Fc2YxAZi9%2FhSEvoJVdiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWHSP%2BM7otH5AA6ceKtwDjrgmmC2tlXkiphX3DU6%2FT5UbNL%2BRDXlSdU06FomWgwsd7edIuctuZhzSOrvaSCHFRjHVtSpVvovlnVWqMvzIokjaCnJpLk6OAAp1CQGs8nTxxgVboFXC3CqwE4xB1YuIuwWSo1fPGUI5s9NL3qYZu89bqQgJi7Nhx6IDI0Hf0A%2BwqhKX0IBKKBWc%2FxndSQ%2F%2B4pFcSBf6HibgbNzCrTra7FlDjPKmX9Ub5E52zsHW1DitUoeZ%2BE0Eqw9hx3pNfEO5PZai8BUqxBoTJ%2B3wtFg7TuQMLuJyZX%2BToSy43fyU5crSD9sct98g27FVWDFgvIfQPBOf7FnWSeEDkXo4qO0mOzsDeetbO%2BD9OMMoiHySK9wsJOxlIg211XYFZk%2BqsBNppe0Q8va2skvZjOPZHjt4eBwLOt4ymeXVGMLTXHV3y%2B3NjS5gsPFGXcfh0D4mcRufNP26dtFQGw4m1jhEdlvO3HKbEStR4b8fZCT520DO9azkLLdMoERooSHBR2cdMPXPLRb083QqjkX1Oenu2FbXkXnhWHqGQ0ZI22n3e860aWal5jHQEeKH45cUQ9Pr2PicbNtTSGhdm1cHxJW8lI1hJGUm%2Bds%2FpFVpWhpsh1ojOgoNvhE60106h0H7S%2FMwy%2F71wAY6pgFwoKiPcw%2BmTFZcOXii5nUzphbRzP%2BZHeSBulFWDQ%2BGGZoJDUuSX2pu9YIFSJQPIIVuVkN2eKtdRS04E%2BCyGgIhlXi3Py8UENgWYXByLOLelNlQLdKQiA8GgcjjcWJ%2FqbX%2BqnNPQQrtlWa8gJrYSuQBAwtjVeAmXYwG0TkTEQbb9d4VzixxR7oZjd4gkIitOxVWoKotQQGJjMyyOf7M6p0oqiRwWm%2Fr&X-Amz-Signature=39dd7fec7a06245573216fc645e78f1b0a9680f55c8df6dce8f2eb3522b8fcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
