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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRT4RIA2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAh8nwK6QsB7uao35ANcMcr%2FKBPyngOg6SBeUmy8tSNZAiEAqGIC1jIswajS0dg64k%2FYxF%2F7ZUMukipz%2FPNQ7HnH1FkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5J1u%2BgM4lEwNxlVircA44OAE7QmKeeAwP58YN6is%2FCg0WO0ZjqN1W%2B29otfX3P24mEnrfL1Un8ym0UCqJoTZ0NQ7h%2BE7a73b0MZRRwVt5G3Tifklm1niEpQyT%2B5q8q6IAdUwcFF%2BVa5mVf3N%2BB52HrSCJT15P0vLAOr%2BzPXeENUHdA18N%2BZemAqNcqwoLm1n35nZP9pl4XTlNDDC%2FGSoSGFr2R9ArWgNYvFZiq4aFq9X07aRGHOsa05m0Adii5BYI7AKxv1xUjLzIYAECTzrMTA3tIqYH85LqYEx6U%2BnpPQ39VcowKvJPmHjeAgugngB1DLwei%2BwQR7RxtGvfvnaBFT6Lc%2FwA3NO%2FrKBr2LDE89iL8gA66%2B2lafxHYtj1VvBgb8k%2F%2BuqRRSKQuSVXHXnpk7mY1ftar66Bt75yzfLDGW94Bsus2PCprQ3o6tI5lLeha5aWMKH9T1gf3ftaLnIQbG%2BPcOMfAVBAtnwUhlbtwS0DBLeLO6R5PaMGtI0WscrGpU9qei5o%2B6wdYxAobGGEYGgJUMT4l3IQHPFr5fcX2uNqVtlFMk24i2UYsHiWPxQfxmZA0rVgyskd8d%2FUIUOVHDIDcynFauELwsZma8RVhkPlNUml3YyEOKpXU6YUallzLvAduX0W%2BoqjfMM%2FalcAGOqUB%2B6owL%2FrhdTPo2TceXLZgYZl2HExsL8XXmXuIi0%2FHzh8O%2BtxzGdzp1M7U%2FWh7LRc7dcWGHEq2E7BEozok0Vmf8gEQ2GYCpsLZWdopz62COmbCHLPx1Fyuc3syWAX1hP9lmzkgKY7HsQ4P70y228PDyzAxHnb%2BPuwkVWk9MPjYdZvFhCPaDOHirpCoL6gzeTSZQt8jEGMqoXf%2BPNC%2F%2B66c23d%2BcxRT&X-Amz-Signature=fa4110047f32d81f222a444bd9e33fd31580ee059b583f2e961f9559c5e86854&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
