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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLQTEVO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGdfOZ8IzVrJ7zzzSAAaaiJW0zA%2BevIP68r9aM%2FrqShEAiEA8afXzxf%2FCE8jsZx2CSVORodFuQka69T3ryN1h1kwHPwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDoj%2BIZf0oiUxYipzyrcAz22eEyyMhCqxGE3xLPJMWbSujf1wa7BNr1El333LBABunt0XvkaLWSt7uGc6bcQHAtGGJI5cXBUnK87l6CsxrAPu0yy0BKEcHLQOQh4AErrP6mim5BzE54pQ4ia2zNansYOkkONaftdtlJbnZOaRuaSExbvmqW7DQ5CbbQBcOcOdpwAxFVukHZMwMo82IQ58CrJQP%2FSqEH1daSMhbxOL23TH27X1K85vdbH5M8Bs0EreHSaYgB00AkfZKsOe5ctNXShT1QBCJfv2hnf9fPxbfvbJaMizK3udltmJ15X89CvL9Hc%2BibQgi11AQHMld%2FmXMxjVKZWeLU1ydcTNfWMaTdhhYy7RIYc%2BwqtPHoW1G60LTS8QkFZcWf6bVo1dmHrhanR2L%2FC146vkHY76hvFfC2w%2BjIaBF2X6Ohqxqxhk%2BLzwPzEOpUuYPmBQTG4Xb%2BdkS0Xd72OneK4dTWlQFroWIzPSNlkR5OOcFcbA0CCTYSJ7j2gFMid%2B0EGnQ5hcyZAM6nYsn4xaWeP6sNEDb7GkWHBHcFbeecHVllRYmH2Yd9xS94XEz9yC1%2FMYY%2FzLNVukx9Ogy12n%2B6NbvwpTGRRqq9fbZ6b5Au03PWU9JCUXi7kX%2BxLAGQtAAEIobusMOiCsr4GOqUBW6xqdCc92WWPwwzbyai1SbxTt3ex4gW%2BtMkvkGraYFWjotLIbysIiQArc0uwEdmJ8Sh9I%2B1FoKm%2FI4xHp8%2FHKjLZi86MmhtTZ1w3jqbMoTA5LKGJVSAUMPCxV0a8pShBJ14FgJSbwS%2BTEM7o9G9BW2hGFZ6BlWV%2FxtbQ7y11rNq0XyCUzt6RAqDiGFoqX7wy5yQVNluOtY4Bj%2FIxXVJmhwYuZzA5&X-Amz-Signature=3a8d259cd116de753d7cc407cbe7072f3f873d185c7d4aa6efe7e4eb0b55f4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
