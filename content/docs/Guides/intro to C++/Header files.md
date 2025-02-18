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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNOKQMR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD9PI4ToyrgNleSjCfYKWQqT7oQQtpXovCVUq2MNBYpogIgQdpEfEtB4aCdGKVEYB3IFmO24cOrmV4Ux5X1FR0G%2BggqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3fIyLtRR4uCvPhRyrcA7F6kx8lnf0r0yTjEq1QtiuDJC2Wy1EWl5I%2B7P46X%2BeI3NYQ5gH%2FVFk4KSnjv3hCc8BEGXf5Rey7Q6hdzfoF23%2BdEIJICanw6amSS5uFR1XyCkd4BXznLgFn3zbnltLfe45dwTTSX3T3%2Bow3hUKjOA7C%2FRRp%2BffUJRL3htfU88X6lrhNgTv2PdhNjNvHulSK6buVSDM2hPn2jk0yKkl%2FoQ3rgVaRnwpHNI9%2BoFkryThyInyEEkwzQ6HHw415RkAf%2BOQvW16TixWE0RxKtlZXR3j7Ru%2BPjinBsk82i4ucljeOnWdQ8QF%2BLqVOIj5L6pj9jpLCkLXncnngJzx7uMRElyXjfcEHaV6kTLp8PZBVdn7XUKEL315EG7Q43tsx0abvvdcZQ6idXOIXSymtjQkJQpJ03RCok5Yw8vSpZrT7b4tTUZmLhV8fEq9rD1%2FyNo37UP%2FMnX%2F2yj5YrV5xuFhBlkV8eUUVNGEzOPJrwNCWUvW5ZJTQQUqNN9djlweyDwE1tYC9TDFuINgRhmP6gq48O%2FlAz1watplf2%2FTg540Ji70rc%2BlLjoTkdrN4N4kR%2F8IXewG9Bm7XeSUoFLONky0zct6hBFJESt7crgwAjX2hJWVS9JW6j2iT%2BM1OdZ6RMPz%2B0L0GOqUBXIYuTnUGQLnZUQtxumMZgKTj%2BhzeVjLowYVhXZgfRl3c5Jc1JD72naUuNCe9poJdeiFYK60guFEmUpO9gr0XBdVd98T1%2FTAddqDG%2FWqEoizSc3T9EyoHIb0N2hRCWKEJ%2BdGqt8r1b3eKYP5Oi%2F%2FgPIDRLOKcvVrrkkTVmEU5B6K5jtg73cYBcklGs1OZrZ4cjUw5cmq2sqlLUitE2mLJ6OZOE29y&X-Amz-Signature=de740c8acb537f174d2f7776f61e4f1845432d7d88a66a3095fdf58a743e6751&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
