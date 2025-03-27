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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=7c9448053fb8cedaf64613e411fc45fa3f76de035a5e1f3f8edce04177dd8dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
