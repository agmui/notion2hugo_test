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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQ55TUW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5iUdIVYBToZ1rZZ0CwriNEpazaW2iYhTGRpHyDE0RagIgYpFK98uLHw9QVcC21OVINmdq4GwSTb2rRMQQYdJdd6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDdOe7rcs5unro0ZbCrcAwbQIRQjaUa8ASb5%2BLmUeazRRvxGmMk3XL9sgZewHtVtwnGPWjZDwFpdkYr8jfyKd7d7jKrn1h3aAyEgNxj7MekDr5%2BAeDiUO10tZnI%2Fnl7MwgyhndFYadd7JctzMN9F2ajhh8Zc0Pasz65YCoobrawTVzhRNVL15QnheN7xj0vX6wAhkStNVqKp1IKTAvKdDedl%2FB1OcwdcQAjcZKfBNlUTxDY0WDY2sdI4t%2Bt3XfIkMfE%2BqbtVOEIdpR%2BhWMOCieKUZfd3llOyWFLc2oVJI4ibiMsp%2BwkMOraM1TbAzNW2ewfVX5qCmMY0vk%2F%2F9KhE5VCPs6nGncs8qlkSHzVj1aoYZVxz4XBpF4JM7NAkNtyfrIKO5nypVx3fSSqs3yj110tcn%2FKSpilaD0B%2BtPvtiXg%2FnPA6%2FuN2AOos3hzwnPKxu26eUL%2FEPMC4ZeCIxHeLxNDjPYufEBaR44emcDq1BgwqTtwHPVJDO1fzyFZ7itnAfBowPmTei7f8MnY%2F0oRYNlHzhFt7pDktGXQnCoOC7aT6my35I0Xaw0s2ndaD88Sd75kwAdpiNrVkVgpA0wNUdKOov%2BwoqyalydrwVJ0xGha1sO9QQJJe%2BG%2F9ZeFmnezN4nvussjt9HD9K8GkMJSxpr4GOqUBdvV%2Bcmq9rIEGwRWKhFgMCKPuabfym2kf0isCCa6ihYczUq01FWIAddFSivqT7rASa9nKKsh2b02aRhnMThjMk3mCzI8pt5myR5NxEe%2FlfVFDP7g0zPYYEq%2F3Ibgqd%2FqfC8vr2KCg%2BlOUQqtPD0T5da0OLjCKtLT%2Frd4j%2BmDYD%2FTDd7gOBxS9cW2k%2FttGt5rjuJRidvvh3N5JXJPAJO2ug57IplrT&X-Amz-Signature=ab37fdc92a0d4f80328ef8e0902c44126fa2aeac41266c9d61dece3fc6eb5bac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
