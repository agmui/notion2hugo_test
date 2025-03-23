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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2WSVR5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfbRtbX9v%2B35FnWMpOh7E1eoEbSjYWOabuY9j0ychPOAiBkdzYI4t22qN5P9MK7Cqw%2FbelczhEYPvHgR%2FQ7RtHsRyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWSXKmZ%2B40aiJ9a2KtwDFyHn5gE0MFAOqrebgSMwAoT8YvRmwlQLqWps%2BuXaHG2YeoQwV4GUEgB8jIFahkpuHiZLKzyztIDwwpRgd8xb7pn5GExDGMcqn%2FGrgq%2BDs%2FJsDfHAANchGFhKLTYue1RxY99Xyx3gD%2BZVo0%2F4HeP87SnG80BAacE96lk8s3wKwsb2xH8G5aj8K5ynrbOuqBppthKSPLsjYZA42gQL2mod%2Bb3gzP5ZfnJkoHW70AgqyDCYr9f8qHOKb1FDZw4f1xY0LqCTDCC5GgpBYCz9dyNt0%2BwO7LVaE3q%2BTzF76HJTzCwkGkDoC40k6o7YiLopXPYCHWLnlqURe2Gfoxt50JakFoRdCx%2Ba0Yo%2BaCYV6Kl47efkOlMtLb%2Fd6dbWHG0wa8QxuXCnWbSsiexk3HOPo0nWcBCsqHbocU4JQBvNzJdv9XRSdsAqcyVHo0C6c8xtbY4nk43Z3Qg%2Fbx6X3ixlfMIz3d9Aq6Xtu3h9IhwnXXZXyc%2F1RCKLBiJqtiiZBWOGFE7bcDnj7mU1objufjc%2FtTJt7uOKDNBHFYYVHIUZxGndDfCxQLWLeAEYpA60CdbQGomZTqyfmfQEg3ZDfZaO9UrnGPS23vrOnKA%2BP5iyYVa%2BAHVh44wE4kwNEilr57sws8yBvwY6pgFSeR8ih33D6mu%2B6u%2FrO%2BILsYb%2BcSYqYTwlQiCw1BuZMyqrOddoDEfZ18axQUJUjAHBJSjOuLrzbljUuRjvW2WIcmq31OxCzB58XpM7jeXMdw8F2UACrFTuaostsC40%2BLTc6RXTuCgcLYT1BzVpuQp5Q2bKP1on%2Bm43rWr4fcTPf%2Fi78Ef6z%2FwG9VPI4gCx7jxtP2%2FcshoNqGr%2F3XOVC2vUJh4P70kC&X-Amz-Signature=f31073b3fdbc3e7bdae32e23d80bf45629475f9e769d9051f7dafa6fdcf2df0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
