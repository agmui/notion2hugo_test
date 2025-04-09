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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2OCHIKR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDE9q2iV1%2BcNVMrMW0F5NMsZFw%2FkEA5uSW7DmcBo7%2BFnQIgadgmBRXpN%2B0%2FeOYUo3mrucE9nVliFQTLJqROg5Bge10qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHjW%2BRIvPOx65n31ircA%2BGzFCI9d5FKpv7FxnrLPD7zkY29VFqJtQYSgN7ozmwGvzasP1OHbR%2FXgf89CiCrLprZAwZOLHkB6mMj%2B2d2wJJuqzamwpVBcig6c4RfVwc9N0vAe20HJ24ZvkNQ4e%2BIZ7lzG9cvKbyVt515qTta8%2Fa%2BNNSteyrSSWbMljFuHO51DZAEB2kERTd1DGniZxnECoDC4GMUWDtpZ%2BBFRd1CzCsrQ%2FC4%2FilyKfl5EvVRiJ1hlCe%2FZJPLB0FmFekRm60N1zNLVOEYQKC9MVxUp8Bk3qawKJ3isFaKNDagkkDQB3VFEEzG7rB61NUilcLpB9%2BZaW3A7NXTTLNOiZPYXtYk8%2BauNcLitlfCeXadwHypLMs%2FfqqBKA%2Bi%2BIatzZknr6ueOVckE%2BS3QIevyR3IESvKPiVpNEctHEPvfBTZ2JRwe31SenVYtKLViBgLSrwj6J1%2FNZm1SeMMyVc0lcBUNb6J9YtVF3IkOzK4Aq6U%2FLk%2FH4%2BXnZ8krIcLLLn3ppszngJFyOH86KoztaO4q8kRLazXggkcEnpRZ6x%2FFiuGmKtsDnmmOw3d1OrW%2FI6P5WYGLmrYLvZm5owsk49rVzT5R%2BIbMJbQW67DbmY5fj60sE3oivbJ2tIBtuiI8bRv2NDsMIzk2L8GOqUBTesgg0HE3TNax4nWrt0rmwR8mUBOqxNeUsevDfTUxZdPPPrBxEYxu0VwlKHxz4bX4tliQ1lPWGQt4RYRolXc5E3fPno7qB1sMWM%2FxVbcXctCkO%2F%2FAJLDh8aOa5yM8oTQzhPLRWQEmd9JZPoHFnFrI07npU1xkxr0tKFj69f9k7oz8HgYDQ99idVJhH6Y3CB90Kr%2FtMfZcBY0GJuPSDmLmH1P%2FtS9&X-Amz-Signature=c7852ebcd87cf0a693da433f4088617f73cdf5773c8d7c24b70bc6e27b0fb422&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
