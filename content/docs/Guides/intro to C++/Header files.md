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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBDY46Y%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD1lT%2B3VVxEi1yIap9Lg30AV61f8zdnmwDLf0KvJb8HAiEAwhU005T2iOOmJog%2BD98uK9EegG0INkF6CevozBAjb4Uq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMdbMpxTyB35%2B6TLdircA6R46KaS21fhx2IN08eFwDP4482c4GCLJSg5f%2BZ7iBEh7t8IKBoumiOnkp6iz5jHjrbmytFqZlBrEhBvBFf4rN2krDg9OYb1eZwzmB01MhP%2FS2Hn8EfM41pjMwg9A7qxFX%2FkOZz9942fGS0tz7nSkKznkcJCfKUGMt%2BxLokSj7ktADcgfn4zgSyalwQfARHdAj58uczInu5GCECzLN8yaRS3mgHjbFJBS3MIJ4Ws9SXR%2Fx11Q3yRu1wMpttC2GiCXIycjYCt9N%2BXL7bkHpPeWM%2BYU08a5H2n6iN98eTtGJ7Wjk7S%2BLlGRaKaA5Fyb%2FG99NIH6%2FB1elIYS2iZr5V%2B8QNEqsoMlMjXSqY7%2FZIz5P8P%2FC7rcwwSCsf5NMFaxIXQzcBIPEwSbIFjzN0Zou3wydbL%2Fy%2BXGI6KZ%2F2nH4kWraHYuJ9zEtaNXeqbKwbW69F6ANM9O2UrH%2FGyaYKiPTgQgRWoiNpZVuNLhpWkO%2BpPfB8YNfQG7LikhwAk9qJb3nULEkWh5k1muEMsGVuxyBakznM9pOFyXBgmTFS%2FFqBojPPohlQJSqPFfXCDuQudfVvrvLwrS1VI1XtlzacK721l%2F38f8EJQCLwJ0cswn9hh%2BFfaeecrHZIoe%2B5Q7ZCvMKjD174GOqUBDivRhaM1NGPU3RgmVerZT57%2F8fkSwPlwLLm5OhCmYp9enkNDZoQp4t56Rkm0eOpzX14ZpRkGNvG2QwZbZR1Dt53jl2v%2Fm0FW3PE4ZlhhOUqsvDRJe3w8N8sYTvhgKU%2BmG1UYy4%2FPcc63T%2FAEI3JOkwax8yb5DbkfzltIAf90qE2tgAS6M78m69eXUQQExsCkC0CwOYGrRMoFIq0fZHtCO%2FFftO3b&X-Amz-Signature=c76525f98635007197b7dd260226af8ece5e452f2ccd90a6bc94597e949c7092&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
