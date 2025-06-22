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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZB2RKU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm5x2s4KzfGYE2brZP7KVpmtbDXdcW0oy3GGt%2F4F2MrwIhALV5R0ZYKh9SAJBorFaevA6497Mny4s0cVFaOfaqCtTLKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy9SL9Z88opaH3PwMq3AOC84HVHNlfb4tNeIfeqN0nv5EXHnplAQUBW62WgFkWf928j%2FmWqHUfzQHwgGzbcaar4OrM6uK4wesUTumNTf9L1oA0JAiolPiDAVRvXDrgJc2B%2BKDHKEgfyBWIsxSZFGX3Tx%2BvI0ids0dedF%2BEB1LNC0yAZHaCWozVBslRrlSCOpfoBncRsofnV6IaRfkbPliRtktXIHQYWkGCDeddJSN66%2BREexMnUldSaphrB%2BxpjMR%2Bkb815Uq7%2BqgSi6Ji%2FLHniGQhzWb5CU6kCenpU9xPxgG8TPXFaHZ4MxgM5VDeKsyTM6vc2UWrMJzCPrqPeaHwDj4jwCglbyOuBPxE%2Fnu4I7799NqFwVpNzaWpuqW7NHRt%2Fa21yfetQd15dcJDKbNBqFfJnDQAB4SKYNHv%2FFWztqB9WcBrjfG8EwoPqXp04wOgzG7ByUGDX10YUMTPp6l1Gz2%2B%2FXbhDuH%2FXnNyJSlEbxP4owJpNr6PymuA77VFDJrUdjM4C1BVKnhIMdDnrLFVInMhGU5cQlvYDXEtPHWsfoo7D9uUsDJcjcJEpIUhJ9P9e2yQgiZki9169LH3dQ5mjJFddCecPT0SD3J%2Bl4pJst783MOR%2Fit%2B49se23y3ftoPhMzW%2FVAtf9DoyzCTq97CBjqkAXwfXnBwUaqHfAhh02rYvUK2Cs9eqVs%2BSyqhpngr76trEwaW5KNkm1RALnQFXfbZGJab18yqaeBdQ%2BqFOx%2B%2FT%2BMKzlX1Bi8KLaSLNB9ou%2BCU%2Fa5lcHFD%2BO63PrMFT5w%2BMyvrpAp0%2BG62siFJSVeBbp28H0Kq3vJy3A6Rl%2BkeQprn0GafNnA93LfQRV33Tw%2FlF4ZBovFsGJ7g57jaJ8lGONouDiJq&X-Amz-Signature=c516376c3bf0175106965d54076bbdcbc88191d94601833240e017d73f9c37af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
