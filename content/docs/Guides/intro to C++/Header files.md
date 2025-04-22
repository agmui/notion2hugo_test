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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZIOMRH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCiOQ%2FebhBvywm9sxK8Ix6M0%2BKog%2BWzZND%2F0tUIyjc0XwIgAnS0cjL%2BOXi%2FYvBpqIGcq8gmzWN7MhoDASl8dbZBumYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSSu6cfTMsqOuZh3yrcA7pCx2KiChM7w3SftEsT2ZBtHBMN98fNLIx2BJAB8YLWqUlPuPO7aQg9MfdaTC88WsqAv6RgnR0zJjHsNQLPf8BsL%2FsT7HTIkiiZYIhbaQ%2F5taVIV0Ose2xWtR5uKiMeMlBMwdX4qiQD6%2BjE1TQDSTBaVsL5yhQ8ifXVqydgENA2cm27IVvetatG9%2FNHUrj%2Frrt%2BVd5tjdkZQKIH%2FqLD28y7zrUAc4FvoEFoIeS85Es3jrfQQMhupV%2B6%2FOHwnpYG9Rm3%2BZSQBs1HTgJc6chP0Y0d9n1A9H5nE0su9VvkR9UbcsfIGcjfHfILezP0fxrP%2BLRkZq8t81MR9nYbKT2kLpW9Tb%2BRUYoJWZf2fQ83qObb3y9%2BWhen3ZekIYBl3JneLfzPbIACeSMqCA0i4%2BjQC3uqKeSnywFeFhjPAcGfrmbndhoB%2Bwk8a2tYljYnGI3SFA%2F%2BuFIKN2lWuJgGW3bjLEpXgds2qkLhskseZnvGoUw3GM2s%2Bmscc8UfXPtg77j5sy6PfvAWfAwMurYUeh3rjLcbrWOCwtxsAqRkrXGgpWOG55BzrjUFX4vwBEYhLeusxJlpVh7yORO5OuL%2BY3frr6%2Bg71k4Pyrq20SbDWd09Wcc2Gdqw3aZ%2B5gxmSESMLLwm8AGOqUBK2QQ1dLtoVYC%2FdzXMB%2BbMae1w9QvzL7OZaQgC0wqL%2FfssMQFq%2BGohc0vKwoAHkqke83LjPygjclfaxvUwnBU4RyyXxx9AIhJmIVrdVWEFH0u%2FFu3SfGWs%2Btr39ttp9dUXsFDsrYFdOqCNhlAmcp%2Ffrdh0MWFHklczs2smmkgpldMcaH4bFqoLlVB37Ixepzl9c%2FlF4%2Ffof5VufHSov940dc5CFX8&X-Amz-Signature=aeb4f00646081f84c50ccd17412d41751f59aea388b4c0eb6c279b69a8735a84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
