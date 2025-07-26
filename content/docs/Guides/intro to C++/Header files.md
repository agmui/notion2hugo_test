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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGHPSHI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBQ3tWxA94XDQFXB0UTJ9psvI9JSkM6lnzwPPElaXtW3AiA0Ms1yZBXfiJDuOe5lirG51aDRKd5YEzWydP1TRz4r5ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMPguyMIdyO2GtsmeiKtwDTt8LEyJ%2Bn3OX7JbBIRAM7mMP%2BBd1OejAz%2F%2BYJyksnDH52V9fr9EoawFSGno21Iawx6U4366moAcqUEeegzin%2FW5qsUOYDpLz3AmWBr1hMT0VQrW5z%2B4y7%2FKJKwjfzJ%2B2g72WQtW4g6wrXpb%2B6S9vSdvIuKzbIsPAKCpi4DJtePwGvho4X9G6AQW%2B1zZscGsjM5v8o6wt9PAOU62aExBMx3VKcQtwdno0QNzFX5FOSTh8a6F4JI%2FAo5aYWE6cEVBK%2F8dcLvpxH4Hs6AZ8SVsuRKSwX1jaiv7xD8Z1Y%2F7EwWpYDkkHlfXPInawLcVB865XGpXWy3mB7NyiZ%2Fm0TzRKwwEEtjzHsee%2BFI5%2F%2BIYddK%2BTID%2BAM7053mMLswcuik32oHN0CCUh%2FoFOXD2scvuZbz3EhHzSisawzy%2FQkhsWSrqa8h4McinkmU1VYoeKLIb%2BpBUJ8QZrTNaM5ham8aAz%2FDBJAMUdfpR%2BXCvaFeljYl2fdWySSbiidBvGmknypANYTBo4T9fpvBE67RRkwfk49vU9d7psrUvuiL%2B9AJKVkbT6W769lhJWYx8tnvOfEjynI3wYGGLdQrQwGBQqn8FxOyW9KEddvhpQyKgbFgUGJL7t8bsfp8peRoU%2BD60w%2FvWQxAY6pgGAj%2FDNiE5LZsGvK2WW0ouM8gvzWCmq9CWVuIDA3VaK8Bcm3cSi383WavCrIdG3Gr9qD1G8F2vlb4ot1CRTYFDpJbuZf3y8hndQnC504l38BACB4XtGISFLZu3LsZawUBOhQgIL0LelIrvmXnvLM4PPF6LIR5luszGu%2FabMVgNeGGOQTlShYZk4AqYw%2Bz%2F2Oq16ZkwBAI4sWrrCFHxbRhcj6XEb1z87&X-Amz-Signature=d5d6a937b59c9cab789d454bc19d46c0dabf6fadca5d00bd3a6062c97f034431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
