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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLIOOP3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyT9pSyw7HnUqvQMgfFwBCGtYheTsxS2UpCgFGSTr%2BjwIge%2FzFEX8Ausz7YI%2F4016M%2B8QK9dCXPa2yAK10khmatzYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjT1msrfYKj3x%2F1%2FircAya5JXN%2BbSOeju9d3NJPkVF0NImXEI%2BRSOX%2Bt8gbSiXixiEHqVcJCRzVX5uwHTB9wgbRTbvbootg%2BNOqR5727ZlqZQmCBart2sHEfExWzsIqj73SF8qkGqOdOAajWjpHxOB2lkSNSNRp1WQv6m%2BuRua6nbFpSAXEnKAu%2FWD0PJG9z2mCxL2hBiabHsy4R6h7FqtJcZoWc9vQc%2B7NAUs3VxS0%2BgbZQAp%2FA%2BMHt40%2Fa6P94%2BQiEZe%2F9iBZvEKDGDc9INydiPXAPJSpjj89Od3NoPKk9L3kBDh7zxCGHJoKQvgwPBgUG9iwReKnOs3TmFdyHas77OWofR4Vf%2FYGis8pBMbijKBIC1c%2FzrosaR%2FRmrn%2Fgmi9YAspfiNeTSl5N5Oi0DTZDQuJilExmRw0Cq1Q%2FzI2x5yMK8U1K2TXOFDjaxk2cE6mIzSGOh4Czj5gQLC3BpSkWiBfUAKHQC4eujP1YPLK2UvRsWLFALyIES4mHtY3G67kPIWbH8LMp%2F0HvuI3uQBFqwC044ZnDuz1rB%2B1BP%2FkxFsjLDMfphQwlcpyIk8Qa%2BqSSnyd5X4%2BN3WJ7Mxn1LFwCM4RlPAMCfYKGW8hFc9CAhhr7PHRFbIpNSxYdEuP7szX5ynLkVnJAolwMIO6n8QGOqUBzSNduzsZWj875lYZPTJLrOIzztlrWzM2JhKp8skcqwTup5um%2F6KSLOuuoVZYWzyG8MIfe2k%2B05pPMRcP6nb5bjy43nxV6PnsNxgOyQ6fq%2FIwVrv28sAoECU6FZMWuVKjMdhCJG29b20IDudsEd%2F6mdbMv2nQESeEuRLKyIRZQIO6rcHRg4LOCBO%2FC4e3GtTAPSVAI8MhAiK%2B0cX30udpqctdcsaz&X-Amz-Signature=0a686bb618b9428b7b37069a6cd5a4bd55f6f93d5feef8f70f116b9d90178c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
