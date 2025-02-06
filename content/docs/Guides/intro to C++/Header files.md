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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5R2674%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC6cWRz6g8dqxSRn8EiJZ%2F4RvuIjoAuUStwJUUOWUOheAiA6MvZNVdudgzHvKOcimE1BNUVYpl5%2FmP5O6bZHQz2QWCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMUD9J7MtlTwu2Bd%2BlKtwDY6EDXFK%2FFqbTV21sbDwa83FSSJ56vFX2XRFeJ1jEoNPcDP%2FXR80TisU0GzvJwUIaMjuuyhI5v5XnDF34Nwdbr9HeQGZamWTjwaWkzJnnA3k0g1vU5pe2tISP0a8BA2zBFN%2FmutGZUuVPfanuITpuY%2Bmj6pigGDzUeataFbnDaiQsVYzyUE9TCJQ1%2FFqv2KZyYndleVeOkQiqjKzZPC70MNA5PP%2BO%2BCkNGqCkWRl6Fba5iBzlEw%2Bj84biX1NMd35bVO0k3TodHLjRY6JjxZB%2FcElQiD%2FAE%2FahGYHp8cZay6BKoG1TxqgFQqZ0JzKK4ljalW%2FBxOOwqvwDvyHitE7LqpVtlkHwvNUNeUERbFr%2Bbu%2Fx3G904DNCrFparDGfq7HQmf1hYadELneaxNs89V9Ljp1miIOluy4eMeFNNspjrBAt2Wr4dkKueT7ErdJYjjAxhgciCXJ%2BJCk7Fc%2FFt9TsdX%2Fz6Oxr4xkhzrTTDxBcN6MyBZPALjM0SwZ3Eg0rF0RC5tJA8zGw8RlJLpmttCzvHTv8iWDyLw%2FcrDOZoFO4inFiKdYwy31VgQpMfuHjdx7o5Aeq%2FKYYZxjLwMeEzJ%2FWZl5OhMGtobkp3VImaFz4dDauXI%2Bw%2FQ4dhD1aCsMwufuSvQY6pgFPfkCLNEboZ4Ibhpfo%2BzDtc0oOmMPTNzRxrpihRUMWXQAXt5Fr6t%2F%2FbmKlPz9aXULPllZ4WE2ybd7y32SnilOiOjk92qN6V0KSeSM%2FW6qHnN22KHKpCKje6HjDYWa6neu1iuFqaPGGx9b4eBk4rRHTYr%2BywlMeqxoAbYPaO1Kv%2Bv2vbUNbZ%2BU19%2BgBlW2AWPRkux7FGpkkYeYjDyxYtyJXXygzPt%2By&X-Amz-Signature=26ba5a510d3d12d9102ae175aa5e185fe2ed97f806a99a570fd2f954e90d4500&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
