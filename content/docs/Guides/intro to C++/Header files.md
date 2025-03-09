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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644V4V54L%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHxwgVFpzjYlniT1ABHByBeRJa0SeFUkpp46vPlECHINAiEAlxThseuuTbQVFRRK9xd2%2FPWTY7ACojolTG%2FHMhOBBKMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCxSJACbruLxOknLtircA6nPIrUveubk1vyb8e5oXxyTC980lPTc4m52tC2FxA%2BcYFc27vgCxMcPpxHR%2FqpnNrjxSkT6eEaOEzOiCA9pwVY%2BE%2Buds8S%2FAkMFZGafHt8cYHljI4O%2BVBdjLpVa3GZ66DL8W7kghvIQufojPVV6Wq%2F7tNoYFPrtBEv%2BJG43angh4TvM7yC5ZSGmc88APnvNsfY7dtDj1i30TZn87QDTfCBe4w0C2cgNgSSJMrwvaIzp9bddqDXm1hnqFczxVyyK1o50kZ8A27TClVIEKrMs%2B1gqwMgI6RDJpIiKEs7gOPsyg%2F91Nwl6%2BinPIPAaA3Ml776FOyFV%2BDiRnndU9bRbN9gKEzT%2FTi76TX1fKYz0mAn3adZpjGtad9HMwI4nlzzzot55VpBAYpeDy9YDrEqc8A9diX9AXhbXwaQ3yvxC1s8l5AYxiJQL%2BJX5aZc9oAeVdUZGOifF6oRy2cmzNhAwKdifiVCbBDZhTi0KbBZr7VebtGgeTC1JDhHObgDuYShIzqpIlF5RlEqmDQM0fkViS382M4Eh%2BfxgSyQBGm09dgNcJNw0ce3FONz83I3qqsji4u2y%2BigT0owg7hfyatvHjkPn2VFP3x%2FcK66I2F3RyDQl%2FAveE4Fu09bbmwJWMKDrtL4GOqUBbChC%2BFz5oaY%2B5ek3%2Bk8auKpdOKL8Gc2MekOAOPmxpFnLVjy4P2EKqUWaMEb39XkykD6MtZHKHAKtlODDmYUFSfYdRFWPh5bdItJogYmmririrekucqTytEcdzkbpG7lAIieOVNRwWNwLj0RHHBhScI6oly4ih5fcNzIZ3RLf1R8uDW9W2tume5RtHHHGg5mUoFytobHHq708DhFJ32En3ZRYcrd2&X-Amz-Signature=fd569e2c75f33f7783ec2fb6e94bf04d80684f06907c477abdffcb469e476bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
