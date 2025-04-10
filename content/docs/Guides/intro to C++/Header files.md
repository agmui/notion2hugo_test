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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2EXW3B%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIHukxJcE4UE7retHnrbImliQme50b8pnGX6wVGdBKYYmAiB4y%2FusykNlsC7iHC8ZKgIPIRPUstoXvy%2B2oO72lN9q4iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QSYISXz0WkoVm1HKtwD4u3IPn2kR1jmfyA63%2BBjz5hWp0Xrqz5X0Di%2FtQ%2ByaYt6DrELYZBM8KQD05QE0ccf7Gtp1Ez8Gz3ohq2IBf3fA9G7ESOTlME6bZwdstFqWdMD%2FcUILI17aaSPXwy8DBI%2FyVWeV1qIDTVaJKiag3Y4uAHEX78gUnhd2TEug3BbfQ1I0KPPwNJVdPfftgAheTgxgmzil6dN%2FOEzY63LdgnGVLWbhQRIXt3eAuu64sz2A2NX33psjJwofGuckj1J2egT%2BBt8NE4R7au7UrSU3Y9gFMODI4avQfYwbotNUJgDs96iLRy0GxyKkfWuUxP%2F3iX797qx7lxzQ%2F0AF1U0IBhn5Vr6qydY8BGHIo3o%2FMVMQCeh4x0FJGr%2BGF%2FiQv0REt1c1KrzFCSYQy7VM0E2M%2Fb6i%2BA8xb4yL9oLTzhxUQBSESLRyOqVDygo1CCSSZMbckzAmGZ0CwK1auNV4%2FD0C7jqwmsH1vthlK3j6JwqWjLi9ROD%2F7aRImUfACwOlFC1YMYGpAsES8BXh8GplqrxyXpTDj5mchO7YRDSiqiAs40NsbD8LVaciSFa9T0FaYN5hP4jGVJNPQNN%2FDvMflhZJ7SjamzvAiqeiXDax5YxGIWjU1L1aMD1AwrPoikFDPUwobHgvwY6pgFghOFmpXCsvjdXABEoz6WzqGqOkbOJKlEnEUMIfLJegFNBJsu0AWmXSF2hog3USVdZT5J0GS%2FSFnhI5Tw9JbMzm9ubGnfXKZTogTTb1vO42MFYHxGRqQDuKh%2BV%2BGqt9CjSgNM57olhKFNIGivJWCI01F%2BhIXY1ShDzhS2FaL2iKq1ZMx60GRvhI3Gfq6NUHjBjtcjiT4ylfu5Vh3mIX9xxc1OfX5jN&X-Amz-Signature=5b7a309d535be9b1f958fc359621c932a643096beb388348bdf1b7e49d46e07b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
