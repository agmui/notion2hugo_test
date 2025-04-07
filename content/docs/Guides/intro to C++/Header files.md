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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYPHE6H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6VGPRh5XwiWE6N284beXK6RkM9GFCUSjRUIk5OheiZAiA1yNSBE2jrIfWOQjrmt32k21%2BYYBwuB%2FhZOCgDG%2FLWIir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMXPjnDLnp4XStN8tXKtwDSqtNlOCAe4TCEJqPpogJvjyxKAoZ7FH3tK%2BLIYklKbgpHU0yHgpXDepFxeIrwPfk4QGnj850XmvNMUH4IrAbyZHdtEkkZJGLPSRqEDXUJ6Xj0ql2%2FaF%2BOkf5E8wRnCrw7Mapf6FJmz9A%2FlzTRKJ0bCqyHj%2F87Z3QChh9rkVv8SdgaaP18uqpIIn8Wd1wajtWFRONgV45zS7x1%2FLA3Rh6Wy%2B9tmF0yqQLKcBuFj1fRxCPpKqJaqwCG24jkIOYXcB3sl4kzPfP6dev8dJhSsMRtqpce%2FNqop7E3DzhEJ6GtYDLK4mEyLnbLpM5CSKcdBGu1YDnXOtqZiCIvSkUfqP62fs98o5iK04w3udolopxnojguQA6PyZDnpzml4ppgUMBtZKEOtn9VFhW4PL9G02%2FhPi2lqom8eLSaoW4%2F8bgfuGNgYSwjlW0lF2%2FcKzSmbIpV%2BGdyNOra6k4%2BGEglnUItGezyxN1W58KheO4zE9mfB%2Fnt9MT7UxGut6tjM9mFfGfm0w7eGMj35vzgfnROAHeGXLrIZ5fBfNAELS%2BdhOfPfdwQvixVCM3stpBNIIbxsM6OiMJEAzZXiRInm5XbCKfIfLGnBWESxJX9%2F29usUWclTVk1B1oo3TcrTLsOgw84PNvwY6pgGPogVFko4zCQuQZ1d5565Vl%2FibUcpQdjzzjyf0ufeRY5kVNY%2ByauuTBXUPqIxYjdh1CkCNwRS%2BFioQoAK9Zf5zU9ATb1B4grm0EoPXMaoxgF023SUg0DmecRgBXN7XbPszyZvcO2wk%2Br5EcMRjQhfWJFaroUn9Z907K7NYWlVPzxowQ268m5dYoWaQkK0DiOaaLsSd6NOa%2FQctBti%2BvAY%2FrOWACGgJ&X-Amz-Signature=c5191dfb36acbeb7984e0e85b5801cd6b6be05be1ef12f0e3b0dd325fe994610&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
