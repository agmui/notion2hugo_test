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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7NOQKW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRViZWnbHiq0B2Qqg%2Bis3Ss1Xy8H%2FYFP45Fjh5mjVFvAiB9k6jg2EFNsjcDMzk5RUqoBh2qpKM4XGaISpItRrF14SqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nHx%2FSNZq2XUEVLuKtwDH6TXfFTync3YC8diAofJY5YQeKlvOCh19lmlRdrc2ETNuSlQJ7VTLtcYpGfQ5gJ6bDez8RtlQMOqwGP1E9XyzlulT%2Fvxkj00%2BjlR8JW3S9j90WvliKqLGUiYPw5LP%2Fu6IQoOcGqY%2BXGxShXJC2xc4aEeT4IBRP2P52ARfzMDGJT1EI%2FXkHU%2FEilqHB3ASRQ%2F74uL6MUIyXoJQrTbMVA8tQsK6JAE9Xl3t9V6bw1IHnOsWFfrfQSCEfK44UeamvZUMKN6N%2BVW5TmZ%2BxLeUZ7vo3XzHHOhcqgGAE2plt3zo1Xk%2FXyu%2F8fr9gmYo34hFOHY6AuAX6Jm6ZyVsERVEAi8RzqjVueRvtysMXMEs7ZxPKumnnFVwj2Cp2QZgQHsYY9BnUCNhSTTFZZv8R2%2BMzakXUCg0s0bEjATqGQDjGQgGDA01yFDItHYORvD76MSBT7J21BMsm%2FI0cJp9LaG0fC6BNtnnBwCkfIU%2B965njVqgct%2FYanS7wLJv81ApaRGmKwx5BRwpK%2BCRqrCiRQZ3%2FszbaRsvGJjJTgF7%2F5cn0ufF1L8LD0E6wGEDoMady17ClCazr%2B1QO4IwhvlNm%2FjXYQuGYO%2FyUkD%2BihejDuZpMr22S9IDibixeFHQdaUtbgwm8a0vQY6pgHj9CMzQM%2FsSnM3xmLK%2Fx6QIq7n4wsG5ISYBwywzoc9F6ytopz1wfUZ1nPpP%2F3bfVbz56L2D6qA1D5uw71wL2poYZ4fY7y4NNPDgLe4ng6T5b3KeEZy66n5KwKmeApNrIKKseRKsU7MIL1mVy15a3VU2LRpvsFSO%2Bcv3ica%2Fxh2RvabVh44RSg%2BSLwmvt8Kigddx6GRA6tseRbUSmKWY8LsShEjohbu&X-Amz-Signature=d445792e3d2e0469658ae516686452bb67e632048a9c34cdd277935ddaa35fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
