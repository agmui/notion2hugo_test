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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645U36VK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD1VcP2aNZpPt9ojDERLwLJlfWCEwQ8cgKM3IUQFhZuAiBHoC%2BAUDYhcd5gBsKOIRdWSymar3oK6aHEPgRpQOrwIyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx46NBS0kf9s2OfGLKtwDyc8lkCxElcxq1A1RhtmIgv5966LRheEQzCEq5O7Cl%2BNqTyq9ZSsJmVzqKu9uX%2BB3P7vf1VhnwE5UjYcL%2FfNPLX7Ul4zR4LgQb4EeCUEb7Q3NVoKc3BAfphaC2CRSr3EauC9X86GTPI0nUPPzHEVWAaLkwpMTR1dmCZJdh1zQUAkZnn0f9XqBBc1Y%2Fj9PsNxq7rCjFnzfCQ5xBKjili5LqdyOoV6A%2BcBlSzjhvtod2eq8wYVUaKZjCR%2Fy%2BKs3c93g7ZmdWv7h9sC%2B2jV0vsFGUhlyP%2BXmHE4W4QPamTtJpbRHgI8N44G3Kybc72SBAaF5osspljCvVSTGdSS99jSlxsNFA6XfzRnl9sM8ffg8E%2BMTVkHAya1%2Fkn%2B7Ap4uh5QuhFzuRzlWUgemo%2BpWwI03L3%2BAJahnBdp1IdnodP%2FxG7z2Z23legwotZEgTWHo7f1x0QJjrUj61emBnotVEJCCIqgeM%2FkP7RX1xwUwD%2Fap6JC3TfPb15jAxUafw5AbrkUwylYqawI8Jax2jL07pwUSP9qatxxi6ZCMW8NeWM1BQZl1yKjAs0OedDSgqSQW05gvL9O1BtNwNNpMcZWUcd7aZBEHFBQPWPp3TPGhfQFyCNUYiL%2BQjd%2BJ0DgG%2BL8whpizwQY6pgGdKUIdMW4tDJ3pZPUFxdkmU8yZUoym2xJXPmygfQQHey6mURCaz8ByCTF8czoKnxd2QkwfCBSBy%2BTZmBM2rjKnRziZSqBkQ17jV2WyCc1h1oQvHltN6BZmHSUOmPgKgIYgJshTk1xilM9ZOxfIorO61SOVSX947%2F0ASdJ9xrE7kmlA%2BKRG5Key%2BmGY%2B%2B%2F3%2Fk9ixvJCnOfAGlRW%2FQGEZaS1d1phwyV9&X-Amz-Signature=4d686bf6141de2ed296f0e83bcc52ba521917a65f38ec9243e608fcadde66600&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
