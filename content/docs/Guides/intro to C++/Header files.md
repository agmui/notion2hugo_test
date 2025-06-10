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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2LEY3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYX3mpiwdX2lSDYLYUmu0alqbTFaqen8xDa6Tw8OqJ4gIgAJR%2B3OU%2BBukCtArtvycAnE6CeBds34ex6NsRnbgA6OMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjUGEFoFBwtW9JQwSrcA7OaqyU89wmRfJJll%2FhSXFV%2BSG1i8RBH78trBAQHD7TslCztNT%2FIi7FTGXKGkjF54KY5B2JPo29v3G94bb6FBLQhI4QKLgig7nrdLeGEL1ddg9GrGWH%2FZWZztEfAE3oZVddDo12XXpFWGq%2BRU6EhJSsW4yefpCVgzBsa%2By0kYkFLQajkYxmvBPhzOfHxR0VUvAQ6BY69tpNRXFimfNNVRciaHNftomf%2Bwl6YA6d%2FfiTdWUjI2DScR6YBUDI81Fj9DUg23fkg4Bj38tQ9PXhZyNYJV5LFIBF6eK%2BiohXCM7qM8WA6eDnylMPLdTZ7CTjb20lX2%2F16Ge61nF1L%2BiY%2B%2BatIXX40oRxAK9EdLdYPL94qOEDSj90MHRmhNWkH4V0IKxZejWqUAsEdgy2M8dQjez6Vk7ZAYPvdkTyzEH5HsawL3c%2Bbz79Iz5qfjZ7s33djB%2Fcj2ivqfXyp57MMmX91q3gWf%2FBFcLLkOt8m0P8zACXp%2Fm1g1PdlXWmYphYaN3eJyqjI%2FS%2BCMANqjZQ8SsCwqLCFgDvKPW8hJTrS9Ksdb%2BqAglRS2pwNfumI9NoWX843zVyDpDnG359DMcD6jUEPib6dbd4u3Fk%2BMI4AL0w3kJWwV5PIsiI1i9vO061kMIuIosIGOqUB0S9UcSoqzNutjmaiEOMkwNoDZqLqvg8ye3VShNQAC8FviGROyyZhZ6mI6sE0t22kF3ecuQFD1N%2FMLtjJmeaorNOSLHseShzpMZoF%2FcFsRsNGVbnFFKM1zh6JVdM3kHlEYmwsCGtqfcmhMOKf59okveJRTBUpaXA24kAh8ttP%2BSXahIZa%2BWSW4lWD3uMKjImCVgBHfsmQkAM69t%2B7e3nzIZn%2BvZMQ&X-Amz-Signature=0273f43d089398542081850929779326ba98e014cd273552c29703f25ea097e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
