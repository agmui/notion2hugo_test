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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5XJY66%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6ckf0SHwuUCgInvXg157n9v%2Br8pakv2pQD7O8BjpeuAiBnYF%2B0CHI1NTOLXHqB3jpDelBNHPn8dlqOVR0oY8G%2BAiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoeMeOInn4KfsaB6fKtwDg7eZPgDzBrAHjQJJAZGNgoBVLZ4vzOKuTrOU1Ds9NPNu4hsCR7rFSEG3AyXz6%2BO2x9CU%2BEDdUo%2FpKhNZcnkMjITdUIiS7maUWbTtXguvlDxAQOSujkuHOe9Ijuj0Qu4bS5ZUz0U75iK1d7cpsCgEOmRHS70dRtntArglvt1JsrLPhHPYnJhf4ALiA5tXaXYzwhbQ3IXGbEqRXOHGE%2BZZXrSusn2Q9Ilfz5xztSQSon1CDFcVXy4C77rg3p9DSr%2BpmIAhj47saUqTKREgLPwvYFo8EXD%2B%2FO%2BIIB89GV1ZSFD9rI5IpdUVar9lbyBT66naOTktm0hTAJpan%2BP5gUAonBoQqR6V93qkADDyHLrMmbIj9phmh3XsqUQXblf7UOxTJsFRD37Fx5klAeHctO6SbFpckiAAtu%2FuOchdBzUReVs0CXTxswgRFg8wjYAP12fiFmxktdDy50gST1%2FMRAtfP2zhS15uXeZmr%2BKnrfh95AZRjCh2exBNoin0ykiY669rDo65IwX4vUmceRzjxF4p2JNEChd9DXa64aLpvqApoJ9Rz4LLa1TxMcYylPhLpOo44HUxaTypOtcTVdDGL0ARVLcgAK7AsBgIYftsrZ239akaGlAmObtk%2Fy72igIwsZakwgY6pgEaspWTa2iWlGkECYy%2FAZCqRzHBYSmXGoCulnkkpjqf4mlj0Fm6e3wRemaclzX7ibgLTXK2JPCU8O3OmYGxDg7ND0x7aC8g78Jkm%2Fkk070nnQ1lRvffBAzpt8kHOqxOPYFSloCZc7sXQKDfwOLqcAmpU%2FEP%2BmphlHzX5sQL2zia7Y7Y4uagG4I0bI1qguqgX2vnh5SRbB8GX2knbsN9gdDqer7LmlbV&X-Amz-Signature=f74d442c3c06956aa2a86bbd2f10da67ab28c04da4aa422efcb1b1c8a792b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
