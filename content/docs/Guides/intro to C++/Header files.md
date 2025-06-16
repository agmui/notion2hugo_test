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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JDVRIG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDtcktZjOszmaWUmAbfqXacQb6o3MIe37E%2FKMDPYp8WCAiBv%2F6IPydsAyzTTaYyk3C1euu34y8Gbrbzv5kirvRABGir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMjIIbHwfbC4h7YtSEKtwDTP0s65DziAt%2FjUUDgEsMyZEZa6Hc3wl3tMmOAtcOkn5SLZwEOwBQjk%2Ftx9pDtN5wzdGbDHXX58tMFWusc1SNwzDTcE%2BRTSjb9hNtn8kAcy9Djgb643QSuDG1p2uqkGKoSN60f%2BE1S0mXX4Krg3ewePm0rFZzp8NeNoqv1Gpata4VM40X7u12vngYMQ6jGO891FaGh65ovGLB57aWCUAJ%2FB%2F4Hm16Rn6bpQXuRdpuTgBn1usKyiwjq9uxwJGKlADxnN3aikIAF5r0zswztJUmDXqJRMCjWWthwzSLHjhbHQcHHvTEuZMNyz0%2FyaUHMKUzA7XE2F5hOe79Ssaxkr8tfM9AWhGLCXvmePcvRCp%2FIQGt9caQ8T4NyOCQtdfb66YVDrCVvcL7aerCSgYn6UJqNgqDyuFSIYlE7OKjh9Yu2ksZ%2BfQq9lNieIcl0SXYjGa6vP5ioM9nn1yFZYJbC0gY58C8UvgA%2BmOfbozzpuuVmBI98YtUrfUlaxKPs8QGfsAYotGl90Q2OOsPE1QwWJRLFwaTk8%2BHw6eLvXmeEKdDTZKZfCIHvqcL9QQi5s%2FBt77CAYJBBJnxd1NoTHK2vhAa2JYJEY8AYqFCIVVXvSKHrnO9mVfhkq44Aviesx8wjP%2B9wgY6pgGQomzdGQKR6a82vVfiCldAgCGsVi5%2BOXNgS6zTsR7T50TBqjImz%2FFI22MyE2VLpmHAwHdxdXkNlKTsPaPLnXn6YKhBNmPCr7CIuqYX9RG887JEWT6TwLbeUom%2BUs3YQ16nezsE93jZdHw2I1dRUXcra4rvJMBxvI0wT0aPFr2YvtB1jRGfQOnfxudpXYcBs2o20ayMMz%2FroriB0qkqDSfHrszF%2Fv5d&X-Amz-Signature=5426f2d2ea61a07dddf44f49d29e61402e995b9c0a38fb37ecfb92eb0e758c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
