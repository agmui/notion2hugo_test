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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T4EEVHG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIB%2BS6PTdF5HqJWv3XM07uPxFJAzmUOj1deQi7eYzOms1AiBT20GU1QGwe8952cmJgQXA2ehP8Jx6gX60YC%2FwobkqiSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FeNUp69gzbo9l756KtwDDzeeABm%2FQPnyz65XuSJD4tFa2xg8bxD7E3yOOOMZJDOK6rlzoTXcjRuEdcQyHQFMGtus%2BgpYUfp0jFT1uVqbluZ0PvqU32JWZkw6H7O%2B%2Bbf5wRx0vp95Odd1duAuI8UAm0UsCedTgpBhHEKDPjf%2Byss9NK60WMXH06hvOai8Z9LHssCyWWCMXozqfJRAW1LYRqenc14%2FTQUw1NNVB7SRJXjwboUZsm%2FMx%2BvNnhPrNzTcVNIAbQhHoQJkcAqPrGcVTN%2FBjO8VOHg6hq63dmpc%2B6kqzXsnuIqWptzBMLzo%2B8A99f9rdpI4psd2PorFOLd5h208f%2Fm5PlAZaOzsN9TiJu9iM5SR%2B4yNB0Cfsi4pYXhPTb%2FfVUZZqx4Fy64xrXYWtT5xUeUMqbTtOEuRQPKLjTOV2i0rvdZevDi2fWteh%2FGwWPw9s1RqUBNel7tz8A16uLdxcLxi83Afo6Sxehh%2BoDySs7sS63cQekNaAkK3Rd%2BmYq4%2F7Cmm%2BE89s3UjGF5FIBZxawZLy9iiD3sNLRdzMdN2H8O0Aop4vY5d8nd1PGFeVQ7vXkZ%2FG%2F2JU9i2GueVOvMU0VDXiXykttz4bz9xBji6eRnmEwYh4OlzMcnGzTBc2y8RyYjtiwZ7gxQw8KHfwgY6pgGjVPkfHxhvjjLzg8C3faPRvOnYRosKSYTNLgEKRlABMafgnkIVHgLL6xnGGR%2BUKk8uLBXncvIQVFOu1mT2HeoZK4IfEdZVHR%2F%2FHBvtGyUklTHhOCODFx0hWsTFfrMFvZejwCnD5HOF3NXM%2F7SfjXYjURSzZbonyT%2FmF4ugUej9YUQPYCIfv2OoHkxgyi%2FOUbDHxnO074DMJ%2FOemTtzfBAl9u3ux%2F63&X-Amz-Signature=91102d4bd3e0e2d2e9850c4c5b8bb3c21b283dc15d8c1bd0b2242f0e15641e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
