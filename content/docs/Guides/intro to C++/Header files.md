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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQX5I5Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYhGJkkIZkjkePu8gRFzCQBtMIhMdbxIJjt3Z0C1SWjgIhAP3PlXPnpjGeyJT%2BLiryrRkZA%2F6gYWR4aDT69apejUUjKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCMuMQ3g44eVvIfkcq3AN4LYPqs1UIYVUSVoy2cFEwR7kJLdUBcfKyzlN%2FqeijHEzzgOLpx9Sd6lNNE1Q4sJjqJMuaFDBrH2%2FXHjbUsNTdAcpa63TOA2dgW2Noa%2FGER12rWM1%2FUMj89f7Tx3vjrq0wF5rAatYdOXZ7ufQmq3RYswK5q%2BMSaL0BjI%2F7vdKLKpbUHetP9KZ3n5Fudg3N69tUQZZGah6FLJJZHBDR2IoCTQ1l8j4LLHoQ3a3Ysl5i1VQZkYpygpnKMlg70BS4783JY7HCw2%2BGtosPKhYDI%2BbuaPLo6tYRoTIxpMq8ogNcyqKva0j52J5HSdwLKKLPGlRktLCBhMB4K7%2B98U4mBBLfUbUecXHaK1ikcVgDjc%2Fu6e1zq8k4gTb7dsipCL9OUD5f4I1ePYmsgQBEde4RmY2LlfGPbLJxW7JlJrmO9QpZhf47Qb50ijChN10rnltmxFHp38bLbNt1DFNQSr0JUSxEfgJE5m3Q9GoULj1FynMiqsfJBbcNkOa92qJnsSGUiFFwRGzEF8en67KbmrZvrg3p10OkwC3aJrgOY4lYLMUqQyoq0S6ds3MDzTl1qCqT7tzvYNMUlB4QkaS7Djv9C5WuOmTzbZq5uEXppxaM63p3sOTut5nEaqI1xkrXcTCkuIO%2FBjqkAay3YzeXQkzOGaTZDTy05qkYedAWzTbcg3Yo4yFgV0SZzhcHGVN7QmkI66tw0H46CHBKJ6bHLhNbNIDHSIgVkDIy370S4cHHU6u7D6cqbi8Rd0OGx8m%2BrRiiTrVeNOH3OLAow4JhTPothL6AAGZF1ozxmVaQebczdpraKFyEwwIgMCR734QLffMMzqI5ftM3n3pFi2xJf6B4oPPcrLZcBYf1rLV1&X-Amz-Signature=5677e484136259c0983db2cf6b284bf89a93fddb9497c7647ac5bab6299136a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
