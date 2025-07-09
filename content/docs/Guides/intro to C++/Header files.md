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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZJTTVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2FnSNvx6XrBdyDYPK1rqQKQgGjIqk%2Bm%2FRscEMkkyL2AIgToIi97yQUs2Gii5tBj%2FGulMLapHSW4OJ8zSlHzTwTtEqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3%2FJSOWjJ9XjUvinyrcA%2B%2FHR53MFBYc7dikZzwi9kcif%2FSAJc9fRABN6n2KPvz9G%2F2SH%2FvvYRshccGMFlwzy9BJE4TsWC1xorfHAhpOiwW6tMpnpwEA8aRotvMGLcwgxf%2FZeRyuI4gddNgHhath6SbewEEfBle3J8pOOS%2Bd138oEAM6oxy94R%2FaKBIvqwG%2FTRrtBWmD0xY7590Xiwq3t7eco7YrfS%2Bn0vPT0rVYPjfx3Y1HVh%2F7HlRJ%2FRaIcchVSF71yBXt6NUGZLPRmJRLI1cLrhKDl48tz8XsAqc6W3%2FokIfEuG7jozvubfyQ4YvNLf25d0x6cAvVNaM5efPHgN4VcQgDI7%2FZZZbA7IjG0r1VybIO3qXyd4sDkDn8Uvyk1HYKEUMgaTx448QEn1rwk6zckxQUuJjx7P2KZa8tsSzMyRM3i8EctX1tGHh0BPq3IP5ov3V9lmz0cYIIVyXmJu8B8bih%2B2pDtRMrQ6wdF3a4HsL50EoTSUNP%2FywLoS7VWdkN%2BVg7VODg29qpXrORb1RQpTcpT%2B9fgCJyl%2BsjC4l8CvzVJyfJjduGcumZ%2FoIPE5Uqe0Ufgz4gU7PL0MGkk5yB3bMIX7E5Q5HmO88qj%2BKtKBIgOPAO4gBIZEOPNDfXHnw057s2vCot05YlMLWztsMGOqUBg0izNpWjpO66S6OzbMijCcfjC8ry%2FrWPnIAF8VAcZ%2BxRbQ%2FW461Q2WCpAe%2BwlwOaMOqjDqn2y69Q6g4PWqCaA98p1LYjIiMq5%2BNsIPXcqDlvE4hjy99DPSkUspx9AC9ol%2B4h%2F0daGEyJiStkL1xOQ0hwE9mFK9ac2uSy75h0uWTTLC9ZQcKSpdQQozoauBTIHnqIaJyvRJdYsCx2VgkX946NpSWO&X-Amz-Signature=95a84a8ee65d64df92e52a0ec905123429f8f446ddd12e64cff6e1ddd527b050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
