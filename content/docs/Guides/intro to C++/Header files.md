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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=379ff8c9cfcf568710fdb5b739f30251f83e4a5423d88365fd2e036d41bb65c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
