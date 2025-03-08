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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3T5JR6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEs5kXgSC9oX3KTTR%2FXYZxmBiRr3wMMZFIhpFvA6Jy81AiEApbKY%2FAUa5mp%2Fo0nHCilyQJSBalhrsrIiPzehdSiBCBwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJENor%2FxhkDatbKpbircA3RGrnw%2F3TepMQCcJWZDhTqQgMJ%2F0ADEAj4Cu%2FNDdPAvQOEaDWsD3xn3RsE85BCQF%2B8KraGzIuz5x8l6cDv9Pm2iGF9Ks9hDcqVyMwmsmfdoa0lJEGwFLtLjz%2FRM%2FRiiZgVUWi9glN5WyTfmQ3%2FMq7iMA1gLs0dLGm%2Bx7OFI3FnzLmGNx1rICCaOLYxNWkcJNAxy7V6jnzOjo1BTMElCs4jcsC%2BGLcs%2FYfz1pQ5mtUurB3924MSXAs9Gd6yr0zhSKXkrYnMym6%2B8dKO9gWqmh6rXwzlWQ8eGpwFuAYv0pqKzlLmMPNpGQGlL8F5eNbgRmPpmeXTJ4jW1bzSLZNBqoJwXCyBU6jtWWyHysOJE2lrj5Mj9q1DSZrj2SS0x0Zzjxnt2Yp%2F8Zw6gZ3U1Gh0z%2BGGcHnVGck6bBsC20RegezhixuZjS3Jp0LWJ6We1JAjGEcaHtHJJIjp966ZL7gwwGWccfxfopRTpMNNjgX3t91wnZHNoYDbFdIjb4GOsCfjtXbZCbjSt43mMLffJT5i%2FeADZBrPkTG%2FYY14T6FDx6EurtFXGHdYDLRYT%2FMuG64IPJFHKRZ6FjmTKKC1wp5AdUjCz%2FHCREacd%2BRXuEIU6SqP5X0oniDI5gG51wmJcMKK9rr4GOqUB1L9EavsrmE0jl5nNTToXOo1X6%2FAsTXRvAN0k7PyLd6VxvizraoLq6qDiOrXSzz1tbN5exFzsg%2FJRLXyiglZn%2FDQIAD6YY7cEOTpIB1e9hjNxXMG5lI5Ux%2Fdv5Z0Y9CyG9OWfA1fvumfq8%2FYvzkz8qQwSSgnWCn1mKd6xFgt8s%2B8LGEQs%2BCook2sVjg%2Bb%2BBcit0zvBMvKKgofGXbpfbihMmOZ%2BvJz&X-Amz-Signature=70d1c6f9a4236931ba96a587c391b02b3bcd4b1f27b4db2d4d50a052054ef671&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
