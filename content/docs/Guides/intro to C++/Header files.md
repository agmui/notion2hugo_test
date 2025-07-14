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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJTHYUF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDgW5lqUMGsi71uUuMk2Owz8yrmOEQ2XTryg79LIJLycwIgYEnO1KoZhqTeMVpKpXcWCg1YokjKFcWDeQS5MWeElLYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFL1jzyaSot%2BfUztayrcA2aNEt4VWleO6na8fQaVXglkqROUwO9eKrBGTTbPTdRhoqJbb5SsfFhLlmvCcKGUR4sC1MMEeQY0KhnOAdybb7%2FssD6Or%2B1hHyB%2BFAPD9UdUzKr5cnFHsBTC9j4keIsHovePlH7CtjyjBjkm0Ighz0cFKa9oW8YG808Wr%2FQalKGVYjxHNguAGm6UIfh1dbon7ncMKXmNwg7lO5tZxVUPKQsJbJ3MOFMMs%2FebEMSxs%2F6FP2VuBij4EjtGgsHUSIPkBHpJ0%2FTUufF84udUj9yBeKhllUYudZlsPMUJDqFoX5L1DN91DKGkLJy1Xc24h3CzUlKfG22%2BnZ7uOlSE0ZvGwfFuthUMGE2O2xkUIipEy7jLCamEOZ%2Fri9kZeZZZOQqX%2BzEb3%2F8%2FHoDz2L%2FFjx%2B6M0rWc73ZPHSnkyqBNLpmjmr2ff35pZ87%2Fq5Z4oaNR%2FDQYyosXSPcsiM7fNG4qtVEpTRkryIa%2F640QNvDiZfsozJNn4CgF6Us8KxhXK66S%2FZYyWVaQOQDZhda3SgTJWSTtcput%2B388zj6qI5KqGSu%2B6qGpeL927TsoJJgEeJAp3rgRvx7uxcEKHDDoZ2t%2BorAC16cmHwbSG4nRni9jcAC7Dmq7RdYOSPWNXgXOVxuMJGI08MGOqUBvnWbdsiUArsAsJKvheHCsl0CQJdnFEzU8dUd6APDp6wjFbEHw4sF8q0SnQpbixJe7z1qPGRtez5oZUCpKzUk437%2BZK1ZtY1YmzsYhce5ESKFZd5Tq95JvLaVRgXE8Bc2s7KVwup%2BK2Gkdve%2F7iu0SWBW78RqmEcHBs4DRQO8yjk8rIC08Ha8JVdHkAqZ4Najv5LeZTEWMAnq%2Fmbhom9hMDTFD90H&X-Amz-Signature=a50af214cc5c003b683cb4fa13999d996cd99d55976e9149ffaec4209ea78c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
