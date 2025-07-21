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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAUR5ZI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjsbtwBHGShaOBH1l3iZjWHwJnyUgb0amLXgRNJEXibwIgMQzm%2BatzVc6wQXYtBZY0LvzcKiq5elfS4b2sgI0WNr4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgwr5HqkEPL%2F02zaSrcA9ZHO8oINAHRbPBjLXixggrJXsCSqKOGHintX9prs6ALnBNn3tLLb5JGt2WnY9AVRmJhNZa5oLHZ2EhK2LSEIh4aNf2RZlNUPFbJszBkBymtSQ9IoXrpZ2AGBCh3qXTps4D%2BXOgatDXS6xYgxwRl0ac8Lrqqt3ks4LBhEgRrJ5A7JBP3CNevSaojicdkSEGxVbZkde%2F0YJfYNJgSnSCNcfOtzS9PJiXCU5ohuR4ifNISxQyGP0wX5S%2BP48BHkoSD9iLXU2Uljz2lMMUVZggkAa%2FcBTeycqbs3v4qNJBSdacd31%2FTuZFvPOBOXZpivcYgBkjfDT8DsmzdpIJ8t89rWmKrFPG2L7t9IBzpn2vfsQ4BCxcg7oliPug1IHIV9CxhryJzKntOet07zdldS8tYOK%2FWtL7bP4JzzNsygAkc%2FkkYnT2CdsgnRvlMyHIlXMWCEwgvLtE%2BLPKUMAuy2iTylT2SRM0vym1GGnTJmuiEtZd0JpxN0R07cwhU0r8ZZGnBRy4tR9MWs0LxrpAXFEB%2FphgVdEghCS85FGdw0epzU6axFG6MoNd%2B5ybmoz83e57dl8GjRANRHUAk1Xvq9u2XkkWlm69%2F13ij9Heorobo5nyi3mD0UH6gXQQPul%2BBMIeT98MGOqUB4egFbhup485j%2FFWVab%2Bd1TdoOhsA014RqtQoGBNAh8MF0oweCt2Ia6zanIzgJWrSRM7aoJ5d%2Br0Lef25ZEVVit4RakDFDGteX3VDWlkr3pA8wiaOQJp%2BRerJKp%2BnYU8FhBQxqSzPHmj4OiAPEpyL68r9w8zveCBzj5UI1NjgfXvlnA%2F%2FOL7M428OwfcXac1VrYZ%2FzlIYWVSzdGnqfP4pr9HKkMnq&X-Amz-Signature=a0f9c3d1af65b5cbcff9df5979d3f8bddfe7a8764364cb8c308cf323656368c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
