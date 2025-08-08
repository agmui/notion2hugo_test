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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXQ4OAP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGnHQ%2FkMLFpNUl8%2FRshsHNsVVE7g8MzSfWUbEJrZLlX%2FAiBf8XG1KU324tiRLsO9apF0RQOk4NxS1NBA5pyIm7aNZyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtsoBM2NZQ9kf0q7BKtwDKpd1Uc3IiLVv2UClDrFxSLJsXEDM2IFVZPZUky46VTNruZJrpTVp0%2Fpkg2tyMjuurhyGiotII9JJOtmwfohxF6fPA%2Ft2K4DdouY5%2FhutiaIvlRuBfbx73Hf9%2BMMYs22sjiTJiHW7e6%2BGXuekJQjwnuzw%2FchvnmYO4vOLA4T2Mjy53lnlFmp0%2BqppwYPsvPun4MB1eEcuZTxu6lr0efCnatdK%2BB6iTXcwp%2Fmnt6AXaY15lQQzTGdbKaY%2FILTmodp6YPWcAMOmLrgCegO0ywio7h6Dj36f2%2FlC5ozUXBD%2FPFRLFApei7Sh0H3sMTzv5gquuZ9w5tmvAnL%2BHTSBdQnSSvxoEPo0N0f53BBk7fH0OYARqFQIeQxngO0IHy%2BAmeQDARtps1LSR%2BH2gbK%2Bf63CiJwooCI7p4ZRFG5H%2Ft0ym%2FAY075bCvfBCRjQt9IB%2F%2BLVMXgRZ912RwuNfiiX6HsvLxuHr1NtmhpAy0njN39%2BwzIphWwwtSL1858lKTUTBi8nUiQMU%2BtI1NoN4%2B7Vcs%2B%2BnZ5Kj2d9iJ4m4GdYZXqyw3Y2ScwLx2u7CHJWlV4misnSj9DFB1T%2FE6Buhzqg%2Fc6BfwM7IMbgZkJjQQG7mmewbgqniF%2FENC6aEKXofuow8N%2FZxAY6pgE4G4AeFVYrFKRgpxgKdGg7ztBJjz6uxXW2jlpA1tigD4ZnSFM%2BPFfGbve%2BnmVzoydeP3Mojsic8QnNI31I%2BZ1NABwE3KJBNDhIFiGNK7wZjDkdwX5qhNiP1QD1fAlQzH21k34lT0PwePDbTVjZpwruxDJYzA82S%2F3aHUUxhTHehvxf4MMaCNsuO8jLCibHaYzab0FCxytn6x15q%2FVTLcxnAYyGaiLE&X-Amz-Signature=f4555f99e169ec120c8f3ce6fc3fa937589794022da53b10e19edf2ca4490714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
