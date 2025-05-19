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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335QIIAM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4CIVGjUpOMEOuG75VWKeN1kM%2BweyGCca8%2B5aItlexZAiB4ZOIGrI5ZHOVRyqc8buXTzJPBjxlC2tKVr9SotLs4sSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHLBa65ZskDfNeek6KtwDDZiQjPvfBwh4E%2BWQPDGpmQpzywSF4ooCliTDhd3y5yNTRCLlN7kpFlaVJMCk%2BCIKvmqHYEikh83wQIGd4hnr5wuHp5zmcyvIfjBUhpCW65ilM3FZwNOw4zlGWYcKGNEZ9qJ4zjlgXfADT%2FDKxGEQIhlLyG4FHc3EtBJaXwlzEwSddM99Xu%2FXzN9%2FWnym%2Fi6g0h26okJLaZN9Ed1KUIfXnVs7jENhHixn%2B0C5ax11mvMC%2BQJ2v%2FY1j1hZSR4scUT5%2F%2FeSGJaJCFVEj2Xn9JGMCPwHYQncdmOTJOu2X%2BMMHCXVlVZNFgBOakn1%2BvXIgB2QLHpoxIp5l1AkK2Fry9fZ0tukcAWO%2F2svnhwLXPTApbqICw58u9pdyhnywfjX%2BV9lq0aigXg8%2FPVXVA1AuaOMEWWIMy1Lw4TDNH6Ze7Y1XZ8luudbmmLey75RQDfqO98csu%2Fb%2B1lNXYhtl8z980p7c5woaGZheFA25vnJGOZTR2JqNuPHPACWWpB%2BBtcRVt9f%2BKNLoclNV8X8lErz1gF1NvjWfevqCtqYavY%2FrJ1nqe%2Bntxa1dEu%2Brs99qbvSXvFkL7kI0%2FkUyAIa0rAwsS%2BjZtOUUHdfSm6EMCLN4yJyjSYYhYBAzlpjU4eWqsQw3JatwQY6pgFbzzINVWHnn7tMCgbzqogexW%2F8vGzbAhIWePWxNvJj3I2NPyTBOrl43Nz3Pfe6XPcwwkO0RmBW0%2FJUCO8KP%2FxsYgi1dmnbNyfT49uqAVionHXvmKsD%2F2BzGLN7G1cuD2H7OtqFVPi0dxmCkDoLWgOU%2FRwiYqeyEn5clDpDvd6ekR4V0e%2BCZacGSvBJ9YoJfB5Vxx1IP02koiboah6pBo16RoUzlsKS&X-Amz-Signature=416a78818ecb9ac45a6777493cd79f0b39f4bf7f97891dee637dc83e50c8c6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
