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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHOH47H%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgU1Z0hvjJKKGl5BwABsCIPV9yq4XgxVSx3ozvHNFVKwIgUsrTN7KGp2pPp4IonH3%2FUG%2ByEkz6weG1ddgRSXODaH0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLSgpyenmM82PK%2BQSrcA9a8a%2FfVb%2BRBTETBZqITnpwhKcKBnmXOoNrgvo4lENm1oKnGMMhD0AE2Aw05pcfbu0bcdfdffK6qEssTJezuf99KsY42pgZk%2BDNUkaKfCXWgTH7Os8wf2oBqDugB%2BxtazscVRPAuoLWdt5lXGLqvyy%2Fyky4XujQej6vW0BSZ7dV52qRs3TXvGRCIV5cE%2B3OoImTO4aYWy2x6LZB8zK6Qx%2BNFLJZ1S084sy4Kb%2BLtUMjgP42LiBk5%2BAdCyX%2BVNE%2F7wR9HngBISGa6MIWpnZRH6Hsth8omiY2dAFgzCglDN6XhtBqyFkPbkBGuPA6k2pwlOh%2Fiks47ek9E4gCrD0uZcI2dcA6Z6sLcT%2F%2BgcmSgRcCzjsGsc3yMmVp31l%2FyAfIJfO0jy72ZMOnmZTv3k1wgn8ntkiW24a14tmfuI5DM8pr7BbI8EmWbMyN5tnnYSfBJqSMrGes4JeewWy92PlMaKzg1yGJDjn4qBHFNPkjVdZrWravuIjWdpHmqv9wjZzWgk9nSQIS2TCl0d5KrcGoq13sCJAQJmrPD6u056aKNYzEEemu5IZ47SaBXOFvXKd5wuzfgsaFp5Ep8PRulZMjuHS5h1VR%2Fkr%2FZpdmS6DSSBvQdZEbkjQQ7RY%2BX5mY5MIrygL8GOqUBJWVDpVHSNXsfh8JwgEh%2B%2FeRRcKcUk4Z3roIK7ft2cq%2BK2Uz%2BbA7grXkoKyMr2b659sbBP%2FIvPG0qkDR3W1k6joRhr6Vy8ZExOL0qcKnPHkcSP%2BV6FYBX50C9nrZbjhERUbOo%2FEQSbvtCvDZhZvh0ATjGBBfxf1KOJ12JKo5mqhMcYPJJiOaW3Q76fP9SUaKhJ9zKT2WraIMEdpS6eIyTTzdNJE0p&X-Amz-Signature=64e4e7180f3ca61c3a1961d7e1b82dc463a6c89becd33b3e1c51670aea7dace1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
