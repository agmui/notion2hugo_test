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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQX2VRB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID2B%2BnBdQ4wmYOL1DJzwqLpXn5AgkLp7Aysrb6jWWDSKAiEApxOsCO2wEeOMhz64udRQSeDlt22vS5X84wDgX5X9fs0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT9lI%2FfKXum8FrkbyrcA4DEMXis8CsCSam9eUbDBflmabYMwtD8eVKs4p1XyLJkisAH%2B7DvFa00YCUw3Fp6YAK49SRZo9b1y%2B%2B1ax8v21fIHjqOeQ%2BVNUhUYN1bXI4rXNGlpAWcZB8LznfxZIx6UE83JWnJ92t2ecxeIzhzd5Gwxnc4%2Bc8cfYTFOqguNAvA0BY19wbF09mGPiHrK8WtahGGPgZy8Rq9rPBoOk%2Bp70dxgG9MGSlWTdkTVpql3xDeIaBh%2F4LO6c%2BlPMrGxCkKcwQ%2BlFTUSxL8T%2FpPJ5Whvc8pnNc3vHQnr9ugtzfYCHmfhD4j5SUoBH391z74lfnnsWipsX8mq9vmGuJKDM%2F%2Biqri5PQG%2FtJptcFrUpsZ71I3IUoXSXYBnPvAUHiW6jSpRqr0dSh2AjRnw4gbVSUpy0PgMTq0czKFetk79P8YyZNGWJsZuG3V7sAuImPktWYQaZK2Xz35rLmwNbkJscSG5zjVJ5CIrSEmHCVUos3hvLHKMNAQWW5tdVyDkjiguANe5vlz3zcKrF8VkWH%2BYNxHvBVmtjgCEdw8jcdy021ptD%2BUS7aWLW0ILveL32mG9ljL%2FO0OBkp6Xl7MSN1fXC7txIPLTzQE0ljp2Ld%2BX2EGrhuV95V4TDm%2F5Ld16DbSMIrL7r8GOqUBbKkN2EW%2Ft3kR9T3KgWCc4GLfZPQQA%2BkMQZJEp038LWlIi58zVvLikiLSE3H7ZQUNaVD2WKurjGxhgGT4qm7Se28GeFx0Q%2F7GB4PkQL4ubtAcSqmvpkRggXfYLIGOZrae9POEkDr9UwH%2B757jBH%2B5DTCxT43beBQpNWgIW8Ae3U1T2H6n1Pd9yyaRXaJfrhoan1rHNlYDJ%2BuC6YI5MRAZtMgcjR9f&X-Amz-Signature=cc41ecab742493fceeb02d6885f2956d31e4963047c6ddb267181ad9076c22a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
