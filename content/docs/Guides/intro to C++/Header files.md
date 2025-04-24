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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2GTCIZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC5qNaqzyU49LGuw%2FVYBFqjJW6cTvcfcRJF036CYS%2FynAIhANpVaWAlphGCChBFZOJkE3UYKTUvEnr3kF6FEZgGY%2BkjKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF6Uq3khaLNsZVQSoq3AO8AIkw6hzp%2FSvpIk8QEn8qwIyoVylcus%2Bs5HJgkeOjk3byu9BE0k5oYAj8zl5ujXJDOWgGVKYQNVC7MLwbG3nqgXaLDbjV6CQZf91beB1eNsy0xoJvjNHA7FJLIZsnRejB76oPxHjvnnYXebtUAopHm33xL8bL4xKAks%2F3gR9xbpJ4osHA3LA%2BoJJnp0P0w862G2JpVhsW8u%2BP7E21JLt6F9ts8tIcIAkVF5pN06biKcZe8J3fjd4SeOZtrHF0OahRbcdtK9NFwOyotP83kY2gk46yzArfynunwFWSbYxs7YuCvQjs%2BjQQjfagM567T0TY5UC3kjHody3kACAZcc9QXBULyCLwn0dSiMocEv7SB5zQtK3OCGwUks4VNt76ww%2FwNccVn%2FrwsSKHFi%2BmBcMY5JZEnRvRqkMfwtINwcMq6g2xrIvF0Ri%2BC0Gq%2BtFViaV09y2ZahlT8LmAj%2BN4jVfVGO4CG0GHOIWdlmwJPwwNIQUDFI17kz4GRncNLcTy0x9gU6mMJHWQRaBxz02D6e15ekgO3KPvoJQXAHYGhjzF6gNV%2FE%2FMpaijd%2BWtHaPAyBKKJpXG%2FNx3Rfc7jdQyKIPfYMgyNs3egeRe4%2Fm5T7o4W1biL1RF3VVenlOV8DChzKbABjqkAeueqQMvrqPGRYMZITEteS8CUGphjCsYJdO0pM19wsGITUmG2u1BvmPp9LXLvG8L1Vwex%2B7UoyoPTDY2szEWkusGZttobHH5A26OGeKBIGl8%2FUTUHGn4X%2F6gObM2GGKbStP5OOa%2F4v5FGGmeNMjNrzf2ZxNVmNIAtDAqatYUoiIZSDf8VolAh7hpPp%2Bxri269Bnb%2Fk7jL0DJoW0b58Qln%2F9zJEjc&X-Amz-Signature=3ef1495eb7f0dec8de2de23ad405d5971f9c5b222b31f06680393ccadb7ce110&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
