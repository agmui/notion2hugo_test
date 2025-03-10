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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CB2UTM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCBFkH6rjkobCeWI9WDnurxVD%2BnYRL41WN13gS%2B7h1OXgIhAIhbFEAfqX4ATy5iMX98ZgtE8A1AzvZsW0rR1dflCYTcKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckdopLSdEgcXDbkIq3APEuS7W%2F8gThcU31nRohCT1oY%2BE0%2BwcIE7c9mxgMHq%2B3Gp0WrVD2n6lHfQIKGjqzk1MnaJ1Ne%2Fuever7%2BHLnx%2BqxYTCTHT7SnwLtlLduU9q%2FmLbRYIQEQbV17iKzWXNzs9SH2BN7dRWaUApN82gdEU1CdjMvtUXPO9ei4GCwP9O3M8XHH1Ak0YsRTjCIcRK%2FVvfDuWsU4KX8r6JvIaJgYFaqF51c1Us9%2F4xUwFXOpbztPLkJ89fElylQ4UfPk0etXoP%2BIyn%2B4BuzgMFp6e1uNGvf7g8oY6glI9dBWONqvMKyWQXWRq1Jjr6Zj4RaP6%2FUqDevbD437g8PaEVqzJkbywr5T9BHnK%2Fjmt%2FSzwjCzAIo8Cr9z1cXU7Apjej%2FXyjKoYQnptr0hXo%2FEtSt8YAuA%2FlF8gZIrtGnlUQu%2BodQ7zqs3%2BUp%2FvkfOuiKaouEKP8Y%2BcYeP3Bq5dM60Fu%2FeRaqrAwxwQuYBbzSYWt0i%2BfQpEO1jDLUVZFuYoZ%2Fn9ZpQ6AZOtLhtZhgpAYN7MNz1oZyOuXAbCfuKTuESHp43s%2Fe3DoiQDMDJg%2BAInx%2F%2BZ6qCHhD98XPANw9IS2pajZ4mqg6xJB4tpxZ6Zv3tC0dGq3IgSFtUeZVmmH7idD90tx7DCgi7y%2BBjqkATVr0IoXOhTlwSyfEYhEOg%2FP1xqsaOy7sMnaPaSkVeG6A59TzapjcR3%2BTWWhe67pw9sDH1aMglLtnEYRJXZ9Pd%2FBVvksA7CtLkSw2Tzq8JymQ6M3O%2F72aPWYmA5YR59jGdIyvU2N0hbb8Zl6b0xZPJHokCXdLrwkatvH%2FmVdAoDWQaSoB9iJpiLOs5z5TQN3tgmzmAuo3vFuP8Fq4%2Fvwkgw%2Fn%2Bhq&X-Amz-Signature=110e17ad6bab66fcd2393793748f101da2ed9ceb7b95adf0ece7c26da7f0f45f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
