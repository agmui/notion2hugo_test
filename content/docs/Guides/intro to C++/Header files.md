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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJULOIZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIH2MAtAllMl36brhGNirL3XNq9j4Rha%2BzlRjVB%2F4XxMmAiEAzZVBeeOn%2B9gVMy7JcNfYNFRWmerTAjT40zD2vF7mxzQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0BPPwVo%2BL1lQTDgSrcA2TMuHK2VyKCicoyjuq6oTGeZGAJDNCoURVEw3KUGABg9ZT%2BZyHdb8OCKeRK4PmtPbdfk%2BlqdHMpjf8Tom8lprrBCZ5AxirGCNeNY3rcd9u2cXPlyK1rR%2FUHXnGx6nK0cRPBQoCnGy1mY%2Bcw4sqT11hTJWlXu2GoOr1GP4Ci9Ys4OhuuL5mSeHhk%2BB9WTkWfDqSsZiG9igJPmm18KR9b5r%2BOI%2BdFFDAQzqLRLy6DiiyzfhSpx2xmYyyfHuAu%2B9KyGMxiHKOAnCouvO%2FCcU%2Ft1wknmjX5AQRAFNQ6O9gk9Sg3jIOMoBlXXxRlj8WBGMf0eygZCdC%2BzWXOj8yyH9mokWF2RXpGLgi9Ewap5mWswKmH7Yto3xzyUT1JuNzJHfmbzPz9UmdGKkE2Whf1UBc1zRbJI7m0ysZvUmYxIIIqnfGx4iGhsoTfy7APxrFQDJe%2F2KTjmUzTvqR4UhCHEK4DwIimDxJdD0Ly8mH1hOSWSvTGfC85%2B48VG2z5BCWuC1mk9IhHxuWKQSlvNGAkAgDDiW%2FbehDIWunfwFNtGS7ru08JlZ0EBp4EWUM3B0oNefsNpDM%2Bq%2By%2BEctYmsZxfp11kII7iQGuUyex6HO6hhxIg6afPdCrM8hkjCOUwSqVMLK5378GOqUBNlgHOigT%2BU%2BQ3L4Sn3jQpTO9TRHo8rzML9lsOrSXFjlAj5uRKxE0%2F3pLZA6TVZSfQhvmbw41ZtIc3aDJd2tijT6DyAadslfNVMTBwoiqOdEpvq%2Fjox0IyGYpI3VoBiO35IS3ffLr46nxVQJgN0Clip5mpH%2BcFGWvbKcGi7euymi5G63rFdzGE5BppxeXCEodaQyuaBigTn28bmZBHuYkz8z1sQ4J&X-Amz-Signature=be1f66148b59399c82f88bbc71cfbeaddd1e993e6ce68ea7a9f24f91bc7cb176&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
