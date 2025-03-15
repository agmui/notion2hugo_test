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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JH4WTFY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxkko0HK%2F1mnfV1p5I%2BhrIw%2BTAZQm2xMWSEK5IhvimHAiEAs7JRgRfD1uHrSYh%2Bn8rFK1qYFTDLH1gn8OyTNOD4EVkq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEZAZ7Hecy%2FdEcCRCCrcAyMczPyd2Gai7Klo0v2rB8jl2UyFSLZtHrFJUDctsz71ALPnoJZO4ap9Ze1HfujY%2BESCpsaUNcDjp3MphT7qeaK8l6J2kl81JRsxvvPXSK%2B%2FWRvOajabLoZfaAzpvlo2PQEuerGFjZJqWVyKUfxbUWxXeeVmVqog2cb2tQxEKJmZ8uEB5OQKYREohqguIatXOw4hDq%2BGuxL6fDjEQ6QYsUCkWpaRhiGfK79H6b87LFvcAqbA7eH8a%2BchhC6%2BIyZAuT89f5JSIBNRhuHMEA%2FvbBPW1nXp%2FLPkkrh1HRoDP5Ksv1W3ZGYeQvA6Qk09myXAgh9dpePWdjW2ikCizG%2BCz%2FNElXkVQwUzasouCXCxBRkVidwtrvANtrIpCyIq9ZU4i%2FDX8SFYI20BVucHorxucXhXf9bmjmnBwEEs5ptVVg0xWZi9XdZKsDqlvG1m03YrhTj6tvKV%2FIfTzx%2FYYJcsRx8z6AmHs1TFseVqL9sXqCxEWxH2zx8APbbdAU3vGY0He5pWGWkmllpRzV%2FJ%2FvRkwqL5cCvgcKLqAY8yMExY0at%2FSDt2CjkZzuEmPsH1bORhVfwStAFQre1pO92WSC9e6nTBtG8Q3ddE4fjyzQLGCVKAZ7K%2FNV4NFbVviPz5MOTi174GOqUB61u1Ppx%2BnWk2%2Fk9daoZEjOv1VDWrFkNsyJ%2FMWV8N1oFbAonFJeJumDW%2Bp8HeuyJIm6JDQyi%2Bg%2FiiDRQt36FAo%2FC5h9OHf5vQKdaxq6t65EoUsfLAVkmlYFHGQ5tlbDzjxdC039XfOixfq4yWVOoOOK%2FgP32Yc8Zv6%2BqCR3iMYWlsnHVFTp6zjBGG9mY8pXlIQB2TeORXPcpjbevuxHItUQxvLV2E&X-Amz-Signature=2496fea77a572219dcf6129842353e4973bec27cfb71763f494fca8b30fc6667&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
