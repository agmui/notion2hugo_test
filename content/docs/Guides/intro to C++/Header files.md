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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPKSKY7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPOzFeXz7094yyXi0wuYz6eqVedh%2FPD8hq83ZbSkI8DAIgAfSZ%2BnE3DPiekDvkSlrL5gVYId%2F5Mmfp7X%2FToTzvsLIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnyOeQJoLomn5GwISrcA%2BK3dpuOnFZgckhqfPKtQu3C34T7n9yV5BXV82gSZTK8dqNupVo0p%2FZMufLjmdWXe6uSOTgXoC7eUxPDVyND%2F6NsAiHyU0xlXrKYsJ%2Fr4BaGFoNAqdPUkMBudpU2rLG0JH%2FX6b%2FVWjufRpL%2Fue%2B5vL4TYX5sFdZT4TbCJGbH1r5qz2xrjH%2BnV0UWTSoUtgeCJ0hV3D6%2BZOT6lE1Px%2FVkwPYPzxrhQm%2BYAVC8IkwqM9tfijjL37Ze957Hyu%2Bnxnvdjzz8dFBWPv70B2MVVRlRmGDz8BpGUPP%2FuZyL08QST7vHZJN9yLGxuhv4h%2Bllz%2Bw2yx6eNzFHd79OhZaeSv%2F5DsUvuhlGPYVY6QlHya7egMy6%2FJULum7r1ztKsaW29AZUbQFq1v2JP3MNzG8CsXskJ8fTZ%2BC0Rz%2Fe01B7hpix%2B7TS6wmrfKvi7iGCZepYwY1flSwA3E%2Fsgk8PFmgB0NIaw64k%2Fo9cOfE2EjYP8eMoQj7R5a0PLZ6BZd%2BrCKlGRstf7u%2BjOk%2BTXiP%2FOioVjyE8J%2FAzZX5qdl4B5yXOhwzqsFz8e1StQDUemipb21vMH01zcgsc%2FPNbDSrG9Itw5ZUvFi83Xf47IOlvAqjZ%2Fm3dIIx3FPCH4UoZWSpEGRT4MOCI38EGOqUB3NqAFbxooO4GPbX6%2BdPkid4vwnDW7CXw7mRh43MhboC4N5JVULm1NQFkK3A4QYX5P89U5jFP%2BRYUyBu9XDH4bB6cDONnlP0j2NCm5LAFDVfzXQ8SXVKE9EMfDCmWB0EqE8zkG19JhSjbK1BFG0j2768kI72Qn8tlb0MAJM2rIyMf9LmF1neO6fyS9FC%2FhiHtA6vn9oaAstgJnXCMoEx5XHr07d2O&X-Amz-Signature=81b2af10a31fae513488d048421fb2bf8be919fad6770deeb3c1773285ebb1de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
