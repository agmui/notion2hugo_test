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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRJ3TZQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvCF5RtHO9kDZ3wNL7z73WXS5UUi1aewyZFXuVXPoq3gIgIVIta8SVMHYiDCKLEILwQJV9HGiLGo7248%2F9K9yN%2B8sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXA8yrSnaeC5JKhYCrcAytybPWgpnfWSVqapM8ij%2B4cyijmY6wKw5vy%2BMAfvYhJk7D84FbTil3KSqNHad0emMOEOl86X2giLQIwGCIEUuwhJzzWkTQPAZYIKT4OAVnlKHylHn1Fd3N2X0Q8%2BLqx3UndKvLgZ4k%2FjC5oh4AH10NS85V8j8g4oGXYO9Xu3KjeqSSvlCZNu8PaSCV8EUSKvwFUNCsCuGqZdK1VyrB1IIsz8x0m4JT5nM4kXGz14umyBua0LVLAQjHWXDi4ZA1PFikNS%2Fsnm8twkYf4YtzvfhK3eAk4J0LYCyoD4wmgOU%2FW7Ie%2BCkTgTxMofZDhBSUcKhi5rVMRX140WwUsnWoTGsnfVaG0txAjLCvnMKRm%2FIrzP6ru4hc09NU%2BA2zWNE%2FJVcCslI2jgeo3M5mrwePp99ypLBEuzVhh%2FupZ1DxVNKqHxorhVTeL8g2kbDN%2BpyE1aMAtQ85weNRF7r7ymekICh91ONKR9MWGKKGm4PW4mPgJhNuoxwT867GSM8MtZG%2FljzLQ1UQf4SYOO6eDNPazIAwcQQNrRnZmQnM6jafXQcRe3vmcQHTeldzsGqyrs%2BFuFwkvLFF5jY%2FZv6S5XaZtcjxqToM3VsuH5fAc8nYdlcE2L0%2Fk5IGjNHKowPGvMPnXjMAGOqUBpnDTFsWfeRCvhEzb2PtLmyadCnK8tr5qce7a02JN58KIsScmf2QNi%2BEqgc77ysKPp%2Fz%2FLbq8%2BVcB4t1Uzf011qxxl1kctFl3crWJQDXKajafcGnl4cgLh%2BYBWdFixRNBf6fbOmnsUZQe0YQ%2FBOA9w5ausPxRQ0KwD4yjkKVml8WAj9bCglSQaSKD%2BDRgb0v6QHpfc8aNyP1FQjXO10scm%2FRDUqun&X-Amz-Signature=24f1878e4c65ed5b09dbcaf5608e0eda7af2bfe8ae1fc0a0faaa715163acf76f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
