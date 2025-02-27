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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIEZF4D%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDsKXETrNz3dPkoWgflQa88Ezxj0O2osNW%2Ftcqg5cpxOQIhAP%2BCOOsACeyoyRETIwoQjCBxfPJuls8mSaT2J9ngQgizKv8DCG4QABoMNjM3NDIzMTgzODA1IgwGGqLR9aaObh8zoXsq3APk%2F%2BDUy%2FTYGSVQpUPlbIcalxs2rkAAIcKUs%2Fi3d0kxe0VsppsAM5bHLVrJesETA2aKwbSESXDKicoPJR%2BGMvdaYuB%2BoG3RDzfAxU67Y6w3GLukPXz%2BxsJTm21vDHKXfxjB9GfZ7djh%2Bd2vMAfKZ6r7qkGAzTE8UPJxf5DBKILeZx1uxSZInNCY1VAWg7qj8vjQB1gNEUz%2BrQxGxzXDxaU3uF5jfgk4ARHSg7EqtMKczT6Uup44IP%2FBsxtcV%2Bxr7u7HWVH6dmKIuHM0tkrdnv8CcdrgkfUo2SkxKZ23tmW8rbsPb1hyvF0s%2FHv90haO4ZjdpiED%2FQ9liqGAOhhuIz6lzLIgtaOxa%2F34HKPHgXErcWjppECleatw6pejCk84VeBfD8wikxPEqETya9uFqwvSmQw%2Bw2syNoZWpN0%2BrMi4%2Fm%2FBtkJQ2XsROxsmAbrkbaU0Q1zgLVLW3m7VJqKZYQ8UXC4wWjWR9JmjHwQVN8bzt00SgRvVLhmGSANuFvfmT1YX7h%2BsUPG0aQU3o%2BqwJZgFvSMdRrnwDLoqcpQOq37J6WjDDvzsfvsC0PiVephb9bqXkidWUMPDDSsaUL%2FdfPauNnYpxv5KukfdqSHWQW7eAmBXfe0CuMOmPu4fCDCr7v%2B9BjqkAZSD1uoRUlmnAfBtes3eOqWvDheUVR6MTqJG%2F14n34SyTgbVVqe6DaHLsVuJk%2FsgRwvDGVcquIrgqgN37mUgOCHq2gsSFOKJJKoHfBfYjMhI3NGbxKbSpaUVISnFLu3Z9R18Ss2kDGTTEZpFQdrsBnkAy%2BtMBiHY2OO%2Frzt6IK3Juwkp2TtntNbaWjj52NksAkqmMjT4%2FRRuhWeH16aXRjePWp65&X-Amz-Signature=9ff9820184ce0fa56f5dfaa74ccce2bb3bf5954af23660ca7e7fc696af80c0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
