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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WT7SFX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHZalTS5%2Fk7WTv9hXnSGy8r3YQQpeWlwFH9RjlwrMNleAiB%2BdMQtpKWwimReSRLHhx3aW24%2B5v5rNHqhPZFhXm%2BXPSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAI9XI7%2BeK4VAqW6KtwDbUow2dZ6IBzznWyR49lgTyI2sHQF1QH7U%2FlsyKsl4Tfk0BH7eQtfLU8if3RfkBm9qpQ7h5h99QlU%2B0%2B6NW7gwHcztFSRsQ0i3TffIw3H91JCHkgUax5%2Ff0%2BYJrXIL1GTCeJUfqlClYmfEVBFurbudpRjlJdSteEVb%2BQFes5BhwxzM1RqNWErX5PNbOInR1bMn6QN1QTCV1TO%2FRQamth97%2BZFQm%2Bqg9m6ieE6RQYPulHHFEvXQ0DiD4%2FWSUZ4k3poDrifJMozeUSugYFsao3BJV%2By4GMXYjvOMyoZtsRJTSC5lVuMh2JnGpd9bx%2FPxGs7yH3rB4jx04V%2FKj9sH4IDWMvEpnDIzzddxJz9yqX87PMf%2BM675HVJccDQvbhTRkseeROYZsw0iXxkAQHMvPmsdS13dmbWm7JXG5LGJhxHPNDxdALsDWcgD5DuynZA5m%2Fngu%2B4M7sTeUHRjArp%2F11q24k2ueIax%2BlTNwrqp4JF4HCHpq9vjmPk%2FjuV%2BctqqmYlKQp6ww%2Bsmib%2BhZsPT95pxam8seDvXfgFRobeOxfIKzCN2hC0OWACtPb%2BnMG2J4qz56SC2RTcLyU8yhWKxkiteYx3YZA8d8iLr5I0YAe%2FRPJ9%2FzfN%2F52j467O1Xow1dePvgY6pgFgv2JYpm9BXGwDysUjeLBrxUa6Zv0cW1Ew6vEwbKWieDjsCMQGuDGv84s7X1ELql7k9xUPpQr0hRG8FpCjp1dgMAMAGksgQ7%2For4qUTR0V3NlpbdJSFH5WXo2NUMOHV2lhh3KteMvDRO5%2B%2FZGqqx679KCN8vr5rchA8FMix%2FguTkp%2FDj2Z5S6prg5YO1O7D3C0gnXUSUmjc6i09xoZBavUEb9f0vDC&X-Amz-Signature=f5831c0d5da0c1cc3c26676802688b4683b1f6b1efca98aabcb1c8c2647263c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
