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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPJ4R74%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBASbdQvz58cRG45PxPrGKbUcWPNsKHlPfdOIyznm4mCAiB4oA%2FppddvXSOK8GpY8ZDHTHMSMHh7OE2BAi%2FWsG0OlCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgpQXvlZtKILMTb7UKtwDa2QPx3dj41H66VYhCe1qe0JYEvsgmIi2OOttx93F66n2iUqVPq%2BxIrOx6CjCgAYOXtKxFCmBCHjNkD7ajPA3f4DaWKCzJgOTVq7m3qKl%2F4VB6fYPi1pveJ4drBpId5y%2BZJHJN8wMxj7PceQxgQKcxghi%2F8PKXQD65w0ZAp1D2MJaBdpgabHy%2Fj13I7XEIbQtI1K8E3N4orLeBJTrrEei5KVJL5BaOB%2FrDLc%2BswBL3YGot2qwp92vSKrN99yy8vlzpBSojKerB%2FQ%2FsJmXdDvIKqibS12D%2BfNRaqo%2BRohDWMUxx7CvZS0YE42yrBEbELRi5DNLF9N4XKJGq1XvHA6zoFlWECqT5SmzERUpM4s2DB%2FWoBuIjdjijat%2Brtrp%2FKiBl8bFl%2FoznThF5eKwXi7xKmeIthPidgbDXhLVd3Dg5n9o1As6eViC3ANgMG61N87Gi7uRun3fxeR6RT%2B8vIjswkNQ5GWJPbloxzbHfvuJ9h38aG3IZolmCg%2FLhFyTeagHBB6gOivzN3RMrrPu%2BF03eCGN2IoA5rAjNgp8pwd6fsgm3v1FovmquEANm5uWAKb2vi2i3IU6EJWbPK94ISHTquqFI8ZfYmgCFhck4U%2FXI3qclT3uyUEkKMQ1J1owrvvLwgY6pgFLAagkTi150JS8gNwAQBvg1OIP22mhHdrgxwkoi62oRNLwN21wE%2FBJWc95C4qCuQwdz5sq0YDA9TjSc2s45w%2Bh5tJIgyjGjCJGyFRbEt8dgEaifLXEA8stdIiSuJHkEQQ%2FXM1zFnReArQHDypBEjSXvO7n9DxcRwyRr7HOzG7ROl3rf1Eg6gr8nOkyKA9xYZ3S7zWwfMDWbEHzRtcheb7pMkKdOoI7&X-Amz-Signature=a1a63e9a0215145c7ca31792a4a90073cbdc80f7ba2510430dbf082f7dff1b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
