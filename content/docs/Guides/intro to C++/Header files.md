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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOHXBNP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyOzvYqRld0k9P8F46W%2FXcoWPRoeTC6liAIu8TaZTY5AIhALcZjFUH5hsXkL4BA4%2FQ3mcWXLdg3MXGyOaja4s50XRWKv8DCEAQABoMNjM3NDIzMTgzODA1Igwddarw7JYJR9rmEd4q3AOUncgpJSlZi80SMIk%2F1UIffH%2FIIBcGyPm2WJI8s%2FaIdF3K4hMLhoaNFy8IKze%2FxlLTTG2fGFgmg1D2GJKsIxe6Nm19jbBCk31NwE32jsIAOHMz7yvm3iarAzr6XkryA1ETYNDSGm5WjS7Y5C51tGfaB8lspQ75lSkO3KVt2mKTR5%2BoDYfgcF%2BdxQCcpS%2BRuhxeI0li1pGRtkUhMZOnEyfcuUuEE6wNJvH3YSt9IKFWtDnB6MYjicBE%2FbVGtL1L75mf01JOgHAVEXJjoWBw27QpYvG8mqvFnNkFpZ5uYMgGswg%2Bc1KB57kEHznVLZTYwCVZgISpQ7yQnWUVrRhEvqWJ1qrivBmYBaPQxgxLCjUv%2FlCEKLwWogzy6QDYjP3f3mXvTdeUc3DpZ5nRvEklkXAXy4PIYvM6GvSLLActeEeo0J%2FaNrAIp5YjL%2FkyPQwwBfCzalOQ6PR80Z1uDCO7Fs2uyIeoooDyFs7vMx0vVs8VizXjibfPA%2Bu4d1SYxq9Lk%2BraNGJZqosl2LYP54nlAiKAi14t9q9nrz3Oigmo%2F4SPDw%2B7wMV1QYLrsx6E9eGjMALP9ONUPi0JttijeU0Jf42bLr5X2EQK7KaenTEhY4qr0OXVDfhPkKEgLmNGczCIp6q%2BBjqkAZPE82Ku4TxDTW%2F4iuOIfca8d%2BDlGdy4YNMniI0CAIL6yTf3mlkRcTqLZmT4lDKdEU2a79k1KYM%2BVESuxLmmuv753qZG0qO1UOOTs45dV8NHW5%2FD8WvNx13X8m4%2F9r81O8vGRP006ogHMm7%2BNx3AfO%2BiLRxL26uvY0rBJZ%2FYcql8LW61isy%2F0uPF7zzIZbjx84AZGvWwq%2FILPBs0L6bBjaK%2BYtrS&X-Amz-Signature=038c4c3fc09ba6982b3cb19607123f4b9aac391526de7291c95c55529338c1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
