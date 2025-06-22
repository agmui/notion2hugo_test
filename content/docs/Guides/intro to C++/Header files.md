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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YACPWT4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEgR7LbUo88ij2sa1IkTFukztCjg8c5pK8PGAAglvbZbAiAw%2FGAiY7gSeTkaxchzxCvmjOl8huSUkmBo%2F0r7JqoIaiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwRiVFzx0LaQyahWKtwDi7Fad%2BFNHssG%2BMTsk%2BdQqJanp%2FKq2uHqAsWsAM4Gs4cbA9iexyULVAbnuY758gym9uhstJiJ75ghTTW9hDenoa97lhM7Om%2Bch345Lchwy%2FfKBbkJe92UGsKyN8oYUj%2FBqwZxLOmALOu5mH%2BO5377O0jExrZiGyd0mpYP2cd9HgUrLs2OYqrVGOHo2EP5Nln5jNKjkiXIe9%2Frb9wuQ2yM8%2BjEhlxt5DbPVX5OoBnclNuX9G0iY9Jh9m4NeOIU2cCofTaA3h1Tj5gcrLnOdR3epkWcdaT3CHuSYlXuWKTCnBBrx3M1hxkEeK2BK8xdEwE1etSTvD51G0hZ6w%2FnvzwhSjLM3E4Oc5le68Ww9IbfvjhAWLLQKBkDNeVDP%2F3w%2Br12%2B6HhpEkoUtLAD7coFMJIiCQ0IW4qAmtBKD0tzDQfrZI%2FUCvNd72dpXPkc0YnB9kFTQqcL19nvlvHWkuIfbrxbAkbLEXMg%2BcYXMzBNmRfAxQkPmz2nsr%2FZGtq88aekeNsaYhgV8huFywQpmcMJYhIQEIve0W3MFv2NAt0vMmoVNei90K2fAPDCAxDn%2FlEhERJtHoA%2FSX9gwPqIQJZmx9hb5meo1gCEy0L1GyxipFEGE%2BuKueuelMTRkOx9nkw2MfhwgY6pgH%2FsuG3ljN3aIloDb1iUlgG%2B%2BQMx8U1oewN7WWzvSPfVPZwAOSwaBTBjWQsVcZg8lyE4euo959kunw7OMOrd6CaeHK0yUSNtqoVgsjqAWSrQ3aSnWsorsF6qkM0Rr2j%2FZVWEdFb%2BLWX3l0UGsGdDN31MUuMR2aBiJyhlbHyIWQYIDN9aJTtfjceI2hHf2kbRc%2FdSDVyVYszX3xMI8%2B9jPqRchqf7OsY&X-Amz-Signature=5d2256912bb7edea5467c47dcf7ba4fbc968888294a82b6472b300a0c4ea1c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
