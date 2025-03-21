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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJHRDRW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDhC0%2FffTh%2FX0tGKPiwYeOQqd9iRq6MJZ1JsMx8a4%2BYtAiB%2FMEjvUHHyGy%2BgZqIhnUtE140ciI6FkYabZG2bcOLfRCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMh6m89MQtSBGhKCHKtwDwNpqwPCKNHaGYFe5yRl%2FV1Ml%2B7nS72KH3llmu9znrcW%2BioUvAE%2BjbcakLwLsY1h9g0ZWYzLg%2BvPxxjw%2FLhMyxOHmXk608O7wQpW2MGM3Lrlx3V1zKKRRO6VQXW6ICdb3yTi6NyRjrVFXzuDN91I7dwVG%2FMLs%2BiHZ2sv6aYQcitQyYk38yRPJOqv4lDJSCEi53kPMpHvMZlQL6PpeCpKtVqSHmqjsr3RRcwk8d66ASFuTyzyozZ%2BN8Z%2B2QMRXlVxna0j8t5j0kg2xhDdqEwz18Z9HtcG%2FuShkiGmBsyAnynKhjiYXv27g0bOg8ZD5xUJ1s00EXLlIVQNpVpv9mXzL4McQXxuURNVCUXp6%2BRUURspasPR6Ha1qiTaAanGKJBmX84rpaw0izRbfaNcLcFiaDANyfqWoWvzhovwHJdDeSvUIy6%2BG7VGv6C1aEdM%2BcofckVxRFvL4bOPbEyiAenvKLm9RWd9hkZd%2FhBtP%2FAlLI2ybQfp6Rk2pBoWDT7oVHsPq7GsS3Pu4XM7fV60Pqn8fyqsSxNyXvAav62QYBxNuDlZJJxQEmhdc6Z95XrrGq%2FuETvY2QuceZ0waJt1GMaY1CWZse2XYCWg16C6coHsTukWY5ecb%2BwiwnD6tVYowjajyvgY6pgEaUjxIMEvA%2FtHTMjZ%2FH6okBjMJQ6GCl58ouygNn1YGM7aYrgwXffbdnDd50Vb5aM2nwV0uqOjbwmFh6A3qqRWbEONl%2FVlnkqL9E4DjzMfMCxUWIMMKFiAEC9DmMIXPGzKgraS%2FWt0127aBjSy4uzXt1nDGut3ecKr0vVCzRQGRltY9qRpWwe1xlvtQOxGHSq6Xaxj5BvmDNqvJUPoEGMPBKlKf01we&X-Amz-Signature=db6e928f634df166359b05e562cd49e4f88b65a64778f2940125f2b0a446ac8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
