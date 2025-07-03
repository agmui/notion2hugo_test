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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZLWGYG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCh52vHQ6mI2FWD5aKX78Z4g8xsV7ssz6YZqARJc5C%2FKAIgLrYPocKnucciI93Ne%2BCi3IvzcY20xAj4mqz4OLNn8x0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIb5Sj5m8q2kHcvjSircA1eqPc0ZjVwYH6XaWDFtZ%2FlGMyKW5H8hCObNV7aVaqcCaPR4st11jjDAZ%2B32KcYoB8J%2BLESskY6Y6Er4%2F5nWb0%2BysD1nJkc0SBwQAa51WWz2LEwtXON5kR2%2F3d6%2FcgC%2F%2ByUnhq2GJF1n%2FongU7Bu1OtL7DkjwlRJuqJ8CzoHxftxd13anA8YYPSTs7SJdnwXbiyBoHl1AkLiZhC3lkmrJdula%2FYv70VC5xpNsJ9DiVkIpi9NYlxmOQqXgXrTUSROw8rjqO%2BjqJImR0I16C4bbKZynrB%2FWfLRq2hs5Ru2utOffoGe8gYSH17jx2LMOYJJaavviN7A57xh63%2BSpNLKud8SPM8b24DZ7WHAfBhL%2BkjwVmatPsWkiJ0tBKiqs3Jma%2FT%2F5mU0tC21vE8J2ojDd5BScUCpRFqe12zeXb2xIA5B7rMnpZoT2RZpp8TfKqCN6Ts%2Fe6Sio3OV8YwmkO%2B1uQfy9WlTthnYhefxxbr5h4Cp5P8rJo5xqqhvGcpY%2F%2FT%2FZvcKUcD922nGsdijVyl4G566e2i35u0R75qe%2FwFaJYSa8%2BgSoDmLXbYzWWIhGH1rEiwtjatJTVLra15EzMAM3%2Bz0%2FziVUCLTZo2Whksx21WgYQ%2BNYhE6h%2F5p6Iz5MOqwl8MGOqUBpwLfm9R2FWamE8db4OUm%2FFe3rDn3SgKXx6XEzDmLDkqM1kkRQ%2F6MiFLO3dygCvDkO%2FuFqEWJpdETbpaFyq3OPIEb%2B9VyPkLuAbIYl8c%2FjRqyBNC2RgEImQX0RLBPsXeZ9j1eu9nwmAe0zTtC5xEkR%2Bi%2BYXvySXmpQ5dkPaRL7yocKlfzSm0FA8XAnfKbLyMPHaDeQMhNI%2FtI2XvCUxS01pGFZBRX&X-Amz-Signature=493b48883c93931cfa385aa012adcf2a2bd721674a6c4ef815c37f273dcf1a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
