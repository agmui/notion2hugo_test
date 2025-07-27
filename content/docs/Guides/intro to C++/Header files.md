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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WTBFJH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIH4IGaACnMdfV%2BDglJDZ8Pm32x3LWZP1XymUhYGfZidbAiATL8nobemGJMODG260%2BZ7a3c%2F7lhuzQdsWhTaLKKaN2ir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMKBwO%2BLq3KPFROwXnKtwDHpg6%2F9NcjrPefJYjBhdEZ19jkA%2FWXvqlUMPdahEzffRPJg137lN%2BRS3ttkYqWm%2BAsEvnxt62w72IXVnCd6t5ioiG5De5Fu5jsukqm3ea7HtP8A2AOVoI2O2XHhE6EGZAiFLtP%2F8d%2FTL1gWDBBXnVNf7vhE9RlzUx9%2FpIP4a80ZF1V9ZcE7CEAiV2oVHY%2FUrkf1FN63ga%2BaX%2FkebYSqGYBYrGd20mtuOPe0JScSyARUV2bqv8Y12e0aRR7Hyl8c3HmLi5LINwpucLs12uqzMP1VFoHp2KJFodmHxCNc228D5kVPWxiT2VFG5i1Cvcbnr6REzQ1QancI667NJAPY4QQNz1K4GMKsX6HXpgMJYj3qz7CDvue3URqfztkYTgMDAQ409O6kZn7xMxlC%2BDyQVZmFMg7yhEseWEVqPYNI24ZAk%2Ftef3Z9w5TkGRwO3aXyyTQj4Qf3O6sa%2FFgb%2FlpGV2pn2tbRK%2Fz0Wg5StOdJxZJ85LC9ykuslu1RRd00Y0PudOhhxb0BAo3KOmaguCGylCr5L14Ze5%2FDRDqmiwcJCddAyqZYvI%2F1TKFlNH6RewqVTInHOfMv54XFFdoOqMyiIS0xReUOoECPYtzDJbiok02la8oid05CgCFoRfsE0whbuWxAY6pgFZA58Kel6Z6ZveFvR2kKgtAZZDYCE6FSf2gbuYPS64vqt5UX2fK1TXKSTEY8Hkp9zMGtFVJlkcoAPlIFyrpZr8WgDrHja2y0PwurSRkKMhzODvrulAhCjT5RiUeLBQiIfXkr0gLuwmGuSZ8%2BENIaejn0P28vMllYErOGcPU8BXjbSCloXT1DpcpLBPlC%2FCoKUY73hX6ekum5GnyNVpm%2F6hapK%2FLnh%2F&X-Amz-Signature=77591ddadcf7e4336aeea7f94214ad8633ac51d8303b9a848b62d95324beb5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
