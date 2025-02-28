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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP3FULR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCxmx3NtaBVFGClI385J5vRXQXrY1G1OxBhq0HrWW6C8QIgdMtWe4rWrbN%2Fjr1lxD%2BtAXCmftYa8RkROtdO1hM2r4AqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzLZ4ZENmFi2O97PSrcA4RCYqzXNtfMqTfTx2qKvfzm11fAXqrtJs8Tl%2FILr5zJR5dmsTv8KsQXRrdhTCGl%2Fs9TmTEQGvdAvvE9GuOhriNa4Gkv9fdIyYM4%2BZNnmRwB8Mi%2BPNbK4jh53K7dN26rhtpv3eJH3cJBmIQvTDMRbA%2BhyFDfOESWZj81Wr2RZxW%2FzXs%2BsYJjHqRyiVsIoXoeY%2BwFYTsup%2F%2FoDEqghSoyhjpvkdulvJfkg%2BIjLSo8HeRcL9iuEi5JdutLV03b0IzONyvCGPlZLHKihaSba%2F2%2FMVG2Xd4zcm2Mozx2bplBoJ7B2BH9tT5PHI63LEYJeq3ldWd%2FYRqqcYWVT4A3ED7vbk9qV%2FH%2B0vRTvRtoMFYHXh5FXnWnydW8Iah%2FQlGgL%2FMN%2FtrOjzV0GWnPE%2F4aHHPpe65fQWssiL9pBmqWS6es5L2WjoJlUhQd8rxtdbPXPgMiT04bJC4G%2Fzo4xw7mc7XKyFvGm%2BIL7unU4HSxisqQndwzEP%2F8LWEOhQ97FNxvPtifn%2Fuj98U9vSBwhw1gHp%2FiyMvEohn5MLxbqPy3oz61Bapu7gaz7auqbd30uQJeCszrx3Je8b%2FU0ua2gklArcFpZRxCVQVVckiQB39wiQb7tbTbWdSKH8Ot72zoHrc0MLLvhr4GOqUB5l%2B81PoMV4hrWUvaQBtolcmAQAjm56GULwqT3jEm8glYSyFY1eVJe%2F9uGYY6k1OQiCOk1T0NzNb0aIyzy57xsKFyE907Jti%2FGc72bg%2FsE6%2FtsmQQQEXmn0raBHBvnb76qzv9%2FvWvWu%2Be3JP27m5y9IC15I1jN8sPvuJybjHFSwMWwsCQzavAeFZFYJnnpSbIPFSumdg7cfoNp2kxrDw3ZFeFjaHc&X-Amz-Signature=4767c2187002db7c91ffff006c11870486802ab840de4703604187dedcb74c34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
