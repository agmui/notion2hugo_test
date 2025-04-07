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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CL3VMPR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgYzx7yOovMy35bHY%2BVFdsvx2KTUNimmoe3T4dut5mcAiEA0dWNSTHuoFG6%2FBSyvhKzcCImvc8z4%2BP80J7pVZ13qCgq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDE8ATlpxjG2us7UAqCrcA7qXQZwMypa%2F1ODVZ%2FqUOJJZ44OLQz9hYt3NDFw%2Foh%2Bl23nIysMNggKRBuDu0CCaNMlT%2Fyx%2FpTmGTjCQ1YhDQD9gTwOE9ZeWjNLsxP9xClxuVzZ0s3xTX%2FcsME5Z1sk0hj%2B9c4PjASBrlNhlEJEhgCZwpsQI8pK9BjuB0BU6Fha0SAQLPb402cqyhttqFhsHRf3ScRkNSzXXI1mhBGxCKmHi5L%2Buqn0mm0kN7n98FZty2ASoD43NQQge41u6IDDz2rIr8sG91mqMhLOd806dOEExW4FGDgxr6CBCDZDdNVL4zZAkEBZOEFzFk9VDEiYoRKLWRyD%2FmiYwyFJcCu09URM3NbY8CE2ZMOYyO%2BORHNydRzyNoxN4tgXu4W3ZKR5iMY09PSq%2FDNxcBooxxOr%2Bki8%2FILXFgL6NrqObkFwBUHDZ4hCuJpez9QX%2FZ71G0IJl9X67f5n5xNku27MWFg00gLD9V4scBtRljejH1Lm6dJoeR7Uj96NdkGdEogFV2DGnlh1cuuW0r4Job0QbpcAd1QsGMssSBzuDkZinua0%2FG5DJqGt%2B4DmtflYF6Gmp80PnIZwOa%2B7RPUdvFNMM%2BKMpW%2BBDeuUQQEo9Z78Ckn%2Bqe0QGYVtUDOPKrPBkXTv2MKqcz78GOqUB%2BPrMJY%2F9lw4lYmhdJ3Vc4M7%2BLijj0rN0ezWwz5BBdfck%2FT4vgg2OVYIummBgetLYR4f5hixt%2F1mMrzHPvE441Cfg6dKa7faZ%2FZTjw3eSHNnhR91ub%2BFibThMb9kw0H0NEklGegQJr4fCKBKhlg8mmhHSDF9TI46Y%2FRW%2BXwIanxGv%2B97qDacLfDprh6m1yeMTDnnmrO3UmJ%2FOSacSL%2Buc11%2BE5Bzq&X-Amz-Signature=841678fe2fd47d90e0574fca7978d3553af2b245acdc239f873e7ac2d5b0acd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
