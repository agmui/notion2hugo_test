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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNYMVE6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBX7RvX4NFURdsNZIyuZ%2F1yYOggYgoUj5vM36n3mO9R7AiEAsCSiLDl%2BoAqIQa%2BbW8Z8T5UABcwU7EXo%2FjUA44edAuAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB1lFohhBxq2gwLlSrcA45Qg3eNuQmwqnugyJ4kgDgPix17gWLTbPmG%2B%2B1SmNof12A5TKdM3F3iw7rMVHFLaG1ELX%2B3wTRkpeBuM5HyIDUvO8krmZR022W6i4MdAdIxPVnN1X7ZHh3QY34SjckE7AtHZkxqfJZgXrQw8xrbcHRm7EhD6MoDfKA%2BrEo6HAOI9MRU%2BKvhucUnIOmJgk%2FUO2g28OGrqPNNQ%2FcToMgYza%2BMs2f4O%2BdP35qbhQ05FbLhHwVJb6y8iH7Thw5LYmPQoLz%2BFd%2FTzWiblmINDzL8HO5FjaK6d7B9%2FDLt6RT26orGZSRztsdNJkxcxRbfSadJvqALkYc3WsCNLxEJQfdnyNmdlMud8teZpXMWz3r5HjTrB1JIjOxLjHCC1Lk2ueW2o9pN0r4oTGoV9sGECytvCnfbHaLS7ncjhAKHiJQ1KOyiNu3d8HEAjbr4XEojSflhPUYBIx4n4DCt0YHKbq%2BrUQi4eAz9MMnaoxTLdz5yzDyw0EwB%2BYkEgXAKP1EqRFXslkTW3j%2BglenQiQ6VJ8RwH1EwzXwo1ygsxPHnBO17LkwJFZhDCUJ2peaUoWjnKY8K2aGxc0zWIKB5asWlDNwIq%2B9zOpKHNLJzeIiprYTDCqrxLdIK%2FQb1w4da8z4XMO%2FP6MMGOqUBxcE6BT6Ngsb8vCpAzE7Ezu4OoB1TmzwGUtYV8xy6Pzs7KXn7eQQHMAUHyc5vmQ%2Bi0v4kLaB1AvwesKfrV5fIo3VkfUWFVz%2BfFp7L64lP5LE1LGEUwNXDbjNVMxcDluPWteLvMnyUwDxXnHT5ZO3Sc%2FjkscGCSlRGMgVTHV%2FLeCTU3nuihcfVPUdE08ybJyIH8U9XKAtWAqo5yzDNDtkUCV54d14H&X-Amz-Signature=d16ef21985c8912fe233387f4aa428de41f91b0f3e918d750e2b6522e4eea5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
