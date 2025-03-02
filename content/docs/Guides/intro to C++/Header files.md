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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YPIML2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7OM5ZL7wM%2BFH%2FXWaerxsxw7qw%2FGRUjkEwCTfwsG2EnAiAlPB9znPMAIw%2FBsNKRKBNGBst23GYbYIOtvEHFxTCwFiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspQ3aiKYKRNKSPH9KtwDFc0RMjDbGtgXiXDaMaZ2mQdwrEFdzpLtFLIPt64Xs18uU4PjUhVJOipl20vsZq6kTSPUx%2BVwHVHJ4bMmV%2B8dxfNJgiNKlavzMcGhvfD%2BYnTyBAskqDI31jVVl8dQFhOI248FU9qq84uavrh41YJpAIQ4W9Z0mexOCK6o1%2FOeB81n%2FyOn65sLW9lAMZx%2FdbpkrsEE8QkgeXPWAc5dxZxPiiGh0Vl5qNwq2HDb%2BxjzXWOr5Tq8YfS1wzEkT00hcDFS9z2DUf3osLj5lFMtKI%2BCsn0rCyESl4mI%2FRmrI28jqDBtiLzZnuBOi5vpovqzDmP9DtDFFcIeE7gnD0Ou6fXb8xhT%2BK9DkNC7HnmHdbpCst4CNH68O0eSZ0db4PZbIXZ68%2B%2BtUTZnxmvr9RLgRD53Gwv%2FC%2FzFy14IIRDicV5o9vk%2FTyou9VFYmhZ%2BzzB30qI1RyWhFwDPP7SALBChyl0%2FfltwP8Yc1G8qkxJZm7tazK59wuS%2FvE8QAXfP%2FZ%2FEiM%2BLK5I6zx129s2rlNYZi%2Fmu6um4Dp0lpk3oJknRW4%2Fvov43ktNCdyD5hpaMh7RaYLJulxFN9M5MDhVzfQyQTWHA7lvNR8GRzWD%2BPdeJDk8HuaIE5g06Yx7N%2BlFuFH0wyJWSvgY6pgE%2FjedSgfOqHUTaltUNESZNCMGDJP1ct5GMltJedTScJrWOXP0lq0afnrodlZ6YK%2B5MFgobNIWW2dXDY%2ByvM7qytxbHJ%2FRCzY1%2Fc%2FRmrx1rtZhW71Pu5a17FcCHjbKWWv7ZHMAYwgJpPWoQJJzM%2Fk8XM1Z%2BsqaNoe026lgED1GWfFZh5iUh2rBZDEXp1J3tNScfGSnTRwp%2BJTWjZTCyt7m9rjiQ7PiK&X-Amz-Signature=085188dd6fe639524f0d7c4d25e860700f007d939c9c7a361af5a988d647f6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
