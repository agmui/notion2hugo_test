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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPNLSJZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkK2pgFY4ogzvmC0ZVAnc8GZA3M79Aux%2BpgsniEqjOQAIhAP126wDtwztxfEi2L4K4UlzeNea%2F7JhrtQNwsPifuRYlKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx4xguwIxQeUtB5kgq3ANXk8E3lgUDLXVIaFoWrWz5DERdp0laoXV1ffXbbD%2FheocV9QYgWFmCuK05I62jkaQN6tRphjXvD0nlgKhheMygrToG0pyGp6uP42xl%2FAaC7B%2FRIThOOu3G3r1P%2FmuTPnTWm9z7qxxgajRRVzkhSWUFjApe4AgULl5O3l0ypL6b64XoI%2B3afWVNkuZbn4FGubhsKziszmpzO0UZPkLW4eklctdiwJRv%2B2CJ3%2FYL56UAYmg%2BQ5%2BwnX6t1G%2B6g5%2FU3pPODUi5gvI1x87L0259ecs%2BDmyR3c4NPd6GBqvCeNG0%2FViBV3KrJzr4quHi5QXTb7fZoRTpp1FXOgBPXYMn97s5Rv%2BiKjBoNAa7S5v318XGgGphRMUfcCk1ZxXk5q8OgTNCfh7EOTRodSW%2FQbPQdyxDu5KSgVMIlUYFbq25uyByrAzrGNrDop4YAlOBL0zYLZ1wkyYgP8hvRE%2FN3xhCOo9x%2B1m0Aa92I0zEawrvd9JZt1fqg%2FwT9Hpj0m1lXPP1Pex3M2Bgs08abZaj8g43oAFQ1vf9iNaLeoWCBhXEtKRlpNgqGdhi4NhVf3ofWUzHc%2BZX77PZsrjTKV30HLfZzrqnk4biMgr9LAm7HWXIIOpMvMn%2BrOr3d4ZmiNP6qzC3y%2BjBBjqkAce48Ooo%2F1qnzCZY4Z4TVv5u%2Bk747pM2%2BtNS0PEhnnhzIlFJ4gisSfAQeo2Vab65VMykL%2BTU8%2F8a7kMReHvUKdZnOHyVuDgG9Ek82zyT0pGL2%2BsBNVz%2BJ73A68vXiWkwds34fMgSvTAnYtFKyqF2OhrZEINskmULy9LNQByoVvilOQ1DxfFYXkfofaB%2BoAkpgxTq8jc%2B1O6lUIkdrc4M%2BWcISuwF&X-Amz-Signature=1db5ec4692dd0d19f34b0f0fffe97144ed579a4ce4d6e699af698182f9e1dbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
