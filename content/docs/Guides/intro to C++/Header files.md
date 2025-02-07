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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU2OSHE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICU5Sc%2B6YWxSAxXkuCD9LaOsYSPOCHxnH8sOQvAOCqVZAiAH20RWWjvY7T6%2FAI3Rmk8OuFJ98YwbCWpzLQlww6ggVyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6fCZsIE%2Bo11fiHBmKtwD9Mjv4p5o95g1hqEVipkOJ4BuehPO6SFcgBKzGv2Ti0TplX8kt9IGokjQmUgnOlp0zAkgJOoiYSSMAfqWP%2FzeSnOw%2FGm5sJjMwnAm5lS8Xn3BF3cEARBahBSR5Lne2dK%2F1btPnMdSVUXBN%2FLzQIe7Cc9r5klMODYib9XRGKatRSBMmeipi5i6hG9y5JnfxVsM9zSkYVjNMV6SviA3y4XN2oo7IeRs6hLQUYBbVNZdcyebfM%2FDMsNfs5xo12W1TzWidRByFCRptDsuW3pMbb7wI1knLyW448uZNODMdTF9PPTMzAxYEIxSsGsdTJSJ%2BRrP8xjF9OZhUvKYcXvS33UjpM%2F5NqKS8WwUNzfqF%2F7Ar1myd2roY3M7Q1YeEszrJCRFDdejXF0%2FhxGa7Wq3Vv2fzT2lJy5hrvNw%2BHqqtCUO9rBR6zqi1HEOPpjPqq9XtptjpJistjNqrs6cRuUv3fyyPbL%2BccVgDDKXU1WuFZSsNFwqmC3fm7re36ckgKJ2dRYl4qLP2pDymllWDIdn2wcp640mXQuBy18rUrxKv2desrZJzDVWTQ5mqWd9IPdqAvHuDTqQles36ipDLWqbf5VZ%2FA371dHaBMre%2F%2Bq8cfj%2Fb%2FhVw6rDgjQtQ%2BzZLRww4ICavQY6pgEVyswcFQHfdDH177ManhnVNn8RXhQ5to0%2Bwzw%2FldQdhPYJUTBIDuiFViwV32P4vPhh3%2FkTdb1lXaB%2FIUIcLL%2FTeZ0PGuftjYEfOhcAL2uIZ5fZW1IJXXVaqib7JQLFb1CoSTMD8SGDVPiLJLfUOz7esbAg5bgW2vvVpqLUQXp3SY950S95YPGYpsQVmGVXZ5Y0OaMerart2qqM%2BR16A6LKEN97%2Byf3&X-Amz-Signature=b5e246f0b77b7e967f66ed7e0fb1cf03b14f2aafa46adfbbf0f5cfd7da28575f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
