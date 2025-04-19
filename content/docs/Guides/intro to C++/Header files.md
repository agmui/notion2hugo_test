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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCAQLID%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIH520GvqpcyCTrVpQcYEutBCLCKBwPvfKbahzrJfuBegAiBIkjobIHMhJJGsdbZo%2F3YpKeK4RwVVmMGmHYX5ZvsdJCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMziYHV5gTn0LBkQQWKtwDHP2oX%2Fz87l4eggCD1q0vszyU%2B27flo1%2FoFLJwCRTBFQ5QdjiNopydRMHNdGvqzgCX3%2F1XmJbIBOLGuFjOh9tTCuDfwmiO9ouYqYLwwUBf5d9BmGN%2BjB6ymWhhR6DIWruzsdMtf8o4wwzJWYaxNFxvMck7xFzMHc6VVddCbW3xDjAu7pBIJ2I9N85yanO%2BCWia0zicEjit5glQr0ttRvEeSp23snzTl1vukimOxL3EAW%2Bsge7JPjqvwAbI%2BdsqL0PBKY9oFxkJFSTlngLHNsqNiw06%2BX88EKppcuQWS8G5Zl6l3IvznGzlWgcCgMH5mGtQjkm22oFCBdhscQftpyW0yvF49ThyGweiQslHNqS6U%2FLgNcm15IHDoAQr5pwTuRhq1feX99QXUia6lN04plsA2n6dlipjHWPIaZqBTahYLGTP57%2FMN2AICnBRU2mC91LYRzL5rIJ2TvSHRC0AkRitx8uE6u%2BhtQ90bn5GwcG8DJn4ttWX51LHHX%2FPtIe9ME4kKgh%2BWGdo%2FOPDj1me4hBji80O%2BUJaEhvXStB3iEYyurSF93z6XfMhcwFrXqP8V9pJ89crjmsB5vueyeqdbQtbddU9HWNFfqpoTmdPMCitF692tUi%2Bhg2opC0IWswmaGOwAY6pgFaEjHkSR1isYCh4L6g4wLR%2BHWUo8hCYMXqS6maHD6LxIbCG15pizoxGUJK6%2BPrGIMNZXOz3dxAzWSFeBvIp0cVKKPFfiOsKkZfa0qore4Xrg2REkQRopCxDsCo%2F1BQNA%2Bca41Visj6ogwIMVWBpqjwTWQkSUZgTyUHGxIYI%2Fkn1WTf359HvGwR5iIL1Kgm5lvZwBaug5z3wkMZwr%2BY5RnsM64uOxC%2B&X-Amz-Signature=f1b5d4193f29038b69fc34b337747f12cd0f2ffddb42c5d0b165eb0f3d095c23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
