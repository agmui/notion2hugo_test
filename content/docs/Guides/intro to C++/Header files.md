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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3BM3FWG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGGm1mYLJLJDaIT9LaceH2pV1VTE8bgE92bW7Sb%2FWu9iAiEA4uJlkdtoANIA0P8EW7YDofv5AU2zk1O0xcX2ukNiKUEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNCJzZBTzLfuef0f0yrcA66GRoPxmeIBJDZXnMQGX2n91iDj5cJdp%2BaoT9q66g0S2D%2FEBRTIJDaq3tMC7W9%2Bq3CrGIYpAFpM4DtGSQe4XjaXAzwTyjp73sCGXvug2bSH%2BHm2Y%2FBir%2BR73IxFDFCkNvyOwvaoAkkjGMs4qtHXmaRkpV5skdZtpbW3hQsgSIFN6UmFK0vV3SvcrWeYWUPFLkeUP5I%2B4dC29s3lEOkhqvvIMxHZu56JSNvsKBaPSK1%2BLnls52ujeoN62EgfvzKFQlC0U2ClXQyaitB48XSEt0PT2R40yLqnuPbWEauY5UFieAIs7pQWcPL6w4VOEYJgHgQX3ho9CKxG9TmiuhNS3UUiUy%2B6CF5v24zCcwmxM6tr%2BEis7%2B%2Fgr2Q0YOz70IZ4z2NvKHH4y%2Fe77YKeNIBtHBU8hEmYZEINBoGhRTN8%2FEMsHx7yhGWfhSIhSKII9UzOfHbcTrSGtNEnCJdF8FoFGEEhV%2F%2FOZqj%2FnjHor2F5CQN%2BRTzTHvcULA4gQTpJTAbePXItvidBlMlvWdCfbE0wg6Wy8dvMRyH%2BEJB2LSxYXWWxRnAVxFbZat6lDOxQT4lo2TBHA1B3qVDwpx27ffHv2og%2FD2dqMSIq0wPg6U5nErrd180H6AX%2FyHCGbo6NMKSj5cIGOqUBDvLbEii%2FnLmCoqGXa1DkjYAzMkcJWGOeoiXZEd7XsVVp6Mlm24yOm5Im7897a0ub9bmpB8Q9ot3PMgl6aYB%2F8JfEdQbymprP3CJzBG8px7WgRYSxbJAjvTgkdRq0ylMuZ2OxIfWeKd%2Fk01fWQ2gWnkI%2FnzcrAAQ5XdHv5YBT0D7Z9GBq44cYBQ61c1Gm3CnCb9EXGDew%2F%2BaXLEMPFpmfDbdHCQwK&X-Amz-Signature=c8a4203bcf8e4924b9f5b14686a97ddd20b63853cf29a93dd6f638867d2e72ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
