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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH77AQ6P%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs5xuBvTpqc46lw0tsOawtqdjrwmdjNImUSHs%2BD4VLGwIgISuMXZic37jxyWZMCZ3ZTehaWn%2FKKhSyK0IB1mxss8sqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEjBYySoTBDybL1oircA%2Fy%2B5ig0SE%2FrUcVf796SX2FX3pihr3MB%2FicHcPe5l9aP3V8F7lvqar0s1QWsbb%2BOr5Komm0WKdwaHlb4lpTCPPaPuxkaqIOU35Z0pLzGBc7O7azgPsqlCEiF9exhQm85KLnDBZvRxU0RMB9JQUgsEwbR1SSDq6Cmq01wYtG4J1hyHyqDY%2FyUqhfioMArCpW%2B%2FDubcP0VyHVKFh7CM3zb9mg4NphVD0dZBnTCBqHY3vSHyga6%2Fb87dS8bqtujnv6BuXLdiIcsV0JttxJ%2Bm22CzpKjar5x%2BoV9Szfe17Fs8uPKFFVyQceIAeBn9ixcgRGgXnwfgtHAbq0RQSNQK0yBviogQeH5SclWChje7uBEvNORUMuDmzgqNi4ZFgnXG6UfBjeQFikLv17LsbQvK87BUwsVxJzcqPqdKb7oTCpEWgKoamDPS8l0Ik096O45tya4XOOWRCj6nvVHanNhjo7U3Hnc2PaenIbNB%2FmeZ%2Fc1RIlh7pl49i4sDVY1jlXe0suEyEZwaIoTq72yE4mliPDnbBi7PyZXEGrQbMMtS4NFl2hPCWEFefzlnd1zIS8Peao8ApBSDB0Fe8HPI2pl2xEV6TZikJtv9Xu%2BOFVbyEjdSxqA%2B48m%2BVKDgLnr%2BGPgMObE%2BcAGOqUBhqMqAEIQjEUauCKUgqlfwxXhuibze0kQUBd%2FNU%2F7ysXUW5eSLVRhnmdxEdG1Yov2Yc16CQd4AzCKlf4yTsYHq2lJ3gsnIdamZmne%2FTDZYGXUKarpAAzn7BACTykrLZe4joUCUI9Z8yNZi8Hr%2Ftv932IPnXEUuFy5QPtakLbgz09KW7aSDbniNBFsvZMB7CDoYB0Q6ocFgMOsy5Yg6ucw3bWmicHZ&X-Amz-Signature=167750b76787b30213e451268a6e0cfce9022d3659deccd32c3c38ced553c3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
