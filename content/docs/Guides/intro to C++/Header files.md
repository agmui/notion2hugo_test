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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLXK22J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDmSJDeiky3ewbD0PjQP8ryWfYZrzPRJXCyaq%2FUlbxz2QIhANJV%2Bot0OsLS1S6JEoBa7LMzVg25B6J90bwBwglYLKK5KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMCMHJn2Kztw5Uxt0q3ANPo8K367a4Go2Ch5XZ1BE2o4PaXqcSG1RdFEN4d5RDEKULezqMWDV8KqyOGKVijSyNfkzsc6q1tPdCvzU8LQdbqva%2Bse0qKgbcN3PGKxPFmoo9J4pHfxuV7VrlJCYnsHDpu8fUDqCENiyaoRxGjWDMkmzcAxcRUGupgWy%2FVx4GjXSpVyHjrWr8ySYxJkmAai%2BII%2Fz6dNlevuRrRmNf8pWhgGFpVt%2FjyY1670YdJ2si0JjP%2Fb2NvngjJRmiE3bvmiZAIdzYHMpt89GAjeGzwh%2F9asKtZTyOUtX%2Bq8u%2BNHJFH%2BVdnTRnijihJeBcS38lglj6caLpqXBzd9inT%2FeZ3KmTUFOpoAGnuJaxnXdr%2FYXxgpaUDCCubCi%2Bd13dfKc%2BCUqJfLirfSzQJeJ%2FTfw7T%2FTJik1HAO0oHDCC%2F5EwMdqTF7IuNWNRwJhtd8aeB1Lzsr9DJhXdfitMZkQgQRqGdGvkGJni9pkWJuMOtcnIjp3bmsR7f%2FIqL%2BZf2o2ah0U0bm8nXDbGW3zqeK8p4ZnxsKOyvzfOMpmJpMgFahKgiEXYbYRVWJJqZgcFwPn%2FbA7jT61BfeI0kOYbqrBv%2F5lAlt7ljVCGBg7QeWvV7KXnv9PS5Nz4XfQ7v1l%2B%2FWW3IzDMzP%2B%2BBjqkAUjSLhd%2B%2ByWs5jXE7DW37Ln%2Fm7FUmJ97g1xXmqIx1tsn3L6LCRoXTQ1FF7jeqg4kMpPARJoXvvDJafI%2FQhh71oObwZBsHKuvr61Il4DdgT%2F1eMP0aWkoADl5ovmcI5w%2FR%2F7cUkl0yPh3%2FvaNVZ7AoVsxol1BAAB3OxPLPvMOW7p7Uh9%2BYhFeiaNAofwoRY6J1vHL4bLS57g6rxbfbRAlBEbfpAzk&X-Amz-Signature=ba1c00b622e265f5d1e5d5d2b07933faabe1651b3b8b5127f710fe234ba9d521&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
