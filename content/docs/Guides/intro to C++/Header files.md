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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXU4MAP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIANQueoIxMbQ6xSkHCgcN97LzEa2O94K3l02RqTc%2B24zAiBn9GCTKwZLx6QAZcG1LuztCftANZLhI17huBgMG0iAdyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM%2FAtzQVQ7isEbxQ08KtwDkhAWLg5j2umB%2B1CiP6LmB%2BXxFqkpRQa%2BRMoWSHkLtH7eHcy3GTgf%2FtF0BtH4FZ3T6LQttEYpQsagB6P%2BjV1StC25p1Qcd618vkgJuOemREz0iBNBvB23l8lEVCwZRXYh%2FVeQXycHNFuo6haExknT5iqsbAy1oV%2BvCz63T3sNyb6u5PTZf1gapyJ23skrd2uN3P1vdbQ7CspWN3PKBHVEYh4q%2FP8oSyarJq61t2k3Lvxgr3pfnI0QK6vhlSBVSJ2hHODdeZM7DXSw9wJie5eXWNU0nwo1I7XbxzokP7v4sova352wYniGWapYF35QZueEnuXOKb1zKjVHO83FtsIGs3mkqxPSiXHVrM409%2FOQZKtKymstS6vqD1qcVjHZ0kJ7yByxR5aJOC771AP4%2Fk2uilKu1YSA5IOOmuOYLLv%2B0J7to1t6qUS5jie%2F6Ye5RACUGDVayk6iGhbRQbIByn618ovvGJZ9uJWepaos1uBWggsrxcT2uEB87nuK40%2BEd83RBFX5hqyhvd5bVpyfeRRUJRUvyoBAUxZiOyQavdgj8ZGWJpGgjBQiuMx6PP37cYiD1OuY8mBQ5Epw0O1rfs3AuzcnUylh29iwJ%2FZeuhiCL8y0LzrWeqARRadoGMcw6Nf%2BxAY6pgE1pkLJQVa2jdDc88v3KbFJidVnkBP0WmPR7OoXALTgDE4WAeOI5EOBdtwjCctNzwJSLtZXYrE%2FRxTpUKtJWn%2B%2F4vXY4bCU3W49e74X90zw9EPJdMak9Il0RJjLgzrPqocKm6zpulXykjt8IGZ37RMDmhaWu3OTYX0JdsCjXhlAzCHX0vE6Fv7CBiNR8hod1i3NLUcyrKP3IWvkHK7VX3%2BICLle80iZ&X-Amz-Signature=d87f3059e6c82d37f9242df60c80ef8bcba5214100638d47ae4b3a6e3049b1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
