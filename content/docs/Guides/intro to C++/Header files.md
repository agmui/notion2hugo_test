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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7ZUIH7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHr4kjLoyZC7OCXDYrB%2BElcBOinbr6glX6QYU2U6VdgqAiEA2oZeZBQWJG7pL1ivECwGUIfXzyH03Vf3lNTQdFcgTJEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPZ7o4bk4e2sm2qbNCrcA%2BvH5fsuJg7QXpxUxAxQ0a%2Bg6WyyteCfSGYLRc7fh6wfZuI9lDh4%2FkeE1KyDt0x7Y19PJ9Os%2FlOd5JIDyccWnqlgwS5Fhxg4riaeZ8lVf9iuF27BgKFXNt%2FqhW9U7m%2FIrVz%2FKQFRDm%2BlO2AmWCbxzUP8nTCybWIbdE6s70ry545SxR1AEaajY2zb1LqshCsU%2BFQSAOcToH8ZUl3HHX0BfVJYJ%2FNUEB8f%2B4gQ%2B90kjo%2ByQxqVF2XT9m09tVdEzpIpI1%2Bcx4lE8svTASABPpo9gmcWFgcaTGoJFrmhwrYFe%2Fb3u%2FdC7kYbS%2Fceu%2F0W1uT47BEjWxzOK88911%2BxPtJJ3%2FGn8oFdaBhli6BDvL2qruEGzs2UmcjFwM4sy%2FKx%2FRUif%2BFYlxEZXQaw9A9dVm%2Fo8WXZVtaDFfQz%2BE2qKJrOK0BK7k%2B9PE7Dipj%2Ffw27rIlxX9iIx8AsjCAWogSO%2BWEuKgcIPvYt5%2B7FVhCGk2NFtHOpDctIgjOei3CZVKHN0FOdGoR%2FDuelZW8OkLXREMouUfTu32xg9VZCjGwZ58fm9bKUkfWKqFBafvBHKl6qlu523orBDMhf8I5piOmKIrSuojT5VgRmc57vTaKcFf%2BPF3tYMHMebAoDCf4uNhKeMJOHgsIGOqUBsRSa6G4DiyZ9r4Tq3%2BdppCzZQSeeFlwM6apkprZ6hUOR9e9KnmAmbAnfE%2FK6E1PnBpM3C2CjBq7n0siovdSxUbDSnxyjaSM1%2FxBGDG%2BcENiLj8uj18LyfClSe77tTrKpo5pXXT8YqYw%2B2GdnuQ37QjYaoRDXBg0vWIydaaiLtQVC65%2BNr%2FYXKD9glQ5WPrsBYsVTL70Ybbk7cQY79HCtmKFBedL4&X-Amz-Signature=deec8af2d2f25705a062b018607b7c06c910aa7acebaaafd75075b9d8d89a37c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
