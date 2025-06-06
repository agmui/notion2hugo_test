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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPN5GHE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdkvN%2FKTqGsGKBKcWHXC7j%2F0%2BoG8EzFECvhhZK152%2BwIgJR8nu5%2BGxW9IXcJh45tnvE1hKiBGZkUqvVszUBvJ32gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAsuY%2BylZomuthCetCrcAwxzKFgaqRDUCKDUBMyXCQI%2BMOQzUDF2Sw%2FH%2BUi0zM2SnIKUt4ALybpWwC5R9%2FrL%2Fsfg2YEbiO0JvsTkNEwprzcm0UcdAwSEgcdqIPWt8%2Fv6ZO6PjVTWUGpHCqObCZfHchOqikGmXFEdYwuETfg7rBgGDLSbuHSIX5w04iC4mB4bWu6XV6mC09PVggTZDh%2FMHU%2Fhls6ecco44qZrVAYXNPkS4JlIvUnS9dkoVwHDzz725H0KgLKXrdNivYBKQCqf0a5RmA6hgZ4S%2BdUxml%2BDmnbxq1z9JGkBV4pWtwzYdimO%2BAiJDyBKzjc4b6qu6bKLuhwLBJRbNwbaZFmoSs5Hl9DcqTNLpNmB6Ud%2BnccVfHB%2FPT8s8Gt4YLzk%2FcR1ustM0pTXbD55nfBmvuP%2FHUaT91su5DW8txkEHFhSN%2BHc%2F4bnQsNbdMmbM4edUglWKL4A5UTWUI6%2FqQZMOC0j8FeW4q4lxm1WW6LTURE8zSd5ZOVYgL0TaQAkj%2F2%2FT%2B%2Fx%2Bsx7BHfWrQaFrx7Oj55wGPk1GkqCfQVOuR4M4xa4TvX%2FqOMTjt35Mwtch07C2VfQKtesX7mgP89j03%2BOX99kfFXn5eKmTVi5rNZDvM9ziCc2%2Bjs0onSxd8MXwAnvBu21MM2hjMIGOqUBntkXeamOYaglB6YWt7ITfXUHtb4kyz%2BqV7WrZC%2BNLaRSqoXdArxvcu9Vdh6oXHuM11yltAyf%2BkL2rQbjfkkHmpgWM73S1OJ9v2bhZ36fx%2F1ekf2I8Dp47YGGnm1ul0ZSy8NGXALCn08uRXSe8bzVtD0QLxZHw6lYBW4Z6xBFq2PlswIoRyULlSNsx53pF9UVoOIiHYmUgZKIM6UzuYHVmcluNyBx&X-Amz-Signature=dfb747caf9d180847b6c7f59e596b5fcb157a8a5a2e8d900fc2862e8f536b5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
