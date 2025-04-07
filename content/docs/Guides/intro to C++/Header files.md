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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R533J66J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnZzPewkDA3nAe1zSf9BsnLNsEt1VKkri22xmvf4HPXAiBxB6a3nwbSTJwbQLeZ3Pu%2B8R95zZbKKvwX2wKSszzS1yr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM3j%2Fb2mrJy6tfyuCCKtwDHYFUKD6HszmllIctCx3foaSMph%2B7VFiPOPgSKjZuf0ZPhgpLNKSrWCVcjzpyiQaKlIjKrlcuKH3bLRmqN4TpCL%2FUBnjVOgdwyL3efibdxUoqL7cH1xTH%2FTvLGn8EhNcsDd%2FDt6C2QCgCFOzYzl5L3ftOFjfPtB7VB%2F7JwsfVd30IaUxdlo2awVL2Cd7CwqVSJD5ugaH7ceknyoENAO3iNSN9pwWf9B2ZwjdUSA34KdoyIGF4J4qvjCoFkcvK5B5SYjOSHl5zykkwdzl9XY3jzG3ePSvEqhferbaXzRXn7kH45WjTbu8bTchUUYfr%2B6VMCHlmkx6cnL0MmSehRQRL1B%2FSLGtB0PFFzyQEZfXrBuEcUbpp4WSbIxEkw6BDUIotnQiK9NveTOgw8vwYssyqgCAqkcnE2s0aj%2Bx%2FYcfhuxJ%2BhUsDP4T%2BySZaykGPfqh2fACd2cC%2BrOtg%2Fyv0S7tsTYj3LLz4ujTmvuSZvwfzp8KwhljLxoBUBauQ9jbQxo537s80WdccDLG7VysuwxQiXlD8Cv%2F1KPEJtO2glwJtNbNHmhEoiwHVdVtEXgg0ns8p3HeSGoHgmUpNWr5TAs79eZ0RX0%2FDyxQ3ASGPa%2Fa8XqBR5WJNWnPoITDfL7swsrjNvwY6pgGABo%2FeeQ6USPX6DAoGOCKihW42dOLd9T7poKgDoMRq0YvIaYLgugrfbyc8Xi5G03WcA9pm3JzxMepwQZaS5AINUmRarKCWa372UpnGGvw11VrvpMm9qlAKUI2FntfloXqrFYV2kqeMgWAGnAykpGNYMZN%2BAEgt6zctrM%2FPRzQnzVQUdwo%2BVNK5nLJoKmXdLfoyVOq3gPJnAsx5LuhKefvLXAy43vn5&X-Amz-Signature=2bdab741f274092af965d9b42882ebe1125eeb57e8e6b99a3f4eef9c434edbb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
