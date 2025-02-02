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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWOPRZ6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzpds%2BPrJ3sOjzsKkpJ4LH5fg%2FJU2%2B1ZIGSZiUUd3gzAiEA1%2BOJPEefkhUWltJ0YRyHvRlv1stPZsEVQe5X%2Bly4KtIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqAUm9rK2af54EzEircA5QVkjCOLfzcywLUcVixUlWKosROIQpEa8bVQLY0yKC3d5Z4IZ%2FVp4lFvh83XoO%2BKDu1w7ugbx3wPn0c3%2BjimQHcfUnoR7HNuGRRfLuBNR945b0PSFz0IcQrWOnppo4v758AoRsDOjcZnsypCQFwJygIwf0jBorRBUakPkwiz33AjrdFaJDXk5DAfZN2qZzoFuvT5bpDTaOo4OkjVisyKlHHrGO0t2%2FJ4LjxKwr52TzsYL%2Bn74uk67095b3J3sFsh9GI0TS7hqV6cDQ0rC93Fw5DOOqHVxvme6gkWq7VF705%2Fa2ejr1uKiHPjhreH%2B4wEGvX2bHaLK1D%2FQrInho4rp62jU1snk4gXbfMKXdgCUA7vJDo8BrbrLTiUOjck1ZE2Xk4JgF1jC4tGLzl2LrZwAdLCJDRoplMXPZl74pxAXc69QChHwcP8t5KVSwm%2BQfcElTz8%2FgLz85RFBO56%2BYAP10HWrw6ztVL72LCVYB9X%2FaJbf1Qf18tCltH1GQeL9moLbJda1kWgFWpuKKyF%2By%2F1UBe%2BnH9YPHt9cxU72M88EEoauGq5r4X9nHzde7pULBaLRGe6E8pwqKvDbcd1qJy%2BiUORFMTjyiQXoohZRnYBgFJ0TGh15e4ZdoBYyvrMN6g%2B7wGOqUBOqDXY0%2FWcmM4Jl5%2BB3RdCuhEENc25xXhn0Rj2FOvri8khIKkxtk7BRVIw29gjxPhhIl7OKjgaDDpMkCwmoB58Jj8Jb%2F%2BbDF%2Bb4p%2B%2BlmqhrEu1XSflZh3%2FkskOLsq9dKWMTTqs3pPag4GqunHutlN7RXneoHx5tWwozHRtM6CUoNaPiBOqfldb%2BnKRGy4EKu188cxI%2FeyGPtvTShxZNOQmpMMEduj&X-Amz-Signature=669ac2568aebcd5728d2c6d6ac9ce2b339d3a0229ff9435697076836ec2a3cef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
