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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH24GTP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBkRJ7azWVw1Etfl7JGfUvMIqm3%2Bs1P7zd5pD7Pp7KwAiB2r1Ajbkw4h3CM1MfpAdO8YP6fSJmzvGVMsjbU6Q4fOSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsU0V929Lh3Zfq9RFKtwD3YI0j1aA%2BJaKnDvM0ezx7XmtipQps%2B9i9Ff1DNdSic3n%2F6oykpe9XaVzjT1dsmI57BHk7m9UKqe5V9ky4VXlc0AvxLW29WxEIVU6%2FYeHvWZ0Rlp4kSH%2BkyGzhD7fFo%2FYPwZqFs1h6QzxB3%2Bqvg1bJyGy%2FgL0JawVKF%2FZYMmzGHekrFfrpd6cu7Mj%2FdurOUdQP3OcbqPWrj2lm%2B4nIXRMO0Y%2B4cGsh3kNW0mYIg27YzyrvTQyXZGkBNnkWbxmL5iT%2FJBuPQHl8YX0I7A4y8kmCOvBAxYisyj4lVLbtwedVAH0%2B%2BtPk0BPn3ub3pSDzSLkP8f3LAY2a62YP9Qane0r7mQDNhBANl0j7ntolzQSQ9ig0uklegrEbMS41QROfrH1KvwJWC1RKas21CNKo%2FstS54SHi1cTj5dO5gDKxBsRSazHAaFdbKow63oWR98R0iEEZiMeiXMpnKFNQdUvlr%2BxZPkbzePBFvVzX9VOp5iyyBbKpyk%2FhsqPo%2BGMtdDdpEM4YLUM2Bub%2FqHGcjelwjeyZ3dK3vEyg7qvW7rO0t4WZx8gSM36FBOzknchQwNWatYwhXhrdUdsPidVQA3hbDkBk1dRv68BjczU6rYNP%2Bf7U7OFK42%2FGopVDl85i4wnvy4wAY6pgGEGI%2FBJ6p96neq11NKlZXDFFC0ly%2F%2FvBDfjtFPc7k%2F9a1jgfG8ml0SSSV4%2BPreOQkj5C8JWh8xkMzNDtE1uEPsATyuFvoEB%2FtPFcohdggjtB8RHKpVO%2F1F0yKZM04L9r%2FAtmvLRQGBrhh9g27g4FrVLmXSN3dbs4V1pomhX66s3P%2B9QkXlWX9g2jEtV3n3zNJ%2FDKD%2FiOwn6pYCqSj3WKGtjGAAYPWz&X-Amz-Signature=cd45bec5c2a54ff3b45d0e55eda52d9798c956a2f8dc66eb89ee075f7531b3fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
