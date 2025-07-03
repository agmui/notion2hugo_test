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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXD2JVY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH%2F6lBmKoqsM8A9rYe0HZaoGL8Y1rA2VVD%2FyHg7ManAHAiBCJZpqYDY5UuZy3%2Biqx4zZoK7i%2FBMGsf4N8xjru%2BfSRyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMl7zE4rdj8NxK1OZ%2FKtwDhYUTJ95cr6zB1QO9XLESNvKr9Wc7sasE%2FeD8IEe6HAt3kT5ga0V%2BEItmRrTt%2FKKCCS3xkJSGJYpMNepZ3vClF6Q3BZypP8iQfmXbBNe4Gl4fsxf%2F%2F0EylhLMLsnjHCd764Szo9vHiHQyF15l9V7yBmxHGiSQ8bz6rq%2F%2FxtcBU5hPJNZyUN7zZhXxeBlX7YNtv4do46HdUjuu4iYurVv28BLhxKWspfinRk2c8Nz9qxStIzSEJ7Md71pa6%2Bd%2BDiulC6ovSqnM6jkEsEL706j1IjjPZJA0qJEz%2Bd7AoTWJdtHkQvorf%2B77LGp5FdCn2pcdGZYCF5gXkLZSjeMDLSSIB3v5HsC8%2BDOFl2PZbVoAkDlFufkwB%2F7AYEXdSEyKgZ2W6%2BdVidI8A56%2FVx8rnBWeSmIIZMBFEuOhmdyN%2BAmz3IymrF1TM%2B453%2FjsRj3%2Bk8ZWaWxjcBayZcjz1RdFxbZBaxr1KoVqCpZ9JGzV5DDnhhb8Rq9iPFaRSawxvIXMvMY9%2BUU2%2FKFkqGyIwuyimsdQrSUSktxB3qEo19y4Hv88%2Br343n8ej8sWf7dj0JavRD5d1JSZ3zYHefWw7XfYleBVdoSfou1XXzRB8h4xcmRk5amsUAOi8GkhD0HyRUYwwZCbwwY6pgECKgfFinX4Ci427Kh08oEkjhhTjLVICqpKOs%2B8BuAZUuGG6xb26ivpoQzUST1PK3%2FVrXKEHD%2BOsBQvr%2Bq%2FvYir6d2%2Bm1dJFJnD6QIb4cRzMKq%2F04yd6uZ9HKAVGJlIosMhuANxfuW6bNDOuv6Q1cVXOoogRWrg%2Bhdp0rvraEZ5t1YC3l8T2D4FOZnBNyXtr6C%2FV%2B7fNHOUUNbn7WVZQrnao%2BwSM4VT&X-Amz-Signature=b2545291604e13c993446d11104fe765d60e337170c6ac18efd3eead9fb48d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
