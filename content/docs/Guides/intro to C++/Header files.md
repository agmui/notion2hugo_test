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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLKMGQ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHSLebccpMgEi3NAktl%2FwoVNmjEgfbIDw0qzvZUYnpe2AiEA3k3HV8KVdYckrw3kTAj3V8eN36ibMwZrhZr1cy1bBzgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNe4KfuQ1k8x29CZkSrcA9QXEBWRHK8f%2Fa7vqZsq11xyo2VAQ%2BqsHQzCojTxSP%2F3SJIJr%2ByxG7Cp8532Kc9vPva%2BxbXkLRmw%2F3vOk19qo5NBe7IbvT3CkmLAhWzGRhzjzov22mZEsxJ7a9lnFVpX9D%2FMnQW1pfcAJDm0ifvU%2F%2FUqp7eP3aX2S95UWbxgEj0qf7XWOqs7XGZHv4VpQxKIwTAhkVbGATB%2F4erxZTJwuCpLA%2BoojsXQNflXFuUJnn0IO35LviPQSxy0ZagThzZRq3Gkx%2BEXXbnTq4%2BSGbblxdFhlpxgRInvj9Vs1vHmhhQOD97sjhuuUkM7UjEyr3r5sHIKSnrvF0gvhJasIZeuwoCnZxg9vWmo%2Fs7xATHkzo2EENYpQz%2FsUpwvBY2GGvT58eTWVxFzqH72DrIgMMXV1nxW3jOSk07SiMZapslJ9QI31hRIzLntpr2Rh4yM8pVdLs911SYqZwKyfxRJ9WHdq2Vq8p0L7ZxiLhYRumCjLIBqYuhejq0JsXvkIQDWi4grqU8lKEVgVZKvIy%2Fi79ONUohEu8EHZg%2BlGMVj2t4Pma0tTFKOQv8CJTzHlYpXGdqr2MSrEs1gAM%2Fref%2BC21VNGZNzQUpX8KgWAEHMIr0%2FSvX0%2FvJCTzhgX7VIFBf9MPu6lsQGOqUB%2FSRAWOX40phk1r0E7svl1wueWLdA7LswFCdpyGm89e6GYVoV5103MzkP7cR38UyvjZzgZRk0sNIJE4EePZ20XgT6KQLcIY%2F3eYo0juhP%2BP7AwcWIYymcG4qHO3fLm4zynPCWL84xktUUhWezDzwFO2tdYu1LocTg7JGhTOL4g2vWWdGopMtBCuPgtC94yiHl7YqU6u9A6lxdPwk98SW8QRMbfPy%2B&X-Amz-Signature=e4ab60cdcb785a7d6b27b00c8008b780030dca0444aca75d84002fb9c063da86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
