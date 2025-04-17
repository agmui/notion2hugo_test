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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXU2XJXF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf65F1Ued5GG8tfGmR%2BWejuJa%2Fhu7v7yHd8Rg%2FM1qm%2FAiB81lNHYR7c957C6yl%2B%2BafOM2aXG4MR93tXOXfG427Hnir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMnWkZhtAerY3nbUwJKtwDBSdsSHcxxxxCF%2FEjZLB948BTNrcJ8LUoxBYmV0p1G%2BYVTeEg2LBfJrNPZfcz5wttustwHnefaCNgHfKJetAX%2FjdXxA1vYNrvAxM4v6LVn73vKR2Q1frtaW%2B1owcknAqHwFxvst%2B2TzhYAyuXPr3p%2Fn7QyUZnScf9Lt8%2BPcGP1b1jsc%2BdVBcoJlvTMSJWtsPhPHueXJsJJnmOYlBIhCr2XJY1%2F2DmV7couBIAE2UAzUOSPQ5b5Z3dZx6u8exH8mwWLVLurBouVFAHxiy0z1VDjNZ8JqMYS%2FxStEjWLqSak4FjzluVRrZA5ecg4evuD4PYak0WCha4VQzPvF%2F4L3t2%2F3Mzsd8eUiz02rwFJCtSBP%2B%2Bu8V7i5KuCk7Qo7qZU436HToSQrUIA9hnryw9JnuQh8doKA3IkA1fsDx7X5wMm3KQVEDOrO6WfR2UZAeIWcqMw1vCBy4IplZIhYMZsrHoufhHaL8phRpZJP9uEy0%2FcGnvo2EN3eN6B8IOr%2F%2B5LmbiZvMWPkKroRxKZB6JUVtyJtb5gkS3dTdoKvM06RLiFlQZG%2Fi0ehN5zHWEhNJ%2FbAUG4HDiHMWMz5IkJNDE1qe3ZAFQO2KF%2B97F6Q1aml1FmpqUj%2BBGHT2pcNtiv2swj9GFwAY6pgGdfYrX6h%2FR02oSBC4nnaLP4Wgrkx6Sjf6bwAR2VYdVRsmGby4LiFi9B9965Llfks2fQEesz%2BbT%2BVvKXSmRnshoebju7JPVbxwwzz%2BUnyKNoa60DnZvorJaVRngjVNWZt9rBE%2Fey1rC4rpS%2B5p0IYxCjuPpsCaoFu1x3n6HgRdmx0YwYNzQXWr%2F7BHQHgfV%2BdwEKTSh2o9fajE4WaWydIRU1nO%2FYTd8&X-Amz-Signature=f73423ba0c46b7252bdd63753dc3ebfe2174d1aa9a8187eae1bc519f7fbbb613&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
