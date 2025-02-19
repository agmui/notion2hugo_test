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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEWR7FJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDFVUcb3kzV97WJiOy7w7OLfo6t%2FnM%2Fb6yb3KvGVVQq3QIgOxGJ%2BhGKa4wrkEd9rkEFg3vEdGUT9s1Jszj1raXvpLkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOE%2BsHui05oLpJCePircAwWnTqNwyoRYE7MOVa2xE%2FWiouGQRc61nLbGZkQoh37wqJ1jacar9ghcqKgSmprIZSJn9IocYeAoeAfPKt3GAHVzUYCT8CcIaC8yjqmOYY0phOmbbjibHW1fXiJbV5YNfDBrSPzl4VSZMmD6QYPaZb8wrQ0KhnKf7dYp0RoT9Rh6UxFuKJnyHBu%2F2CalUXz05sYjP9fq93pprw4xxMYMn7a5LGbvCSbpXt%2BYsvmKsQO6JbINhO996gfNHwcfdXAgNAhAcQBunYCNhLjZRMdItMQ%2BfUVDt1u4FfwN2GSU8O6cvKzHv3nQ8LRQ9%2FwJCP74n6F%2B07EwGyVTJ61v7woSBW03wfSm4Fd8SKFrn%2FA2ppCSGKEFruTGSROG2H8lrkLQNyNGHu7T9s3qEb2TF%2FpYS%2Fgypdhe4s8TgCPsnvkWswAEcezntjv7VJGjFJtoiH6hfpX3XOaGay64QTJkCT1m9gzvvLFsvMFIm3gZgwDB%2FC60YM9i22sMl1ATOrY%2Br0dnZ43s8q1DeJsZkjEw7cFZSkYG34FvVAypnXWTO80s%2BVdB2g4Cy%2BKxURuoOBDSSCVrnvHzkF6the8u17QndfnRtZpmERBsit5vjG6BlnR4Wd1xhaRWUajUzhrkOsERMKii1b0GOqUBOl%2F4t5Z09PaOowK%2FP3likEMC696PzHpNIBVoBk78a0BLRMCotB2WXiZdtkQRGCblhosf%2B4oOMQTu7KE1E97385FJ8kXm6JHZQ8pVfogt1RsnarwNsaC%2FXA5szwO26WosRXu2eyhaMKeERvB9kJF6ZE3HhqBPMhFlrsYpZzBzIQefNc0EBWVV3Yn8evLV%2B0VjlXzxe%2FavpFxTIbbveU9uN64%2B4yDL&X-Amz-Signature=356056659942aa88bb5d199b818567a9bfdeba4a3a3abcdbfc15d4f0f3bb1039&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
