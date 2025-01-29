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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMBF6YQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFOL2zQiMwNGoc5EmW%2FT30SyC3QOXvr1XRKkI71yi%2FXAAiA26wWwwREl3boijmc0W%2FLu2LiO8UiOZyLbTwAjQvPxaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKMPwEt8k%2FBxjiYLKtwD5BrJz0uJEiFotfTGBYVSESIaJjwcZ%2FFw2dEhKczjOqp5lRwybKf62XbZI49tWJp36fWYGFPyffkOo4M8tcbif8%2BCtV6sDthLkB8DQu1Q15mJaOjXHtCLeO8mMntTIKHESGWNoDfP5tUjuOhiYFJxfU9NnEt52PYhvfZzi0EukCN2X2rYCCNvHO9hqqWTlUIiT%2BN4gvSAS0viL1sti%2F%2FxdfBbim9p5QGKg0scMcd98a5V5686XxvKnrlEkqxViKaMcTor%2ByET7TwUd9g3BMOVItOy3LQWnlCdM8q4RuO0vWREnrN5tRbOViK61UQYs1EprMUfYt8pVzCGvWLM%2BtFTB%2B1YROMz%2Fk0gf2FVJuQ77xFvwhPa%2FjbJ4BQdycC9eBRSCI03lSVPZQ6dlGDpTz13faJYId1axymBV5%2BHr4uKpGXNiVWQQPz7E9hp0v3NFC%2BtsMvn%2BDCXhkNT3UpPirXLCWyIfyv0%2BhkeYa%2F7dhGpNpdSc2geox%2Bj9yjxN5CEru%2Fg5l%2Ff1IVZd2Uv5ZlVqnJpROCJE8%2BCdX16B9D9xJnGLhNQhJfWyBSXsiVUa%2BZ7I73Nh6HoBNKuKKbYj5owDrZMvxun9GP%2BIWlgBsI0CNXoCCAXjYOivSXY5o1xy7cwl7zmvAY6pgFkRcB8NAba4pQibBzHhwv37lbkYga3JRfhwChaucVV%2FrGabc4EF4yenpR2YgdZDy7CdwqB2g%2Bx9S4fEryvn4LqXxyDqe2ZuBXBe9Z%2B8M1BIYQZVLx9XhlBf1smou5ctHfgCK6ISTdskPHkNXDkc%2FayZ1GQf79QEviXJSD5QFH8ta92%2FAuaCzBrPaqb%2B6OoVafrMUhXOmIHYfIRhxOF7kMpr9brHrlx&X-Amz-Signature=650dccfdb744c17b4aa7d83057160884a324ab0061d68461a1da4d14eba19fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
