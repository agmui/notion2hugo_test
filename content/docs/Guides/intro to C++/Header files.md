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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPPO7MWW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAWV4Is5AnkTShcjUdrHHsx%2FXR9YjAOpsTtslpgJB4rBAiEA8o3cB%2FN56BpVNznhTYGIfGfc%2Fd1cBLfM6hnfau1lR9QqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW2BntWATlRjhlmLyrcAy0urslebmAqrxejQqqiyZYOgSfjZjAFLnzCjXsWm5aI3XdgWu0k6J708HS%2Fw61bBgI99%2Bt1oaepopuJsPfjrs55OokMckkXnLMzH5Xu67BqUtcQNzQlVn4fx1PfP4Fbn7M11HxmT5w4a5B%2Fp9XbuqP%2BM6Xao%2FRGV%2BBoIHC%2F4hFsnnYWlb9pR7mpSwbwKSFeJjE3RmcCn9mSE1PRXZaBjn0H5WmYzYk1wgfxWmy51s91Ykph5oHj1qZlqE03am9RgK1zmL9QGjk1lxyV0FDTwJJ7Kidc46hKI7%2BDqPYxplYLAIAXFUXrJ0xbSet5AvewVo22zNOrk%2Fk2U%2FAoxvIYuysZRFY0jZRHg7cs85eVjaHsAdpkyJ2gpHPW2WNK5GZNyVnh8quNBANTTpALdq8tv78%2FvkQVIn54c04COFvmIvTODZ8XqJU5ijO1hrodcPELQR%2BZJ0zj%2FQkdD4fO6RNQoWAHyF8UY0LUi1UaNiPeoEbi9Am16ih4Y7sHjx%2Fgcicnh%2FD%2FMnXW1pvLjM9qtEkklfblZscbK%2FZdhGrf1edAR8RwYDPVpX1hb1elpUsE91VfYCLa7ufJ0Q1pO2CPDocEoDXiPWw1O6NFwqpwjdROiDcThKZchd4LVtCFW3GVMOrvnMAGOqUBh8duDoV60B04Floz2QTmseXHVx%2BDSh80bn6zcrSiAMnPKMc2S6WF17p9vqZUs1%2Bltw70ibBGG2euZolK%2B4cb5bzu0%2FeQKvXTECeKEmaf3MkwSpVxdVzdKRgrCO9e6asHbWa8US2lDB5m7shts79rY2oHasoeCXAKMT492SWNPSQYULG6nM1Rm%2BYhm7pEux8GV1EweeKSz8vtYPsjlmJm9u4s%2BHS3&X-Amz-Signature=2804505683d671902a22f5d7d41c47396f2656245d071990b09c9a555bc807b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
