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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35M6VOU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl7Jx08fW7AYhsbJCGSUAoPAprfxpiQrDaAG6J8vPyAAIgHn0q4xHvmBVgep47wiPRlJmY0t15450Jv4gVpQFbwzEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO9awBN1UB0wTDg5OCrcA2UZ0uH44ZMQR8Dg9w9iaefAXMiEaRjnNwE7%2BIPtzzOnoE1HRtVScXqLuemi02PbSV%2BhJ8w2VGZx8jE0G6Mweus8StXSLAcjOF53aX%2FDt2BPbxf3j4T%2B1Bh3mWkb1iSHt4Pt8s9oQjn0ZrEJaROWsi8pHxsmoXU7rQd79qWzeV8U00e4FJ3K7tuTKNjlad8yUbEBM7cqcOIKwNmoZ%2Bqp%2FxVvyxWZpbYoGjgpWXce6O%2BxDhm5S7X8WSikj8R3bxUQoKh7X5L6rblxVh9FeUc1LDHzOZ%2FCoh8fIVEwL5C%2BlYdJE2PJK0lLUp3X4LuNqd4%2FNFupBYA1hGROhqRP5JExLkEfh2qZY5n0b%2Fjx4d5drINUcO2wcvLJzDk0Sh2dI1SZST33qHM5zK60XCoDgMZDVyarSve%2BsgorJa4Uvq2i%2FaWHq6VPk%2Fn46SBvHKvl6R%2FN%2FcsOxqnKvMmb7a%2Fe%2BcwrRJWDufITXe%2B0Uk3JxqZ65IgQOQfxAltHwwAE16yAdeVMTbv33T%2FYPW1K%2Fy5HFHreQ8wQvrPxbKHqVwvsdip%2F0bbHZcmFrZyDI%2FpfOiwktwB4PtrfyPmMBBXU9rMq0ONsdQuml2zgN8eobI7AUDnLYj0rf9RKj6sJ%2Fj0RAGRQMLKv9sQGOqUBQqs8Czg0GjKOmD2xQ8j1AL88d8WfOXploOFLRJMIflGr%2FxXQ%2FWac8Ye07QVs2fWHMfvXvtuUqcKeifqzcSJazHkbDQZ6SWpZ5IN0CKvsEONwUJiOv029J6i7s9evECMqAM%2FUEXplLLMuoy%2FZFpyT2OtHS17a4C%2FUqWwD%2BQLhOAsLldWdfA2fuFXBgK%2BJFdvExMrT%2BlRn2gV76GL0PwEYwrnMOKgt&X-Amz-Signature=073d841bf6c1443514ca0661c4f98146e535395cb964ac6e951d79eeb0cb72bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
