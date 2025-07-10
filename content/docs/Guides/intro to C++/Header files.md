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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXOJ7BU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSk%2Fu8ut0wWLcERppFy5vQnF%2B6Z3FVSK3ouWW00BoVvAiEAhLbvV63cl5KYLOcVIaFqoAx0PHc0Ai4k6Zr8BY1gdmkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlygeMJtSrifLytaircA%2BYE1hQiAke80%2FY0Tfch9R1w5nqau5v%2BMSWKeRLiOgMboaUKy2Y3%2BALlR4BkZZkzxzwtpXBEcMj3J5b0LotL2xp9o5BBHSMxloUAEXixbHHjMDzAIY3LBh%2BDWqsKRUJtoqPZNAj5chbLGhlqrZz%2F67LzeLxdvEH45J%2BI22nDNjYWBjxbhXcyTRDQiRaI3vf0%2BqsDxU4DBCw4NOdU80v98M7tj9O7Meg8sc8fWJxi7n%2FWjDBYZKKgrl4S91P5XW%2FIn21nJ3z8VU1emY7%2B3CVsDLuNuNte8lVgwAG4jmztt6uZhn8F0z4JgZ9ibMJDPyPAdXm3K30sGtbxx8MZD%2Bk57WLKKCzFsUYLjEuAp5yQZMz2LJkCW6x3cvp0pHUjWnYoEFMIpOFgyXlGPk57x0kQp7SSDoJsbgrDEnc48WwsTX7CI%2FaDcdUKZD5TvdXPgLbWNUoiY7BpKezRj%2F8sWoTUGFz3ZEXd%2BGgtyqoY35JipkFbU6QeqVZEbcE%2FAVZxjFtvPl9SQcSBpXl7zvqPzTcGXQ%2Bzh1nYbVJrc7zQYUp%2FAb0g13M%2BtmW14FW3dU31EhrST4qrtghRX5KXXA4%2BfVz4Xw%2FGod9nUzZDwWQs9kbcKAts0whFQVeU6EhRRxozMOunv8MGOqUBZrYoEf9BvEN1pjfRtAxG6A8PsGYMaGQR5s8SC%2FgFgVtbcmNENiwPwNABOqpcZtzn4j6OCXfMyiTb414nSbhn59bjfRwjrxUUl1yyGAYFiUtUu3ocjBAbxIK0mJDjbh7sBLAkbBV%2FXpc%2FUfSa5sdMD3gbpF5MsehXn2z2YHpVesu5eqDrUihjkRoJsgDuav%2BpyNiKRgt8azZrBpRPvlgy7rrsZ1Fi&X-Amz-Signature=2703b1aedd4ba99a01561d1fa565c48b81aebb99d6404dd0c9e9cb2403f71578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
