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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZNJRRTZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD%2FRxniFx5HRFQhZvEfSzxHZeamuMaC9gpYljxHwtYTMwIhAO0VqjlTnVlnS%2FMDm0D3UU9lfP6JHA7VxEKFC%2Fyhqgo%2FKv8DCD0QABoMNjM3NDIzMTgzODA1Igy6lMBAwz2s6PVyngEq3APiOfGH1Ey9dDqajpDpyZkrOVqvwUPG1yMTDJE5O%2FQMAPHV24yV4TqoKcf117dPaWLJnPIqQEHXeRJRepctq%2B8HsULEBjgqk2JV9a%2FvX0JDKm%2B%2F1J8B3%2FEiaPaBsz3M8CnA24qbfJNk4DaAcxhHFzpBv4YXtl%2FB9d67YtYXAEG1K2%2BxUSNT2jyV20hOu8zXAPGpucZfEz1JGA7j0B2Nwpr1PY%2BGxo3XomzwTEA8LBGYj7wOmGwazK%2Fo%2FGimQpadlOcawqq3go2iAaYCyIqn%2FXTKwRBzs1uIaf%2F4Mt98BGajib8XdavMSfqNV7yX8jLVyd7p2m2byDqsHPEFr6R75DezM6mi8sji%2F1vwDgjGxFVnp94H2pFgMTwXQq2abWABxr5KIfQfJK0oF1%2Brth9igJlGnDFhDouXkLv6CnMZuKRoKf2VPPsBcNPKhX2u7z0GMTrefCtAIZ6vQ1WewUZA4lsu9BEEqFrQpZY%2FJ9A6egcaJ0zeZ8BjLVqENQCbt85uyjvicPdk4ZcNY2uDLBH6vgNXRP7HsdicRQb1K8ejt6TKdfE7GrnSnMZXGAeMvCGLiRa7cUtF32Kj3z1XTmyUOcA%2BDIwCN3NI%2B6Z5EQnIQkviIX6QOLgn3Dwfw6%2FTaTDUgrnCBjqkAT8Uhnqx8bdNPOCYPNV42TDv%2FqrvPBl0oPKz2eBnMMDV0V8amo5km1Qo4dkpoV0w8I%2FKef%2FUriJSkWID8ouVB0PUi%2BIzy19A%2Bz%2F%2F0bstrAdl5yvKdDh268XTS%2BP5QqRvAXbME35ryRTxXCrR1ROOvWzljfEZVZWv5x7mp89YzIrRNOdW%2BtvL1J6TmT7SrWzCJftY5%2FO0lOzWBGMydRexe%2FZKRcWt&X-Amz-Signature=a48513441a2cd40d16c82a323fa29d40b990a86b88ded842b2838791fb6da20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
