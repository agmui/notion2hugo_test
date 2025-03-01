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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF226JJZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHuxq0zAbnW%2BxHJp5oyyUA5%2BB7OadUm4jfIaJGK7gvGhAiBrSHkrRA%2Bubo7MkHPgwFfsaTodBWO4FrkBhU2q9p2phCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZvYIifmy2Ojt7hIKtwDSH4X5bvfKRV1T4AlIQB2oNlr9ZhnolomhJSsEQ7nf74e9LzvGy5ZdXf%2FzzVYuKA045uEqpqxZd9ytyc0ppAToUa0evuWN24y%2BrWf0zkSKdcgjfpYwCn5MtPWp5e2ncLKKezY8laCQyYGLq84EGFdpGXm80QgzR7wYghNyhCHjxAve62PMkDU7QDneMG%2BI%2F17quqCK%2FdlRogS7GgMGIoxOELOpuRGTZ61n8nzfdJ5vUgVrENgDZ%2FT1RCpyQ7dmrXtfB3IZydWtPet7YtfqjGZyV8ZSRyWvCOrjp%2BPDfTIXB3CA9ozXGzJBGfk2xmYtsTz72d214FmJ38wflkCD%2B%2Bro4UYLAt6xu9bEMbgS44GIIk26engLc7YFOX0f8znYaHIw7KvOGLINjUWaBxS2V%2FDtuTd0c13yZ2vnC%2FkaxMkCky2QfA7oMfDW0fbJBNM1gKL8ncGnvQB0cPHTkj4G8P%2F9QP1CiO4iWrYSTJfa%2FobZEZ4lRHcQxaR9cSOO%2BTZwgcvOpi902eCtzn8y5nikRo8bsZWAh5iqImDm5ffxlmYTD9Aj0jBUC%2BWZ0gvYLTwg5tkC0yLloxMvQ%2FOA8pOROXNyvIq5VKexFzIN5Dg2TBlxhIIL6ZgUfxxUX94BDcwibqLvgY6pgHPLjzBgvp3hgEmo%2BTSxrDHtTCib%2BqY%2BnIaTpniDDTx4LaP%2BOdyNdB7cy1CcdOfcrVwk3bYD9eNVWtcxuK9tvdFl3PjoNb%2FUn%2BzBBnuAQ4lhfBQbWsT1HVvgHU4bJWnRu3MsKSrroQJxFrIF7zOHkrcW3SoEQc5sJZ6wjTW%2F%2Fu2uQ6UHitNJ6NrDNKTE6wR7fRSwv4CmGv0x1CEejO8R6A44ewrkCes&X-Amz-Signature=a823942a14e98541d3c7a3944eaacd61393bbf98d350444095198ec02208771f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
