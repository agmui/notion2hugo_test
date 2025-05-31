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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOQI3IG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3sBI62AjAI1Ep3j01S%2FNQy3nV6srFaloZml%2B%2FNovH3AIge9ORJP3i1TJZMBMX2%2B2qKnReuapmCSRSCUflAiZQ62QqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlzqXdOlyaykxhRqSrcA1iLNOSV2%2F3O4WHns4V4W5fZGjxRweIIQIJQKlWUSRS%2Fd3RNMWMl3TpdipEG2a70SXay4T%2FlAiNbjAqnFpTtIbGI%2FKSzEV8r%2F0WHOxhCdWCNczPSZeHsyUQUfdWWOoEoYfZ5Ee8MJOlaz6GSzvTtvyDsnPvMPUDyBVifIcRU4NsPR1mBFJbtwvWAZ95hr0nP77L7ijF2kXZiPcxFoNI%2BY5zoV9H0QCpw9Xtc%2B5oF0OJUO3us6JtJAPLXuRYIcUyRD2HXY2Q6PUYDOBvLdajMkIv6%2FLgQ3UvEcWfV4jlXKcFCq32WiU4sNxyoVs%2F%2Fsqe245fj%2FU7iD6XvcGedtqvJFQYb9IdHUFyABp4%2FJI9uZu5Zpz1Ydsle4R54YPZRsQ6BxDG0%2BMYmLss5ScwiidgNZqkL99pNMpSKf7i53i3a4j7IEOqiak2yonL5ie9ULTw1%2FRkHU%2FDhwymyrac34I7D16HGzag7c97y1QKxrkaDTtvGNn7cK2bGR2%2BG%2FoEH8FoGi1948gsNPZChvKhya8EC3k5366eHrcFvmupHJimxc8nfd7%2BnAVJeu%2FTOEHOiPnPskp06iW9dEY%2FogNPPNCFuVTMc3k4ZTBbFtrJIOKTgf5EesOPNacgkTj5iWBdkMNSL7sEGOqUBpCt1T%2FNqWsuKce0pm%2B80sJQOtgtdTdag5zQpgSbNj80nZ5w%2B4iLNzr%2FvMebALsO0%2FiDxV4x6bFTM5yfd91YZpMi%2B3rVxo%2BASv%2Br6a5vu4mSv%2Bj50LqOgxC6hKmZ48DTvjlloKY3V2gt2%2FTagqmr0LR%2FNTS4mIxc9Y9gzEJmvtsxtUk09iq5x6UTqm%2BkvofCLNFh%2BKiIhcwDa6quayHx7DiAUVOTw&X-Amz-Signature=c792bfa24a8758ca151003f4888a974be07a13c33f928d5ca427b6fb20646973&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
