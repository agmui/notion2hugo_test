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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7NHRHN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeqH0Bnu4ouM1C7sKIQle8aqmRDdqHjg8ujNA%2FpifIlgIhALBtih6ZMR%2BUm%2B%2B83E2YlKimB8pYYufqlal0cuPRN4RzKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNqD1CzdqSSsSZJ0Mq3APQqKA3fxxJSPr%2BvIHyRj3FLObSTm5c5%2FhOk%2BdJzeCtmFbII7eGqyVonlnp6oEI%2FEd2E%2FOn%2Fc5azVFgrtncg70pAbyMGHpScccxC60ZzK7HO9i8ARa8SqXweXn%2FIJkti2z5UEqitp4%2B6p3kBWNGCDBl9d5kPECWbzglwvza500VGwQxjqDgnUS1h15OxQ7Anjng5RJ%2BV%2BDWHb%2FlGQDGSk5yQi3%2FERKGWeGWN74BWMkTm1N2gUb%2F7hVasq3zEM%2FShI3I9MfvGgEUC3WpRaEQoBpeDnFSomCvfz1o%2FfOLec4rWeWczHCQs18Tw%2F260VDWQGs6V69CNlFeDOd4oSQRQy%2B2cYWiPYq8E7WgO0KB%2FjX0WE73Psd8SDeGr294dGLIOlOcSGcy7WI%2FqJko%2BQhzQtPJJ%2FMNEjUNXDAjvg5BKERZXpT9ihRdoL37BVM1aI4tNdW73C5sSQuUC%2Fnk0xOqXDuw4HdFjQO6iwg3Eplp02t%2BeXiMlAZOlXNYO16fnVNzphHWyChA8%2BiToiUGNqj5ChQSpzBJ95vsFyXDinO4Zkwaqmq8V8Ed9g7LLwQwtzQ0BZYuVZyzmPuTBxrcRF%2BX5fZ2bK8cEKTiTWUO%2FJXi9zAmUwcsKCCGFlGqQIaQWTCAu5%2FABjqkAUCIT%2FdwLZFNptoxTup%2BAQbQ1vtWy4Q1C1Z6d3qCFMdIyNg5a%2FGS740and9V7ng6iNXqrPzBjg4UU5BzHLFMhOjjYqs2ZPyG4zJJoeyPVYkuEhgvUJC%2BwITh%2FzjwDGxFJnthLGyY5r%2BL3xvjkXzG32kW3YiRjj3HBrsXcML15gGaEkq5Ny9zijECcIG1GY63HaJSjMVkWHO71H9kJa4zc7YZDqFk&X-Amz-Signature=7a4e09cf06477465cc832ca1f389c3c806b15be613d7df0a2f7f863a652f4531&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
