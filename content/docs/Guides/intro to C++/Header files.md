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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VZMTLC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFM3RGJF0%2Bw6ifil%2Fptul6TYEwRaTdkwl3OZnwPcO6bMAiAFISeysPp64YOyzOrT1Xctm5uLfNGc5FRd1gYAXcJcuiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj2kusadqBjLrWU13KtwDvLroT0Yrj4TksNJ6RtxcMxXKZJqVUku7LodcJ078lIj%2BuasN3RYGDgKU0zuERELGgprr6efEhkyMh5Rm4O2L4UgxSR%2FLdc%2Bz2kiYibUzB6SKe3Y1SNnPB%2FHiQ69tWvNmvd0XD59%2BwjbAKQHMTYfm6319WymVh247GocFEojki5nvRqRy%2BhXT1h3X0w0CXwNoII7l1bOZJ4JcmMbrLSpPUjChETo8yYW1Mvgy8I%2FjXc5tx%2FqQ7B3mnFUqjWwU7juBtUblvavlDG0eeS2%2FVUuMme5eesIclpSSAulzcwKj3edo0Zz3O3qLR5ki72AFA2esnF%2BEjHBaTPyFOBdVhOIfgcfVMkZnb8CQAt4i7VJxwd94i%2B%2Br40fGcRdvGdLQVUVATAY0RLlOPG%2Fde3pj0J1RL5AcKu%2BwtTu4av7RG3hymxx%2FxcHSwax%2Bfl9BkrZqK4iH6GiGwCwCrGXVdg%2BpdnHh4A2TtN1Q9K9Wyie5dABxE9wi1qmcMNZ048TbOybD%2BA5T7Toho1KK%2BFXxnUfLbmcBXCLtoDGIdYdDpMira2a5j99ZFIIarrTJEWXokrWNreMnTCCADjHkRZi3RhJRHFYpAHVrSoCHQCg8VoB%2FN2AscNeju016Y%2FK2IsRUsKYwvKy9vgY6pgGT0E2mM0Svxso%2BofuyxYKDC0ndg%2FJ7tH8NBAHAru88M%2B08BjLuzPIv3sVLEwNV4ORpkoMXWwSiugpkj9WLm2e4vtnnhKk2svBvvzpxXCC4ReLa5xJEpyzs6XB%2Fc9YjuTRLp%2BoDM7yEHRMqfA0n4POzvoqQrlk5q4gQHD2%2FEFrXY9sB8YePEaz8UKgIADi1jc20HAzS1umu2mpL8dTT7cAX9SVlO6kq&X-Amz-Signature=2b66a877030c413f08b2255ab59ee2196fe3601514df96b4afe70a485910b803&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
