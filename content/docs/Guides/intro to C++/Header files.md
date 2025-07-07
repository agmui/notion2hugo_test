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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUCWHMU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFJVP0ztZjNJNv5UemvchvVz20Oh%2BByt8cB%2BHkQCGodJAiEAwd6LXQhCnpxBYEi0D6l71m4JafcO9kn5YP%2FauXS1ICEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD6zRFppmKv6XZgG6SrcA%2BGsC2JKi1kwFpwdnAq%2FfmrPTlLLS%2FmxP4TKmURkgN%2FhfcG31sy3PbRbEuPl5GObKjjoaexcl0MJ2%2FMC1sD6KLyupGzVZ0zbOPDSjS3EN7ta9UiJ67Lkbu8%2BpJPvS0xbLl1ysJY5ZnXwybN8qbThx26fnQypZ63yFVjlxLvcDZz%2BznEMDPFGmUFwqMgE4rWq3qee%2FE3m1iQNvkEDJNERoMdDpcZwXBWRLJb2b7NVlkfgzW%2BIsG3vEFKGLxRoRFm4w25oMYqZaUElmol0CLofIoQzLOncQ6x1y4jqIK4STUF8xV2gIDMoxzOFIOdN0VMGHQ9thEtfClNugdlbJaegyO5YVPKiL1%2F0yUapIx1usILK9f6hUrUT6CjjqKL9q101uxZUuKISfWWd%2FEeq2%2FM2kRvYumn%2B2lbDPkBjYg1ZbBg4Dr7jCPssvCCGXK9rb%2F%2B7Wwv%2BlnOhlG2AsJF8CX1EYqe0T1ozeGJxFmBs%2BCip2Zor7yBu68rAkc9MhUVxGkhcK7Rw9Cp5SoVi3AbDzhxJKdyu5%2B3nU76hqZ06fcA%2F6LF5C4fANyGktQC2xa7fiDlDQFzmrymJqusoSHaoF3X2sWcJVAtxh1yfCHb1dY2Xc5u95s55zM9g91Cwr0wdMLO%2BsMMGOqUBjly8xYDvduv3RCresbiS9OXHQpvmPbNJWyi1hXrzGlFCHDadCxKGlocijm2PFWMR2EVzVOeyUC39w61DJa99jWDCrguHwBgMwhLCzB7Hrb6mU%2BhAtXn8J7qOU88kS98mWyICJnFzeNm8moY7gd0gUR%2B1CJNtJroX6RcE6VVD4daXNNO%2BRdmEbTqD5HwXWcIzTjPX8HIfJNOYhwXB%2BHOG21VDsyIs&X-Amz-Signature=622d3197b5183076cf2777ce63883d4bc661e6517d6ff640522c91deb6a9884f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
