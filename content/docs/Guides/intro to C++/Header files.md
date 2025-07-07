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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NGG6XM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBqaxqFD%2Fb1PgK3KY9CO8256y%2BdXxlGwR9Zvqk3miuNzAiEAr0P32f2RhiSMQfTj33SWlh%2FGL1RaiX5EmPFDFSEqNUcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLwu3C8E16zHVQZ01CrcA%2FZgcOQp02VxDG1SZuIgefhGlSXbi8Qbpy1KkuL1I9I1tSZvY%2FeHXVG%2FDtCMEuJX3LVzmAnbVfFxj%2Fg%2Fhlr40mqRNqmZE%2FmtHNSkAsLkSbd6zxKmwEKN%2Ba33%2Fti2Jyem%2F7o4GAhhoyTd3oG64TUWm8rPDKnJKKnG7ITf0e%2FATcyKbQs36onHecVj8bI95NEPW024per4lOA2vGaz6uHXOlC9FhN8NFXy35wO%2FGDzo%2B4wAbjYR2bHCYomYRQV03hhrxohgt185msTPwQFDGa9U9iexZUDTF%2F8ix06EUFXrWCljta8EklzcCK1zB5ZaVqp3UjbENlBPZNuOKDP%2FY56ewDR8E339XjjynYWTBbfZN6gtl24%2BT%2BZmvihhAS9dgp1BderCiy3fX1RSsB31sjGBmbknJLLnEI9kclvfMO5kAw9kk7RNVfOwkHwPy9pPbD5x1HQGKqK0IjqDD5UiinYN6OvlEfGOClpOgHmR%2BIE0OyS4vnY1WH9uUh98zkz3jYaclklTfEn%2BY56gAibTDtigs4bCpyplbN1GVYlSZDP8RNElfu55nRYFzxQGElkcOiD4v0lzTXHVMbweQdQUguWZyDsto40RhYSg3oxoako5y3bFLOGwjH3McpvSG3vMMmLr8MGOqUB8mwm5lXZznUza3fRwopC7E2Hpy4oyXP4LK%2FqBrLFvC8VfB%2Bu6LZm9dvFZ5RP%2F00EoIcS2i2BeCYaGBtphLntQu6BxiHo3TETV%2FpWk2eKAFtMMOLzdFPlt%2Bih5rg6zVlRt5LrvWsq03LqibeKJCZL7m%2BeWRl5bcLXbimjkw0moB%2BdfZMwTQ7nbGb9GxQtFAoIqVaf6cWKGmyL8moE6zvtLx6OMdGu&X-Amz-Signature=721dc622f9b4abb8f22c4778b33720c3e6d64759e3d08a7000230a7f591171bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
