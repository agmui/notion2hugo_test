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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635O3ZMQN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD%2Fbt8kPo%2FtIOnZosiGSoHEF%2FzzvTgh75Chjfk7SKhLLAIgOILQ0BMdyKqMqDHj5O7FCYH7SKuulRfyrv0gcv0xpnAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlC11pn2hcAXZOzFSrcAwrD%2BL0A776Np8yZ3EI4lDVfEYy9CqYV%2FSga67yk65g9VRquuq%2FotlJGEBtFYlKE6sjunshX5xH2BdDbR2NSvxYrpFAM8JOUSE%2FfJtpXBDephideA8Osi20woaN2fKJM7UOE0SfWVh1YqgKFEJ0wpDZPeKrDaJVENn8VDXE%2FU7RMzmN4OENWZF6CtVdJ2MAudnicoJVFH0MJq3H73J7MiN1PVA9kV4AHUt0VCQF%2FtGnb52HXlEDAZobX1q5R7H3FiDGv9ruqQbOOUZU0xuPqm4MqvyKAPQGM84YIF6zg%2B%2BZci8jru3yO1M2GA0WehH%2Fumn%2BfaWwj3n1KTb%2BEMo%2FEgfjoPkNirS4e7GMPGUU%2F8NWer%2B7axhzbLqHZRat3M7GSPUzjHglt3wcrun%2F%2BM5ODhnuxiw3qzoPHEKTcb0aUpxm%2B%2F%2FRACsLJtAeiKiVxcuQJjYb6%2BzFVoCUeKSS39Gty6cUoZjc2pOIGAiSmCCmsOG9OG5ILMeLvwQEnNcdPOwAdUQB%2BwXn4Q%2FAqnDGuYBhcQ81HWaCjQ98f84TtHvyON3msne4lMibCqNboje2MmSYPvuwFCb1AXb4g6DDOz45XAysKF3%2F0S6rs4%2FmyLODUklFUcYDrlGoHyMtk06qJMKLlqL8GOqUBTTHc4dpprFI833kLMumdysAonORwEInVzAuYUZ3P5eIauo%2BYkQPs5928DPaeNtSo%2F63hWE%2FyUaBXsYmP%2BMXUNoBz7qboaU%2BGJhjEO2wj97ME7D9E1oZrNoGTj9OBAO6cPpJ5cEDXooQR50DW7iEODxXy%2BxkM3D%2BxExi7aot6HCKKCf2EDXSa7PAXLmKhNyc8lT2FAaffNMQJOZHPrL52JzBAyH4Z&X-Amz-Signature=9db61b1998eb4977b3b6e6b87c6e5dc3219da564274b6954899ee5daa5128a97&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
