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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYMAVNZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCdN7oltp6nNqtedRVUQxoLgR4nUzVhP4ShwBQilxfR%2FAIgCd2Qt0N8S0bJFu2tbEl6KBhjlmJAqzaIxqF%2FmO8Y3IQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNmk6l8T%2B%2FvYxE7UyrcAy8NkJx4RfFAh0G5hq4AB3bGrT%2B4qGLl2iouuawMuhHIz%2FtnZNw2kJU5MTzjGlRbvyQAUT7aUbMcX8b4hQKSVjjipAVWpRbQ%2FrEYWzHno9ldO%2BHjHnJdrwGn4q2gda%2ByRS7XTujWoLL4lkikcJeJ6qlvhxOfEw7IvehMsfJIFd5ERKIWO%2FCn%2BCNwIUz6%2B8WV4viunR%2FbPRQxWHNcuaWF9OgB%2B1QTmaI9n2DV9dKjPeF6zaz9Ns0g5ydoIQIwQsqtuGH0UUjyieMurTAt7KFvpfqtY%2B3yTcDe9h4gV88pRmjTqUyANCGyp59BSN8gLp%2BWEPRJFFlok0nxPuFiTwXgl7b0xVpCobVNAYlYi9Ew2L1lwbR0T8ek4HpoL2iUVv3yGuTdU8xPk7Ft9aJZj%2BDbsQJNXxdx9Uk8323bNCAHNx0893PMXJoH9vqnNd3Xo1RE8rb9uRv25jgPRYF76cxc5IFDsZ%2FHgn%2FpmlhjxyIAeAklCUDrPrXNcNBa8KwgEbH2Mkz0%2FBhfxZIQUDI3Y%2Fg2I3ZH5385cPYzChak80pMxmRJouIgDhVlkOzxGPZnm2QyImm%2FIfGqa4v5oR6aNB0bOHUt3p8oX7zRp64oSpIvypbAV%2FGjelDoeYx1kOpOMIzI0L0GOqUBlWDiaMfdBk66ms7astfsx2EmSFvsR0nBvpceFym7DxEmt9AUgJR0dWST5UzT2z4W2KdqEQ5cA5Qzf7PGFNLGPKXFe%2FZ7ePzeYBHC4XDaSgbGthgRYqvYX%2BI1P3uluD%2BvnG%2FjnhjA5KY8tWZm3T6YWDLSf0hEv%2FH0BuLoXRjYJ%2Fw0edQXbaaJlwYlSp4IdzN%2BpBgMnHYHTFmQgCXjNEKc1Qfm9D%2F0&X-Amz-Signature=74c3087694c1680b05a2134b52cd0523f1d8a2e5af2785a3e721fff0f0445b76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
