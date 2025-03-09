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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ2E6OGV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCCFaboiSXwRfyRBD3mADvnB%2Bij6RebN%2FAOztG3MKau8gIgSR92thkf6nlKSMZ5rJrygD7cx6zBwDdmpO6GlAoDAN0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOb9EiGN71j5UT7uTCrcA0Hvv%2BAWrcT4gWP%2FjGipQJscsD743xBCAX4E9i%2BOngAEVj6GLi6CJ8fpdmNBeuJ931M8Sn9Xfx12h7CpiQhJtqnxLtWB93zCB3tm2Y%2F%2BPGeZ0bVumFNQCZCDRbxFf5yIQzdth2xqVaDmC99LGLYwLXZjjcj6Ow50rORt9aj3pJ5Dg9dlZa0y7KjO0aAhku9giT24qxIgNE4FBukpLWXH%2FovWqIfWQHHVFTNyt7c%2FWXh3GxmBspTQ4wQlKBFGioFnUBP7s7j64g0A1UdKME8oUOfOn0xXmC0TsjFX7MyqFBVjzWpPXZzwraWNqHG4mca9AalP6ID1iCxC3z%2Bhz2ey5W56Q9vfJns1Mi69CuXoqy%2FnLUYYZITyY9ZoCwXMhYktjImlWcsxuA5DSaW2n05wv9QbiQxJk88dHkLbCc38qgRH6%2BoUHgv27FE%2F3jrZKCV5AUG5HwY21JkVzT%2B4lTOU1He1l8Ur0ancI6cbktzfqDO7SlvpbKcCA4zwhEQYTK3A3kIoPJVTD16BnxSvOYgI%2BkF08CDhmcumCVibjA3201m8%2BMoUOFgKliofdTDsEFgd3W%2F%2FUKAAWLRCDtPLZ%2B375ZcCqtnl5XMFWqhOELWMGczt2VgfP2WMs%2BzOyAU2MNzHtL4GOqUB1qsMUiB8UhaiHWHXv2eYugTTv2M3XzbPQILlo7oyCxJ3lHg7NrvNQxR9qlB%2FVITGRtNZ5zs187IhpH%2FmMV8aXwSIy38Dm%2B1bZj4JOFwOQcVWgDE7RXnyP%2BipiXd63NWIH41h92Pewd3WGwk7u2fUTIE1JXSqirrMjk9khS8Z2KJKhDtjTVn9IgFe%2Fl8PjhZHPQOl7WB1gvXn94hwmGc%2BHR50i88k&X-Amz-Signature=e83530edd292a1bbb0054e1c8d44111a4990a30ee88d4e6483f924b130d6075d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
