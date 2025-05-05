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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQWOMN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbTneal6AeCksRqwgUS0kSs4ONrJlE0jbuF%2FZWtaa2QAiAhoNtzW5yei8tvxY1yF2qmkQ9x0WaoxN4KW4FujHYyZir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMHWJr%2BEzG1qbKOGp9KtwDtgEn2yAfLYdWWQ6u7C62EamUK%2B4oRYPAGm8R8c0eZdTWBTnLtgEWMoFJtNI2p2mlomK2oyjtSGSD9tL3%2BBxRm3TDraSoC98QXfZgIGgmaNiDEsoK9NMm%2BUU%2FdgqkFTheBRXWt5vY6HdQdThw2J00o1KQ55264J1rdV472zogLDWURDDzRlThK4dqCd10cQj02YZe2t8P7xzMvY8MMsceJbujgZJfjL%2BG133t3wVBW63tZxLIl0mWyGHc6FLKfvk4RbdBdy56WHzTq%2FpsOjLkKgENJ7Ga%2BCia9IdrDdTyM10%2FpbQBjxRBo42SHnSGwHAK0ym%2BkwZ9CufdjLmQWUV9kd%2BpCMtL00RzQKzWAFMknGyg15Suf4LFi8Femo%2Bt7oF1Mg3NUYYQCqZGA%2Fvgdh84s0yRwMpbdVckJ910TSOMxARKB8OTkS5ieNgCyyItrg%2Bpmr%2FgXTokYy0ETag%2FdFiHCrBnvSGKPjvLvvIb92rbJDIiAB3mb8z8ILqr0%2FkzlTYX2Tu0envBcB018Vnym6XhXChpktxygv5Nk0ptuyuP7XYF2fHpZ6SvUzl9fXEciogm15bypiSdfyLpTO8AoHsATMcxWNSS6EFjNQJbQfMnkLESnlxcziid5IxM46MwqLHjwAY6pgEU3az3T%2FxxpinPhc9SuCJJBJVDnADWG4gFZJ0cLD%2FL6u02qeD618QeKyqPImu%2B7fIKdJv3qCQQWXU7ar8YCPS2EUSfDfDvIf0JSLLiAyzsEK%2FQviZKlvxfc7WoGu4kZ8iLNaxXp%2B3a5bmWws9a6K1LtzvtVTyhPX2VDiZg%2BRmbsubIrNZX%2BGZijPMg6M5xlalhQ%2FANZ9VUsURuw8Nb4Ya4ycFvw2ub&X-Amz-Signature=890ef94d1fc1582e198fad0db8d0df2da46cc8d201d3ebec731f82ab0613e16c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
