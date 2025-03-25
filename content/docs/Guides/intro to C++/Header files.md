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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623G7BIAL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfF5v%2FzuhDCCbdd%2BjX%2FhfiSbbl7V2bmGHXqwzA%2FaFNMAIgd8yk1Ix4lAHnubVBKmhArRmycSjdghUyqr8%2Fy%2FJnll0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPonGKeM3Ea3pETBHCrcA7MHIb3Bwbxir0imcmfWgzTeiZ%2FlM8dz4kSlJUFvT2D4G5IoagbrHRBPE7Y31y%2BevmsbD%2F0SEe7h%2FkOXu8egc6zx079Rndg%2Fc%2Fil0XHHn563QkHYZuEqkNirW1ClLOPswCZOX8UnVMPUgA2enF6BtWSfIm8qhmQGkVyfVlMmjBXsXF4%2Byo6INYzn8bFT4xFUIy%2FK2J7d9tbGmuXUQyCaOrBLlO8BT0d8TW57E8V%2Bg6w7PHrq6GJ7Uq0CY3QusLEa92aLWTEuHBzZBWTxe4txEBBBb2Mpm%2BXrLu%2BeR4R9FVjhCa7Vb5bds%2Fzwy6qw7xdXaFD%2B4IIDQbG8eRZHvbo5GeLF%2Bh46nb2ScJcaPAriceEYtgpghBhF6La%2Fqjq7lrOrSeF5PA67GEOOThoGmvpH5Ou0uNxhZAk3EY%2BRCYRhYfdP9EwHEwpKOkOCuK4v%2Bq23xW4dNU%2FVeQlhOzynuPsh4KlsFRKgLlWBEkg2pjDwKYUKTmZKv6t3eCyvejwupVWIIyikkQF31xmRflKAqn0aZkowM7Bwjd732Qnhn%2FVSnV0B2bYG%2BtQPWewj1Hi%2FrpkDRX7dgMS%2FNj1b2go0JZzZY2AuWZh%2BNF16%2FgtxNAZoMhLGxHAx6%2BXmaFKpvHGmMLaKir8GOqUBJCO5OLsiqPk9FGou4YYcyKNY9q3b8doE7qf3ZtJC4jjXlJWkyguD9ClRs%2BzVJA9Kz22sPCGprsE8OQn9QhSWwPZqug9vMIndQCjI93CLPv7excnu6W804ziAnwEGF%2BECLO9kzr5CoTfei%2BTl%2BOnnN8hw5UN4yFVfGPT1lYMS8uTQQzbQFtleH6kIqzIx%2FwYA2SrzE6W7Pv3R7JWASAsmPM%2FAqK%2F2&X-Amz-Signature=a4855934eea2915e41019ffc1aeffafbee0af1ce65132d01e96c24415a3aed91&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
