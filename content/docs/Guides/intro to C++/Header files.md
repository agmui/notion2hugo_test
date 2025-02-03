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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTIG2LK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnErZ2DIWStk71dURgKwpEVSp0Doh1l%2FmItl0PJzLhPwIgBlXxbo1%2Fs2Y4H9VRh48gUzP7DJmIJIeKP1PAmZuE93Yq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH5IhONeuM2lzF70mSrcA%2FG9iHodEa9YEqICVqOswPGlC5djU9PRmmh1GRuFKspyKxEomUGilUQuMCBW%2BPgQhB1JiS%2BidK81WcgThknlKdl41JMJTDNPshQNGb9mGEs30CxwxOwMAvUKoeBVW9DhHBU4xVU5yozgKcm9vHC8hYdn%2B%2BjgaS5IGLjdylFBYRHBISefKJKbCl7NZA3wAD4EKpWvCy5BWfqTY%2BOqqZvSMXA8Fr94wg%2Bo4EfQn%2BrNoLII2D4lmR0cmmemu1oWzEOLbrWq61QNKTk9Mm8pG7vIE4hDI3Dqxjg%2FOPkI33LLwX49wxorZChqEJCU7xWdJrxaX2mGguqkhJLpiALOOYT1pdx2P40mIIGzr84TqygGm%2FkWC1g4Es3AdIpOZGMueWdD3VxZdmZhcID5bbsON9kdQxeaOiAKGWPC9UDblzpFW1XIq71k1Me6i8VLnNiz%2FLQEb5lllUyiJndfCzqOGpjCUeZvnRdSnI9OASCClN4p16MGEOTEVNtD0tJ3emRBCpm61xJnTLioNiw28iQWWwFtC56wuUilkKTuHL9LFblorTZFZ%2FSZF8cXTGlz2huh%2FUhUezCK5YNEtRIPEIkJQldpprBu5%2BkMwtSujIaL8klN7PBsuiaUDH4%2FQblxvCSCMKL0gb0GOqUB8jQjj8%2FK1vdv9zIonlkCphF4QE6jTSApAak1sq0M%2Fw8%2Fsc6bzY9Ngrr5Ca3TttbuXhZEZASeQdVNdK4AldAVbLP1t7uHBGUHoSZ1jkRkE6l%2FHPWuFDHiHYIp8CPxuTajaMeV%2F0DTGbqLkxqtGZYROd6L9sZGy16nGxsfmpoZGXHK%2BAsEVG2XRVDWRsZrfq2Md0sfLe9pe0MMa2fN2uLdObS09tUS&X-Amz-Signature=68f2d1a3fcc96dbc450eb8730d8987fd88482479d603688eacb8bc8c73634170&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
