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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKO6NYF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBOOaBnMAQCrIGCUB82QGfaL3W4N01NNpMn%2B2puqEkg%2FAiBe%2FgXh3nbfcnn54LokPWuiRMNrUEWqDtRo0csnccweyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6l4A4P0P%2F07QCn8KtwD7q%2F4aBlVjZGRgzO7pFwps%2FblBZQFOBBvatJkjPIYQ6iL%2B75cxsFwo6bFcIIDBoyxLnoZS%2FaBjqAQpw8n0S8pHkXyAJ6FaLINSVX27DfbukAvdhdzSgJCYAKwT6tnGpdqhRdLd%2BSNen%2FhJdoOnC0sotUvf0cq9XKLXocTbmcSeEdS92wjTeSOZtbNMi02ABz%2F2fkkPVEHLcGz1bw7X4uCwGO1ZirHz1ceey2esNmuePETtePx%2FBqnRaCHq2SWNhevwBj6y6%2FsPF9KOrAO0fc7tpJHv1CyOMtjRngwhtRJe1uYlHbsRGNQyfTbL6JQTFq9bHxoFTGVaYc4gp92rKZm7z1xjqrG6Xtskxgn2c2ejDD4u%2BCmTpC3wtDAl8zAgNYpxPxsmH7Mhk1h8tLs7qoASThmkhFZoH9KqF7%2B4BmJRsUmWFnroLo%2BHuK6W%2FRh9UIoJ2b3u2Elz%2FG3it4Jd%2BtHGDofz%2BQn41JfqQkQwSzHCDgo2g3W7qSN0HcNBWSTYQ%2BKnMYpKIggx7oyRz6WL2oYfhO%2Fxa5BPgcirZNgo0vyfNcl0dBeo1Ss4LkG717MD02IVFQEfGUo1kvpEXvZ6kCGivdcVX%2Fhh13DIW5Wb7IAgS7jyzZ54K73K0hO92EwwKGDwQY6pgHekrw5o8k7y6hLHT3fgyP3PuwUICsQ%2BdynTYwV9fS9QZhO%2F8sDZXz3ZUxAKTJhH%2FCE01eF1BZVDgm7unUxuJktzIzuamb%2Blcgs%2FH%2BMRYhLgJ4P9rI2rmDDkQrDhJGyF50g7Ny72zUrw4vDAhp8ssW6CSBl8%2Fmr2sOYi9796YPwRQdk6Kmyo69DCGhiZg9HbiCF%2F%2FOEF4rjihxeeUcTMzuBO8suMbYv&X-Amz-Signature=12530013c60dd34212bc97c060b6fc9217fe6b280f75a312a407aaaf686d3644&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
