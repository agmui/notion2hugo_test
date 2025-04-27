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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQKT7KA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmrQd1Ymelv6WEgsPqX0lEviYGwts27hE7T0FbceJDJAiArG%2BUD57LxiomXnl3SUD6kMIBwCzHN0jtEoujGD1v6aCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMiEUM9LaIsF51o6tqKtwDGO1GDBQgjUoauYGXopJdeoA8Cay8b%2FEpQWBJHm8uXE1XAmbAfFYaarmLPZLtlYEy54HIUNAbdm8Z9PUAPksD%2FaCSF5kFfA6KOI3phjgXJcG%2Bjq5ccw0LlhVF4j2cS5wZCOWVcAoYmalqGSPDbVYDveYIQp6IDaHGqfHI6FP65AzZ%2FYVGl6kzWmwIZ%2B2ejeuvzoaps2gIx3l79eSMPZwDPSue1fJC2lp4KlXiX6uKguTJRypUTG6FcRwDVbeqIP%2BdFgWFGsEGQOx5rd3xG4COxu7XPWpNRkvGwR4fbzaBbgdptsQEpKJSFLXUy%2BY90yJVv2X8yq3Cgp7dsmnRoP9iaMKKdBEw58I%2BZ6Th1BrO%2B4oBKAdyZxyFcjQwPqfJ6N5T6SFFWkN375k%2F%2FNAjjUwag5B8vRRKStCqvA4m5m%2FfvwbCMvBdEnsCQGB8m13PjveYXc6Iq60l9pymZ0xrKKnn9m6ehhZ2oABid44ZkCvOG2uozL%2BELB6vrDtjuTNB5tCTkMjXc0uE%2F1kXrdvFHsCfPnYcPKk7ViI0koOoQVl2AWx0LutcS73NzyZvn70ZMIEZEtUtqTVzEw7K4L7vWKSWG0l2rWGDVPn%2B4qrAlWAqpyvgOJU5PTjMGauGBTow7uy2wAY6pgFT7ErQkGoS%2FB4r5n3TMlV%2F%2FZWe9DzXS%2FFQE2hUFp%2FiU3eLpTf3kQEUIGu3WeaRPRqrjo%2Bg%2FDoKsXdh7n5GxNTHYArsCLyevvdjTxm%2BWAkUyLyxmiDpz5Di01k1o%2FAf53Sf6QNKwuO4sJ%2Fj6kp%2BV49WChKwnfSINkHcUgZVREWri4erNvPJOlh9moqP4QubbAEcRoqfH8mO8a1RcLfkakCg5Obpcy1V&X-Amz-Signature=91f1d94902b5bd34bbaf7bbb9e8cb09e04bcc2ae3a93dcd4e6dc87149d5efb46&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
