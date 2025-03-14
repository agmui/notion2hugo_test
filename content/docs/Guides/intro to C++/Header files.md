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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VCLJXF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC26cst%2BHAPYYLTIeiQrPUtiG6pPCj19cdBLm6oY%2FavlQIhAJAAaOdVqklzGjdYb538LS7JUDE%2B8MI2h074SXMxaLF2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjwOoWcgWXbZUOYboq3AOPAmWyBa6P4GNh5GC6gda%2FrE9uudA6G%2BPd%2FD4ay7wAcIGZFtG6OUDd957%2FiZF5l1u2oV8NLeQoCl6pMmBTWYNhz6EpJfmwYzLUs5p9A4SfRoGBu3PrB3b4kKmh64Wb9U5ABFeznuse8akMAkn7VoajvhyyoQG6V7ITo%2Fxdrl9Lm5js8Kr%2BJoyp5eqIPIa2CKf8bmsV%2FI8KZ97N%2BRyjjFUzGkNo%2FMVMmVWsZqedY9AvH6k0e8MymtN1Fa68otbNXK%2BL72B3BBjhJeInd91IIitvfVfqxAnWz0zeh%2BTsdifGNf8WK4MsVZp6vbzhA69TeRPid8XJs2x7tUmU5H%2Fi9jFj%2Ft64B3jzff5sqFeL1yYZkwxHRL7fqwcdK82OfyBQ6R8nvbrM77qZF4PN6k3G1DEhkUnaGRWwKfQIldTXcIuFHsceAu1fbdxFz4eidZYx0L3JhPeuWU4Khqacedcyz%2Fwv7o%2FURNQcBQKTqbcbAWqO6sxzsXFf4Nv7cy5pmJVTDf%2FOU2HI9Lw21B0ADDyCF%2FpftKF4tgo78FrxbUiEkD7lRi57dpFrflgTWvlnoeVUfQ%2FZCRKZfpXRJ2q%2BLkbD%2BbAp74%2F9d6tHjghtqto9ewmejsXoyy3hsI5Dn%2B7%2FXDCaudC%2BBjqkAemwWUs8BcXKeC3eddtp6PwKCVlOVDPsslKXxcxruePtzYMkfEXpprFcI%2BJjshkorsI8c54LRY5Kz%2FUO1Nr2U1Sb3solzC4ORsTDmlHVVz85F5izdvxCbhdko23d7xmK9rY27JbpQ%2BvjLYQECRATDRKbfPThPzRBYptZ%2FAmXB7iU3te2lznlek2%2FdAQ%2B3YMbOijg9ZVIeF25thOMQ7xlui7QnT6F&X-Amz-Signature=f839f0570c9d0e7b326313ee9c13d1f5a313bef01122b57552543da88f35d0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
