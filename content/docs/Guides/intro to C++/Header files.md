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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=977795793f54effd8a770b5a85c44757fa73436b95f0ea250ea65e73d81b2d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
