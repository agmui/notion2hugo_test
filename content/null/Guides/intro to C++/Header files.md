---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPH5MZ2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCTWJJzV%2BciU13eZFjVFncoh8jllRipzKTDFMFAsdPNmwIhAI8%2BsaOJexuCplmoT6a4wOEP0PROQhBOIVY5U4fKAvxqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyUa7p11IXQ3icuG8wq3AOI6tZbHdTv2wDNQToW8gqbICi5xlj79OWqvIES%2FdUNya7Hi7XJ0A8MNsbupinFGG%2BVqU%2F7mEPZuWj1igCoOSMFo%2BbHLFE%2Fmm59yTn2AL9nLbVFABNnlzy0fov0aF3dzBpHpvsjqwGmbCsLWiOfCOPlmrAFzge4kHvCc4XxvNi0YxR8JLwPtOZxLsnd4ggLueDyj%2BeCyEDYOzEHLHOFvGALIgN4Qa71j4fvQO5nZVfpE5xP0SBnpJX48Xtg%2Bjmp3%2F2yRZ%2FJ3je0VRfeiDyS2%2BKfMbhg1aUYUcBqmO345nUxTYbGhspcpWHqxphVHibQ76l%2F9nE4RG7pkvLE%2BNN5KRz8UmkwAOpcGs7wbOxTAcRL1q%2FENY6%2BK2fHBgfnSnaUqJRIyZjotkA0mA1xVHCC1AEmxn5AWind2cZdtM64o7MBwxmF7QQ4t1Ud5fu0TElioFjY%2F2iDGBYJchZZxh31E38C1UAbkRJdOaPywCEgmf5yMK3MSqSqB17sj9vpOOQhSAO%2FbN6EJnxSRnCBRJjlIGqSY%2FW1zRpkAEwxpUkQFtc7BGRRzIDl8YFLW1Vba6jOGrqk3T54%2FHooB0ZShtSXGmznNHWxmKjl%2BQhhTFfqzLWExRBSXewvDf9LoHDQwjCLz4q9BjqkAZtF7qX1nPkpzoavEJ6zau8pOmSXQExa0FXmmhFYO7GAPfregp783Aq9oms8R6sut8E82oZJxv9iYDq9kKB0hFpJmHufUSI3TlgPkVMdCg7KCjK8%2Bxxyay4usvpApbrCqU%2FEDB6VbyThxMpE1fRw6gVIpNoS5ooSa%2Fy4X%2BdVDhLbgCIeUYmBCgyTveicq%2FBw3X2EWeVQ70oL6f4OPx1iNjn8heka&X-Amz-Signature=6db14b9f6e29b5106ec391457aa4b69d92956cf97718648a6136e9789faa8763&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
