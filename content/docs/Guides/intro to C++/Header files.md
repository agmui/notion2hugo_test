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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHI27WL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICplD48GA48%2BhFj%2FMhL5Sip%2Bums%2BN7sjZn4Il0N4MHG%2FAiA%2FSx2b%2BuGiW2Flld%2BGVdmwMExJ7xxZgWnQVWVlxokSZCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1WJ3v2NJ3JuJgVFYKtwD2ilK7MiMhXnPnOKl2c6qdErYBH0DpaN7SXAdMA%2F%2FWKcEiYn5Cc%2BtlB7MO%2FtAQzN1fKPVfeqdtvEUpDJetSFcHQqN4BDSdl0pPvaP6Lrr8uFWETva5rhzfpgoSu471pWYfTUZN%2F5BlKpO%2FNELOHZDrzwTFvOtWJeEoRW8DlfjigBnPVrVj4LfPmEiP3aQ%2BvM%2Bvmtc%2FQmVfWn1WttQVxQJfbefxHqJQsIJ39U4arsplPd0Ok8BtGcUuHsuW2AbkJFrY6g398kQNCdkVcwa0iME8lkmkuW8kOKZ9cjLxIUcrKbNEfSPm6BZxNbS%2F3bmlwnAzWUcq%2BGcyh4L5djwUkeuhucXNU5pGC9hoecTVN6uCybSrbcfCOHWgy0%2B9x3gYDawYcLBbWKb%2BsihkFDDuw%2BkgSAfJ1t%2Fi84le5YHPHAGSj0TfdgrErqPkzUuuWpJA5CmqRubSTdhfvDKEVKDA7WOdr0CFimvKmUx%2BI5YetZ%2F9dNCbj%2B8hxfgkhTaTmcFnzIbz%2B7dy1okNytWu2oUzecvjSgcr0gcAc3onoBNIPDtYOjuh52PCA550dmTIp2AV3uQR%2BnczsNraDuH4CLw3yk1veAHA6mbW6Gf73VwtXQBEeDVgXLV3ip03oHTnIcw4%2Bm5vgY6pgESeKjw%2FX%2FhKrFOe3hBSAFEVMHRnm0PSevmgDLEazwXN60nmXQfk4rub%2B35ApkgChZA8PVoiBnDuF5fmgA5lSnlQIdbYotWKFVLWoTM2Kc2ltrgBCW8WjFsONcE1Oe9T0Pl0L7ISD%2Fy5U8vox5ioIMMxICufXJL%2Bcvr1dEZs23C%2FxfMXwH8A6uVBGuasAwbgCf98zdHROkGOOSHBdJFFQHh9GRGtHjf&X-Amz-Signature=4f9477b53d461b6dc9c6488ca305e0a2a84211ae47e5d6619018aee6082b5bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
