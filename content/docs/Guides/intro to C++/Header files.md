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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYED7IA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDp7Lv%2FNCNNc7NTzrhRj%2BzGztEcbzNNxWo%2BsqVVN17ShwIhAOFCFLHlChq3IEeeHQ%2BRVnK6yBEGnJdNagTkzKRr4hQ5KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHOWSr1QYFVck21fgq3AOcxPYwKJZl9%2BQy3KtgqBVZfiHuvZeCvUvhpuScHekZH73b4AGNygC3Q%2F%2Ba8l1VqXqsMCme87U2W8Zb%2FQHuFZuYzxogUf2NDfq6usL0MVfzRZZPBN%2BoYnL7Kn9EkY3fF3J8jhhsYCVSyJ%2FJnn9ECXsXkBVRzpAPqMP2b0gB6WbtgWs7wLrFfqjTLeWKeNZE0x5Z6EYgskVmPZHKREwIA%2BtiKHWV3t0HTauoXiWNadtFABhYZREFOHB2LjWY1Vy%2FrSSQqE4C%2FhNQavut2MxiiyFj0SLF4FXcKaxW93CD3WQb3Gky55CTr1NIe2xw7uWMIFcAxj1tNVFMxmDAfiPIyyM3yS6Bcfx4RNYXks1S7Qw5A9RFrqX8SxDt1v%2FbrsQ1Fke967kviPKrM8V7MlH8S1Fz6QAbBoH8h2bouCRBb6%2B2tZZNBFiz6ye7QLzDZ%2BvqztJnbjt%2BXcQts0cP35IU5yoMq3sRtFPYK4FxZKNMo54iJPu8M5DMWuu0ZfT92VIUUghaoXDPTsjwzI%2FoIbRvMhpq4YFwnmNLILHmRzdIDFNNpZc9gdp9G4kR7M1dsZzMLALqzSqaTsaU9eaPQGPaF8RI0rvajCpTpMlBWNT3ones4EnSUzVAFyETp55PJzCE4cjABjqkAbqdo5LF90sGBI4bVwXXhna1knf4KNPZ3wAD5cFZPwi7w66n4Eoptt3QB7hGmEyr4IRuY8%2B7MuloFhlR0wCiX3hpKX6v3x3P0JxB1Yw1s9rMEtN3vpLXfG0waJMW8RAvvfc8C99sAeLetCmFMo%2BzDLm8vhVPH4dNiZmsKBkeNfoqp6onvMxRrEFTOrgFckDIj%2FTeDStDAhgLmJUVh75TxpkoTOrs&X-Amz-Signature=496b99bf26b8c34c2d99cb96c2d200415a8f6f733e3f108ed74bfb8816e14a08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
