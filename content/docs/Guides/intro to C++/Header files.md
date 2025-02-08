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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3YU2I7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqdPPPgk1AmvGV4YB53ni5EbOy7mKCyYQdfaQy0QTuiwIgCdLjlOEGI0FWXruYAmDkSACZFs5UH5%2BkTP59xa9qrI0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5Odd2vbwTf4pLaRircA9Ef40o7O7lbzCNPox0hSWrWe%2FmYjDa6pJNdGqNH8fZOBsXRFseguYcbncSX0rxWYymNkFFduxpz8u4udN6SwkMql533yMd0jgDG3YsGibB1%2FuXkJaAPnU%2FswhLDPns4LsxKkE0zuRfstLjoaNppegAbSuBBd4YE2v7Zjnjx3Kg%2Fnydcs9htWIAlcdC%2FR0xccZjEu7NmwyBeFnVww0v7VdawxQB0%2BGRhH7dcWyXUAx7ET8vQDCh6KvDnpXPBMQ8dIJPV1eNGZU%2FOHDb5ShBI2ZYdDgo1ANW2qeDNpWN%2FgUjRF6InYtDr0953KGKQXJ3ZDkun1AiAkS5EUMkEqcNK%2BtHf1UGJF6S2pXu22FdVimTMcOkOjjYQVyCjKqFvPAE%2BSCIDl8W1ztoXw1p4ECa1BXD0NUzaqSu7cvhcC%2F5KaNymfZaoAArl98chT2Crlli6G05weLXCnJqNqHKgwMxD2HDUVk0lhj3ksYcU5XR7hsV0VBU7XvjsZLg8C%2B6X6hEAyyHBojB5z78e2Pb33BcadZ78KfKG1DUvBcREb7B17%2BAHpgd9HsKGGmT2Ep5JjXPvxQsfEcmuyNgPEFIScuRUfkXYxG6LgUpCib3JDJnM5AmF3Md16TBnqFWdiBwEMNDVm70GOqUBKJO5mwPDKQRpIblDk35JTIIH6gRCxa8pmNZe5dgYGwsQQtauS0cq%2FAA1i%2B1b5O2309z1rJYDVWLtW1D1dzJHKJDWr6aLglAc%2B%2FkDepXzfcJI7Vx39bn%2FZcG9US92whd2hVqCMCZqfz7jkT%2FHVhjsYg%2FUDOnGPif4Ks%2F7y4KIMONlR6kVsVmmchLxtweX29IqwpZ3gN3kg6sneIaB%2BOTS3qzUoo8e&X-Amz-Signature=71752c406151dfa640951b71fd12bdd1ed44b10a5d02336aa74e189e88eecac8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
