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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHBY33W%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDLKjWd2%2FNCyv8fF44wbKsla8NBd2PeRqC93KpSGZmIlwIhAJ94b2igCh%2BWtgztdqhpFXjCuebUfYdxFf0WqBOLzghiKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBYyukH998y1yfJesq3AMDgLABMJH0YYua%2FvQUdqofUHfZMGH2%2BeS47XL66kGFM5lZiSvxz7JuBI7S91pIWkp0aFG1VeabHON3JnivwIpmPUMv8qsIAASk1H9DYviuZwoXBxbn0Eshwj6SzwyrVnMdVCUflwB6Tv%2FwEBIhhuvyu1ZTl1Ld9F0psvAPEZByQttQjZN5zW9pV%2Bnw6IG%2BrS2AIwzxEEfzv3odhaPHtXfXh9pXaNLTWt0WaGIkQZEAjC%2FtMGr%2FwvjCb1%2B%2Bx5qyJZD9Ed0WJ3JMLZARH7JfRX7OOFjfgwBX6MTAoHfixoLzRhOb4sO4QE7BUuKnzsGyWMgqMRzS78qmt2z1c9j0mM2vU%2Fd4DndAGCbuMdE9NOlDx1gLU6xDZqGhHI7dwTnzWfmQ3YFZyT3vDwi6ne1fMTRIa6BW61VkF9Mx6yBQPykY%2FQwa4vbrW9zc5HdxlIjBb17LnJ9ye9Jj%2B%2BknU3o5jfmWPVbiMr0yCFTQck570sw1UZjRJnx0ytDcr6rF%2Bq7h%2FUZSx2Gi%2BYeYrXCDq0b3E9B4BUUkOyC%2By5WYKeLyAk00yuDB%2FgrNUaaQ9pZakTwN3ceII2ZkLJrcw7ZfzCC8MdGR7DIA%2B7AwR%2FzZLLBiF8IRwG6hBa%2BL8nnFTGhYxDCjzP%2B%2BBjqkAYofp6YbaZ1IJ72ORhhN6fhU6QvI%2FrP6pQElKn705Dc2140s2xi7v4uYo3XEZLWeM1P%2FgwwKIS46UprSZ36BcBQAbreyY%2FcgUrrYfInnDo4RRqfEPRi5%2BCNkYSKgngRLtGLchI1c3l00xgjKCIuWeIJxrmX7gZmCcjJ5Acbl3Brp7qMaYV3QuACnMy2ZCZTEDWTsUTasrOABCriL%2FPWBsq8r0uBZ&X-Amz-Signature=641f47930dbde33107582f565b90c603ec45d06e75cd55a3f6020974f1b8f781&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
