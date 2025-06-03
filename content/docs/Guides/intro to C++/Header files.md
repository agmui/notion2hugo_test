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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSGLEEG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIE6MyfwbZPch0qQ0oo6u2bMOZFeQf5zYeTJDESQWFSCtAiEAtwFhL%2BblDestoCW9Cr%2F6qi6n9jxq3%2Fos7HVJNlHYkn0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6n%2FgSMtBVxCy3KxircAzoLDHMcrdr0lfZmKRqCrFb7%2F%2BwXbqdGkoBVbUqmKT1xura5eGn2gAihdYeUlTZRvjEWBr%2BAeS5n2wGx%2BYPQDGZlbXWpm%2B3VflULBl2r9wzrS2P7%2BNPy9dE4nX8wNheMUkP%2FjyDKYKtoYWzMaX%2FPb%2FGlrOqNZWe0z%2BYhbt%2B2OxIlUrYYSSvYY6kRxdy1MaqF9PmBKcK1q032j%2BVz90dflnefC3Oz2Ez9KeyP%2BUGuwsRdQIi3hwf48NCLD6GKSZOAAiMWuP6Q61OHqAr%2BUq0Fz6gNJHADjNS%2BNL%2F%2FEoUZ6kF9sNZY53nDNYnfsLNIkNL4iK2Tj349Ce4WjfOYIyY9XEKiWAFFjZ9XJ6iYrxM28BbXG6fh5ZWAS3ugX5dgCvqvhGKg3bm8ibwNvCo%2FVMxInfeFlaBTIsoSU%2BioZIQ%2FsLcEEoPlwRIw%2B%2FTX%2FbKjWrIBIzZXNnNiLTpicVAboEiVVztYHQ%2BFuM5YQbms985XF389LVqLJCv6mgwSfycGjJ59IXv0zqRyUmBc53HuoE9rQriQY%2F3MrvSqEJ26YKYo%2FuwgaoM9XYerq8wNpVOwPguF0i817hAztaNNSDNn6EJl%2Fr2KMQg%2B6iBJsjmkprkQOzBB4Pg0x54ADK73YKy7MM7F%2BcEGOqUB9iQaz46EycAoUZU1zcrCdFS5mJKZfgE1RgRfkXyYv03P6S5J1JgBwhMwSReatEBIJqIEut%2FvACeJlM4mCxZeCe9THdRfwfx5WkHCZmq5vZxj8wN029VKV9E%2FsJON9k3MGA6JcjEfXSiirmt11SFHESWbc3t9fjcrt1xxKl%2Btm5UbamNKZZYBvTm0fD7kbZDBaSbAPWi7fGSsN5kxDcYOtZOm3D7P&X-Amz-Signature=2144566d98762c4bd3276ff0ced6d5c8eae8ba8cde2a2dc0c2b51dafc26732ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
