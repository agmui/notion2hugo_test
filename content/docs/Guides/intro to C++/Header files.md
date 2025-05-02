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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRQN3LN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAQw2aJMii6JUdtOC3py9hFCvp7Ld1EHNO1r02uKhfbPAiEAv0SwshTEgihmeCZsv%2BZ99749648yhMK2DWKSbf1mzFsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJqruWLrj5HfKeTPCrcA7qW12vfbpka%2FKFHbqEiGrJPEOpP3D8Cd5%2Bk46DZZc7yNPTO9VhukUDpIGcu9HNhrCNJNTUFUSHt3T0dV24tqP2LPHq5SwyiRlw5wTckcjetDrKYL2q9EoDYGbaHk3t6SlvSy0Z%2BC8gUL1J084vyCj17DjAIzzFlyRDHLeXuv1sTqyh5n6AwHL5N1%2FqRERt5e30b1se8Aq%2FTpNQ%2B36WaxcEKe9PG4jbuStPPNsRbyTujrjO%2FoHe9qqo0b%2FU%2BMIn2uaERBiXQezmKhLOxRQBT2ZwMePHIjmbeIjIb%2FbV0P5yOasg2jRiFwneuEugpaFAV6EWeD8D2A4Aj7G8cqYT3VxZzFdJPXwIZfe84zdFNIg5%2B%2BKPW5W1nua7Sbw0vbOJ3PqMgpcAgtEqBWGbWf2kk58Qj%2FpfzcDE%2BuP5Uf6FH2mreMY9Y1ErBAtoGY6JhxNs0oxGKm5MPB%2B%2FQn5amnpnnqjr59zUGEKZbq4kLTHNyW0YOJ6d0%2Fgxkm%2Bks7Rnp%2F1GzaBoLGReRiDjnbUMA3CcGsONrJlnqkw3rbNecDK1OpAnfqYVOLXFXb5bWc5Ns0ntYEyupYqkvZBUPUClSmOzeGxr8yZm4c1YQrNX19tr%2FdgVyP6Zo4d0d6o2mUYG9MOLs0MAGOqUBQuAYq9%2F3a2Fe36V5DNmgbK4zsmTJr%2BjnONmFR04F%2FpfP%2BvXa1m1dMrw7%2BOEWSDND1aeIsZAF3XLgbfVSIpOG%2B84LpEvFRUK1%2B%2BNvfU4i1nsXapWcg8Ej4Qt6jzINqTfxpFU%2BYRVO7GyRtWqfPUHO%2B46VP9pIaYhWijRDIw0DDACbRpH4tfxIHWvqgPP88YIXtaPbcgksodKpU36fMcoMJtQfrUVP&X-Amz-Signature=99a8d7493b1e395edebaf4c69d8a25496a20ee51a2a7cc67568ab089da1bc9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
