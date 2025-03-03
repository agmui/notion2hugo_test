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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HU7OYUM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS17kfb15fF%2Fu%2BWw9%2Bp1tJaljVhJthDBKj54s2FTzFYAiAyX3ID9LoFumZODCEpypxZn%2Be6nGDuwGqstXQFW2h%2FgiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6in9IleFj3mI8%2ByKtwD94T%2Fq6x8kDnk4oEA2bdFDd0EUGJYkKhA13H%2BlYcbbuMCrH8XFgjrMWJhSeLEwNe%2FsZHdfEPZebMaLFBXd%2F4eUopylVek0ao6MyNOpB9Wf3y%2FRzGttB%2BhQCDTmz78V%2BPQTun3rvC2kh59QZsBU2JXSUE4ksdXueWuAC3bxZxpizq2NuS9Rq9HIjJcZCSlcBqqyXwc2aX1UxIURgjuVZOZLhdQrfHyuazJ3ZABDloz5udkDoQ0IEpN3sUOpz9HrZb9DKmal9xMC9IaTm8%2BalLfMu16plDWdsToT%2F5tDfzRqGRnTsY%2FFA7R32EFnMVxfTj9SCMHxaKHsF8TLM2%2B3AJJJ5dC3Tls1denNOLR9V1BCIxBxN0Yg2V%2BxZ8WOJ2pMhw36aLwph5d6%2Bi%2BeKtEshwsAR4JaG%2BMmMLABVY7Dqpnomu%2FZkg2yHpX%2BgXug4Fww%2B1myh6YlUSayNiTM9Awn%2B8D42BVcZXQXwbgka3WmmvNtn3l0ZwmY%2FuzBBblW7AtByNWlxHGNJmUc%2B88szZZdZbjqAqrMmuzvT%2FiELoo7Nb9H%2BSzD4TyukgDlJ8hAjADPw%2B4pJJLiY%2BZV4dJg4X5LvKhJIUYag0njE0br6n3lA%2Fgyzlius6FqXU8225Z8bgwxsmTvgY6pgFoRjmghefUoTptY2O0%2FwoVo7dYhe3sgDSZHLXuj8cdyrPGyIuVCQuwbYaYqBkbsYny4SrSMv%2FA08Qqb5PjZBXcX7oT1mZQP7DBdFQ9xt2u%2BPNhmh6DCv3TPLIJOZ6k8RwJ1Tou6jdT3JIP6uslI31CWSjP8Z1GjPlEa7kTMuYOO25DzVL0903N3duObAZi6shHFOms9oJySYfx9k5Vy%2FEg7P2pNEX0&X-Amz-Signature=9e02f25450e298e46822f0822a200e44bc64a961fd35a33ebab9ea3254df8a50&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
