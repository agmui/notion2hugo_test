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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3X6ZFD%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Fa6svdreYOygmm%2BXFNHyO3%2Fc200X4cNsjAF0NB35%2FWAiEAgGML9GOaRnwjK7baFGQnZDaad6psRcyBNNh4O%2B7f0esqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV%2FLcWI20K%2Bc5QFQircA1Xe9%2FGey9bdYRoAzYoRbwkfL8UaWAFt2feW3NhsYIMYZwLAQsAJzweQff2EAynxgmkWcW6NN6zkHk2hiLJLGQxsH3ELNWBnYbNE4zIPKzpo5j9t4OcRADPOxnW8seBQqK0Cv97mkgenSnfag45H3KBZ2INBBRj1wpgDwgChsKsNKwshEBlPJuAAXxel4LaZAYooutMqmieX%2BbeTv6LQuhWNuZ%2BV7k%2FRPduHtaxDQE%2BGZS3GCd5teKw0dWLuOAlOFdhL%2BREtQW2fo0Hun9Kl51xFYy46ZGS1Xv2kLxTuwi1DmFFsaHNs8WE3lYGl8XZjvQg3cpgwwvYONq%2FPkXQ7j7HgjxSVg5TKfjgotQXUD2N%2BBbjsOHdq26ilvHGWvhZmvQkVkBVH70uITjX1PoFG37aG6gN8%2FeHVDB2%2FkpqfbleWAc9Rxb7a2odIWYnjO%2BMTzi5bP%2BatqU2QZNrVc6QKDXhUFbVGk4DNJG9qqWOr6Kp8C0TY0inoW24%2BqpQ%2FQAD%2FrHoynJoumuAdvLA0eWFErfN%2BgP%2FtSGSo9VWICf0NXDpweRQjgJN5kVIt8bDns68QAp7zwJPWApXF2m8lH5AcwD2Gui9M5mB3Xhdgxk%2BrfoS%2BAqWTPozN9%2FA0Id4eMLqTsb0GOqUBpSTxRxQVngvthxj15tv%2BUKBL%2F2LzvktxJR3%2FzSx7iVsXHKq9mzePyjc8t8attBwW%2BZ3%2BQHLkocJeXtQqB1yxyA2M5O72OLPFdGsSggXP1QpIJj52oEhMMmix63U2i8R69lB%2BsLQaDgJszlh9dvzwZlM0WGCQfMHqw29smeUpGJ%2Fh2Z2GnhJ2c4KEDxnxjnE9oNn5C4NK%2F1dF5ONubEvDI3LdwKhU&X-Amz-Signature=6b27261604f1ef377edaa93f75b09255d56f6d175475be5ab04483c783d835f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
