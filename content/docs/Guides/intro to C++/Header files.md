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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2XSCIA3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDSm2oO2AKIXVBf956zOPx9KN4dznM6OIqY9nhvIxeh9AiEA%2F2yLmXU%2F0XReKv%2FwrmcQhoKjCCzV8TrCZtqf8bz9Ea8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGWONhA%2Bcb1y1PniircAwqF77jPVfgeDyyyYxk%2BETWex7qlm0LQp9GdAh4i4XIHISGo3aeIFbJ41Ky1MlXqv7%2FLDTtCw5Z8vGXFVx7mqdLQ3V%2Bip5UtsT4R4gtgFY%2BaRuSU%2BPujmRr4Lsk%2BWmjIAlEQ1%2Fsp7kJtgxomuFBndsbPmUIxFm8wmNl2EZ1UOZpAB50pHmd4xRsptA%2BkdvmgRPONCV31zhVFs8RyhpmnxgHZm4cznRG7Fn08xrIKjyj4U%2FspHt6vK%2FRGaoR9H4ukCdNjaiN5uxVoKs1upVn9HLZx4tk3lj85qRMS4Zi72bCSEZPO%2FkRoErQeE0iFUDmZMXvO8alryOI78GdH7k2%2BQUA4vk1PuCn6u7Ui9W%2FJDXoxeSgNCSWhbIsJvEMMbEKmcDIVAhCC5tcv3HLV9uWliOqJFqWVcapYEhDNBYEBX7n7VMGkFY4Z0NVH2yi%2B0CcIwwpLmtBKyH%2FqrMgqEeXB7BtMaraAbo0XMq2P5vw4SSbyfHLuv3M0A5FkeTdL6%2B67OoLXPaLWxOJLcJ2erDWRpeTPh%2BJlH8q0iALU%2B%2FPdSVCtMzj0suzCLrSa77%2FZa1sR2dObpFE8PpZYsqsvxI8G7zeicI6xY0FpQ5nEr1F4dqfMPINOErJr3Gd6c6EgMIqw8L8GOqUB1JFn5teGVzx4V4LcphOR3gqIfxmThrdqUJTS6kvFNFymlnIj7eKqzilUt46sioIjBfSSNuW0p5wQkNDtuIXGR%2BKYs6OkyvL3tO75dwCPHhsh9a7rwqbEb9owJtqYkxVns99%2FWW0K%2FzBwQSnlDjIq0%2FmVzUB1g9OlzIs1km6FDocLJ0aWD2GI%2FPPyMr9FHCTZb4CIUkcAus%2F4Yi9wLmf52jgfy9Nu&X-Amz-Signature=ab57c2511a210e4d93194f66a4bcd8918b1376b9c9bd7442ac0761895a1696a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
