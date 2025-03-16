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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUKE4DF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk4cGpFUhWCutxNQzZcfEyquOfYwT5F1ke0CwOPzHo6AiBlpJWR5bxnk95ohTGZQQZ6zXFTDprekq1JgIYPBMI26Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMLE0dLKFUsebAwj63KtwDJApcuqEPLJf%2FP4YEOisRVAn%2FoFRw6%2FXFteJYTGHFECR5Oa5O43f7wnNgFR1QCBQxZ0jJDmFk3vGU16zY5umr0GNAS0sneT3qx3pacC1t%2BuqQw24m0%2F2mAYZFBUSwEWWUJ9HMuMCa9%2Fg5wp9M0I3vmdE0LjrRkb%2Bx%2FX3USe7x%2B2%2Bz%2FV2CyDheaVN%2BUtWuK0TtU%2BkoBG8OWVdWwmcS3ddZRZ4sPvIn6ah7BpkU6lhi4mFGNEishuTdmkG%2FTJ9925uRI8fHuztKMa7CALA76oU%2BVrhZvQLwCKwALFz0ye02gs5yAw9rnqNAoDXXcHBB06XPL6I6ub7%2BMvOabz8jgGpOOgTXRvoBFhQERHdLNZoTeK112G8lu%2BAiDyUKavfT76t5wz0fhbJtPLTIR5M3%2FvDlXbIDt2IDovUc%2FdiQ%2BLnPpixJPrvelVV1gTM%2FIlgymYTN0GHgsDsvqYOlbpROGpe9LAPLBNGY1jlFbtxz8bvMFMDSQ08v30AEaBLIxmP9s4hIN6Ib8BkzeWHM4ztRpq4QcWKxrS6lFmIN9XD6RRKyHbWBFKNAKipQzCJ116J7XvokkQDyQ55jNxIeC8b%2BO5KmyyGohbVtWkIFH%2FWUCehdQ5Xti28JIuoAVLr1910wyIHYvgY6pgGR8kBaEYlJH6ep8KfVTXZwsvb%2Fpe3g6XaYd2aR9%2B0hQhGIHmjiuCw04AGLgWwMOxow5dZtZtG6cmXqWYCpmJsxEboyh7OOg%2F0Pd7H2uueq1kB4vlARM8EChfm3HFD7XPldo6jXOVOmUUtMR0L2ZfBWtf67MsuptESfoZVDYICe9xZaR4SnNddhWR6mffav%2FnTw0q7zPf1wny9dPI96vNSPl2tQTKSZ&X-Amz-Signature=a4fc35bf0ffc2a7c26a05cfed8ab6fe70b7c5df158accc59b196414d6db67744&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
