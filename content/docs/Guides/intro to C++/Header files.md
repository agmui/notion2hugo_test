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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUY5FLT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnSsb2XK4DQQNqu7Vt21rK0CrU2osB2DpPkKLGMOFwiAiEAgwsAQmkXB9GkjR5D46sG4jar6HeIhggLIZZO6gfxq6oq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPHgGR3fdSaeLHvHuyrcAzhF2jGEDThSBXYriBnRBB%2F%2BFunh2onBzWJbug7FEMEg95LRuNzrPhKJZMEA7Q0boPIBuaFbAqMGD%2FjpN38Wm%2BRkyqTkUlrhRiVbIs7Hy5klUJoaOlhc1ONVHN4%2Bx1G6ih8%2FksoobBL2IsqbC5rr5UjJgQG9Ry1yksVGG5X%2Bmj6hcQZP1p1nMsyn6vAv7Uoho7lmERhDyAKeBW1%2FXnIB53%2Ft9L6p8FCzJ50yzb9S6az8LPDv%2BJJrjaVL4bJdIuHwY8FwDsboBwSDJE000HjoLfOTx1iEUM6YSUP%2BVcjmp%2FkbNhiMQFvLpjSuh51Dtt7p637jTe47xFY729IBZ6b6iQs%2FJtZKvMD9%2BfMOabetV8DmxOzpxB4GSiiboEOmynYWwmro9Z284UnVaXb4I43ZtMUNOL%2BvI5A3aCR70xWKB9WKA6XW9URGa8oLPZomVBUwfEzHTkMRpx7aAzcMSc%2Fwvuj0TGf%2BzEOve%2BJxRRpmGGUQ933GiqY9y6pqJzXF48aslEzouKWT0sDy5uKIHnkjtfhtRE%2BqIincTb58iPGgJCXyj8TSxZVSPnDxco7J2NnCt25RnFPPGeQntmxPUvFYpl4hZnKjQCY%2F9TMGKSTRj%2Fu9GFvpm37gMHfBIpk7MNfN8L0GOqUB1hzU1XjuSCtflQeOHSPrRog0G1g%2FdXZb7WmMskHhur5656F7YsXLAZrENjHzlvMohxUFh%2FmVeVGOVuE5yvpZAqDjq2JsXwgpw3T0kQf%2Bo7Cgy6778H0p1iwv0D7zcn%2BaDAoMZHFNc%2B1eO2DWIWSVxE3WgieO6x3SIL4ZFI%2BhS9smNXih0h9nLpVZfQYCLTyGg79x0IyCRkdpSra%2BSnzaNAXTPxMs&X-Amz-Signature=005b0f88cff5b3b807b92541ecd337f461451e0f04a6f8644462fc9cc237420b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
