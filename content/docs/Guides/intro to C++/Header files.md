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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HJ34IN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGIPZFIBTiI1nyqhLKTYveSSkD33Pf1MoX0SManY11fiAiBesF%2FbgXkMwmkCIyicUKhKjql3wDs4K0K8SEeccfIgBSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl2BirC1OGIupnp1vKtwDKreC4auexyXnKVTRpGN1ohtPeCy%2BBwCv3fHuLdOqXRAKe%2BH4hZkAin%2BcSIWWt3rt6iUtzgJJCRFSP%2FAtho5fl0ntn0Nd2Z0V%2BkooQXsjsh7L6JgtAtECWrDDjQGyoWVWQ0mOCrTL9wqai8UAA4YOQwKAKKvxlW%2Fo3bZfzyDTv1a%2FnDK8uOkqDr86F2HmVIm6Ew7yb045naljMxZTnZ6eMtoT%2F6MZd7nucvNvTnt0BxtW%2BVbmPp46Zm1i0a8h9Rtkr3WPCnWxrrk1XH3OViRkxQc%2BSAk50pcdLiLXriiKpOtIEwhMvIJ0bsmbShtIS%2FIfB9nyDUQpvj2xN%2B7IIrIfjp9FGcbX7lb29mwkB6w%2FVXLNBnsQiCQce%2FOoCX6OCKMP6hOCPv8xPXDwGXWoAPmQa0ua4ZMtzYQvq8retpFTh12rdjibdfycS7LPtm1BBpAW0JcdF1jl5eMX8hl%2B%2FMWx28zOR3gevrPWFtAEt3EmdTLZS1q3NP7LZYw0nAANN3arR6x2VSZnwiOFhVkKlyOgkR0ABCsPWx11P%2BlAWDp%2B%2B2wAZvdtevlvEsu8COSRQ3a%2FhCX9frWQOd1748dqXC8j0rMzv%2F8DhfvmF8SteSB6U7TLLUrDr4yAnxL%2Bidgwh4byvgY6pgE%2B4%2BSl97I0kR0U4p9M1834pBCQj%2F%2FWv9EBKCvsVbbpiGmcmlYdNjASVGKyAur9VlQvoSO4px3R7gSoFvh3rliULTpC5hyjKDTjpDk2UCB8hFd01I50Z9PupwQJyIAcZaGtEoDf8j%2BhSkP%2FMtbKV6grcmxIgOSx8wi9H7gZHFQ%2FFCcYK6paeWghU7LMkDGe3lJUAQzYQculZb2WmkgNOB3DO84LYSyF&X-Amz-Signature=7b5228357ae7cefd1cf6b53f8282b2b20fcf297a07499c30e00d5c26cc0bbcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
