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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6H6AF6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICYuqD1%2BDgIvhRyCM00Lt5XH%2BwBmItZnVVpC%2FFTIp8abAiA9FxgJL8riscCO8PfsGpFisCCzi7cuLNHSHwkb48fvGir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM8IUzAuCOhmVrz8iuKtwDu4mMaAKoASbG9cF2SS%2FBeH3vEX7eM3eLCAVbvA%2BPnL2rcdf%2FlEzGgyhTm9HknpiPF33z2ZhNhTj3pIBRqOJSwALd6qWTlWxq3ugfSfWaEki6dI1ADFPBF4arpSVCrQuRPvphG%2B%2BhRUMX%2BQ5Q20UgqppOiJqdXVxcO%2F3Ur%2FVLwIyWG5u3CfVN%2BY9dOQ%2BX5kUoBTitv%2FfYrvtS9GkXPi0MKS8s3jIiY0i56yMWEHy5YsLequvOr0mgvuLCPxAx5Cv9G58QoeZFg%2FKos6CKjlveFngmX99LOUY%2FLrQJdd940m90kRR9fXykJv86kqw6V7HJSnrSznPz%2FXyQ77UCwcKQwIkvG5WVj1lBjvjamNKR6OVWVIVQlgVitlLkinYuUiDeJEvqq01iKDcmTyZEOwgf1hGJz9gB2ZD2eF90BDJ4ZROpjwlxsR8Z99p6waVtSTtue9bTpUu0NzlQ4w4s2%2BwC8Tot7K%2BsVmMrthrjMB0AXd%2BP%2FVZOpZ%2FmkHbmE71qWJMMJ9Fn4tHjIDiZA2Ch5ZwC7gwyryzn9u%2FMTjx%2BQcTE926KGE1swx1n9C%2FMKUL1%2FEnBiDPsYdGua%2Bi2LMqekJGRowPw8AvpNY7KGrfF%2B%2FmJhe%2Fih3WbGpUSkEr7G20wsYCavQY6pgEdav1ucxP140%2B%2FFO32wClJnUk2hS%2FUAAnB3KtbYZ7O9rMBw%2Bcuq8fJQV%2BZHc0Cd9VmeE%2FioqywgGF7ml%2BTuim%2Bi4nEzaO%2F8GYY7iujfMN%2BfCWoXup2KQEGFZWGsEjXGJSl1w3Rj6Nhdhva4BUIKHOjrTqDJB30t3qt9da7KXr4JTclfRIiAYO%2FD%2BdfVjqJ%2B4PB9IFiG2H9QofeYN0K5Z8ugA%2Bps0lz&X-Amz-Signature=3edb2b382a6fb6c62c79cac9c21b8e455f488ab32d6e3ee95e93d5d3f25d0b25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
